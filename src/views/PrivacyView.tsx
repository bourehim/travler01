"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/data/translations";

export default function PrivacyView({ locale = "en" }: { locale?: Locale }) {
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
      s2Intro: string;
      s2Items: string[];
      s3Title: string;
      s3Text: string;
      s4Title: string;
      s4Text: string;
      s5Title: string;
      s5Text: string;
    }
  > = {
    en: {
      eyebrow: "✦ DATA PROTECTION · PRIVACY POLICY ✦",
      title: "Privacy ",
      titleEm: "Policy",
      subtitle:
        "How we treat and protect your personal data with absolute integrity, privacy, and full GDPR compliance.",
      lastUpdated:
        "Last updated: October 2026 · GDPR Compliance · Brand: Mujeres de Arena",
      s1Title: "1. Data Controller",
      s1Text:
        "The entity responsible for processing your personal data is Mujeres de Arena. For inquiries or data rights requests, please email us directly at hola@mujeresdearena.com.",
      s2Title: "2. Information We Collect",
      s2Intro:
        "We only collect information necessary to facilitate your travel booking, safety, and comfort:",
      s2Items: [
        "Contact details: Full name, email address, phone number / WhatsApp, country of residence.",
        "Travel details: Flight arrival and departure times at Marrakech Menara Airport (RAK).",
        "Logistical & Health details: Dietary restrictions, food allergies, room sharing preferences.",
        "Identification details: Passport number and expiry date, strictly as required by Moroccan hospitality regulations for hotel registration.",
      ],
      s3Title: "3. Purpose of Processing",
      s3Text:
        "Your data is used solely to manage your participation in the trip, arrange airport transfers, coordinate room allocations in riads and camps, and maintain communication regarding travel preparation. We never sell, rent, or trade your personal data with third-party advertisers.",
      s4Title: "4. Data Retention and Security",
      s4Text:
        "Your information is stored in encrypted, password-protected databases and retained only for as long as necessary to complete the organization of the retreat and satisfy legal obligations.",
      s5Title: "5. Your Rights",
      s5Text:
        "Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, or request deletion of your personal data at any time. Simply contact us at hola@mujeresdearena.com.",
    },
    es: {
      eyebrow: "✦ PROTECCIÓN DE DATOS · POLÍTICA DE PRIVACIDAD ✦",
      title: "Política de ",
      titleEm: "Privacidad",
      subtitle:
        "Cómo protegemos y tratamos tus datos personales con absoluta transparencia, confidencialidad y cumplimiento del RGPD.",
      lastUpdated:
        "Última actualización: Octubre 2026 · Cumplimiento RGPD · Marca: Mujeres de Arena",
      s1Title: "1. Responsable del Tratamiento",
      s1Text:
        "El responsable del tratamiento de tus datos es Mujeres de Arena. Para cualquier consulta o ejercicio de derechos, contáctanos en hola@mujeresdearena.com.",
      s2Title: "2. Información que Recopilamos",
      s2Intro:
        "Solo solicitamos la información estrictamente necesaria para gestionar tu viaje de forma segura y personalizada:",
      s2Items: [
        "Datos de contacto: Nombre y apellidos, correo electrónico, teléfono/WhatsApp, país de residencia.",
        "Datos de viaje: Horarios y números de vuelo de llegada y salida a Marrakech (RAK).",
        "Datos logísticos y de salud: Alergias o restricciones alimentarias y preferencias de habitación.",
        "Datos de identificación: Número y vigencia de pasaporte, exigidos por la normativa hotelera oficial de Marruecos.",
      ],
      s3Title: "3. Finalidad del Tratamiento",
      s3Text:
        "Tus datos se utilizan exclusivamente para coordinar tu viaje, traslados, estancias y asistencia. Jamás comercializamos ni cedemos tus datos a terceros con fines publicitarios.",
      s4Title: "4. Seguridad y Conservación",
      s4Text:
        "Guardamos tu información bajo estrictas medidas de seguridad cifrada y durante el tiempo estrictamente necesario para la organización y obligaciones legales.",
      s5Title: "5. Tus Derechos",
      s5Text:
        "Tienes derecho a acceder, rectificar o solicitar la supresión de tus datos en cualquier momento escribiendo a hola@mujeresdearena.com.",
    },
    fr: {
      eyebrow: "✦ PROTECTION DES DONNÉES · CONFIDENTIALITÉ ✦",
      title: "Politique de ",
      titleEm: "Confidentialité",
      subtitle:
        "Notre engagement absolu pour la protection de vos données personnelles en totale conformité avec le RGPD.",
      lastUpdated:
        "Dernière mise à jour : Octobre 2026 · Conformité RGPD · Marque : Mujeres de Arena",
      s1Title: "1. Responsable du Traitement",
      s1Text:
        "Le responsable du traitement est Mujeres de Arena. Pour toute demande, écrivez-nous à hola@mujeresdearena.com.",
      s2Title: "2. Données Collectées",
      s2Intro:
        "Nous ne collectons que les informations indispensables au bon déroulement de votre séjour :",
      s2Items: [
        "Coordonnées : Nom, prénom, email, téléphone/WhatsApp, pays de résidence.",
        "Informations de vol : Horaires d'arrivée et départ à Marrakech (RAK).",
        "Santé & Logistique : Régimes alimentaires, allergies et préférences de chambre.",
        "Identité : Passeport, selon les exigences réglementaires des établissements hôteliers au Maroc.",
      ],
      s3Title: "3. Finalité",
      s3Text:
        "Vos données servent uniquement à la coordination logistique du voyage. Aucune cession à des fins publicitaires.",
      s4Title: "4. Sécurité et Conservation",
      s4Text:
        "Conservation sécurisée et chiffrée pendant la durée nécessaire à l'organisation du voyage et aux obligations légales.",
      s5Title: "5. Vos Droits",
      s5Text:
        "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement via hola@mujeresdearena.com.",
    },
    de: {
      eyebrow: "✦ DATENSCHUTZERKLÄRUNG · PRIVACY POLICY ✦",
      title: "Datenschutz",
      titleEm: "erklärung",
      subtitle:
        "Wie wir deine personenbezogenen Daten nach den strengen Standards der DSGVO schützen.",
      lastUpdated:
        "Zuletzt aktualisiert: Oktober 2026 · DSGVO-konform · Marke: Mujeres de Arena",
      s1Title: "1. Verantwortliche Stelle",
      s1Text:
        "Verantwortlich für die Datenverarbeitung ist Mujeres de Arena. Anfragen richten an: hola@mujeresdearena.com.",
      s2Title: "2. Erfasste Daten",
      s2Intro:
        "Wir erfassen ausschließlich reise- und sicherheitsrelevante Angaben:",
      s2Items: [
        "Kontaktdaten: Vollständiger Name, E-Mail-Adresse, Telefonnummer/WhatsApp, Wohnsitzland.",
        "Reisedaten: Flugzeiten für An- und Abreise nach Marrakesch (RAK).",
        "Gesundheits- & Logistikangaben: Allergien, Ernährungswünsche, Zimmerpräferenzen.",
        "Reisedokumente: Reisepassdaten, gesetzlich vorgeschrieben für Hotelregistrierungen in Marokko.",
      ],
      s3Title: "3. Zweck der Verarbeitung",
      s3Text:
        "Die Daten dienen einzig der Organisation und Durchführung der Reise. Kein Weiterverkauf an Werbedritte.",
      s4Title: "4. Datensicherheit",
      s4Text:
        "Deine Angaben werden verschlüsselt gespeichert und nach Ablauf gesetzlicher Aufbewahrungsfristen gelöscht.",
      s5Title: "5. Deine Rechte",
      s5Text:
        "Du hast jederzeit das Recht auf Auskunft, Berichtigung und Löschung unter hola@mujeresdearena.com.",
    },
    it: {
      eyebrow: "✦ PROTEZIONE DEI DATI · PRIVACY POLICY ✦",
      title: "Informativa sulla ",
      titleEm: "Privacy",
      subtitle:
        "Come tuteliamo i tuoi dati personali con la massima integrità e conformità al GDPR.",
      lastUpdated:
        "Ultimo aggiornamento: Ottobre 2026 · Conformità GDPR · Brand: Mujeres de Arena",
      s1Title: "1. Titolare del Trattamento",
      s1Text:
        "Il titolare del trattamento è Mujeres de Arena. Contatto per i diritti privacy: hola@mujeresdearena.com.",
      s2Title: "2. Dati Raccolti",
      s2Intro:
        "Raccogliamo esclusivamente le informazioni necessarie per la gestione del viaggio:",
      s2Items: [
        "Dati di contatto: Nome, cognome, email, telefono/WhatsApp, nazione di residenza.",
        "Dati di volo: Orari di arrivo e partenza all'aeroporto di Marrakech (RAK).",
        "Esigenze particolari: Eventuali allergie, preferenze alimentari e sistemazione camere.",
        "Documenti: Dati del passaporto per la registrazione alberghiera ufficiale in Marocco.",
      ],
      s3Title: "3. Finalità del Trattamento",
      s3Text:
        "I tuoi dati sono utilizzati per la sola organizzazione logistica. Non cediamo dati per scopi commerciali terzi.",
      s4Title: "4. Sicurezza",
      s4Text:
        "I dati sono protetti con sistemi crittografati per il tempo strettamente necessario all'esecuzione del servizio.",
      s5Title: "5. Diritti dell'Interessato",
      s5Text:
        "Puoi richiedere accesso, rettifica o cancellazione in qualsiasi momento scrivendo a hola@mujeresdearena.com.",
    },
    pt: {
      eyebrow: "✦ PROTEÇÃO DE DADOS · POLÍTICA DE PRIVACIDADE ✦",
      title: "Política de ",
      titleEm: "Privacidade",
      subtitle:
        "Como protegemos as suas informações com rigor, integridade e em plena conformidade com o RGPD.",
      lastUpdated:
        "Última atualização: Outubro 2026 · Conformidade RGPD · Marca: Mujeres de Arena",
      s1Title: "1. Responsável pelo Tratamento",
      s1Text:
        "O responsável pelo tratamento de dados é Mujeres de Arena. Contacto: hola@mujeresdearena.com.",
      s2Title: "2. Informações Recolhidas",
      s2Intro:
        "Recolhemos apenas os dados indispensáveis à operacionalização da sua viagem:",
      s2Items: [
        "Contacto: Nome completo, email, telefone/WhatsApp, país de residência.",
        "Voo: Horários e números de voos para o aeroporto de Marraquexe (RAK).",
        "Saúde e logística: Restrições alimentares, alergias e preferência de quarto.",
        "Identificação: Número de passaporte, exigido pela legislação hoteleira de Marrocos.",
      ],
      s3Title: "3. Finalidade",
      s3Text:
        "Utilização exclusiva para a organização e logística da viagem, sem qualquer partilha com anunciantes terceiros.",
      s4Title: "4. Segurança e Conservação",
      s4Text:
        "Armazenamento encriptado e seguro pelo tempo necessário ao cumprimento das obrigações contratuais e legais.",
      s5Title: "5. Os Seus Direitos",
      s5Text:
        "Direito de acesso, retificação e eliminação a qualquer momento através de hola@mujeresdearena.com.",
    },
    ar: {
      eyebrow: "✦ حماية البيانات · سياسة الخصوصية ✦",
      title: "سياسة ",
      titleEm: "الخصوصية",
      subtitle:
        "كيف نحمي بياناتكِ الشخصية بأعلى درجات الأمان والنزاهة والامتثال التام للائحة العامة لحماية البيانات (GDPR).",
      lastUpdated:
        "آخر تحديث: أكتوبر 2026 · متوافق مع GDPR · العلامة: Mujeres de Arena",
      s1Title: "1. المسؤول عن معالجة البيانات",
      s1Text:
        "الجهة المسؤولة عن معالجة بياناتكِ الشخصية هي Mujeres de Arena. للاستفسارات، يرجى مراسلتنا عبر hola@mujeresdearena.com.",
      s2Title: "2. البيانات التي نجمعها",
      s2Intro:
        "نجمع فقط المعلومات الضرورية لإتمام حجزكِ وضمان سلامتكِ وراحتكِ التامة أثناء الرحلة:",
      s2Items: [
        "بيانات الاتصال: الاسم الكامل، البريد الإلكتروني، رقم الهاتف/الواتساب، بلد الإقامة.",
        "بيانات الرحلة الجوية: مواعيد الوصول والمغادرة في مطار مراكش المنارة (RAK).",
        "بيانات لوجستية وصحية: الحساسيات والأنظمة الغذائية وتفضيلات الغرف.",
        "بيانات إثبات الهوية: رقم جواز السفر وتاريخ صلاحيته، وفقًا للأنظمة الفندقية الرسمية في المغرب.",
      ],
      s3Title: "3. الغرض من المعالجة",
      s3Text:
        "تُستخدم بياناتكِ حصرًا لتنظيم مشاركتكِ في الرحلة وتنسيق الاستقبال والإقامة. لا نقوم مطلقًا ببيع أو مشاركة بياناتكِ مع أطراف إعلانية خارجية.",
      s4Title: "4. الأمان والاحتفاظ بالبيانات",
      s4Text:
        "تُحفظ بياناتكِ في قواعد بيانات مشفرة وآمنة طوال المدة اللازمة لإتمام تنظيم الرحلة والوفاء بالالتزامات القانونية.",
      s5Title: "5. حقوقكِ القانونية",
      s5Text:
        "بموجب لائحة GDPR، يحق لكِ طلب الوصول إلى بياناتكِ أو تصحيحها أو حذفها في أي وقت عبر التواصل معنا على hola@mujeresdearena.com.",
    },
    ru: {
      eyebrow: "✦ ЗАЩИТА ДАННЫХ · ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ✦",
      title: "Политика ",
      titleEm: "Конфиденциальности",
      subtitle:
        "Как мы бережно защищаем ваши личные данные в полном соответствии со стандартами GDPR.",
      lastUpdated:
        "Последнее обновление: Октябрь 2026 · Стандарт GDPR · Бренд: Mujeres de Arena",
      s1Title: "1. Оператор Данных",
      s1Text:
        "Ответственным за обработку данных является бренд Mujeres de Arena. Контакт для обращений: hola@mujeresdearena.com.",
      s2Title: "2. Собираемая Информация",
      s2Intro:
        "Мы запрашиваем только сведения, строго необходимые для безопасной организации путешествия:",
      s2Items: [
        "Контактные данные: ФИО, email, телефон/WhatsApp, страна проживания.",
        "Детали перелетов: Время прибытия и вылета в аэропорт Марракеша (RAK).",
        "Здоровье и логистика: Пищевые аллергии, предпочтения по питанию и расселению.",
        "Паспортные данные: Номер и срок действия загранпаспорта для регистрации в отелях Марокко.",
      ],
      s3Title: "3. Цели Обработки",
      s3Text:
        "Данные используются исключительно для организации трансферов, проживания и сопровождения. Мы никогда не передаем данные рекламным сервисам.",
      s4Title: "4. Безопасность и Хранение",
      s4Text:
        "Информация хранится в зашифрованных базах данных в течение срока, необходимого для проведения ретрита.",
      s5Title: "5. Ваши Права",
      s5Text:
        "Вы вправе запросить доступ, исправление или удаление своих данных в любой момент через hola@mujeresdearena.com.",
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
            <p className="mb-3">{c.s2Intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {c.s2Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-playfair text-2xl font-bold text-[#1B1108] mb-3">
              {c.s3Title}
            </h3>
            <p>{c.s3Text}</p>
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
