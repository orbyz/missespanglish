"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

export default function Hero() {
  const t = useTranslations("Index");

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT.defaultMessage);

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-10">
      {/* 🎨 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-hero-gradient -z-10" />
      {/* 🎨 OVERLAY */}
      <div className="absolute inset-0 bg-white/70 -z-10" />
      {/* 🎨 BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-brand-accent/10 rounded-full blur-3xl" />
      </div>
      {/* 🔥 CONTENIDO */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[90vh]">
        {/* 🧠 TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-brand-dark space-y-6"
        >
          <h1 className="text-4xl text-center md:text-6xl md:text-left font-extrabold leading-tight tracking-tight">
            {t("title")}
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-brand-dark/80 text-center md:text-left">
            {t("subtitle")}
          </h2>

          <p className="text-base md:text-lg text-brand-dark/60 max-w-md leading-relaxed text-center md:text-left">
            {t("paragraph")}
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Calendly */}
            <button
              onClick={() => window.open(CONTACT.calendly, "_blank")}
              className="bg-brand-primary text-white px-7 py-3 rounded-xl font-semibold hover:scale-[1.05]"
            >
              {t("buttonTrial")}
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#1ebe5d]"
            >
              WhatsApp
            </button>
          </div>
        </motion.div>

        {/* 🎯 IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[400px] md:w-[460px] md:h-[580px]">
            {/* BACK LAYER */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-primary/10 rounded-[30px] -z-10" />

            {/* IMAGE */}
            <div className="relative w-full h-full rounded-[30px] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/hero-illustration.jpeg"
                alt="Miss Espanglish"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>{" "}
      {/* 👈 ESTE era el div que faltaba */}
    </section>
  );
}
