"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const styles = [
  { color: "bg-blue-100", icon: "💬" },
  { color: "bg-orange-100", icon: "⭐" },
  { color: "bg-green-100", icon: "🚀" },
];

export default function MethodologyBenefits() {
  const t = useTranslations("methodology.benefits");

  const items = ["b1", "b2", "b3"];

  return (
    <section className="relative py-20 bg-brand-cream overflow-hidden">
      {/* 🎨 BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-60px] left-[-60px] w-[250px] h-[250px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[250px] h-[250px] bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {t("title")}
        </h2>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {items.map((b, i) => {
            const s = styles[i];

            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* ICON */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-xl mx-auto ${s.color}`}
                >
                  {s.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-brand-dark">
                  {t(`${b}.title`)}
                </h3>

                {/* DESC */}
                <p className="text-sm text-brand-dark/70 mt-2 max-w-xs mx-auto">
                  {t(`${b}.desc`)}
                </p>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-brand-primary/10 to-brand-accent/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
