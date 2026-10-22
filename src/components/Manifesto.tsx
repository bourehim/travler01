"use client";

import React from "react";
import Image from "next/image";
import { Locale } from "@/data/translations";

interface ManifestoProps {
  currentLocale: Locale;
}

export default function Manifesto({ currentLocale = "en" }: ManifestoProps) {
  const essentials = [
    { value: "7", label: "7 days of travel" },
    { value: "12", label: "Women" },
    { value: "6", label: "Nights" },
    { value: "1", label: "Desert" },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1B1108]">
      {/* 1. Manifesto Quote Section */}
      <section className="py-20 sm:py-28 px-6 text-center max-w-4xl mx-auto">
        <p className="font-inter text-xs font-semibold tracking-[0.22em] text-[#D4A85F] uppercase mb-6">
          It isn’t a getaway, it’s a journey
        </p>

        <h2 className="font-playfair italic text-3xl sm:text-5xl md:text-6xl text-[#1B1108] leading-tight font-normal mb-8">
          Some journeys take you to a place. And others take you{" "}
          <em className="text-[#8B4513] not-italic font-normal">back to yourself.</em>
        </h2>

        <p className="text-[#D4A85F] text-xl font-serif">✦</p>
      </section>

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
      <section id="about" className="py-20 sm:py-28 px-6 border-t border-[#E8E0D5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <p className="font-inter text-xs font-semibold tracking-[0.22em] text-[#D4A85F] uppercase mb-4">
              What is Mujeres de Arena?
            </p>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#1B1108] leading-tight font-normal mb-8">
              It isn’t an organised trip.
              <br />
              It is a <em className="italic text-[#8B4513]">journey</em> created from the heart.
            </h2>

            <div className="space-y-6 font-inter text-base sm:text-lg text-[#1B1108]/85 font-light leading-relaxed mb-8">
              <p>
                Mujeres de Arena was born for women who feel the call to step outside the familiar,
                to make room for adventure and to allow themselves to live a real experience.
                No impossible schedules, no scripted minutes.
              </p>
              <p>
                Seven days travelling through Morocco across vibrant cities, mountains, ancestral kasbahs,
                valleys full of history and the immensity of the Sahara. A space to discover new landscapes,
                to share the road with other women and to feel again the thrill of experiencing something for the first time.
              </p>
            </div>

            <blockquote className="border-l-2 border-[#D4A85F] pl-6 py-2 my-8 font-playfair italic text-lg sm:text-xl text-[#3A1F12] leading-relaxed">
              Because sometimes transformation doesn’t happen in a room.
              <br />
              It happens on the road. In an unexpected conversation.
              <br />
              In a different sunrise.
            </blockquote>

            <p className="font-playfair italic text-base sm:text-lg text-[#763417] font-medium">
              And also inside you.
            </p>
          </div>

          {/* Right Media with Moroccan Arch Cutout Window */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-t-[220px] rounded-b-2xl overflow-hidden border border-[#D4A85F]/40 shadow-2xl bg-[#FAF4EA]">
              <Image
                src="/images/marrakech-riad-peace.jpg"
                alt="Woman contemplating valley"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs font-inter tracking-widest text-[#763417] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A85F]" />
              The journey begins when you say yes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
