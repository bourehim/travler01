"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface HeroProps {
  currentLocale: Locale;
}

export default function Hero({ currentLocale = "en" }: HeroProps) {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-36 md:pb-44 text-center"
      >
        {/* Parallax / Fixed Desert Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-3.jpg"
            alt="Sahara desert dunes Erg Chebbi Morocco"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {/* Exact Dark Veils from WordPress */}
          <div
            className="absolute inset-0 z-1"
            style={{
              background:
                "linear-gradient(180deg, rgba(27, 17, 8, 0.45) 0%, transparent 32%, rgba(27, 17, 8, 0.78) 100%), linear-gradient(90deg, rgba(27, 17, 8, 0.58) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* Hero Inner Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center">
          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-rule" />
            First edition · 12 spots
          </div>

          {/* Exact Title */}
          <h1 className="hero__title">
            <span className="inline-block tracking-[0.05em] font-normal uppercase">
              MUJERES
            </span>
            <span className="hero__title-line--soft">
              de arena
            </span>
          </h1>

          {/* Exact Tagline */}
          <p className="hero__tagline">
            A transformative journey through Morocco — seven days among vibrant cities, mountains and ancestral kasbahs
            <br className="hidden sm:inline" />
            {" "}and the immensity of the Sahara.
          </p>

          {/* Exact Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a href="#reserve" className="mda-btn-primary w-full sm:w-auto">
              <span>Reserve My Spot</span>
              <span className="btn__arrow">→</span>
            </a>

            <a href="#about" className="mda-btn-ghost w-full sm:w-auto">
              Discover the Journey
            </a>
          </div>
        </div>

        {/* Exact Desert Dunes Bottom Shape Divider */}
        <div className="hero-dune-divider" />
      </section>

      {/* Exact Marquee Section */}
      <div className="mda-marquee-section">
        <p className="mda-marquee-text">
          <span>23 — 29 Sep 2026</span>
          <span className="star">✦</span>
          <span>12 spots</span>
          <span className="star">✦</span>
          <span>7 days of travel</span>
          <span className="star">✦</span>
          <span>Marrakech → Sahara</span>
          <span className="star">✦</span>
          <span>First edition</span>
          <span className="star">✦</span>
          <span>Spanish-speaking guide</span>
        </p>
      </div>
    </>
  );
}
