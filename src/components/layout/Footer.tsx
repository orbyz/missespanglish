"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT.defaultMessage);

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <footer className="relative bg-brand-dark text-white py-20 px-6 overflow-hidden">
      {/* 🎨 BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[320px] h-[320px] bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* 🔽 MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          {/* Marca */}
          <div className="space-y-6">
            <Link href={`/${locale}`} className="relative block h-14 w-44">
              <Image
                src="/logo-white.svg"
                alt="Miss Espanglish Logo"
                fill
                className="object-contain object-left brightness-90"
              />
            </Link>

            <p className="text-white/60 max-w-xs text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold mb-6 text-brand-primary uppercase tracking-wider text-sm">
              {t("navTitle")}
            </h4>

            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-brand-accent transition"
                >
                  {t("home")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}/services`}
                  className="hover:text-brand-accent transition"
                >
                  {t("services")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}/methodology`}
                  className="hover:text-brand-accent transition"
                >
                  {t("methodology")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}#about`}
                  className="hover:text-brand-accent transition"
                >
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-6 text-brand-primary uppercase tracking-wider text-sm">
              {t("socialTitle")}
            </h4>

            <div className="flex flex-col gap-3 text-white/80">
              <a
                href="https://www.instagram.com/missespanglish"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition flex items-center gap-2"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition flex items-center gap-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-10 text-center text-white/30 text-xs">
          © {year} Miss Espanglish. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
