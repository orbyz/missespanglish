"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const styles = [
  { color: "bg-blue-100", icon: "💙" },
  { color: "bg-yellow-100", icon: "✨" },
  { color: "bg-green-100", icon: "🚀" },
];

export default function AboutValues() {
  const t = useTranslations("about.values");

  const items = ["v1", "v2", "v3"];

  return (
    <section className="py-24 md:py-32 bg-white">
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
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((v, i) => {
            const s = styles[i];

            return (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-brand-cream rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* ICON */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-xl mx-auto ${s.color} transition-transform group-hover:scale-110`}
                >
                  {s.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-brand-dark group-hover:text-brand-primary transition">
                  {t(`${v}.title`)}
                </h3>

                {/* DESC */}
                <p className="text-sm text-brand-dark/70 mt-2">
                  {t(`${v}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
