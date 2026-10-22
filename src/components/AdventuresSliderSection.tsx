"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Locale } from "@/data/translations";

interface AdventuresSliderSectionProps {
  currentLocale?: Locale;
}

const SLIDES = [
  {
    title: "Marrakech Medina",
    subtitle: "Where the Journey Begins",
    image: "/images/marrakech-city.jpg",
    alt: "Marrakech Medina",
    stage: "Stage 01",
  },
  {
    title: "High Atlas Passes",
    subtitle: "Tizi n’Tichka & Kasbahs",
    image: "/images/atlas-mountains.jpg",
    alt: "High Atlas Passes",
    stage: "Stage 02",
  },
  {
    title: "Erg Chebbi Dunes",
    subtitle: "Sunset Camel Trek & Silence",
    image: "/images/sahara-dunes.jpg",
    alt: "Erg Chebbi Dunes",
    stage: "Stage 04",
  },
  {
    title: "Sahara Campfire",
    subtitle: "Music Under the Stars",
    image: "/images/night-campfire.jpg",
    alt: "Sahara Campfire",
    stage: "Stage 05",
  },
  {
    title: "Ancestral Kasbahs",
    subtitle: "Valley of Roses & Earthen Citadel",
    image: "/images/rose-valley-kasbah.jpg",
    alt: "Ancestral Kasbahs",
    stage: "Stage 06",
  },
];

