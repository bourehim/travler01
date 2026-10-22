"use client";

import React, { useState, useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface ReserveSectionProps {
  currentLocale?: Locale;
}

const INCLUDED_ITEMS_EN = [
  "Return transfers from Marrakech airport",
  "Private air-conditioned transport throughout the journey",
  "Local driver and Spanish-speaking guide",
  "6 nights: 5 in charming riads + 1 deluxe camp in the Sahara",
  "All breakfasts and four dinners along the route",
  "Camel ride, 4×4 and sandboarding in the dunes",
  "A meal with nomads or a picnic in an oasis",
  "Visits and experiences throughout the journey",
  "Close accompaniment from your hosts",
];

const NOT_INCLUDED_ITEMS_EN = [
  "International flights to Marrakech",
  "Lunches and meals not specified",
  "Drinks and personal expenses",
  "Tips",
];

export default function ReserveSection({ currentLocale = "en" }: ReserveSectionProps) {
  const [displayPrice, setDisplayPrice] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Reveal animations observer
    const revealEls = el.querySelectorAll(".reveal, .reveal-scale");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "60px 0px" }
    );

    revealEls.forEach((r) => revealObserver.observe(r));

    // Counter animation for ticket price (1500ms cubic ease-out)
    const priceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1500;
            const target = 800;
            const start = performance.now();

            function tick(now: number) {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplayPrice(Math.round(target * eased));
              if (p < 1) {
                requestAnimationFrame(tick);
              } else {
                setDisplayPrice(target);
              }
            }

            requestAnimationFrame(tick);
            priceObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    priceObserver.observe(el);

    return () => {
      revealObserver.disconnect();
      priceObserver.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      id="pricing"
      className="wp-block-group alignfull mda-pricing-wrap pricing"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-pricing-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header Area */}
            <div className="wp-block-group pricing__header">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <p className="eyebrow reveal wp-block-paragraph">Your spot</p>
                <h2 className="wp-block-heading section__title reveal">
                  An experience reserved <em>for 12 women</em>
                </h2>
              </div>
            </div>

            {/* Grid Area: Floating Ticket Card + Terms Columns */}
            <div className="wp-block-group pricing__grid">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {/* Floating Ticket Card */}
                <div className="wp-block-group ticket reveal-scale">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <p className="ticket__label wp-block-paragraph">Total investment</p>
                    <p className="ticket__price wp-block-paragraph">
                      {displayPrice}
                      <sup>€</sup>
                    </p>
                    <p className="ticket__note wp-block-paragraph">
                      12 women. One shared journey.
                      <br />
                      Seven days from Marrakech to the Sahara.
                    </p>

                    <hr className="wp-block-separator has-alpha-channel-opacity ticket__split" />

                    <div className="wp-block-group ticket__rows">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <div className="wp-block-group ticket__row">
                          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <p className="ticket__dt wp-block-paragraph">Booking deposit</p>
                            <p className="ticket__dd wp-block-paragraph">150 €</p>
                          </div>
                        </div>

                        <p className="ticket__small wp-block-paragraph">
                          Confirms your place. Non-refundable.
                        </p>

                        <div className="wp-block-group ticket__row">
                          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                            <p className="ticket__dt wp-block-paragraph">Remaining payment</p>
                            <p className="ticket__dd wp-block-paragraph">650 €</p>
                          </div>
                        </div>

                        <p className="ticket__small wp-block-paragraph">
                          Payable on arrival in Morocco.
                        </p>
                      </div>
                    </div>

                    <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                      <div className="wp-block-button mda-btn mda-btn--primary">
                        <a
                          className="wp-block-button__link wp-element-button"
                          href="/reserve-spot/"
                        >
                          Book my spot <span className="btn__arrow" aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms Column (Included & Not Included) */}
                <div className="wp-block-group terms">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    {/* Included Block */}
                    <div className="wp-block-group terms__block reveal">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <h3 className="wp-block-heading terms__title">Included</h3>
                        <ul className="wp-block-list terms__list">
                          {INCLUDED_ITEMS_EN.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Not Included Block */}
                    <div className="wp-block-group terms__block terms__block--soft reveal">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <h3 className="wp-block-heading terms__title">Not included</h3>
                        <ul className="wp-block-list terms__list">
                          {NOT_INCLUDED_ITEMS_EN.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
