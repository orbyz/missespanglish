"use client";

import { useTranslations } from "next-intl";

const styles = [
  { color: "bg-blue-100", icon: "💙" },
  { color: "bg-yellow-100", icon: "✨" },
  { color: "bg-green-100", icon: "🚀" },
];

export default function AboutValues() {
  const t = useTranslations("about.values");

  const items = ["v1", "v2", "v3"];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {t("title")}
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((v, i) => {
            const s = styles[i];

            return (
              <div
                key={v}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-xl mx-auto ${s.color}`}
                >
                  {s.icon}
                </div>

                <h3 className="mt-4 font-semibold text-brand-dark">
                  {t(`${v}.title`)}
                </h3>

                <p className="text-sm text-brand-dark/70 mt-2">
                  {t(`${v}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
