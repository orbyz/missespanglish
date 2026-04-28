"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const styles = [
  { color: "bg-blue-500", icon: "💬" },
  { color: "bg-orange-500", icon: "💡" },
  { color: "bg-yellow-500", icon: "⭐" },
  { color: "bg-green-500", icon: "❤️" },
  { color: "bg-purple-500", icon: "📈" },
];

export default function MethodologyProcess() {
  const t = useTranslations("methodology.process");

  const steps = ["step1", "step2", "step3", "step4", "step5"];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 HEADER (LO QUE FALTABA) */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            {t("title")}
          </h2>
          <p className="text-brand-dark/70 mt-3">{t("subtitle")}</p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => {
            const s = styles[i];

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                {/* ICON */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-xl ${s.color}`}
                >
                  {s.icon}
                </div>

                {/* NUMBER */}
                <span className="absolute top-4 right-4 text-xs text-gray-400 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-brand-dark">
                  {t(`steps.${step}.title`)}
                </h3>

                {/* DESC */}
                <p className="text-sm text-brand-dark/70 mt-2">
                  {t(`steps.${step}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
