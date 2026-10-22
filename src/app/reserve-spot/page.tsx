"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function ReserveSpotPage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const [booked, setBooked] = useState(false);

  const isRtl = currentLocale === "ar";

  const content: Record<string, Record<Locale, string>> = {
    eyebrow: {
      en: "✦ SECURE YOUR PLACE · FIRST EDITION ✦",
      es: "✦ ASEGURA TU PLAZA · PRIMERA EDICIÓN ✦",
      fr: "✦ RÉSERVEZ VOTRE PLACE · PREMIÈRE ÉDITION ✦",
      de: "✦ SICHERE DIR DEINEN PLATZ · ERSTE EDITION ✦",
      it: "✦ ASSICURATI IL TUO POSTO · PRIMA EDIZIONE ✦",
      ar: "✦ احجزي مقعدكِ · النسخة الأولى ✦",
      pt: "✦ GARANTA SEU LUGAR · PRIMEIRA EDIÇÃO ✦",
      ru: "✦ ЗАБРОНИРУЙТЕ МЕСТО · ПЕРВЫЙ ВЫПУСК ✦"
    },
    titlePrefix: {
      en: "An Experience Reserved ",
      es: "Una Experiencia Reservada ",
      fr: "Une Expérience Réservée ",
      de: "Ein Erlebnis Reserviert ",
      it: "Un’Esperienza Riservata ",
      ar: "تجربة استثنائية مخصصة ",
      pt: "Uma Experiência Reservada ",
      ru: "Опыт, созданный "
    },
    titleEm: {
      en: "for 12 Women",
      es: "para 12 Mujeres",
      fr: "pour 12 Femmes",
      de: "für 12 Frauen",
      it: "a 12 Donne",
      ar: "لـ 12 امرأة فقط",
      pt: "para 12 Mulheres",
      ru: "для 12 Женщин"
    },
    subtitle: {
      en: "Total investment: 800 €. Deposit of 150 € secures your spot today. The remaining 650 € is paid upon arrival in Morocco.",
      es: "Inversión total: 800 €. La fianza de 150 € asegura tu plaza hoy. Los 650 € restantes se abonan a la llegada a Marruecos.",
      fr: "Investissement total : 800 €. Un acompte de 150 € sécurise votre place. Le solde de 650 € se règle à l'arrivée au Maroc.",
      de: "Gesamtpreis: 800 €. Mit einer Anzahlung von 150 € sicherst du dir deinen Platz. Die restlichen 650 € zahlst du bei Ankunft in Marokko.",
      it: "Investimento totale: 800 €. Un acconto di 150 € assicura il tuo posto. Il saldo di 650 € si versa all’arrivo in Marocco.",
      ar: "قيمة الاستثمار الكامل: 800 يورو. دفعة حجز مبدئية بقيمة 150 يورو تضمن مقعدك اليوم. ويتم سداد المبلغ المتبقي (650 يورو) عند الوصول إلى المغرب.",
      pt: "Investimento total: 800 €. Sinal de 150 € garante sua vaga. Os restantes 650 € são pagos na chegada ao Marrocos.",
      ru: "Полная стоимость: 800 €. Депозит 150 € фиксирует ваше место сегодня. Остаток 650 € оплачивается по прибытии в Марокко."
    }
  };

  const t = (key: string) => content[key]?.[currentLocale] || content[key]?.en || "";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4EA] text-[#1B1108] selection:bg-[#8B4513] selection:text-white" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar currentLocale={currentLocale} onLocaleChange={setCurrentLocale} />

      <main className="flex-1">
        {/* Subpage Hero */}
        <div className="wp-block-cover alignfull mda-subpage-hero has-parallax relative">
          <div
            className="wp-block-cover__image-background has-parallax"
            style={{
              backgroundImage: "url('/images/sahara-dunes.jpg')",
              backgroundPosition: "50% 50%",
            }}
          />
          <span
            aria-hidden="true"
            className="wp-block-cover__background has-background-dim-0 has-background-dim"
          />

          <div className="wp-block-cover__inner-container is-layout-flow">
            <div className="wp-block-group hero__inner">
              <p className="eyebrow eyebrow--gold wp-block-paragraph">
                {t("eyebrow")}
              </p>
              <h1 className="hero__title wp-block-heading">
                {t("titlePrefix")}
                <em>{t("titleEm")}</em>
              </h1>
              <p className="hero__subtitle wp-block-paragraph">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Ticket & Booking Form */}
        <div className="max-w-[1160px] mx-auto py-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Journey Ticket */}
            <div className="lg:col-span-5">
              <div className="ticket bg-[#1B1108] text-[#FAF4EA] rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#D4A85F]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A85F]/10 rounded-full blur-2xl pointer-events-none" />

                <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#D4A85F] font-semibold mb-3">
                  Official Journey Ticket
                </p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-playfair text-5xl sm:text-6xl font-bold text-[#FAF4EA]">
                    800
                  </span>
                  <span className="font-playfair text-2xl text-[#D4A85F]">€</span>
                </div>

                <p className="font-inter text-sm text-[#FAF4EA]/80 mb-6">
                  7 days · 12 women · 1 shared journey across Morocco.
                </p>

                <hr className="border-white/15 my-6" />

                <div className="flex flex-col gap-4 text-sm font-inter">
                  <div>
                    <span className="font-semibold text-[#D4A85F] block">
                      Booking Deposit: 150 €
                    </span>
                    <span className="text-white/70 text-xs">
                      Confirms your spot immediately. Non-refundable.
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#D4A85F] block">
                      Remaining Balance: 650 €
                    </span>
                    <span className="text-white/70 text-xs">
                      Payable in cash or card upon arrival on Day 1.
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs font-inter text-white/60 space-y-1">
                  <p>📅 <strong>Dates:</strong> 23 — 29 September 2026</p>
                  <p>📍 <strong>Route:</strong> Marrakech → Atlas → Sahara Dunes</p>
                  <p>👥 <strong>Capacity:</strong> Exclusively limited to 12 women</p>
                </div>
              </div>
            </div>

            {/* Right: Booking Reservation Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-xl">
              <p className="eyebrow eyebrow--terra text-xs uppercase tracking-[0.2em] text-[#8B4513] font-semibold mb-2">
                Direct Reservation
              </p>
              <h2 className="font-playfair text-3xl font-bold mb-3 text-[#1B1108]">
                Confirm Your Spot
              </h2>
              <p className="font-inter text-sm text-[#7A6952] mb-8 leading-relaxed">
                Fill in your details to begin the registration process. Vanessa &amp; Ana will review your application and send private payment instructions for the 150 € deposit.
              </p>

              {booked ? (
                <div className="p-8 bg-[#FAF4EA] rounded-2xl text-center border border-[#D4A85F]">
                  <p className="font-playfair text-2xl font-bold text-[#8B4513] mb-3">
                    Application Received!
                  </p>
                  <p className="font-inter text-sm text-[#4A3B2C] mb-6">
                    We will contact you within 24 hours with booking details and your welcome pack.
                  </p>
                  <a
                    href="https://wa.me/34600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8B4513] text-[#FAF4EA] font-inter text-xs font-semibold uppercase tracking-wider hover:bg-[#6e370f] transition-all"
                  >
                    Chat on WhatsApp Directly →
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBooked(true);
                  }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Garcia"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Spain, France, UK, Germany, etc."
                      className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#8B4513] text-[#FAF4EA] font-inter text-sm font-semibold tracking-wider uppercase hover:bg-[#6e370f] transition-all shadow-lg shadow-[#8B4513]/25 mt-3"
                  >
                    Request Reservation (150 € Deposit) →
                  </button>

                  <p className="text-center text-xs font-inter text-[#7A6952] mt-1">
                    No immediate charge. We will send secure payment instructions after confirming availability.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
