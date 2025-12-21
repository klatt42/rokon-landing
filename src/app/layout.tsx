import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROKon | Total Search Domination - SEO for the AI Era",
  description: "Stop optimizing for Google alone. ROKon helps you get cited by ChatGPT, Claude, Gemini, and Perplexity. REVEAL your weaknesses. OPTIMIZE for AI. KONQUER every search front.",
  keywords: ["SEO", "AI SEO", "AISO", "ChatGPT optimization", "AI search", "search engine optimization", "Claude optimization", "Perplexity optimization"],
  authors: [{ name: "ROKon" }],
  openGraph: {
    title: "ROKon | Total Search Domination",
    description: "Traditional SEO is incomplete. Dominate all 4 search fronts: SEO, AEO, GEO, and AISO.",
    type: "website",
    locale: "en_US",
    siteName: "ROKon",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROKon | Total Search Domination",
    description: "Traditional SEO is incomplete. Get cited by AI assistants. Join the waitlist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
