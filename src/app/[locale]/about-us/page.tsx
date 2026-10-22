import React from "react";
import AboutView from "@/views/AboutView";
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

export default async function LocalizedAboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutView locale={locale as Locale} />;
}
