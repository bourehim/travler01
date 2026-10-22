import React from "react";
import HomeView from "@/views/HomeView";
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

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomeView locale={locale as Locale} />;
}
