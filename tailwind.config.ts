import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050505',
        'bg-secondary': '#101010',
        'text-primary': '#F5F5F4',
        'text-secondary': '#A1A1AA',
        'accent-blue': '#6366F1',
        'accent-hover': '#818CF8',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'success': '#34D399',
      },
      borderRadius: {
        'card': '20px',
        'button': '14px',
        'input': '12px',
      },
      fontFamily: {
        heading: ['var(--font-inter-tight)', 'var(--font-geist-sans)', 'sans-serif'],
        body: ['var(--font-inter)', 'var(--font-geist-sans)', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 10px 50px -10px rgba(0, 0, 0, 0.5)',
        'ambient-hover': '0 20px 60px -5px rgba(59, 130, 246, 0.1)',
      }
    },
  },
  plugins: [],
};

export default config;
