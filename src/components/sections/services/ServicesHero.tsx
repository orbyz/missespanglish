"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesHero() {
  const t = useTranslations("services.hero");

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-brand-cream">
      {/* 🎨 BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-60px] w-[280px] h-[280px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[320px] h-[320px] bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* 🧠 TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            {t("title").split(t("highlight"))[0]}
            <span className="text-brand-primary">{t("highlight")}</span>
            {t("title").split(t("highlight"))[1]}
          </h1>

          <p className="mt-4 text-brand-dark/70 text-lg">{t("subtitle")}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-brand-primary text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
              {t("ctaPrimary")}
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
              {t("ctaSecondary")}
            </button>
          </div>
        </motion.div>

        {/* 🎯 IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full md:w-[110%] lg:w-[120%]">
            <div className="absolute -top-5 -left-5 w-full h-full bg-brand-primary/5 rounded-2xl -z-10" />

            <div className="relative h-64 md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/serviceHero.png"
                alt="Language classes for kids"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="hidden md:flex items-center gap-2 absolute -bottom-6 -right-6 bg-white rounded-xl shadow-md px-4 py-2 text-sm">
              <span className="text-brand-primary">🎯</span>
              {t("badge")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
