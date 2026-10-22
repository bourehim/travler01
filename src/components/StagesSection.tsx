"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/data/translations";

interface StagesSectionProps {
  currentLocale?: Locale;
}

interface StageItem {
  num: string;
  kicker: string;
  title: string;
  sub: string;
  text: string;
  list: (string | React.ReactNode)[];
  image: string;
  alt: string;
}

const stagesData: StageItem[] = [
  {
    num: "01",
    kicker: "Stage one · Day 1",
    title: "Marrakech",
    sub: "Where the journey begins",
    text: "Marrakech isn’t visited. It’s felt. The city welcomes us with the scent of spices, the colours of the medina and an energy that is hard to explain and impossible to miss from the very first moment.",
    list: [
      "Group meeting at Marrakech airport",
      "Transfer to the riad and our first shared moments",
      "Free time to let the city surprise you",
      "First night in Marrakech",
    ],
    image: "/images/marrakech-city.jpg",
    alt: "Marrakech medina",
  },
  {
    num: "02",
    kicker: "Stage two · On the road",
    title: "High Atlas",
    sub: "From the bustle to the immensity",
    text: "There is a moment in every adventure when something shifts: the city slowly disappears in the rear-view mirror and conversations grow deeper. Ahead of us vast mountains unfold, and horizons that invite us to recover our capacity for wonder.",
    list: [
      "We will cross the High Atlas over its mountain passes",
      "We will discover ancient Berber villages",
      "We will visit Ait Ben Haddou, a UNESCO World Heritage Site",
      "We will draw close to the gates of the desert",
    ],
    image: "/images/atlas-mountains.jpg",
    alt: "High Atlas mountains",
  },
  {
    num: "03",
    kicker: "Stage three · Oasis",
    title: "Draa Valley",
    sub: "Towards the horizon",
    text: "Palm groves appear out of the arid land. Ancient villages keep telling stories of generations past. And the horizon seems to widen with every kilometre. We know the desert is waiting for us.",
    list: [
      "We will travel through the largest oasis in Morocco",
      "We will discover Rissani, a centuries-old market in North Africa",
      "We will pass through Berber villages on the road to the Sahara",
      <strong key="3-bold">Tonight we sleep in the desert</strong>,
    ],
    image: "/images/draa-valley.jpg",
    alt: "Draa valley palm oasis",
  },
  {
    num: "04",
    kicker: "Stage four · Erg Chebbi",
    title: "The Sahara",
    sub: "There, where something awakens",
    text: "Some places impress you. And some places stay with you long after you have returned. Nothing compares to seeing for the first time a horizon made of nothing but dunes and silence.",
    list: [
      "Walking among the dunes of Erg Chebbi",
      "4×4 adventure through impossible landscapes",
      "Oases and hidden corners off the beaten track",
      "Sunset over the dunes",
    ],
    image: "/images/sahara-dunes.jpg",
    alt: "Sahara desert dunes",
  },
  {
    num: "05",
    kicker: "Stage five · Night",
    title: "Under the stars",
    sub: "The magic that never shows up in photographs",
    text: "When the sun disappears behind the dunes, conversations stretch out and the sky fills with more stars than many of us have ever seen. Around the fire we will share stories, silences, music and moments that need no planning at all.",
    list: [
      "A night in a luxury camp in the Sahara",
      "Traditional Moroccan dinner",
      "Music and drums around the fire",
      "One of the most impressive starry skies in the world",
    ],
    image: "/images/night-campfire.jpg",
    alt: "Night campfire under stars",
  },
  {
    num: "06",
    kicker: "Stage six · Valley of Roses",
    title: "Valleys & kasbahs",
    sub: "The journey continues",
    text: "After the intensity of the desert, the journey continues through valleys, kasbahs and villages that seem to belong to another time. By now we are not only discovering Morocco: we are learning to look at things differently.",
    list: [
      "The spectacular Todra Gorge",
      "The Route of a Thousand Kasbahs",
      "Traditional villages almost untouched for generations",
      "A night in the Valley of Roses",
    ],
    image: "/images/rose-valley-kasbah.jpg",
    alt: "Valley of Roses kasbah",
  },
  {
    num: "07",
    kicker: "Stage seven · Return",
    title: "The road home",
    sub: "The treasure we take with us",
    text: "We are no longer the same women who arrived in Marrakech. Some journeys end when we get home, and others stay with us for a long time afterwards. This is one of the latter.",
    list: [
      "A traditional kasbah and Berber life",
      "The legendary film studios of Ouarzazate",
      "Back over the High Atlas, landscapes of the journey",
      "Free morning in Marrakech and transfer to the airport",
    ],
    image: "/images/desert-mountains.jpg",
    alt: "Desert mountains road",
  },
];

export default function StagesSection({ currentLocale = "en" }: StagesSectionProps) {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  }, []);

  const handleDotClick = (index: number) => {
    setActiveStage(index);
    const target = stageRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const progressPercent = stagesData.length > 1 ? (activeStage / (stagesData.length - 1)) * 100 : 0;

  return (
    <div id="journey" className="mda-journey-wrap">
      <div className="mda-journey-inner">
        {/* Journey Header */}
        <div className="journey__header">
          <p className="eyebrow">The itinerary · 23 — 29 Sep 2026</p>
          <h2 className="section__title">
            Seven stages, <em>one single story</em>
          </h2>
          <p className="section__lede">
            From the bustle of Marrakech to the immensity of the Sahara — and back. Every stage
            opens a new way of seeing.
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
          <Link href="/itinerary-stays/" className="journey__cta-btn">
            View Complete Itinerary &amp; Stays Guide <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
