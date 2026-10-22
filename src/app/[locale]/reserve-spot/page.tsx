import React from "react";
import ReserveView from "@/views/ReserveView";
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

export default async function LocalizedReserveSpotPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ReserveView locale={locale as Locale} />;
}
