"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function PrivacyPage() {
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
              backgroundImage: "url('/images/night-campfire.jpg')",
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
                ✦ DATA PROTECTION · PRIVACY POLICY ✦
              </p>
              <h1 className="hero__title wp-block-heading">
                Privacy <em>Policy</em>
              </h1>
              <p className="hero__subtitle wp-block-paragraph">
                How we treat and protect your personal data with absolute integrity, privacy, and full GDPR compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="max-w-[860px] mx-auto py-20 px-6 font-inter text-[#4A3B2C] leading-relaxed">
          <p className="text-xs uppercase tracking-widest text-[#7A6952] mb-8 font-semibold">
            Last updated: October 2026 · GDPR Compliance · Brand: Mujeres de Arena
          </p>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              1. Data Controller
            </h3>
            <p>
              The entity responsible for processing your personal data is <strong>Mujeres de Arena</strong>. For inquiries or data rights requests, please email us directly at <a href="mailto:hola@mujeresdearena.com" className="text-[#8B4513] font-semibold hover:underline">hola@mujeresdearena.com</a>.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              2. Information We Collect
            </h3>
            <p className="mb-3">
              We only collect information necessary to facilitate your travel booking, safety, and comfort:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact details:</strong> Full name, email address, phone number / WhatsApp, country of residence.
              </li>
              <li>
                <strong>Travel details:</strong> Flight arrival and departure times at Marrakech Menara Airport (RAK).
              </li>
              <li>
                <strong>Logistical &amp; Health details:</strong> Dietary restrictions, food allergies, room sharing preferences.
              </li>
              <li>
                <strong>Identification details:</strong> Passport number and expiry date, strictly as required by Moroccan hospitality regulations for hotel registration.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              3. Purpose of Processing
            </h3>
            <p>
              Your data is used solely to manage your participation in the trip, arrange airport transfers, coordinate room allocations in riads and camps, and maintain communication regarding travel preparation. We never sell, rent, or trade your personal data with third-party advertisers.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              4. Data Retention and Security
            </h3>
            <p>
              Your information is stored in encrypted, password-protected databases and retained only for as long as necessary to complete the organization of the retreat and satisfy legal obligations.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              5. Your Rights
            </h3>
            <p>
              Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, or request deletion of your personal data at any time. Simply contact us at <a href="mailto:hola@mujeresdearena.com" className="text-[#8B4513] font-semibold hover:underline">hola@mujeresdearena.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
