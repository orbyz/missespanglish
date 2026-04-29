"use client";

import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants/contact";

export default function CTA() {
  const t = useTranslations("Index");

  return (
    <section className="relative py-24 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent -z-10" />

      {/* BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-60px] left-[-60px] w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          {t("ctaTitle")}
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
          {t("ctaSubtitle")}
        </p>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => window.open(CONTACT.calendly, "_blank")}
            className="bg-white text-brand-primary px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            {t("ctaButton")}
          </button>
        </div>

        {/* TRUST NOTE */}
        <p className="mt-4 text-white/70 text-sm">{t("ctaNote")}</p>
      </div>
    </section>
  );
}
