"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamAvatarProps {
  /** Profile photo path (e.g. "/team/dipesh.jpg"). If missing or fails to load, initials show. */
  image?: string;
  /** Initials shown when no image is available. */
  fallback: string;
  /** Member accent color (hex) used for the gradient border and glow. */
  color: string;
  /** Accessible alt text — typically the member's name. */
  alt: string;
  className?: string;
}

/**
 * Premium circular team avatar.
 * - 3px gradient border + soft color-matched glow
 * - Glass background behind the image
 * - Blurred placeholder while loading
 * - Automatic fallback to initials if the image is missing or errors
 * - Responsive: 96px (mobile) / 110px (tablet) / 120px (desktop)
 * - Hover: image scales to 1.05, glow increases (GPU-accelerated transforms only)
 */
export default function TeamAvatar({
  image,
  fallback,
  color,
  alt,
  className,
}: TeamAvatarProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const showImage = Boolean(image) && !errored;

  return (
    <div
      className={cn(
        "relative mx-auto mb-3 sm:mb-4 w-24 h-24 sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] rounded-full",
        className
      )}
    >
      {/* Soft glow — intensifies on card hover */}
      <div
        className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{ backgroundColor: `${color}55` }}
      />

      {/* Gradient ring (3px) + glass background */}
      <div
        className="absolute inset-0 rounded-full p-[3px] transition-transform duration-300 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}66)`,
        }}
      >
        <div className="w-full h-full rounded-full bg-section-light-card/70 dark:bg-white/5 overflow-hidden backdrop-blur-sm">
          {/* Fallback initials (always rendered underneath) */}
          {!showImage && (
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundColor: `${color}20`,
                color: color,
              }}
            >
              {fallback}
            </div>
          )}

          {/* Profile photo */}
          {showImage && (
            <>
              {/* Blurred placeholder until the image loads */}
              {!loaded && (
                <div
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{ backgroundColor: `${color}20` }}
                />
              )}
              <Image
                src={image!}
                alt={alt}
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 110px, 120px"
                onLoad={() => setLoaded(true)}
                onError={() => setErrored(true)}
                className={cn(
                  "relative w-full h-full rounded-full object-cover transition-[transform,opacity] duration-300 group-hover:scale-105",
                  loaded ? "opacity-100" : "opacity-0"
                )}
                style={{ willChange: "transform" }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
