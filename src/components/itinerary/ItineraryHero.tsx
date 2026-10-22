"use client";

import React from "react";
import { Locale } from "@/data/translations";

interface ItineraryHeroProps {
  currentLocale?: Locale;
}

export default function ItineraryHero({ currentLocale = "en" }: ItineraryHeroProps) {
  return (
    <>
      <div className="wp-block-cover alignfull mda-subpage-hero mda-page-itinerary-stays has-parallax">
        {/* Fixed Parallax Background Image */}
        <div
          className="wp-block-cover__image-background wp-image-6293 has-parallax"
          style={{
            backgroundImage: "url(/images/pexels-liuguangxi-16908861.jpg)",
            backgroundPosition: "50% 50%",
          }}
        />
        {/* Contrast Overlay Veil */}
        <span
          aria-hidden="true"
          className="wp-block-cover__background has-background-dim-0 has-background-dim has-contrast-background-color"
        />

        {/* Hero Content */}
        <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
          <div className="wp-block-group hero__inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <p className="eyebrow eyebrow--gold wp-block-paragraph">
                ✦ The Itinerary · 23 — 29 Sep 2026 ✦
              </p>

              <h1 className="hero__title wp-block-heading">
                Seven Stages, <em>One Single Story</em>
              </h1>

              <p className="hero__subtitle wp-block-paragraph">
                From the bustle of Marrakech to the immensity of the Sahara — and
                back. Every stage opens a new way of seeing. 7 days of shared
                wonder reserved for 12 women.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="wp-block-group alignfull mda-marquee-section">
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <p className="mda-marquee-text wp-block-paragraph" style={{ display: "none" }}>
            MARRAKECH ✦ HIGH ATLAS &amp; TIZI N’TICHKA ✦ AÏT BEN HADDOU ✦ DADES
            VALLEY ✦ TODRA GORGE ✦ MERZOUGA &amp; ERG CHEBBI ✦ VALLEY OF ROSES
          </p>
        </div>
        <div className="mda-marquee-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="mda-marquee-group">
              <span>MARRAKECH</span>
              <i>✦</i>
              <span>HIGH ATLAS &amp; TIZI N’TICHKA</span>
              <i>✦</i>
              <span>AÏT BEN HADDOU</span>
              <i>✦</i>
              <span>DADES VALLEY</span>
              <i>✦</i>
              <span>TODRA GORGE</span>
              <i>✦</i>
              <span>MERZOUGA &amp; ERG CHEBBI</span>
              <i>✦</i>
              <span>VALLEY OF ROSES</span>
              <i>✦</i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
