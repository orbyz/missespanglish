"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";
import { openCalendly } from "@/lib/utils/navigation";

export default function ServicesCTA() {
  const t = useTranslations("services.cta");

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT.defaultMessage);

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-hero-gradient -z-10" />
      <div className="absolute inset-0 bg-white/80 -z-10" />

      {/* BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-60px] left-[-60px] w-[280px] h-[280px] bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {t("title").split(t("highlight"))[0]}
            <span className="text-brand-primary">{t("highlight")}</span>
            {t("title").split(t("highlight"))[1]}
          </h2>

          {/* SUBTITLE */}
          <p className="mt-4 text-brand-dark/70 text-lg">{t("subtitle")}</p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            {/* PRIMARY */}
            <button
              onClick={openCalendly}
              className="bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer"
            >
              {t("primary")}
            </button>

            {/* WHATSAPP */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md hover:bg-[#1ebe5d] hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              <MessageCircle size={20} />
              {t("secondary")}
            </button>
          </div>

          {/* TRUST */}
          <p className="mt-6 text-sm text-brand-dark/60">{t("trust")}</p>
        </motion.div>
      </div>
    </section>
  );
}
