"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = ["step1", "step2", "step3", "step4"] as const;

export default function ServicesProcess() {
  const t = useTranslations("services.process");

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">{t("title")}</h2>
          <p className="mt-3 text-brand-dark/70">{t("subtitle")}</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Línea */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-gradient-to-r from-brand-primary/20 via-brand-primary/30 to-brand-accent/20" />

          <div className="grid md:grid-cols-4 gap-10 relative">
            {steps.map((stepKey, i) => {
              const base = `steps.${stepKey}`;

              return (
                <motion.div
                  key={stepKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center transition-transform duration-300 hover:scale-105"
                >
                  {/* Número */}
                  <div className="relative z-10 mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold shadow-md">
                    {i + 1}
                  </div>

                  {/* Contenido */}
                  <div className="mt-4">
                    <h3 className="font-semibold">{t(`${base}.title`)}</h3>
                    <p className="text-sm text-brand-dark/70 mt-2">
                      {t(`${base}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
