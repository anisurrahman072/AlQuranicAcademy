import { getSiteUrl } from "@/lib/site-url";

export const site = {
  name: "Al-Qur'anic Academy",
  tagline: "Learn Quran · Understand Quran · Live by Quran",
  description:
    "Online one-to-one Quran classes for learners worldwide. Nazra, Tajweed, and Quran Tilawah — taught by Hafez Mawlana Hafijur Rahman in Bangladesh.",
  url: getSiteUrl(),
  teacher: {
    name: "Hafez Mawlana Hafijur Rahman",
    phone: "+8801982452422",
    phoneDisplay: "+880 1982 452422",
    location: "Narsingdi, Bangladesh",
  },
  social: {
    facebook: "https://www.facebook.com/AlQuranicAcademy",
    whatsapp: "https://wa.me/8801982452422",
  },
  zoomUrl: process.env.NEXT_PUBLIC_ZOOM_URL ?? null,
  meetUrl: process.env.NEXT_PUBLIC_GOOGLE_MEET_URL ?? null,
} as const;

export type Site = typeof site;
