import type { Metadata } from "next";
import { site } from "@/config/site";

const url = site.url;

const titleDefault =
  "Al-Qur'anic Academy — Online Quran Classes Worldwide | Nazra, Tajweed & One-to-One";

const description = `${site.name}: ${site.description} One-to-one classes via Zoom or Google Meet. ${
  site.teacher.name
} · ${site.teacher.location}.`;

const keywords: string[] = [
  "Al-Qur'anic Academy",
  "Quran classes online",
  "online Quran teacher Bangladesh",
  "Tajweed classes online",
  "Nazra for beginners",
  "Hafiz teacher online",
  "Mawlana Quran teacher",
  "learn Quran online one to one",
  "Quran for kids and adults",
  "Zoom Quran classes",
  "Google Meet Quran",
  "Islamic education online",
  "Quran recitation Narsingdi",
  "Bangladesh Quran classes BST",
  "Surah",
  "Quran tilawah",
];

/**
 * App Router metadata: favicon and social images use file conventions
 * (`/icon`, `/apple-icon`, `/opengraph-image`, `/twitter-image`) in `src/app/`.
 * metadataBase is required for correct absolute OG URLs when shared.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: titleDefault,
    template: "%s | Al-Qur'anic Academy",
  },
  applicationName: site.name,
  description,
  keywords,
  authors: [{ name: site.teacher.name }, { name: site.name, url }],
  publisher: site.name,
  creator: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: site.name,
    title: titleDefault,
    description,
    countryName: "Bangladesh",
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
  },
  alternates: { canonical: url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "education",
  classification: "Educational institution",
  referrer: "origin-when-cross-origin",
  other: {
    "apple-mobile-web-app-title": "AlQuranic",
  },
  appleWebApp: {
    capable: true,
    title: "AlQuranic",
    statusBarStyle: "black-translucent",
  },
};
