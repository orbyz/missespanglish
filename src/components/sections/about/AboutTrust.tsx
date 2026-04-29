"use client";

import { useTranslations } from "next-intl";

export default function AboutTrust() {
  const t = useTranslations("about.trust");

  const items = ["t1", "t2", "t3"];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {t("title")}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {items.map((key) => (
            <div
              key={key}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <p className="text-2xl font-bold text-brand-primary">
                {t(`items.${key}.value`)}
              </p>
              <p className="text-sm font-semibold text-brand-dark mt-1">
                {t(`items.${key}.title`)}
              </p>
              <p className="text-xs text-brand-dark/70 mt-1">
                {t(`items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
