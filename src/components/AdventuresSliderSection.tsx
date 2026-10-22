"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Locale } from "@/data/translations";

interface AdventuresSliderSectionProps {
  currentLocale?: Locale;
}

const SLIDER_CONTENT: Record<Locale, {
  title: string;
  subtitle: string;
  cta: string;
  slides: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    stage: string;
  }[];
}> = {
  en: {
    title: "Our Top Desert & Sahara Adventures ✦",
    subtitle: "Seven days of wonder across Morocco — from ancestral kasbahs to the golden sea of Erg Chebbi dunes.",
    cta: "Explore Full 7-Day Itinerary",
    slides: [
      { title: "Marrakech Medina", subtitle: "Where the Journey Begins", image: "/images/marrakech-city.jpg", alt: "Marrakech Medina", stage: "Stage 01" },
      { title: "High Atlas Passes", subtitle: "Tizi n’Tichka & Kasbahs", image: "/images/atlas-mountains.jpg", alt: "High Atlas Passes", stage: "Stage 02" },
      { title: "Erg Chebbi Dunes", subtitle: "Sunset Camel Trek & Silence", image: "/images/sahara-dunes.jpg", alt: "Erg Chebbi Dunes", stage: "Stage 04" },
      { title: "Sahara Campfire", subtitle: "Music Under the Stars", image: "/images/night-campfire.jpg", alt: "Sahara Campfire", stage: "Stage 05" },
      { title: "Ancestral Kasbahs", subtitle: "Valley of Roses & Earthen Citadel", image: "/images/rose-valley-kasbah.jpg", alt: "Ancestral Kasbahs", stage: "Stage 06" },
    ],
  },
  es: {
    title: "Nuestras Mejores Aventuras por el Sahara y el Desierto ✦",
    subtitle: "Siete días de asombro por Marruecos: desde kasbahs ancestrales hasta el mar dorado de las dunas de Erg Chebbi.",
    cta: "Ver itinerario detallado de 7 días",
    slides: [
      { title: "Medina de Marrakech", subtitle: "Donde Comienza el Viaje", image: "/images/marrakech-city.jpg", alt: "Medina de Marrakech", stage: "Etapa 01" },
      { title: "Pasos del Alto Atlas", subtitle: "Tizi n'Tichka y Kasbahs", image: "/images/atlas-mountains.jpg", alt: "Pasos del Alto Atlas", stage: "Etapa 02" },
      { title: "Dunas de Erg Chebbi", subtitle: "Atardecer en Dromedario y Silencio", image: "/images/sahara-dunes.jpg", alt: "Dunas de Erg Chebbi", stage: "Etapa 04" },
      { title: "Hoguera en el Sahara", subtitle: "Música Bajo las Estrellas", image: "/images/night-campfire.jpg", alt: "Hoguera en el Sahara", stage: "Etapa 05" },
      { title: "Kasbahs Ancestrales", subtitle: "Valle de las Rosas y Ciudadelas de Adobe", image: "/images/rose-valley-kasbah.jpg", alt: "Kasbahs Ancestrales", stage: "Etapa 06" },
    ],
  },
  fr: {
    title: "Nos Meilleures Aventures au Sahara et dans le Désert ✦",
    subtitle: "Sept jours d'émerveillement au Maroc — des kasbahs ancestrales à la mer dorée des dunes d'Erg Chebbi.",
    cta: "Découvrir l'itinéraire complet de 7 jours",
    slides: [
      { title: "Médina de Marrakech", subtitle: "Là où Commence le Voyage", image: "/images/marrakech-city.jpg", alt: "Médina de Marrakech", stage: "Étape 01" },
      { title: "Cols du Haut Atlas", subtitle: "Tizi n'Tichka et Kasbahs", image: "/images/atlas-mountains.jpg", alt: "Cols du Haut Atlas", stage: "Étape 02" },
      { title: "Dunes d'Erg Chebbi", subtitle: "Caravane au Crépuscule et Silence", image: "/images/sahara-dunes.jpg", alt: "Dunes d'Erg Chebbi", stage: "Étape 04" },
      { title: "Feu de Camp au Sahara", subtitle: "Musique Sous les Étoiles", image: "/images/night-campfire.jpg", alt: "Feu de Camp au Sahara", stage: "Étape 05" },
      { title: "Kasbahs Ancestrales", subtitle: "Vallée des Roses et Forteresses", image: "/images/rose-valley-kasbah.jpg", alt: "Kasbahs Ancestrales", stage: "Étape 06" },
    ],
  },
  de: {
    title: "Unsere Schönsten Sahara- & Wüstenabenteuer ✦",
    subtitle: "Sieben Tage voller Wunder in Marokko – von uralten Kasbahs bis zum goldenen Dünenmeer des Erg Chebbi.",
    cta: "Vollständige 7-Tage-Reiseroute entdecken",
    slides: [
      { title: "Medina von Marrakesch", subtitle: "Wo die Reise Beginnt", image: "/images/marrakech-city.jpg", alt: "Medina von Marrakesch", stage: "Etappe 01" },
      { title: "Pässe des Hohen Atlas", subtitle: "Tizi n'Tichka & Kasbahs", image: "/images/atlas-mountains.jpg", alt: "Pässe des Hohen Atlas", stage: "Etappe 02" },
      { title: "Dünen von Erg Chebbi", subtitle: "Kamelkarawane & Stille", image: "/images/sahara-dunes.jpg", alt: "Dünen von Erg Chebbi", stage: "Etappe 04" },
      { title: "Lagerfeuer in der Sahara", subtitle: "Musik Unter den Sternen", image: "/images/night-campfire.jpg", alt: "Lagerfeuer in der Sahara", stage: "Etappe 05" },
      { title: "Uralte Kasbahs", subtitle: "Tal der Rosen & Lehmburgen", image: "/images/rose-valley-kasbah.jpg", alt: "Uralte Kasbahs", stage: "Etappe 06" },
    ],
  },
  it: {
    title: "Le Nostre Migliori Avventure nel Sahara e nel Deserto ✦",
    subtitle: "Sette giorni di meraviglia in Marocco: dalle kasbah ancestrali al mare dorato delle dune dell'Erg Chebbi.",
    cta: "Scopri l'itinerario completo di 7 giorni",
    slides: [
      { title: "Medina di Marrakech", subtitle: "Dove Comincia il Viaggio", image: "/images/marrakech-city.jpg", alt: "Medina di Marrakech", stage: "Tappa 01" },
      { title: "Passi dell'Alto Atlante", subtitle: "Tizi n'Tichka e Kasbah", image: "/images/atlas-mountains.jpg", alt: "Passi dell'Alto Atlante", stage: "Tappa 02" },
      { title: "Dune di Erg Chebbi", subtitle: "Dromedari al Tramonto e Silenzio", image: "/images/sahara-dunes.jpg", alt: "Dune di Erg Chebbi", stage: "Tappa 04" },
      { title: "Fuoco nel Sahara", subtitle: "Musica Sotto le Stelle", image: "/images/night-campfire.jpg", alt: "Fuoco nel Sahara", stage: "Tappa 05" },
      { title: "Kasbah Ancestrali", subtitle: "Valle delle Rose e Fortezze d'Argilla", image: "/images/rose-valley-kasbah.jpg", alt: "Kasbah Ancestrali", stage: "Tappa 06" },
    ],
  },
  pt: {
    title: "As Nossas Melhores Aventuras no Deserto e Sara ✦",
    subtitle: "Sete dias de deslumbramento por Marrocos — das kasbahs ancestrais ao mar dourado das dunas de Erg Chebbi.",
    cta: "Ver itinerário completo de 7 dias",
    slides: [
      { title: "Medina de Marraquexe", subtitle: "Onde Começa a Viagem", image: "/images/marrakech-city.jpg", alt: "Medina de Marraquexe", stage: "Etapa 01" },
      { title: "Passos do Alto Atlas", subtitle: "Tizi n'Tichka & Kasbahs", image: "/images/atlas-mountains.jpg", alt: "Passos do Alto Atlas", stage: "Etapa 02" },
      { title: "Dunas de Erg Chebbi", subtitle: "Caravana ao Pôr do Sol e Silêncio", image: "/images/sahara-dunes.jpg", alt: "Dunas de Erg Chebbi", stage: "Etapa 04" },
      { title: "Fogueira no Saara", subtitle: "Música Sob as Estrelas", image: "/images/night-campfire.jpg", alt: "Fogueira no Saara", stage: "Etapa 05" },
      { title: "Kasbahs Ancestrais", subtitle: "Vale das Rosas e Fortalezas de Adobe", image: "/images/rose-valley-kasbah.jpg", alt: "Kasbahs Ancestrais", stage: "Etapa 06" },
    ],
  },
  ar: {
    title: "أفضل مغامراتنا في صحراء المغرب وعرق الشبّي ✦",
    subtitle: "سبعة أيام من السحر والدهشة عبر المغرب — من القصبات العريقة إلى بحر الرمال الذهبية في عرق الشبّي.",
    cta: "اكتشفي برنامج الرحلة الكامل لـ 7 أيام ←",
    slides: [
      { title: "مدينة مراكش العتيقة", subtitle: "حيث تبدأ الرحلة", image: "/images/marrakech-city.jpg", alt: "مدينة مراكش العتيقة", stage: "المرحلة 01" },
      { title: "ممرات الأطلس الكبير", subtitle: "تيزي نتيشكا وقصبات الطين", image: "/images/atlas-mountains.jpg", alt: "ممرات الأطلس الكبير", stage: "المرحلة 02" },
      { title: "كثبان عرق الشبّي", subtitle: "قافلة الإبل عند الغروب والسكينة", image: "/images/sahara-dunes.jpg", alt: "كثبان عرق الشبّي", stage: "المرحلة 04" },
      { title: "سهرة النار في الصحراء", subtitle: "موسيقى تحت قبة النجوم", image: "/images/night-campfire.jpg", alt: "سهرة النار في الصحراء", stage: "المرحلة 05" },
      { title: "قصبات الأجداد", subtitle: "وادي الورود وحصون الطين الخالدة", image: "/images/rose-valley-kasbah.jpg", alt: "قصبات الأجداد", stage: "المرحلة 06" },
    ],
  },
  ru: {
    title: "Наши Лучшие Приключения в Сахаре и Пустыне ✦",
    subtitle: "Семь дней чудес по Марокко — от древних касб до золотого моря дюн Эрг-Шебби.",
    cta: "Смотреть подробный 7-дневный маршрут →",
    slides: [
      { title: "Медина Марракеша", subtitle: "Начало Путешествия", image: "/images/marrakech-city.jpg", alt: "Медина Марракеша", stage: "Этап 01" },
      { title: "Перевалы Высокого Атласа", subtitle: "Тизи н'Тичка и Древние Касбы", image: "/images/atlas-mountains.jpg", alt: "Перевалы Высокого Атласа", stage: "Этап 02" },
      { title: "Дюны Эрг-Шебби", subtitle: "Караван на Закате и Тишина Пустыни", image: "/images/sahara-dunes.jpg", alt: "Дюны Эрг-Шебби", stage: "Этап 04" },
      { title: "Костер в Сахаре", subtitle: "Музыка Под Звездами", image: "/images/night-campfire.jpg", alt: "Костер в Сахаре", stage: "Этап 05" },
      { title: "Исторические Касбы", subtitle: "Долина Роз и Глиняные Крепости", image: "/images/rose-valley-kasbah.jpg", alt: "Исторические Касбы", stage: "Этап 06" },
    ],
  },
};

export default function AdventuresSliderSection({
  currentLocale = "en",
}: AdventuresSliderSectionProps) {
  const content = SLIDER_CONTENT[currentLocale] || SLIDER_CONTENT.en;
  const slides = content.slides;

  const [current, setCurrent] = useState(2); // default center slide: Erg Chebbi Dunes
  const [transitionSpeed, setTransitionSpeed] = useState("1s");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isMouseOverRef = useRef(false);
  const currentMouseXRef = useRef(-1);
  const clickCooldownUntilRef = useRef(0);
  const hoverScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  const total = slides.length;

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
              {content.title}
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
              {content.subtitle}
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
              {slides.map((slide, idx) => {
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
            {slides.map((_, d) => (
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
            <a href="/itinerary" className="aqua-cta-pill">
              <span>{content.cta}</span>
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
