"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface PracticalSectionProps {
  currentLocale?: Locale;
}

const PRACTICAL_CARDS_EN = [
  {
    type: "luggage",
    title: "Luggage",
    text: "In September it will be hot during the day and cool at night, especially in the desert. Before the trip you will receive a practical guide with a suggested packing list.",
  },
  {
    type: "currency",
    title: "Currency",
    text: "The official currency is the Moroccan dirham. Once there we will help you exchange money or handle anything you need.",
  },
  {
    type: "internet",
    title: "Internet and coverage",
    text: "On arrival we will stop to buy a local SIM card. In some desert areas the signal can be limited.",
  },
  {
    type: "flights",
    title: "Flights",
    text: "Each participant arranges their own ticket to Marrakech. Once your place is confirmed we will coordinate schedules and arrivals with the group.",
  },
  {
    type: "passport",
    title: "Passport & Visas",
    text: "A passport valid for at least 6 months beyond travel dates is required. Citizens of the EU, UK, USA, Canada, and many other nations do not require a tourist visa for stays up to 90 days.",
  },
  {
    type: "dates",
    title: "Dates",
    text: "23 — 29 Sep 2026. First edition Mujeres de Arena — home — An experience reserved for 12 women.",
  },
];

export default function PracticalSection({ currentLocale = "en" }: PracticalSectionProps) {
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
      { threshold: 0.05, rootMargin: "60px 0px" }
    );

    revealEls.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="practico"
      className="wp-block-group alignfull mda-practical-wrap practical"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-practical-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header */}
            <div className="wp-block-group practical__header">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <p className="eyebrow reveal wp-block-paragraph">Before you go</p>
                <h2 className="wp-block-heading section__title reveal">
                  Practical details so that you <em>arrive with peace of mind</em>
                </h2>
              </div>
            </div>

            {/* Bento / Info Cards Grid */}
            <div className="wp-block-group info">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {PRACTICAL_CARDS_EN.map((card, index) => (
                  <div
                    key={index}
                    className={`wp-block-group info__card info__card--${card.type} reveal`}
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                      <h3 className="wp-block-heading info__title">{card.title}</h3>
                      <p className="info__text wp-block-paragraph">{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
