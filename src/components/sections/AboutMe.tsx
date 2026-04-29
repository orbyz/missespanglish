"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutMe() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <section className="relative py-24 px-6 bg-brand-cream overflow-hidden">
      {/* 🎨 BLOBS SUTILES */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-80px] w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* 🧠 TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark text-center md:text-left leading-tight">
            {t("aboutTitle")}
          </h2>

          {/* TEXT */}
          <div className="space-y-4 text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-lg mx-auto md:mx-0">
            <p>{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
          </div>

          {/* CTA */}
          <div className="flex justify-center md:justify-start pt-4">
            <Link
              href={`/${locale}/about`}
              className="group bg-brand-accent text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.05] active:scale-[0.96] transition-all flex items-center gap-2"
            >
              {t("aboutButton")}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* 🎯 IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[280px] md:w-[400px]">
            {/* BACK LAYER */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-primary/10 rounded-[30px] -z-10" />

            {/* IMAGE */}
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/section-aboutme.png"
                alt="About Miss Espanglish"
                width={400}
                height={500}
                className="w-full h-auto object-cover scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
