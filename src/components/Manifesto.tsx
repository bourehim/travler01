"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface ManifestoProps {
  currentLocale: Locale;
}

export default function Manifesto({ currentLocale = "en" }: ManifestoProps) {
  const [isManifestoVisible, setIsManifestoVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsManifestoVisible(true);
      setIsAboutVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === manifestoRef.current) {
              setIsManifestoVisible(true);
            }
            if (entry.target === aboutRef.current) {
              setIsAboutVisible(true);
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: "80px 0px -20px 0px" }
    );

    if (manifestoRef.current) observer.observe(manifestoRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const essentials = [
    { value: "7", label: "7 days of travel" },
    { value: "12", label: "Women" },
    { value: "6", label: "Nights" },
    { value: "1", label: "Desert" },
  ];

  return (
    <div>
      {/* 1. Manifesto Quote Section */}
      <div
        ref={manifestoRef}
        className={`wp-block-group alignfull mda-manifesto-wrap manifesto ${
          isManifestoVisible ? "is-visible" : ""
        }`}
      >
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <div className="wp-block-group mda-manifesto-inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <p
                className={`manifesto__eyebrow reveal wp-block-paragraph ${
                  isManifestoVisible ? "is-visible" : ""
                }`}
                style={{ "--i": 0 } as React.CSSProperties}
              >
                It isn’t a getaway, it’s a journey
              </p>

              <p
                className={`manifesto__quote split-words reveal wp-block-paragraph ${
                  isManifestoVisible ? "is-visible" : ""
                }`}
                style={{ "--i": 1 } as React.CSSProperties}
              >
                <span className="word" style={{ "--w": 0 } as React.CSSProperties}>Some</span>{" "}
                <span className="word" style={{ "--w": 1 } as React.CSSProperties}>journeys</span>{" "}
                <span className="word" style={{ "--w": 2 } as React.CSSProperties}>take</span>{" "}
                <span className="word" style={{ "--w": 3 } as React.CSSProperties}>you</span>{" "}
                <span className="word" style={{ "--w": 4 } as React.CSSProperties}>to</span>{" "}
                <span className="word" style={{ "--w": 5 } as React.CSSProperties}>a</span>{" "}
                <span className="word" style={{ "--w": 6 } as React.CSSProperties}>place.</span>{" "}
                <span className="word" style={{ "--w": 7 } as React.CSSProperties}>And</span>{" "}
                <span className="word" style={{ "--w": 8 } as React.CSSProperties}>others</span>{" "}
                <span className="word" style={{ "--w": 9 } as React.CSSProperties}>take</span>{" "}
                <span className="word" style={{ "--w": 10 } as React.CSSProperties}>you</span>{" "}
                <em>
                  <span className="word" style={{ "--w": 11 } as React.CSSProperties}>back</span>{" "}
                  <span className="word" style={{ "--w": 12 } as React.CSSProperties}>to</span>{" "}
                  <span className="word" style={{ "--w": 13 } as React.CSSProperties}>yourself.</span>
                </em>
              </p>

              <p
                className={`manifesto__mark reveal wp-block-paragraph ${
                  isManifestoVisible ? "is-visible" : ""
                }`}
                style={{ "--i": 2 } as React.CSSProperties}
              >
                ✦
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Essentials 4-Card Counter Grid */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {essentials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF4EA] border border-[#D4A85F]/35 rounded-2xl p-6 sm:p-8 text-center shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <span className="font-playfair text-4xl sm:text-6xl text-[#1B1108] font-normal leading-none mb-3">
                {item.value}
              </span>
              <span className="font-inter text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-[#763417]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Section (#about) */}
      <div
        id="about"
        ref={aboutRef}
        className={`wp-block-group alignfull mda-about-wrap about ${
          isAboutVisible ? "is-visible" : ""
        }`}
      >
        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
          <div className="wp-block-group mda-about-inner">
            <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
              <div className="wp-block-group about__grid">
                {/* Left Column Text */}
                <div className="wp-block-group about__text">
                    <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                      <p
                        className={`eyebrow reveal wp-block-paragraph ${
                          isAboutVisible ? "is-visible" : ""
                        }`}
                        style={{ "--i": 0 } as React.CSSProperties}
                      >
                        What is Mujeres de Arena?
                      </p>

                      <h2
                        className={`wp-block-heading about__title reveal ${
                          isAboutVisible ? "is-visible" : ""
                        }`}
                        style={{ "--i": 1 } as React.CSSProperties}
                      >
                        It isn’t an organised trip.<br />It is a <em>journey</em> created from the heart.
                      </h2>

                      <p
                        className={`reveal wp-block-paragraph ${
                          isAboutVisible ? "is-visible" : ""
                        }`}
                        style={{ "--i": 2 } as React.CSSProperties}
                      >
                        Mujeres de Arena was born for women who feel the call to step outside the familiar, to make room for adventure and to allow themselves to live a real experience. No impossible schedules, no scripted minutes.
                      </p>

                      <p
                        className={`reveal wp-block-paragraph ${
                          isAboutVisible ? "is-visible" : ""
                        }`}
                        style={{ "--i": 3 } as React.CSSProperties}
                      >
                        Seven days travelling through Morocco across vibrant cities, mountains, ancestral kasbahs, valleys full of history and the immensity of the Sahara. A space to discover new landscapes, to share the road with other women and to feel again the thrill of experiencing something for the first time.
                      </p>

                      <blockquote
                        className={`wp-block-quote about__quote reveal is-layout-flow wp-block-quote-is-layout-flow ${
                          isAboutVisible ? "is-visible" : ""
                        }`}
                        style={{ "--i": 4 } as React.CSSProperties}
                      >
                        <p>
                          Because sometimes transformation doesn’t happen in a room.<br />It happens on the road. In an unexpected conversation.<br />In a different sunrise.
                        </p>
                      </blockquote>

                      <p
                        className={`about__closing reveal wp-block-paragraph ${
                          isAboutVisible ? "is-visible" : ""
                        }`}
                        style={{ "--i": 5 } as React.CSSProperties}
                      >
                        And also inside you.
                      </p>
                    </div>
                  </div>

                  {/* Right Column Media with Arch Window */}
                  <div
                    className={`wp-block-group about__media reveal-scale ${
                      isAboutVisible ? "is-visible" : ""
                    }`}
                  >
                    <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                      <div className="wp-block-group arch">
                        <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                          <figure className="wp-block-image size-full">
                            <Image
                              src="/images/marrakech-woman.jpg"
                              alt="Woman in flowing dress contemplating a valley from a mountain"
                              width={440}
                              height={550}
                              priority
                              className="object-cover"
                            />
                          </figure>
                        </div>
                      </div>

                      <p className="about__caption wp-block-paragraph">
                        <span className="about__caption-dot" aria-hidden="true" />
                        The journey begins when you say yes
                      </p>
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
