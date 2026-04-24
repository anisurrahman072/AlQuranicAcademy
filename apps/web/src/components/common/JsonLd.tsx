import { site } from "@/config/site";
import { pricing } from "@/config/pricing";

function absoluteUrl(path: string) {
  const base = site.url.replace(/\/$/, "");
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const json = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  description: site.description,
  logo: absoluteUrl("/brand/logo.png"),
  image: absoluteUrl("/brand/og-image.png"),
  sameAs: [site.social.facebook],
  telephone: site.teacher.phone,
  areaServed: [
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Place", name: "Worldwide" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Narsingdi",
    addressCountry: "BD",
  },
  knowsAbout: ["Quran", "Tajweed", "Nazra", "Quran Tilawah", "Islamic education"],
  offers: {
    "@type": "Offer",
    price: pricing.amount,
    priceCurrency: pricing.currency,
    name: "One-hour one-to-one Quran class",
    description: "1-hour one-to-one online Quran class via Zoom or Google Meet",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
