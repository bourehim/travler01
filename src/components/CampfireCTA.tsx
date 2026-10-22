"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface CampfireCTAProps {
  currentLocale?: Locale;
}

export default function CampfireCTA({ currentLocale = "en" }: CampfireCTAProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const revealEls = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "60px 0px" }
    );

    revealEls.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="reserva"
      className="wp-block-group alignfull mda-campfire-wrap cta bleed"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        {/* Background Media */}
        <div className="wp-block-group mda-campfire-media">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <figure className="wp-block-image size-full">
              <img
                decoding="async"
                src="/images/night-campfire.jpg"
                alt="Night campfire under the stars"
              />
            </figure>
          </div>
        </div>

        {/* Content */}
        <div className="wp-block-group mda-campfire-inner cta__inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            <p className="eyebrow eyebrow--gold reveal wp-block-paragraph">
              12 women · one shared journey
            </p>

            <h2 className="wp-block-heading cta__title reveal">
              See you in <em>Morocco</em>
            </h2>

            <p className="cta__text reveal wp-block-paragraph">
              Arrive in Marrakech with your bag packed, your mind open and a real
              appetite for an adventure you will remember for a long time. We will
              take care of the rest.
            </p>

            <div className="wp-block-buttons cta__actions is-layout-flex wp-block-buttons-is-layout-flex">
              <div className="wp-block-button mda-btn mda-btn--primary">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="#pricing"
                >
                  Book my spot <span className="btn__arrow" aria-hidden="true">→</span>
                </a>
              </div>

              <div className="wp-block-button mda-btn mda-btn--ghost btn--on-dark">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Vanessa &amp; Ana
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
