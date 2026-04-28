"use client";

import { useTranslations } from "next-intl";

export default function AboutTrust() {
  const t = useTranslations("about.trust");

  const items = ["t1", "t2", "t3"];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {t("title")}
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold">{t(`${i}.title`)}</h3>
              <p className="text-sm text-brand-dark/70 mt-2">
                {t(`${i}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
