const PHONE = "8801982452422";

export function buildWaUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = buildWaUrl(
  "Assalamu Alaikum, I'd like to inquire about Quran classes at Al-Qur'anic Academy.",
);

export const WA_FREE_INTRO = buildWaUrl(
  "Assalamu Alaikum, I'd like to book a free introductory call for Quran classes.",
);

export const WA_FREE_INTRO_CTA = buildWaUrl(
  "Assalamu Alaikum, I'd like to start with a free introductory session.",
);
