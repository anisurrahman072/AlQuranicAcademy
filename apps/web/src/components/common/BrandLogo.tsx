import Image from "next/image";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const brandLogo = "/brand/logo.png";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Compact round logo for navbar, footer, etc. */
export function BrandLogo({
  className,
  priority,
  sizes = "40px",
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 rounded-full",
        "bg-gradient-to-br from-gold-light via-gold to-gold-dark p-[2px]",
        "shadow-[0_0_20px_rgba(201,168,76,0.35)]",
        "ring-1 ring-gold-light/40 ring-offset-1 ring-offset-primary/30",
        "transition-shadow duration-300 group-hover:shadow-[0_0_28px_rgba(232,201,122,0.45)]",
        className,
      )}
    >
      <span className="relative block size-10 overflow-hidden rounded-full bg-primary">
        <Image
          src={brandLogo}
          alt={`${site.name} logo`}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/15"
          aria-hidden
        />
      </span>
    </span>
  );
}

/** Soft circular watermark for mobile hero (not full square asset). */
export function BrandLogoCircleWatermark({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:hidden",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "relative aspect-square w-[min(78vw,18rem)] overflow-hidden rounded-full",
          "opacity-[0.55]",
          "shadow-[0_0_80px_rgba(0,0,0,0.45)]",
        )}
      >
        <Image
          src={brandLogo}
          alt=""
          fill
          className="object-cover object-center blur-[6px] brightness-[0.38] contrast-[1.05] saturate-[0.85]"
          sizes="(max-width: 1024px) 78vw"
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-primary/55 mix-blend-multiply"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-black/30"
          aria-hidden
        />
      </div>
    </div>
  );
}

type BrandLogoShowcaseProps = {
  className?: string;
};

/** Large hero treatment — layered gold frame, glow, gentle motion. */
export function BrandLogoShowcase({ className }: BrandLogoShowcaseProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[24rem] lg:ml-auto lg:max-w-[28rem]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(232,201,122,0.28)_0%,rgba(201,168,76,0.08)_45%,transparent_70%)] blur-2xl motion-safe:animate-logo-ambient"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-3 rounded-full border border-gold/25 motion-safe:animate-logo-ambient"
        style={{ animationDelay: "0.6s" }}
        aria-hidden
      />

      <div
        className="relative size-full rounded-full p-[6px] motion-safe:animate-float"
        style={{
          background:
            "linear-gradient(145deg, #e8c97a 0%, #c9a84c 35%, #8b6914 70%, #e8c97a 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.12) inset, 0 25px 70px rgba(0,0,0,0.45), 0 0 80px rgba(201,168,76,0.35), 0 0 120px rgba(232,201,122,0.15)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full motion-safe:animate-logo-orbit"
          aria-hidden
        >
          <div
            className="absolute inset-[-50%] opacity-70"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.55) 40deg, transparent 80deg, rgba(232,201,122,0.9) 140deg, transparent 200deg, rgba(255,255,255,0.35) 260deg, transparent 360deg)",
            }}
          />
        </div>

        <div className="relative size-full rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light p-[5px]">
          <div
            className="relative size-full overflow-hidden rounded-full ring-2 ring-gold-light/60 ring-offset-2 ring-offset-transparent"
            style={{
              boxShadow:
                "0 0 40px rgba(201,168,76,0.25) inset, 0 8px 32px rgba(0,0,0,0.35) inset",
            }}
          >
            <Image
              src={brandLogo}
              alt={`${site.name} logo`}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 85vw, 448px"
              className="object-cover scale-[1.03]"
            />
            <span
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-black/25"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/25"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
