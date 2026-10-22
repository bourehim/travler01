"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/data/translations";
import { STAGES_HEADER, STAGES_BY_LOCALE } from "@/data/homeStagesData";

interface StagesSectionProps {
  currentLocale?: Locale;
}

export default function StagesSection({ currentLocale = "en" }: StagesSectionProps) {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const header = STAGES_HEADER[currentLocale] || STAGES_HEADER.en;
  const stagesData = STAGES_BY_LOCALE[currentLocale] || STAGES_BY_LOCALE.en;
  const isRtl = currentLocale === "ar";

  const getLocalizedHref = (path: string) => {
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path === "/" ? "" : path}`;
  };

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stageRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) {
              setActiveStage(idx);
            }
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    stageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [stagesData]);

  const handleDotClick = (index: number) => {
    setActiveStage(index);
    const target = stageRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const progressPercent = stagesData.length > 1 ? (activeStage / (stagesData.length - 1)) * 100 : 0;

  return (
    <div id="journey" className="mda-journey-wrap" dir={isRtl ? "rtl" : "ltr"}>
      <div className="mda-journey-inner">
        {/* Journey Header */}
        <div className="journey__header">
          <p className="eyebrow">{header.kicker}</p>
          <h2 className="section__title">
            {header.title}
          </h2>
          <p className="section__lede">
            {header.desc}
          </p>
        </div>

        {/* 2-Column Scrollytelling Layout */}
        <div className="journey__layout">
          {/* Left Column: Sticky Visual Panel & Progress Rail */}
          <div className="journey__panel">
            <div className="journey__panel-frame">
              {stagesData.map((stage, idx) => (
                <div
                  key={stage.num}
                  className={`journey__panel-img ${idx === activeStage ? "is-active" : ""}`}
                >
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    priority={idx === 0}
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 550px"
                  />
                </div>
              ))}
            </div>

            {/* Vertical Progress Rail */}
            <div className="journey__rail" aria-hidden="true">
              <span
                className="journey__rail-fill"
                style={{ height: `${progressPercent}%` }}
              />
              {stagesData.map((stage, idx) => (
                <button
                  key={stage.num}
                  type="button"
                  aria-label={`Jump to stage ${stage.num} ${stage.title}`}
                  onClick={() => handleDotClick(idx)}
                  className={`journey__rail-dot ${idx === activeStage ? "is-active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Scrolling Stages List */}
          <div className="journey__stages">
            {stagesData.map((stage, idx) => (
              <div
                key={stage.num}
                ref={(el) => {
                  stageRefs.current[idx] = el;
                }}
                className={`stage ${idx === activeStage ? "is-active" : ""}`}
              >
                <p className="stage__num" aria-hidden="true">
                  {stage.num}
                </p>
                <p className="stage__kicker">{stage.kicker}</p>
                <h3 className="stage__title">{stage.title}</h3>
                <p className="stage__sub">{stage.sub}</p>
                <p className="stage__text">{stage.text}</p>
                <ul className="stage__list">
                  {stage.list.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="journey__cta-wrap">
          <Link href={getLocalizedHref("/itinerary")} className="journey__cta-btn">
            {header.btn} <span className="btn__arrow" aria-hidden="true">{isRtl ? "←" : "→"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
