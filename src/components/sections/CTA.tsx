"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

export default function CTA() {
  const t = useTranslations("Index");

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT.defaultMessage);

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* 🎨 BACKGROUND */}
      <div className="absolute inset-0 bg-hero-gradient -z-10" />
      <div className="absolute inset-0 bg-white/80 -z-10" />

      {/* BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-60px] left-[-60px] w-[280px] h-[280px] bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
            {t("ctaTitle")}
          </h2>

          {/* SUBTITLE */}
          <p className="text-lg text-brand-dark/70">{t("ctaSubtitle")}</p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            {/* PRIMARY */}
            <button className="bg-brand-accent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.05] active:scale-[0.96] transition-all cursor-pointer">
              {t("ctaPrimary")}
            </button>

            {/* WHATSAPP */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-[#1ebe5d] hover:scale-[1.05] active:scale-[0.96] transition-all cursor-pointer"
            >
              <MessageCircle size={20} />
              {t("ctaWhatsapp")}
            </button>
          </div>

          {/* TRUST */}
          <p className="text-sm text-brand-dark/60 pt-2">{t("ctaTrust")}</p>
        </motion.div>
      </div>
    </section>
  );
}
