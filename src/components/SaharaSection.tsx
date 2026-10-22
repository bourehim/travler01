"use client";

import React, { useState, useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface SaharaSectionProps {
  currentLocale?: Locale;
}

export default function SaharaSection({ currentLocale = "en" }: SaharaSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.12, rootMargin: "60px 0px -20px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="sahara" ref={sectionRef} className="wp-block-group alignfull bleed sahara">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Background Media */}
        <div className="wp-block-group bleed__media">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <figure className="wp-block-image size-full">
              <img
                src="/images/sahara-sunset.jpg"
                alt="Sahara desert dunes at golden hour"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        {/* Narrative Content */}
        <div
          className={`wp-block-group bleed__inner reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--gold wp-block-paragraph">The Sahara</p>

            <h2 className="wp-block-heading bleed__title">
              There, where something <em>awakens</em>
            </h2>

            <p className="bleed__text wp-block-paragraph">
              Here time seems to stop. Distances change. And something inside us changes too. No rush. No schedules. No expectations. Only the adventure, and the privilege of being there.
            </p>

            <ul className="wp-block-list chips">
              <li>✦ The dunes of Erg Chebbi</li>
              <li>✦ 4×4 across the desert</li>
              <li>✦ Sandboarding</li>
              <li>✦ Golden sunset</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
