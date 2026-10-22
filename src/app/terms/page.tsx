"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function TermsPage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const isRtl = currentLocale === "ar";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA] text-[#1B1108] selection:bg-[#8B4513] selection:text-white" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />

      <main className="flex-1">
        {/* Subpage Hero */}
        <div className="wp-block-cover alignfull mda-subpage-hero has-parallax relative">
          <div
            className="wp-block-cover__image-background has-parallax"
            style={{
              backgroundImage: "url('/images/rose-valley-kasbah.jpg')",
              backgroundPosition: "50% 50%",
            }}
          />
          <span
            aria-hidden="true"
            className="wp-block-cover__background has-background-dim-30 has-background-dim has-contrast-background-color"
          />

          <div className="wp-block-cover__inner-container is-layout-flow">
            <div className="wp-block-group hero__inner">
              <p className="eyebrow eyebrow--gold wp-block-paragraph">
                ✦ LEGAL INFORMATION · FIRST EDITION 2026 ✦
              </p>
              <h1 className="hero__title wp-block-heading">
                Terms of Service &amp; <em>Booking Conditions</em>
              </h1>
              <p className="hero__subtitle wp-block-paragraph">
                Clear, transparent conditions designed to protect your investment and ensure group harmony for our shared journey across Morocco.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="max-w-[860px] mx-auto py-20 px-6 font-inter text-[#4A3B2C] leading-relaxed">
          <p className="text-xs uppercase tracking-widest text-[#7A6952] mb-8 font-semibold">
            Last updated: October 2026 · First Edition 2026 · Brand: Mujeres de Arena
          </p>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              1. Purpose and Scope
            </h3>
            <p>
              These terms and conditions govern the reservation, participation, and operation of the travel retreat organized under the brand <strong>Mujeres de Arena</strong>, taking place in Morocco from September 23 to September 29, 2026. By submitting a reservation deposit, the participant acknowledges and accepts these terms in full.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              2. Reservation, Price, and Payment Schedule
            </h3>
            <p className="mb-3">
              The total investment for the journey is <strong>800 €</strong> per participant. To guarantee exclusivity and close group cohesion, places are strictly limited to twelve (12) participants.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Booking Deposit:</strong> A non-refundable deposit of <strong>150 €</strong> is required upon booking to confirm your spot. This deposit covers upfront non-refundable reservations for private transport, boutique riads, and luxury camp allocations.
              </li>
              <li>
                <strong>Remaining Balance:</strong> The balance of <strong>650 €</strong> is due upon arrival in Morocco at the welcome meeting on Day 1.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              3. Cancellation and Refund Policy
            </h3>
            <p className="mb-3">
              Because boutique group retreats require fixed advance commitments with local hotels, transport providers, and guides, the initial 150 € booking deposit is non-refundable.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cancellations made more than 45 days prior to departure:</strong> The participant will not be liable for the remaining balance. The spot may be transferred to another eligible female traveler subject to organizer approval.
              </li>
              <li>
                <strong>Cancellations within 45 days of departure:</strong> The participant remains responsible for any non-recoverable operational costs incurred on her behalf.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              4. Travel Insurance and Health
            </h3>
            <p>
              Participants are required to obtain comprehensive travel, medical, and repatriation insurance valid in Morocco for the full duration of the retreat. Participants should inform organizers of any relevant allergies or medical considerations in advance.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              5. Respectful Sisterhood &amp; Community Harmony
            </h3>
            <p>
              Mujeres de Arena is founded on mutual respect, empathy, and positive group spirit. We celebrate cultural awareness, responsible travel in local Moroccan communities, and an open, caring atmosphere for every woman in our circle.
            </p>
          </section>
        </div>
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
