import type { Metadata, Viewport } from "next";
import { Amiri, Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/common/JsonLd";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/config/site";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  weight: "400",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const base = site.url.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "Al-Qur'anic Academy — Online Quran Classes Worldwide",
    template: "%s | Al-Qur'anic Academy",
  },
  description: site.description,
  keywords: [
    "Quran classes online",
    "Tajweed",
    "Nazra",
    "Quran for kids",
    "Islamic education",
    "Bangladesh Quran teacher",
    "learn Quran online",
    "Hafiz teacher",
  ],
  authors: [{ name: "Hafez Mawlana Hafijur Rahman" }],
  creator: "Al-Qur'anic Academy",
  icons: { icon: "/brand/logo.png", apple: "/brand/logo.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Al-Qur'anic Academy — Online Quran Classes Worldwide",
    description: site.description,
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al-Qur'anic Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Qur'anic Academy — Online Quran Classes",
    description: site.description,
    images: ["/brand/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#1A3C2E",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${display.variable} ${amiri.variable} min-h-svh font-sans antialiased`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <JsonLd />
        <a
          href="#main-content"
          className="absolute left-[-10000px] top-0 z-[200] inline-block focus:left-4 focus:top-4 focus:max-w-none focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-forest focus:shadow-md focus:outline focus:outline-2 focus:outline-gold/50"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
