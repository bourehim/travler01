"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function ContactView({ locale = "en" }: { locale?: Locale }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [submitted, setSubmitted] = useState(false);

  const isRtl = currentLocale === "ar";

  const content: Record<string, Record<Locale, string>> = {
    eyebrow: {
      en: "✦ DIRECT CONNECTION ✦",
      es: "✦ CONEXIÓN DIRECTA ✦",
      fr: "✦ CONTACT DIRECT ✦",
      de: "✦ DIREKTER KONTAKT ✦",
      it: "✦ CONTATTO DIRETTO ✦",
      ar: "✦ تواصل مباشر ✦",
      pt: "✦ CONTATO DIRETO ✦",
      ru: "✦ ПРЯМАЯ СВЯЗЬ ✦",
    },
    titlePrefix: {
      en: "We Are Here ",
      es: "Estamos Aquí ",
      fr: "Nous Sommes Là ",
      de: "Wir Sind Hier ",
      it: "Siamo Qui ",
      ar: "نحن هنا ",
      pt: "Estamos Aqui ",
      ru: "Мы Здесь ",
    },
    titleEm: {
      en: "For You",
      es: "Para Ti",
      fr: "Pour Vous",
      de: "Für Dich",
      it: "Per Te",
      ar: "من أجلكِ",
      pt: "Para Você",
      ru: "Для Вас",
    },
    subtitle: {
      en: "Have questions before booking? Want to know more about the itinerary, rooming, or flight arrivals? Reach out to us directly.",
      es: "¿Tienes dudas antes de reservar? ¿Quieres saber más sobre el itinerario, las habitaciones o los vuelos? Escríbenos directamente.",
      fr: "Des questions avant de réserver ? Envie d'en savoir plus sur le parcours, les hébergements ou les vols ? Contactez-nous directement.",
      de: "Hast du Fragen vor der Buchung zu Ablauf, Zimmern oder Flügen? Schreib uns jederzeit gerne.",
      it: "Hai domande prima di prenotare? Vuoi saperne di più su itinerario, alloggi o voli? Scrivici con fiducia.",
      ar: "هل لديكِ استفسارات قبل الحجز؟ هل ترغبين في معرفة تفاصيل أكثر عن مسار الرحلة، الإقامة أو مواعيد رحلات الطيران؟ تواصلي معنا بكل سرور.",
      pt: "Tem dúvidas antes de reservar? Quer saber mais sobre o itinerário ou voos? Fale diretamente connosco.",
      ru: "Есть вопросы перед бронированием? Хотите узнать больше о маршруте, проживании или рейсах? Напишите нам.",
    },
    emailTitle: {
      en: "Email Us",
      es: "Escríbenos por Email",
      fr: "Par Email",
      de: "Per E-Mail",
      it: "Via Email",
      ar: "عبر البريد الإلكتروني",
      pt: "Por Email",
      ru: "По Электронной Почте",
    },
    emailDesc: {
      en: "We answer every inquiry personally within 24 hours.",
      es: "Respondemos a cada consulta personalmente en 24 horas.",
      fr: "Nous répondons personnellement à chaque message sous 24h.",
      de: "Wir antworten persönlich innerhalb von 24 Stunden.",
      it: "Rispondiamo personalmente a ogni richiesta entro 24 ore.",
      ar: "نجيب على كل رسالة شخصيًا خلال 24 ساعة.",
      pt: "Respondemos a todas as mensagens pessoalmente em 24h.",
      ru: "Лично отвечаем на каждое сообщение в течение 24 часов.",
    },
    whatsappTitle: {
      en: "WhatsApp Chat",
      es: "Chat de WhatsApp",
      fr: "WhatsApp",
      de: "WhatsApp Chat",
      it: "Chat WhatsApp",
      ar: "محادثة واتساب",
      pt: "WhatsApp",
      ru: "Чат WhatsApp",
    },
    whatsappDesc: {
      en: "Instant answers regarding spot availability, dates, and payments.",
      es: "Respuestas directas sobre disponibilidad, fechas y pagos.",
      fr: "Réponses directes sur les disponibilités, dates et règlements.",
      de: "Direkte Antworten zu Verfügbarkeit, Terminen und Zahlungen.",
      it: "Risposte dirette su disponibilità, date e pagamenti.",
      ar: "إجابات مباشرة حول توفر المقاعد، التواريخ وتفاصيل الدفع.",
      pt: "Respostas imediatas sobre vagas, datas e pagamentos.",
      ru: "Быстрые ответы о наличии мест, датах и оплате.",
    },
    formTitle: {
      en: "Send Us a Message",
      es: "Envíanos un Mensaje",
      fr: "Envoyez-nous un Message",
      de: "Schreib uns eine Nachricht",
      it: "Inviaci un Messaggio",
      ar: "أرسلي لنا رسالة",
      pt: "Envie-nos uma Mensagem",
      ru: "Отправьте нам сообщение",
    },
    formSubtitle: {
      en: "Leave your details below and Vanessa or Ana will reach out to you personally.",
      es: "Deja tus datos a continuación y Vanessa o Ana te contactarán personalmente.",
      fr: "Laissez vos coordonnées et Vanessa ou Ana vous contacteront personnellement.",
      de: "Hinterlasse deine Kontaktdaten und Vanessa oder Ana melden sich persönlich bei dir.",
      it: "Lascia i tuoi dati e Vanessa o Ana ti ricontatteranno personalmente.",
      ar: "اتركي بياناتكِ بالأسفل وستتواصل معكِ فانيسا أو آنا شخصيًا.",
      pt: "Deixe os seus dados abaixo e Vanessa ou Ana entrarão em contacto pessoalmente.",
      ru: "Оставьте свои контакты ниже, и Ванесса или Ана свяжутся с вами лично.",
    },
    nameLabel: {
      en: "Your Name",
      es: "Tu Nombre",
      fr: "Votre Nom",
      de: "Dein Name",
      it: "Il tuo Nome",
      ar: "اسمكِ الكريم",
      pt: "Seu Nome",
      ru: "Ваше Имя",
    },
    emailLabel: {
      en: "Your Email",
      es: "Tu Email",
      fr: "Votre Email",
      de: "Deine E-Mail",
      it: "La tua Email",
      ar: "بريدك الإلكتروني",
      pt: "Seu Email",
      ru: "Ваш Email",
    },
    messageLabel: {
      en: "Your Message / Question",
      es: "Tu Mensaje / Pregunta",
      fr: "Votre Message / Question",
      de: "Deine Nachricht / Frage",
      it: "Il tuo Messaggio / Domanda",
      ar: "رسالتكِ / استفساركِ",
      pt: "Sua Mensagem / Pergunta",
      ru: "Ваше Сообщение / Вопрос",
    },
    submitBtn: {
      en: "Send Message →",
      es: "Enviar Mensaje →",
      fr: "Envoyer le Message →",
      de: "Nachricht senden →",
      it: "Invia Messaggio →",
      ar: "إرسال الرسالة ←",
      pt: "Enviar Mensagem →",
      ru: "Отправить Сообщение →",
    },
    thankYouTitle: {
      en: "Thank You!",
      es: "¡Muchas Gracias!",
      fr: "Merci Beaucoup !",
      de: "Vielen Dank!",
      it: "Grazie Mille!",
      ar: "شكرًا جزيلاً لكِ!",
      pt: "Muito Obrigada!",
      ru: "Большое Спасибо!",
    },
    thankYouText: {
      en: "Your message has been received. We look forward to connecting with you.",
      es: "Hemos recibido tu mensaje. Nos pondremos en contacto contigo muy pronto.",
      fr: "Votre message a bien été reçu. Nous prendrons contact très vite.",
      de: "Deine Nachricht ist angekommen. Wir melden uns in Kürze bei dir.",
      it: "Abbiamo ricevuto il tuo messaggio. Ti ricontatteremo a brevissimo.",
      ar: "تم استلام رسالتكِ بنجاح. نتطلع بشوق للتواصل معكِ.",
      pt: "Recebemos a sua mensagem. Entraremos em contacto muito em breve.",
      ru: "Ваше сообщение получено. Мы свяжемся с вами в ближайшее время.",
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
              backgroundImage: "url('/images/pexels-francesco-ungaro-1600135.jpg')",
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

        {/* Contact Cards & Form */}
        <div className="max-w-[1160px] mx-auto py-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF4EA] flex items-center justify-center text-2xl mb-4 text-[#8B4513]">
                ✉️
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                {t("emailTitle")}
              </h3>
              <p className="font-inter text-sm text-[#4A3B2C] mb-4">
                {t("emailDesc")}
              </p>
              <a
                href="mailto:hola@mujeresdearena.com"
                className="font-inter text-sm font-semibold text-[#8B4513] hover:underline"
              >
                hola@mujeresdearena.com {isRtl ? "←" : "→"}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF4EA] flex items-center justify-center text-2xl mb-4 text-[#8B4513]">
                💬
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                {t("whatsappTitle")}
              </h3>
              <p className="font-inter text-sm text-[#4A3B2C] mb-4">
                {t("whatsappDesc")}
              </p>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm font-semibold text-[#8B4513] hover:underline"
              >
                WhatsApp {isRtl ? "←" : "→"}
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF4EA] flex items-center justify-center text-2xl mb-4 text-[#8B4513]">
                📸
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Instagram</h3>
              <p className="font-inter text-sm text-[#4A3B2C] mb-4">
                Behind-the-scenes stories, retreat visuals, and community moments.
              </p>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm font-semibold text-[#8B4513] hover:underline"
              >
                @mujeresdearena {isRtl ? "←" : "→"}
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] shadow-lg max-w-2xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-2">
              {t("formTitle")}
            </h2>
            <p className="font-inter text-sm text-center text-[#7A6952] mb-8">
              {t("formSubtitle")}
            </p>

            {submitted ? (
              <div className="p-6 bg-[#FAF4EA] rounded-xl text-center border border-[#D4A85F]">
                <p className="font-playfair text-xl font-bold text-[#8B4513] mb-2">
                  {t("thankYouTitle")}
                </p>
                <p className="font-inter text-sm text-[#4A3B2C]">
                  {t("thankYouText")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5"
              >
                <div>
                  <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Elena Rossi"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                  />
                </div>
                <div>
                  <label className="block font-inter text-xs font-semibold uppercase tracking-wider text-[#7A6952] mb-1.5">
                    {t("emailLabel")}
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
                    {t("messageLabel")}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D5C9B3] bg-[#FAF4EA]/40 font-inter text-sm focus:outline-none focus:border-[#8B4513]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#8B4513] text-[#FAF4EA] font-inter text-sm font-semibold tracking-wider uppercase hover:bg-[#6e370f] transition-all shadow-lg shadow-[#8B4513]/25 mt-2"
                >
                  {t("submitBtn")}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
