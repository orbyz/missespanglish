"use client";

import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";

const services = [
  { id: "personalized", featured: true },
  { id: "school-support" },
  { id: "exam-prep" },
] as const;

export default function ServicesGrid() {
  const t = useTranslations("services.grid");

  return (
    <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">{t("title")}</h2>
          <p className="mt-3 text-brand-dark/70">{t("subtitle")}</p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((s) => {
            const base = `items.${s.id}`;

            return (
              <ServiceCard
                key={s.id}
                service={{
                  id: s.id,
                  title: t(`${base}.title`),
                  description: t(`${base}.description`),
                  bullets: t.raw(`${base}.bullets`) as string[],
                  cta: t(`${base}.cta`),
                  featured: s.featured,
                  badge: s.featured ? t(`${base}.badge`) : undefined,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
