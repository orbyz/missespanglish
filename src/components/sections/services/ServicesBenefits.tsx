"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = ["b1", "b2", "b3", "b4"] as const;

export default function ServicesBenefits() {
  const t = useTranslations("services.benefits");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold">{t("title")}</h2>

          <p className="mt-4 text-brand-dark/70">{t("subtitle")}</p>

          <ul className="mt-8 space-y-6">
            {items.map((key, i) => {
              const base = `items.${key}`;

              return (
                <li key={key} className="flex gap-4 items-start group">
                  {/* Icon */}
                  <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-bold">
                    ✓
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold group-hover:text-brand-primary transition">
                      {t(`${base}.title`)}
                    </h3>
                    <p className="text-sm text-brand-dark/70 mt-1">
                      {t(`${base}.description`)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full bg-brand-accent/10 rounded-2xl -z-10" />

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold">{t("card.title")}</h3>

            <p className="mt-3 text-brand-dark/70 text-sm">
              {t("card.description")}
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-brand-primary font-semibold">
                {t("card.stat1")}
              </p>

              <p className="text-brand-primary font-semibold">
                {t("card.stat2")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
