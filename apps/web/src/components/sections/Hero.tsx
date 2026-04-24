"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { HeroLanternDecor, IslamicPatternBg } from "@/components/common/IslamicPatternBg";
import { buildWaUrl } from "@/lib/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const easeOut = [0, 0, 0.2, 1] as const;
const startWa = buildWaUrl(
  "Assalamu Alaikum, I'd like to start learning with Al-Qur'anic Academy.",
);

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

function HeroImageBlock() {
  const reduce = useReducedMotion();
  const inner = (
    <div
      className="relative h-full min-h-[28rem] w-full max-w-md overflow-hidden rounded-xl lg:ml-auto"
      style={{
        clipPath: "polygon(50% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%)",
        boxShadow: "0 0 60px rgba(201, 168, 76, 0.2)",
        border: "2px solid rgba(201, 168, 76, 0.45)",
      }}
    >
      <Image
        src="/brand/hero-section.png"
        alt="Al-Qur'anic Academy — Quran on a rehal with masjid background"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 1024px) 100vw, 420px"
        className="object-cover"
      />
    </div>
  );
  if (reduce) {
    return inner;
  }
  return (
    <motion.div
      className="relative h-full w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
    >
      {inner}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Welcome"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero"
    >
      <IslamicPatternBg />
      <HeroLanternDecor />
      <div
        className="absolute inset-0 bg-hero bg-cover bg-center bg-no-repeat opacity-20 lg:hidden"
        style={{ backgroundImage: "url('/brand/hero-section.png')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-primary/80 lg:hidden" aria-hidden />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_420px] lg:gap-12 lg:px-8 lg:py-32">
        <div className="text-center lg:text-left">
          <FadeUp delay={0}>
            <p
              className="font-arabic text-right text-2xl text-gold md:text-3xl"
              dir="rtl"
            >
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mb-8 mt-2 text-sm italic text-warm/80">
              &ldquo;Read in the name of your Lord who created&rdquo; — Surah
              Al-Alaq 96:1
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold">
              <span
                className="inline-block bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #ffffff 0%, #e8c97a 40%, #ffffff 60%, #ffffff 100%)",
                }}
              >
                Al-Qur&apos;anic Academy
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-2 font-sans text-lg font-medium uppercase tracking-wider text-gold md:text-xl">
              Learn Quran · Understand Quran · Live by Quran
            </p>
          </FadeUp>
          <FadeUp delay={0.45}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-warm/90 md:text-lg mx-auto lg:mx-0">
              Online one-to-one Quran classes for learners worldwide — taught
              by a qualified Hafiz &amp; Mawlana in Bangladesh. Any age. Any
              level. Your schedule.
            </p>
          </FadeUp>
          <FadeUp delay={0.6} className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={startWa}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 min-h-[48px] border-0 bg-gold-gradient px-6 font-semibold text-forest shadow-gold transition-all hover:scale-[1.03] hover:shadow-gold-lg",
              )}
            >
              Start Learning — WhatsApp
            </a>
            <Link
              href="#courses"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 min-h-[48px] border-gold/60 bg-primary/20 text-gold hover:bg-gold/10",
              )}
            >
              Explore Courses ↓
            </Link>
          </FadeUp>
          <FadeUp delay={0.8} className="mt-12">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-warm/80 lg:justify-start">
              <li>✓ Hafiz &amp; Mawlana Certified Teacher</li>
              <li>✓ Flexible Batch Timings</li>
              <li>✓ Progress Tracking</li>
              <li>✓ Any Time Classes Available</li>
            </ul>
          </FadeUp>
        </div>
        <div className="hidden lg:block">
          <HeroImageBlock />
        </div>
      </div>
    </section>
  );
}
