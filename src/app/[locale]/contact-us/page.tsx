import React from "react";
import ContactView from "@/views/ContactView";
import { Locale } from "@/data/translations";

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "fr" },
    { locale: "de" },
    { locale: "it" },
    { locale: "pt" },
    { locale: "ar" },
    { locale: "ru" },
    { locale: "en" },
  ];
}

export default async function LocalizedContactUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactView locale={locale as Locale} />;
}
