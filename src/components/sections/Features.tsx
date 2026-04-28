"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const features = [
  { id: 1, icon: "🎯" },
  { id: 2, icon: "📚" },
  { id: 3, icon: "🚀" },
];

export default function Features() {
  const t = useTranslations("Index");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">
            {t("featuresTitle")}
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const title = t(`feat${f.id}Title`);
            const desc = t(`feat${f.id}Desc`);

            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-primary/10 text-2xl mb-6 group-hover:scale-110 transition">
                  {f.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-primary transition">
                  {title}
                </h3>

                {/* DESC */}
                <p className="text-brand-dark/70 leading-relaxed text-sm">
                  {desc}
                </p>

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-brand-primary/5 transition pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
