import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al-Qur'anic Academy",
    short_name: "AlQuranic",
    description:
      "Online one-to-one Quran classes — Nazra, Tajweed, and Quran tilawah for learners worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF8EE",
    theme_color: "#1A3C2E",
    icons: [
      {
        src: "/brand/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
