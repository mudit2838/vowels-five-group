import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vowels Five Group | Building Brands That Define Tomorrow",
    template: "%s | Vowels Five Group",
  },
  description: "Vowels Five Group is a premium, long-term holding company housing QRAM (apparel) and future ventures across Technology, AI, Healthcare, Finance, and Consumer sectors.",
  keywords: ["Vowels Five Group", "QRAM", "Holding Company", "Ecosystem Builder", "Venture Capital", "Technology", "Consumer Brands"],
  authors: [{ name: "Vowels Five Group" }],
  creator: "Vowels Five Group",
  metadataBase: new URL("https://vowelsfive.com"), // placeholder for absolute SEO links
  openGraph: {
    title: "Vowels Five Group | Building Brands That Define Tomorrow",
    description: "Premium corporate parent housing QRAM and future category-defining ventures.",
    url: "https://vowelsfive.com",
    siteName: "Vowels Five Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vowels Five Group",
    description: "Building brands that define tomorrow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="relative min-h-full flex flex-col bg-bg-primary text-text-primary selection:bg-accent-blue/25 selection:text-text-primary">
        {/* Organization Structured Data (SEO JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vowels Five Group",
              "url": "https://vowelsfive.com",
              "logo": "https://vowelsfive.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "corporate communication",
                "email": "contact@vowelsfive.com",
              },
              "sameAs": [
                "https://www.linkedin.com/company/vowels-five-group",
              ],
            }),
          }}
        />
        <LoadingScreen />
        <Navbar />
        <main className="flex-grow flex flex-col pt-[72px] md:pt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
