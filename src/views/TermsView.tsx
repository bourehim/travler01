"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function TermsView({ locale = "en" }: { locale?: Locale }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const isRtl = currentLocale === "ar";

  const content: Record<
    Locale,
    {
      eyebrow: string;
      title: string;
      titleEm: string;
      subtitle: string;
      lastUpdated: string;
      s1Title: string;
      s1Text: string;
      s2Title: string;
      s2Text: string;
      s2Deposit: string;
      s2Balance: string;
      s3Title: string;
      s3Text: string;
      s3C1: string;
      s3C2: string;
      s4Title: string;
      s4Text: string;
      s5Title: string;
      s5Text: string;
    }
  > = {
    en: {
      eyebrow: "✦ LEGAL INFORMATION · FIRST EDITION 2026 ✦",
      title: "Terms of Service & ",
      titleEm: "Booking Conditions",
      subtitle:
        "Clear, transparent conditions designed to protect your investment and ensure group harmony for our shared journey across Morocco.",
      lastUpdated:
        "Last updated: October 2026 · First Edition 2026 · Brand: Mujeres de Arena",
      s1Title: "1. Purpose and Scope",
      s1Text:
        "These terms and conditions govern the reservation, participation, and operation of the travel retreat organized under the brand Mujeres de Arena, taking place in Morocco from September 23 to September 29, 2026. By submitting a reservation deposit, the participant acknowledges and accepts these terms in full.",
      s2Title: "2. Reservation, Price, and Payment Schedule",
      s2Text:
        "The total investment for the journey is 800 € per participant. To guarantee exclusivity and close group cohesion, places are strictly limited to twelve (12) participants.",
      s2Deposit:
        "Booking Deposit: A non-refundable deposit of 150 € is required upon booking to confirm your spot. This deposit covers upfront non-refundable reservations for private transport, boutique riads, and luxury camp allocations.",
      s2Balance:
        "Remaining Balance: The balance of 650 € is due upon arrival in Morocco at the welcome meeting on Day 1.",
      s3Title: "3. Cancellation and Refund Policy",
      s3Text:
        "Because boutique group retreats require fixed advance commitments with local hotels, transport providers, and guides, the initial 150 € booking deposit is non-refundable.",
      s3C1:
        "Cancellations made more than 45 days prior to departure: The participant will not be liable for the remaining balance. The spot may be transferred to another eligible female traveler subject to organizer approval.",
      s3C2:
        "Cancellations within 45 days of departure: The participant remains responsible for any non-recoverable operational costs incurred on her behalf.",
      s4Title: "4. Travel Insurance and Health",
      s4Text:
        "Participants are required to obtain comprehensive travel, medical, and repatriation insurance valid in Morocco for the full duration of the retreat. Participants should inform organizers of any relevant allergies or medical considerations in advance.",
      s5Title: "5. Respectful Sisterhood & Community Harmony",
      s5Text:
        "Mujeres de Arena is founded on mutual respect, empathy, and positive group spirit. We celebrate cultural awareness, responsible travel in local Moroccan communities, and an open, caring atmosphere for every woman in our circle.",
    },
    es: {
      eyebrow: "✦ INFORMACIÓN LEGAL · PRIMERA EDICIÓN 2026 ✦",
      title: "Términos del Servicio y ",
      titleEm: "Condiciones de Reserva",
      subtitle:
        "Condiciones claras y transparentes para proteger tu inversión y garantizar la armonía en nuestra travesía compartida por Marruecos.",
      lastUpdated:
        "Última actualización: Octubre 2026 · Primera Edición 2026 · Marca: Mujeres de Arena",
      s1Title: "1. Objeto y Ámbito",
      s1Text:
        "Estas condiciones regulan la reserva, participación y desarrollo del viaje organizado bajo la marca Mujeres de Arena, en Marruecos del 23 al 29 de septiembre de 2026. Al formalizar el depósito de reserva, la participante acepta plenamente estos términos.",
      s2Title: "2. Reserva, Precio y Calendario de Pagos",
      s2Text:
        "La inversión total del viaje es de 800 € por participante. Para garantizar la exclusividad y la cohesión del grupo, las plazas están estrictamente limitadas a doce (12) participantes.",
      s2Deposit:
        "Fianza de Reserva: Depósito no reembolsable de 150 € al reservar para confirmar tu plaza. Cubre reservas anticipadas de transporte privado y alojamientos boutique.",
      s2Balance:
        "Saldo Restante: Los 650 € restantes se abonan a la llegada a Marruecos en la bienvenida del Día 1.",
      s3Title: "3. Política de Cancelación y Reembolso",
      s3Text:
        "Dado que una expedición boutique exige compromisos fijos con proveedores y alojamientos locales, la señal inicial de 150 € no es reembolsable.",
      s3C1:
        "Cancelaciones con más de 45 días de antelación: No se exigirá el pago del saldo restante. La plaza podrá transferirse a otra viajera con previa aprobación.",
      s3C2:
        "Cancelaciones con menos de 45 días de antelación: La participante responde de los gastos operativos no recuperables ya devengados.",
      s4Title: "4. Seguro de Viaje y Salud",
      s4Text:
        "Es obligatorio disponer de seguro de asistencia médica y repatriación en viaje válido en Marruecos. Se debe notificar cualquier necesidad médica o alergia previa al viaje.",
      s5Title: "5. Hermandad, Respeto y Convivencia",
      s5Text:
        "Mujeres de Arena se fundamenta en el respeto mutuo, la empatía y la buena convivencia. Fomentamos el turismo responsable y una atmósfera cálida y enriquecedora entre mujeres.",
    },
    fr: {
      eyebrow: "✦ INFORMATIONS LÉGALES · PREMIÈRE ÉDITION 2026 ✦",
      title: "Conditions Générales & ",
      titleEm: "Modalités de Réservation",
      subtitle:
        "Conditions claires et transparentes pour protéger votre engagement et assurer une harmonie parfaite lors de notre voyage au Maroc.",
      lastUpdated:
        "Dernière mise à jour : Octobre 2026 · Première Édition 2026 · Marque : Mujeres de Arena",
      s1Title: "1. Objet et Portée",
      s1Text:
        "Les présentes conditions régissent la réservation, l'inscription et le déroulement du voyage Mujeres de Arena, du 23 au 29 septembre 2026 au Maroc. Le versement de l'acompte implique l'acceptation intégrale de ces conditions.",
      s2Title: "2. Réservation, Tarifs et Paiement",
      s2Text:
        "L'investissement global est de 800 € par participante. L'effectif est strictement limité à douze (12) participantes afin de préserver l'intimité du groupe.",
      s2Deposit:
        "Acompte de Réservation : 150 € non remboursables pour garantir fermement votre place et couvrir les réservations hôtelières et transports privés.",
      s2Balance:
        "Solde Restant : 650 € réglés à l'arrivée au Maroc lors de l'accueil le Jour 1.",
      s3Title: "3. Annulation et Remboursement",
      s3Text:
        "Les engagements fermes auprès des prestataires locaux rendent l'acompte initial de 150 € non remboursable.",
      s3C1:
        "Annulation plus de 45 jours avant le départ : Le solde n'est pas dû. Possibilité de céder sa place à une autre participante sous réserve d'accord préalable.",
      s3C2:
        "Annulation moins de 45 jours avant le départ : Frais réels non récupérables à la charge de la participante.",
      s4Title: "4. Assurance Voyage et Santé",
      s4Text:
        "Une assurance voyage et rapatriement valide au Maroc est obligatoire pour toute la durée du séjour.",
      s5Title: "5. Esprit de Sororité et Convivialité",
      s5Text:
        "Mujeres de Arena repose sur la bienveillance, le respect mutuel et la sensibilité culturelle auprès des populations locales.",
    },
    de: {
      eyebrow: "✦ RECHTLICHE HINWEISE · ERSTE EDITION 2026 ✦",
      title: "Allgemeine Geschäftsbedingungen & ",
      titleEm: "Buchungsbedingungen",
      subtitle:
        "Transparente und klare Regelungen zum Schutz deiner Buchung und für ein harmonisches Gruppenerlebnis in Marokko.",
      lastUpdated:
        "Zuletzt aktualisiert: Oktober 2026 · Erste Ausgabe 2026 · Marke: Mujeres de Arena",
      s1Title: "1. Gegenstand und Geltungsbereich",
      s1Text:
        "Diese Bedingungen regeln die Buchung und Teilnahme an der Reise Mujeres de Arena in Marokko (23. — 29. September 2026). Mit der Anzahlung werden die Bedingungen verbindlich anerkannt.",
      s2Title: "2. Buchung, Preis und Zahlungsmodalitäten",
      s2Text:
        "Der Gesamtpreis beträgt 800 € pro Teilnehmerin. Die Gruppengröße ist auf exakt 12 Frauen limitiert.",
      s2Deposit:
        "Anzahlung: 150 € nicht rückzahlbar zur Platzsicherung und Vorabreservierung von Riads und Transport.",
      s2Balance:
        "Restzahlung: 650 € bei Ankunft in Marokko am Tag 1.",
      s3Title: "3. Stornierungsbedingungen",
      s3Text:
        "Aufgrund fester Vorabbuchungen bei Partnern ist die Anzahlung von 150 € nicht erstattungsfähig.",
      s3C1:
        "Stornierung mehr als 45 Tage vor Reisebeginn: Kein Restbetrag fällig. Weitergabe des Platzes nach Absprache möglich.",
      s3C2:
        "Stornierung innerhalb von 45 Tagen: Nicht erstattbare Kosten werden einbehalten.",
      s4Title: "4. Reiseversicherung & Gesundheit",
      s4Text:
        "Eine Auslandskranken- und Rücktransportversicherung für Marokko ist obligatorisch.",
      s5Title: "5. Respekt und Gemeinschaft",
      s5Text:
        "Gegenseitiger Respekt, Offenheit und Wertschätzung prägen unsere gemeinsame Auszeit.",
    },
    it: {
      eyebrow: "✦ INFORMAZIONI LEGALI · PRIMA EDIZIONE 2026 ✦",
      title: "Termini di Servizio & ",
      titleEm: "Condizioni di Prenotazione",
      subtitle:
        "Condizioni chiare e trasparenti a tutela del tuo viaggio e dell'armonia del gruppo in Marocco.",
      lastUpdated:
        "Ultimo aggiornamento: Ottobre 2026 · Prima Edizione 2026 · Brand: Mujeres de Arena",
      s1Title: "1. Oggetto e Ambito",
      s1Text:
        "I presenti termini regolano la prenotazione e partecipazione al viaggio Mujeres de Arena in Marocco dal 23 al 29 settembre 2026.",
      s2Title: "2. Prenotazione, Prezzo e Pagamenti",
      s2Text:
        "La quota complessiva è di 800 € a partecipante. I posti sono rigorosamente limitati a 12 donne.",
      s2Deposit:
        "Acconto: 150 € non rimborsabili alla prenotazione per confermare il posto.",
      s2Balance:
        "Saldo: 650 € all'arrivo in Marocco il Giorno 1.",
      s3Title: "3. Politica di Cancellazione",
      s3Text:
        "L'acconto di 150 € non è rimborsabile per impegni operativi vincolanti con le strutture locali.",
      s3C1:
        "Oltre 45 giorni dalla partenza: Saldo non dovuto. Cessione del posto consentita previa approvazione.",
      s3C2:
        "Entro 45 giorni: Trattenuta delle spese non recuperabili già sostenute.",
      s4Title: "4. Assicurazione Sanitaria",
      s4Text:
        "È richiesta una polizza assicurativa medica e di rimpatrio valida per il Marocco.",
      s5Title: "5. Sorellanza e Rispetto",
      s5Text:
        "Condivisione, ascolto ed empatia sono al centro dell'esperienza Mujeres de Arena.",
    },
    pt: {
      eyebrow: "✦ INFORMAÇÕES LEGAIS · PRIMEIRA EDIÇÃO 2026 ✦",
      title: "Termos de Serviço & ",
      titleEm: "Condições de Reserva",
      subtitle:
        "Condições claras e transparentes desenhadas para salvaguardar a sua viagem e a harmonia do grupo por Marrocos.",
      lastUpdated:
        "Última atualização: Outubro 2026 · Primeira Edição 2026 · Marca: Mujeres de Arena",
      s1Title: "1. Objeto e Âmbito",
      s1Text:
        "Estes termos regulam a reserva e operação da viagem Mujeres de Arena em Marrocos de 23 a 29 de setembro de 2026.",
      s2Title: "2. Reserva, Preço e Pagamento",
      s2Text:
        "O valor global é de 800 € por participante. Vagas estritamente limitadas a 12 mulheres.",
      s2Deposit:
        "Sinal de Reserva: 150 € não reembolsáveis na confirmação da vaga.",
      s2Balance:
        "Valor Restante: 650 € pagos à chegada a Marrocos no Dia 1.",
      s3Title: "3. Cancelamentos",
      s3Text:
        "O sinal de 150 € é não reembolsável devido a compromissos fixos com parceiros locais.",
      s3C1:
        "Mais de 45 dias antes da partida: Isenção do valor restante. Possibilidade de transferência de vaga.",
      s3C2:
        "Menos de 45 dias: Responsabilidade pelos custos operacionais já assumidos.",
      s4Title: "4. Seguro de Viagem",
      s4Text:
        "É obrigatório dispor de seguro de viagem e saúde válido para Marrocos durante todo o período.",
      s5Title: "5. Convivência e Irmandade",
      s5Text:
        "Valorizamos a empatia, o respeito cultural e uma ligação autêntica entre todas as viajantes.",
    },
    ar: {
      eyebrow: "✦ معلومات قانونية · النسخة الأولى 2026 ✦",
      title: "شروط الخدمة و",
      titleEm: "سياسة الحجز",
      subtitle:
        "شروط واضحة وشفافة لحماية استثماركِ وضمان الانسجام التام في رحلتنا المشتركة عبر المغرب.",
      lastUpdated:
        "آخر تحديث: أكتوبر 2026 · النسخة الأولى 2026 · العلامة: Mujeres de Arena",
      s1Title: "1. الهدف والنطاق",
      s1Text:
        "تحدد هذه الشروط والأحكام آلية الحجز والمشاركة في رحلة Mujeres de Arena المقامة في المغرب من 23 إلى 29 سبتمبر 2026.",
      s2Title: "2. الحجز، السعر وجدول الدفع",
      s2Text:
        "قيمة الاستثمار الكامل 800 يورو للمشاركة. المقاعد محدودة بدقة لـ 12 امرأة لضمان الخصوصية والترابط الوثيق.",
      s2Deposit:
        "دفعة تأكيد الحجز: 150 يورو غير قابلة للاسترداد لتغطية الحجوزات المسبقة لوسائل النقل والرياض الفاخرة.",
      s2Balance:
        "المبلغ المتبقي: 650 يورو يُسدد عند الوصول إلى المغرب في لقاء الترحيب باليوم الأول.",
      s3Title: "3. سياسة الإلغاء والاسترداد",
      s3Text:
        "نظرًا للالتزامات المسبقة مع الفنادق ووسائل النقل، فإن دفعة الحجز (150 يورو) غير قابلة للاسترداد.",
      s3C1:
        "الإلغاء قبل أكثر من 45 يومًا من السفر: لا يُطالب بباقي المبلغ، مع إمكانية تحويل المقعد لمسافرة أخرى.",
      s3C2:
        "الإلغاء خلال 45 يومًا من السفر: تتحمل المشاركة التكاليف التشغيلية الفعلية غير القابلة للاسترداد.",
      s4Title: "4. التأمين الصحي وتأمين السفر",
      s4Text:
        "يُشترط الحصول على تأمين سفر وطبي شامل ساري المفعول في المغرب طوال فترة الرحلة.",
      s5Title: "5. روح الأخوة والانسجام المجتمعي",
      s5Text:
        "تقوم Mujeres de Arena على الاحترام المتبادل، التضامن الإنساني، وتقدير الثقافة والتراث المحلي المغربي.",
    },
    ru: {
      eyebrow: "✦ ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ · ПЕРВЫЙ ВЫПУСК 2026 ✦",
      title: "Условия Обслуживания и ",
      titleEm: "Правила Бронирования",
      subtitle:
        "Прозрачные условия для защиты вашей поездки и гармоничной атмосферы в нашем кругу по Марокко.",
      lastUpdated:
        "Последнее обновление: Октябрь 2026 · Первый Выпуск 2026 · Бренд: Mujeres de Arena",
      s1Title: "1. Цели и Сфера Действия",
      s1Text:
        "Данные условия регулируют бронирование и проведение ретрита Mujeres de Arena в Марокко с 23 по 29 сентября 2026 года.",
      s2Title: "2. Бронирование, Стоимость и Оплата",
      s2Text:
        "Полная стоимость — 800 € на участницу. Количество мест строго ограничено 12 женщинами.",
      s2Deposit:
        "Депозит: 150 € невозвратный аванс для подтверждения места и бронирования риадов и транспорта.",
      s2Balance:
        "Остаток: 650 € оплачивается по прибытии в Марокко в День 1.",
      s3Title: "3. Правила Отмены",
      s3Text:
        "Из-за фиксированных обязательств с отелями и водителями аванс 150 € не подлежит возврату.",
      s3C1:
        "Отмена более чем за 45 дней: Остаток не взимается. Возможна передача места другой участнице.",
      s3C2:
        "Отмена менее чем за 45 дней: Удерживаются фактически понесенные невозвратные расходы.",
      s4Title: "4. Медицинская Страховка",
      s4Text:
        "Наличие действующей туристической и медицинской страховки в Марокко обязательно.",
      s5Title: "5. Сестринство и Взаимоуважение",
      s5Text:
        "Mujeres de Arena основан на взаимной поддержке, бережном отношении и уважении к традициям Марокко.",
    },
  };

  const c = content[currentLocale] || content.en;

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
                {c.eyebrow}
              </p>
              <h1 className="hero__title wp-block-heading">
                {c.title}
                <em>{c.titleEm}</em>
              </h1>
              <p className="hero__subtitle wp-block-paragraph">
                {c.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="max-w-[860px] mx-auto py-20 px-6 font-inter text-[#4A3B2C] leading-relaxed">
          <p className="text-xs uppercase tracking-widest text-[#7A6952] mb-8 font-semibold">
            {c.lastUpdated}
          </p>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              {c.s1Title}
            </h3>
            <p>{c.s1Text}</p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              {c.s2Title}
            </h3>
            <p className="mb-3">{c.s2Text}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{c.s2Deposit}</li>
              <li>{c.s2Balance}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              {c.s3Title}
            </h3>
            <p className="mb-3">{c.s3Text}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{c.s3C1}</li>
              <li>{c.s3C2}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              {c.s4Title}
            </h3>
            <p>{c.s4Text}</p>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              {c.s5Title}
            </h3>
            <p>{c.s5Text}</p>
          </section>
        </div>
      </main>

      <Footer currentLocale={currentLocale} />
    </div>
  );
}
