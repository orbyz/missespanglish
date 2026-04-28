"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-brand-cream">
      {/* BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] bg-brand-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[320px] h-[320px] bg-brand-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            {t("title")}
          </h1>

          <p className="text-lg text-brand-dark/70">{t("subtitle")}</p>
        </motion.div>

        {/* IMAGE CON ESTILO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[280px] md:w-[380px]">
            {/* BACK SHAPE */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-primary/10 rounded-[30px] -z-10" />

            {/* IMAGE */}
            <div className="rounded-[30px] overflow-hidden shadow-2xl border-[10px] border-white rotate-[-3deg]">
              <Image
                src="/section-aboutme.png"
                alt="Miss Espanglish"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
