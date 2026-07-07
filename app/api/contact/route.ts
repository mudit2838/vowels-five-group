import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
    const emailjsPrivateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.error("Missing EmailJS credentials in environment variables.");
      return NextResponse.json(
        { error: "Email service is currently misconfigured. Please try again later." },
        { status: 500 }
      );
    }

    // Call EmailJS REST API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: emailjsServiceId,
        template_id: emailjsTemplateId,
        user_id: emailjsPublicKey,
        accessToken: emailjsPrivateKey || undefined,
        template_params: {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Service Error Response:", errorText);
      return NextResponse.json(
        { error: "Failed to send message via email service. Please try again later." },
        { status: 502 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received. We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
