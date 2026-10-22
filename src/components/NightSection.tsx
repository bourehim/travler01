"use client";

import React, { useState, useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface NightSectionProps {
  currentLocale?: Locale;
}

export default function NightSection({ currentLocale = "en" }: NightSectionProps) {
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
    <div ref={sectionRef} className="wp-block-group alignfull night">
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Background Media */}
        <div className="wp-block-group night__media">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <figure className="wp-block-image size-full">
              <img
                src="/images/starry-night.jpg"
                alt="Sahara starry night sky"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        {/* Narrative Inner Content */}
        <div
          className={`wp-block-group night__inner reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--gold wp-block-paragraph">
              Under the stars · Erg Chebbi
            </p>

            <h2 className="wp-block-heading night__title">
              The magic that never appears in <em>photographs</em>
            </h2>

            <p className="night__text wp-block-paragraph">
              The immensity of the day gives way to a calm that is hard to describe. No activities. No obligations. Nothing to prove. Only the privilege of being there, of sharing the road with other women and of letting the experience do its work.
            </p>

            <p className="night__text night__text--soft wp-block-paragraph">
              Because some of the most important conversations of our lives happen precisely when we stop trying to force them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
