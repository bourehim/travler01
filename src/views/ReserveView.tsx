"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function ReserveView({ locale = "en" }: { locale?: Locale }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
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
      ru: "✦ ЗАБРОНИРУЙТЕ МЕСТО · ПЕРВЫЙ ВЫПУСК ✦",
    },
    titlePrefix: {
      en: "An Experience Reserved ",
      es: "Una Experiencia Reservada ",
      fr: "Une Expérience Réservée ",
      de: "Ein Erlebnis Reserviert ",
      it: "Un’Esperienza Riservata ",
      ar: "تجربة استثنائية مخصصة ",
      pt: "Uma Experiência Reservada ",
      ru: "Опыт, созданный ",
    },
    titleEm: {
      en: "for 12 Women",
      es: "para 12 Mujeres",
      fr: "pour 12 Femmes",
      de: "für 12 Frauen",
      it: "a 12 Donne",
      ar: "لـ 12 امرأة فقط",
      pt: "para 12 Mulheres",
      ru: "для 12 Женщин",
    },
    subtitle: {
      en: "Total investment: 800 €. Deposit of 150 € secures your spot today. The remaining 650 € is paid upon arrival in Morocco.",
      es: "Inversión total: 800 €. La fianza de 150 € asegura tu plaza hoy. Los 650 € restantes se abonan a la llegada a Marruecos.",
      fr: "Investissement total : 800 €. Un acompte de 150 € sécurise votre place. Le solde de 650 € se règle à l'arrivée au Maroc.",
      de: "Gesamtpreis: 800 €. Mit einer Anzahlung von 150 € sicherst du dir deinen Platz. Die restlichen 650 € zahlst du bei Ankunft in Marokko.",
      it: "Investimento totale: 800 €. Un acconto di 150 € assicura il tuo posto. Il saldo di 650 € si versa all’arrivo in Marocco.",
      ar: "قيمة الاستثمار الكامل: 800 يورو. دفعة حجز مبدئية بقيمة 150 يورو تضمن مقعدك اليوم. ويتم سداد المبلغ المتبقي (650 يورو) عند الوصول إلى المغرب.",
      pt: "Investimento total: 800 €. Sinal de 150 € garante sua vaga. Os restantes 650 € são pagos na chegada ao Marrocos.",
      ru: "Полная стоимость: 800 €. Депозит 150 € фиксирует ваше место сегодня. Остаток 650 € оплачивается по прибытии в Марокко.",
    },
    ticketLabel: {
      en: "Official Journey Ticket",
      es: "Billete Oficial de Travesía",
      fr: "Billet Officiel du Voyage",
      de: "Offizielles Reiseticket",
      it: "Biglietto Ufficiale di Viaggio",
      ar: "تذكرة الرحلة الرسمية",
      pt: "Bilhete Oficial da Viagem",
      ru: "Официальный Билет Путешествия",
    },
    ticketSummary: {
      en: "7 days · 12 women · 1 shared journey across Morocco.",
      es: "7 días · 12 mujeres · 1 viaje compartido por Marruecos.",
      fr: "7 jours · 12 femmes · 1 aventure partagée au Maroc.",
      de: "7 Tage · 12 Frauen · 1 gemeinsame Reise durch Marokko.",
      it: "7 giorni · 12 donne · 1 viaggio condiviso in Marocco.",
      ar: "7 أيام · 12 امرأة · رحلة واحدة مشتركة عبر المغرب.",
      pt: "7 dias · 12 mulheres · 1 jornada partilhada por Marrocos.",
      ru: "7 дней · 12 женщин · 1 путешествие по Марокко.",
    },
    depositTitle: {
      en: "Booking Deposit: 150 €",
      es: "Fianza de Reserva: 150 €",
      fr: "Acompte de Réservation : 150 €",
      de: "Anzahlung: 150 €",
      it: "Acconto di Prenotazione: 150 €",
      ar: "دفعة تأكيد الحجز: 150 €",
      pt: "Sinal de Reserva: 150 €",
      ru: "Депозит Бронирования: 150 €",
    },
    depositNote: {
      en: "Confirms your spot immediately. Non-refundable.",
      es: "Asegura tu plaza de inmediato. No reembolsable.",
      fr: "Confirme votre place immédiatement. Non remboursable.",
      de: "Sichert deinen Platz sofort. Nicht erstattungsfähig.",
      it: "Conferma subito il tuo posto. Non rimborsabile.",
      ar: "يؤكد مقعدكِ فورًا. غير قابل للاسترداد.",
      pt: "Garante a sua vaga de imediato. Não reembolsável.",
      ru: "Мгновенно подтверждает место. Не возвращается.",
    },
    balanceTitle: {
      en: "Remaining Balance: 650 €",
      es: "Saldo Restante: 650 €",
      fr: "Solde Restant : 650 €",
      de: "Restbetrag: 650 €",
      it: "Saldo Rimanente: 650 €",
      ar: "المبلغ المتبقي: 650 €",
      pt: "Saldo Restante: 650 €",
      ru: "Остаток к Оплате: 650 €",
    },
    balanceNote: {
      en: "Payable in cash or card upon arrival on Day 1.",
      es: "Abonable en efectivo o tarjeta a la llegada el Día 1.",
      fr: "Payable en espèces ou carte à l'arrivée le Jour 1.",
      de: "Zahlbar in bar oder mit Karte bei Ankunft am Tag 1.",
      it: "Pagabile in contanti o carta all'arrivo il Giorno 1.",
      ar: "يُدفع نقدًا أو بالبطاقة عند الوصول في اليوم الأول.",
      pt: "Pago em dinheiro ou cartão à chegada no Dia 1.",
      ru: "Оплачивается наличными или картой в День 1.",
    },
    formTitle: {
      en: "Confirm Your Spot",
      es: "Confirma tu Plaza",
      fr: "Confirmez Votre Place",
      de: "Bestätige deinen Platz",
      it: "Conferma il tuo Posto",
      ar: "أكّدي حجز مقعدكِ",
      pt: "Confirme o seu Lugar",
      ru: "Подтвердите ваше место",
    },
    formSubtitle: {
      en: "Fill in your details to begin registration. Vanessa & Ana will review and send private payment instructions for the 150 € deposit.",
      es: "Completa tus datos para iniciar el registro. Vanessa y Ana te enviarán instrucciones seguras para abonar los 150 € de señal.",
      fr: "Remplissez vos coordonnées pour débuter l'inscription. Vanessa & Ana vous transmettront le lien sécurisé pour l'acompte de 150 €.",
      de: "Trage deine Daten ein. Vanessa & Ana senden dir sichere Zahlungsanweisungen für die 150 € Anzahlung.",
      it: "Inserisci i tuoi dati. Vanessa & Ana ti invieranno le istruzioni sicure per il versamento dei 150 € di acconto.",
      ar: "أدخلي بياناتكِ لبدء التسجيل. سترسل لكِ فانيسا وآنا تعليمات الدفع الآمنة لدفعة الحجز (150 يورو).",
      pt: "Preencha os seus dados. Vanessa & Ana enviarão as instruções para o sinal de 150 €.",
      ru: "Заполните данные для регистрации. Ванесса и Ана вышлют инструкции по внесению депозита 150 €.",
    },
    submitBtn: {
      en: "Request Reservation (150 € Deposit) →",
      es: "Solicitar Reserva (Fianza 150 €) →",
      fr: "Demander la Réservation (Acompte 150 €) →",
      de: "Reservierung anfordern (150 € Anzahlung) →",
      it: "Richiedi Prenotazione (Acconto 150 €) →",
      ar: "طلب الحجز (دفعة 150 يورو) ←",
      pt: "Solicitar Reserva (Sinal 150 €) →",
      ru: "Запросить Бронирование (Депозит 150 €) →",
    },
    thankYouTitle: {
      en: "Application Received!",
      es: "¡Solicitud Recibida!",
      fr: "Demande Bien Reçue !",
      de: "Anfrage Erhalten!",
      it: "Richiesta Ricevuta!",
      ar: "تم استلام طلبكِ بنجاح!",
      pt: "Pedido Recebido!",
      ru: "Заявка Принята!",
    },
    thankYouText: {
      en: "We will contact you within 24 hours with booking details and your welcome pack.",
      es: "Nos pondremos en contacto contigo en 24 horas con los detalles y tu dossier de bienvenida.",
      fr: "Nous vous contacterons sous 24h avec les informations détaillées et votre pack de bienvenue.",
      de: "Wir melden uns innerhalb von 24 Stunden mit allen Details und deiner Willkommensmappe.",
      it: "Ti contatteremo entro 24 ore con tutti i dettagli e la guida di benvenuto.",
      ar: "سنتواصل معكِ خلال 24 ساعة بتفاصيل الحجز وحقيبة الترحيب.",
      pt: "Entraremos em contacto consigo em 24h com os detalhes e o guia de boas-vindas.",
      ru: "Мы свяжемся с вами в течение 24 часов с деталями и приветственным буклетом.",
    },
  };

  const t = (key: string) => content[key]?.[currentLocale] || content[key]?.en || "";

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF4EA] text-[#1B1108] selection:bg-[#8B4513] selection:text-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
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
                  {t("ticketLabel")}
                </p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-playfair text-5xl sm:text-6xl font-bold text-[#FAF4EA]">
                    800
                  </span>
                  <span className="font-playfair text-2xl text-[#D4A85F]">€</span>
                </div>

                <p className="font-inter text-sm text-[#FAF4EA]/80 mb-6">
                  {t("ticketSummary")}
                </p>

                <hr className="border-white/15 my-6" />

                <div className="flex flex-col gap-4 text-sm font-inter">
                  <div>
                    <span className="font-semibold text-[#D4A85F] block">
                      {t("depositTitle")}
                    </span>
                    <span className="text-white/70 text-xs">
                      {t("depositNote")}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#D4A85F] block">
                      {t("balanceTitle")}
                    </span>
                    <span className="text-white/70 text-xs">
                      {t("balanceNote")}
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
                {t("formTitle")}
              </h2>
              <p className="font-inter text-sm text-[#7A6952] mb-8 leading-relaxed">
                {t("formSubtitle")}
              </p>

              {booked ? (
                <div className="p-8 bg-[#FAF4EA] rounded-2xl text-center border border-[#D4A85F]">
                  <p className="font-playfair text-2xl font-bold text-[#8B4513] mb-3">
                    {t("thankYouTitle")}
                  </p>
                  <p className="font-inter text-sm text-[#4A3B2C] mb-6">
                    {t("thankYouText")}
                  </p>
                  <a
                    href="https://wa.me/34600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8B4513] text-[#FAF4EA] font-inter text-xs font-semibold uppercase tracking-wider hover:bg-[#6e370f] transition-all"
                  >
                    Chat on WhatsApp Directly {isRtl ? "←" : "→"}
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
                    {t("submitBtn")}
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
