"use client";

import React, { useState } from "react";
import { Check, X, Send, Sparkles, ShieldCheck } from "lucide-react";
import { Locale, translations } from "@/data/translations";

interface ReserveSectionProps {
  currentLocale: Locale;
}

export default function ReserveSection({ currentLocale }: ReserveSectionProps) {
  const t = translations[currentLocale];
  const isRTL = t.dir === "rtl";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="py-24 bg-[#FAF7F2] relative border-t border-[#E8E0D5]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C46849]/30 bg-[#C46849]/10 text-[#C46849] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>12 {currentLocale === "ar" ? "امرأة فقط" : "Plazas Exclusivas"}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#1D252C] font-bold mb-4">
            {t.reserve.heading}
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-5" />
          <p className="font-marcellus text-lg text-[#1D252C]/70">
            {t.reserve.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inclusions / Exclusions Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E0D5] shadow-lg">
            <h3 className="font-cinzel text-2xl font-bold text-[#1D252C] mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              <span>{t.reserve.includesTitle}</span>
            </h3>

            {/* Inclusions List */}
            <ul className="space-y-4 mb-8">
              {t.reserve.includes.map((inc: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C46849] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#1D252C]/80 leading-relaxed font-light">
                    {inc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#FAF7F2] pt-6">
              <h4 className="font-cinzel text-sm font-semibold text-[#1D252C]/70 uppercase tracking-wider mb-4">
                {t.reserve.excludesTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.reserve.excludes.map((exc: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1D252C]/60">
                    <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Reservation / Inquiry Form */}
          <div className="lg:col-span-5 bg-[#1D252C] p-8 sm:p-10 rounded-3xl border border-[#C5A059]/30 text-white shadow-2xl">
            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
              {currentLocale === "ar" ? "طلب الحجز والاستفسار" : "Solicitud de Reserva"}
            </h3>
            <p className="text-xs sm:text-sm text-[#E8E0D5]/70 mb-6 font-light">
              {currentLocale === "ar"
                ? "املئي البيانات وسنتواصل معك شخصياً لتأكيد التفاصيل وموعد الرحلة القادم."
                : "Déjanos tus datos y nos pondremos en contacto contigo personalmente para facilitarte el dossier completo."}
            </p>

            {submitted ? (
              <div className="bg-[#FAF7F2]/10 border border-[#C5A059]/40 rounded-2xl p-6 text-center animate-in fade-in">
                <Sparkles className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                <h4 className="font-cinzel text-lg font-bold text-white mb-2">
                  {currentLocale === "ar" ? "شكراً لكِ!" : "¡Gracias por escribirnos!"}
                </h4>
                <p className="text-xs text-[#FAF7F2]/80 leading-relaxed">
                  {currentLocale === "ar"
                    ? "تم استلام رسالتكِ بنجاح وسنتواصل معك عبر واتساب والبريد الإلكتروني قريباً جداً."
                    : "Hemos recibido tu solicitud. Vanessa o Ana te contactarán muy pronto con toda la información."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A059] mb-1.5 font-medium">
                    {currentLocale === "ar" ? "الاسم الكامل" : "Nombre y Apellidos"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder={currentLocale === "ar" ? "اسمكِ الكريم" : "Tu nombre completo"}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A059] mb-1.5 font-medium">
                    {currentLocale === "ar" ? "البريد الإلكتروني" : "Correo Electrónico"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder="ejemplo@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A059] mb-1.5 font-medium">
                    {currentLocale === "ar" ? "رقم الهاتف / واتساب" : "Teléfono / WhatsApp"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A059] mb-1.5 font-medium">
                    {currentLocale === "ar" ? "رسالتكِ أو استفساركِ" : "¿Alguna pregunta o mensaje especial?"}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    placeholder={currentLocale === "ar" ? "اكتبي رسالتكِ هنا..." : "Cuéntanos si tienes alguna duda..."}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#C46849] hover:bg-[#A85033] text-white text-xs font-semibold tracking-widest uppercase shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.reserve.cta}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
