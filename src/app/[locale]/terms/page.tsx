import React from "react";
import TermsView from "@/views/TermsView";
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

export default async function LocalizedTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TermsView locale={locale as Locale} />;
}
