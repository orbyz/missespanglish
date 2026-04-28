"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function MethodologyHero() {
  const t = useTranslations("methodology.hero");
  const locale = useLocale();

  const bgImage =
    locale === "es" ? "/methodology-hero-es.png" : "/methodology-hero-en.png";

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* 🎯 BACKGROUND IMAGE FULL */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* 🎨 OVERLAY SUAVE (MUY IMPORTANTE) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />

      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark">
            {t("title")}
          </h1>

          <p className="text-lg text-brand-dark/70">{t("subtitle")}</p>
        </motion.div>
      </div>
    </section>
  );
}
