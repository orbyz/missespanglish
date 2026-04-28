"use client";

import { useTranslations } from "next-intl";

export default function AboutStory() {
  const t = useTranslations("about.story");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {t("title")}
        </h2>

        <p className="text-lg text-brand-dark/70 leading-relaxed">{t("p1")}</p>

        <p className="text-lg text-brand-dark/70 leading-relaxed">{t("p2")}</p>
      </div>
    </section>
  );
}
