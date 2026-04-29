"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutTrust() {
  const t = useTranslations("about.trust");

  const items = ["t1", "t2", "t3"];

  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6 text-center min-h-[300px] flex flex-col justify-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-brand-dark"
        >
          {t("title")}
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {items.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
