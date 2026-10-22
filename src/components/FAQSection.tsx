"use client";

import React, { useEffect, useRef } from "react";
import { Locale } from "@/data/translations";

interface FAQSectionProps {
  currentLocale?: Locale;
}

const FAQ_ITEMS_EN = [
  {
    q: "Is it safe to travel to Morocco?",
    a: "Yes. Morocco is an established tourist destination and we will travel through the country accompanied at all times by our local team and by us. The vast majority of fears disappear as soon as the experience begins.",
  },
  {
    q: "Can I come on my own?",
    a: "Absolutely. In fact, many participants travel alone. From the very first day you will be part of a small group of women who will share the adventure with you.",
  },
  {
    q: "What are the rooms like?",
    a: "They will be shared, double or triple, depending on the accommodation. If you travel alone, we will take care of the room allocation so that everything is comfortable and easy.",
  },
  {
    q: "How old are the participants?",
    a: "Women of different ages and life stages. What unites us is not age, but the desire to live an authentic experience and share an unforgettable adventure.",
  },
  {
    q: "Is it physically demanding?",
    a: "No. It is suitable for any woman with a normal level of fitness. There will be moments of walking and activity, but no previous experience or specific training is required.",
  },
  {
    q: "Do I need to speak English or French?",
    a: "No. Throughout the journey we will be accompanied by a Spanish-speaking local guide. Many people working in tourism also speak Spanish, French or English.",
  },
  {
    q: "What documents do I need?",
    a: "A valid passport. We recommend checking its expiry date well in advance.",
  },
  {
    q: "What if I have allergies or dietary needs?",
    a: "Just let us know in advance. We will do everything we can to pass your needs on to the accommodation and restaurants included in the journey.",
  },
];

export default function FAQSection({ currentLocale = "en" }: FAQSectionProps) {
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
      id="faq"
      className="wp-block-group alignfull mda-faq-wrap faq"
    >
      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
        <div className="wp-block-group mda-faq-inner">
          <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
            {/* Header */}
            <div className="wp-block-group faq__header">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                <p className="eyebrow reveal wp-block-paragraph">
                  Frequently asked questions
                </p>
                <h2 className="wp-block-heading section__title reveal">
                  Before <em>setting off</em>
                </h2>
              </div>
            </div>

            {/* QA List */}
            <div className="wp-block-group faq__list">
              <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                {FAQ_ITEMS_EN.map((item, index) => (
                  <details
                    key={index}
                    className="wp-block-details qa reveal is-layout-flow wp-block-details-is-layout-flow"
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <summary>{item.q}</summary>
                    <p className="wp-block-paragraph">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