export default function AdventuresSliderSection({
  currentLocale = "en",
}: AdventuresSliderSectionProps) {
  const [current, setCurrent] = useState(2); // default center slide: Erg Chebbi Dunes
  const [transitionSpeed, setTransitionSpeed] = useState("1s");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isMouseOverRef = useRef(false);
  const currentMouseXRef = useRef(-1);
  const clickCooldownUntilRef = useRef(0);
  const hoverScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  const total = SLIDES.length;

  const stopContinuousHoverScroll = useCallback(() => {
    if (hoverScrollTimerRef.current) {
      clearTimeout(hoverScrollTimerRef.current);
      hoverScrollTimerRef.current = null;
    }
  }, []);

  const handleCardSelect = useCallback(
    (idx: number) => {
      stopContinuousHoverScroll();
      clickCooldownUntilRef.current = Date.now() + 1000;
      setTransitionSpeed("0.45s");
      setCurrent(idx);
    },
    [stopContinuousHoverScroll]
  );

  const handlePrev = useCallback(() => {
    stopContinuousHoverScroll();
    clickCooldownUntilRef.current = Date.now() + 1000;
    setTransitionSpeed("0.55s");
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [stopContinuousHoverScroll, total]);

  const handleNext = useCallback(() => {
    stopContinuousHoverScroll();
    clickCooldownUntilRef.current = Date.now() + 1000;
    setTransitionSpeed("0.55s");
    setCurrent((prev) => (prev + 1) % total);
  }, [stopContinuousHoverScroll, total]);

  const handleDotClick = useCallback(
    (idx: number) => {
      stopContinuousHoverScroll();
      clickCooldownUntilRef.current = Date.now() + 1000;
      setTransitionSpeed("0.5s");
      setCurrent(idx);
    },
    [stopContinuousHoverScroll]
  );

  // Continuous Hover Navigation Logic with Deadzone & Distance-Based Acceleration
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper || !stage) return;

    function getHoverScrollParams() {
      if (!stage) return { dir: 0, interval: 0, speed: 0 };
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const halfWidth = rect.width / 2;
      const deadzone = Math.min(160, halfWidth * 0.28); // center deadzone around active card (~320px)

      const diff = currentMouseXRef.current - centerX;
      const absDiff = Math.abs(diff);

      if (absDiff <= deadzone) {
        return { dir: 0, interval: 0, speed: 0 };
      }

      const dir = diff > 0 ? 1 : -1;
      const factor = Math.min(1, Math.max(0, (absDiff - deadzone) / (halfWidth - deadzone)));
      const curvedFactor = Math.pow(factor, 0.85);

      // Speed range: 1500ms down to 720ms
      const interval = Math.round(1500 - curvedFactor * (1500 - 720));
      const speed = Math.round(Math.min(interval * 0.78, 620));

      return { dir, interval, speed };
    }

    function stepHoverScroll() {
      if (!isMouseOverRef.current) return;
      if (Date.now() < clickCooldownUntilRef.current) {
        hoverScrollTimerRef.current = setTimeout(
          stepHoverScroll,
          Math.max(80, clickCooldownUntilRef.current - Date.now() + 50)
        );
        return;
      }

      const p = getHoverScrollParams();
      if (p.dir === 0) {
        // In center deadzone: remain still so user can admire the active card
        hoverScrollTimerRef.current = setTimeout(stepHoverScroll, 120);
        return;
      }

      setTransitionSpeed(`${p.speed / 1000}s`);
      setCurrent((prev) => (prev + p.dir + total) % total);

      hoverScrollTimerRef.current = setTimeout(stepHoverScroll, p.interval);
    }

    const onMouseEnter = (e: MouseEvent) => {
      isMouseOverRef.current = true;
      currentMouseXRef.current = e.clientX;
      stopContinuousHoverScroll();
      hoverScrollTimerRef.current = setTimeout(stepHoverScroll, 300);
    };

    const onMouseMove = (e: MouseEvent) => {
      currentMouseXRef.current = e.clientX;
      if (!isMouseOverRef.current) isMouseOverRef.current = true;
      if (!hoverScrollTimerRef.current) {
        const remaining = Math.max(50, clickCooldownUntilRef.current - Date.now());
        hoverScrollTimerRef.current = setTimeout(stepHoverScroll, remaining > 50 ? remaining : 200);
      }
    };

    const onMouseLeave = () => {
      isMouseOverRef.current = false;
      stopContinuousHoverScroll();
      setTransitionSpeed("1s");
    };

    wrapper.addEventListener("mouseenter", onMouseEnter);
    wrapper.addEventListener("mousemove", onMouseMove);
    wrapper.addEventListener("mouseleave", onMouseLeave);

    return () => {
      wrapper.removeEventListener("mouseenter", onMouseEnter);
      wrapper.removeEventListener("mousemove", onMouseMove);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      stopContinuousHoverScroll();
    };
  }, [stopContinuousHoverScroll, total]);

  const getSlideClass = (i: number) => {
    const diff = (i - current + total) % total;
    if (diff === 0) return "slide-active";
    if (diff === 1) return "slide-next-1";
    if (diff === 2 && total > 3) return "slide-next-2";
    if (diff === total - 1) return "slide-prev-1";
    if (diff === total - 2 && total > 4) return "slide-prev-2";
    return "slide-hidden";
  };

  return (
    <section
      className="wp-block-group alignfull aqua-adventures-section has-background"
      data-hover-slide="true"
      data-hover-zoom="true"
      data-zoom-scale="1.08"
      data-zoom-speed="0.65s"
      data-hover-delay="220"
      data-transition-speed="1000"
      data-initial-slide="2"
      data-autoplay="false"
      data-autoplay-interval="4500"
      data-pause-on-hover="true"
      style={
        {
          "--aqua-zoom-scale": "1.08",
          "--aqua-zoom-speed": "0.65s",
          "--aqua-transition-speed": transitionSpeed,
        } as React.CSSProperties
      }
    >
      <div className="wp-block-group__inner-container">
        <div className="aqua-adventures-container">
          {/* Header Area */}
          <div className="aqua-header-area is-layout-constrained wp-block-group-is-layout-constrained">
            <h2
              className="wp-block-heading has-text-align-center aqua-section-title"
              style={{ marginTop: 0, marginBottom: "10px" }}
            >
              Our Top Desert &amp; Sahara Adventures ✦
            </h2>

            {/* Floating Star Illustration */}
            <div
              className="aqua-floating-fish"
              aria-hidden="true"
              style={{ right: "-32px", top: "-8px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="#C29D59"
                style={{
                  display: "block",
                  filter: "drop-shadow(0 4px 8px rgba(194,157,89,0.35))",
                }}
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            <p
              className="has-text-align-center aqua-section-subtitle wp-block-paragraph"
              style={{ marginTop: 0, marginBottom: "48px" }}
            >
              Seven days of wonder across Morocco — from ancestral kasbahs to the
              golden sea of Erg Chebbi dunes.
            </p>
          </div>

          {/* 3D Coverflow Slider Carousel */}
          <div ref={wrapperRef} className="aqua-coverflow-wrapper">
            <button
              type="button"
              className="aqua-nav-btn aqua-btn-prev"
              aria-label="Previous Slide"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="18"
                height="18"
                fill="#FFFFFF"
              >
                <path
                  fill="#FFFFFF"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </button>

            <div ref={stageRef} className="aqua-cards-stage">
              {SLIDES.map((slide, idx) => {
                const cardClass = getSlideClass(idx);
                const isActive = cardClass === "slide-active";
                const isHovered = hoveredIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`aqua-slide-card ${cardClass} ${
                      isHovered ? "slide-hovered" : ""
                    }`}
                    data-index={idx}
                    role="button"
                    tabIndex={0}
                    aria-label={`${slide.title} - ${slide.stage}`}
                    aria-selected={isActive}
                    onClick={() => handleCardSelect(idx)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCardSelect(idx);
                      }
                    }}
                  >
                    <img
                      decoding="async"
                      src={slide.image}
                      alt={slide.alt}
                      className="aqua-card-img"
                    />
                    <div className="aqua-card-overlay">
                      <h3 className="aqua-card-title">{slide.title}</h3>
                      <span className="aqua-card-count">{slide.subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="aqua-nav-btn aqua-btn-next"
              aria-label="Next Slide"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="18"
                height="18"
                fill="#FFFFFF"
              >
                <path
                  fill="#FFFFFF"
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="aqua-pagination-dots">
            {SLIDES.map((_, d) => (
              <span
                key={d}
                className={`aqua-dot ${d === current ? "aqua-dot-active" : ""}`}
                data-index={d}
                role="button"
                aria-label={`Go to slide ${d + 1}`}
                onClick={() => handleDotClick(d)}
              />
            ))}
          </div>

          {/* Bottom CTA Pill Button */}
          <div
            className="aqua-btn-wrap"
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            <a href="/itinerary-stays/" className="aqua-cta-pill">
              <span>Explore Full 7-Day Itinerary</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 320 512"
                fill="currentColor"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
