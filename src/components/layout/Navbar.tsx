"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants/contact";
import { useState } from "react";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT.defaultMessage);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${message}`, "_blank");
  };

  const handleCalendly = () => {
    window.open(CONTACT.calendly, "_blank");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/10">
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          className="relative h-12 w-40 transition-transform hover:scale-105 z-50"
        >
          <Image
            src="/logo.svg"
            alt="Miss Espanglish Logo"
            width={260}
            height={60}
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark">
          <Link
            href={`/${locale}/services`}
            className="hover:text-brand-primary transition"
          >
            {t("services")}
          </Link>

          <Link
            href={`/${locale}/methodology`}
            className="hover:text-brand-primary transition"
          >
            {t("methodology")}
          </Link>

          <Link
            href={`/${locale}/about`}
            className="hover:text-brand-primary transition"
          >
            {t("about")}
          </Link>

          <button
            onClick={handleWhatsApp}
            className="hover:text-[#25D366] transition"
          >
            {t("contact")}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 z-50">
          {/* CTA DESKTOP */}
          <button
            onClick={handleCalendly}
            className="hidden md:inline-block bg-brand-accent text-white px-5 py-2 rounded-full font-semibold shadow-sm hover:shadow-md hover:scale-105 transition"
          >
            {t("cta")}
          </button>

          {/* LANGUAGE */}
          {!open && (
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-primary/20 transition-all font-bold text-brand-dark"
            >
              <span className="text-sm">{locale === "es" ? "ES" : "EN"}</span>
            </button>
          )}

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-brand-primary/20 hover:bg-brand-primary/10 transition"
          >
            {/* ICON CONTAINER */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* LINE 1 */}
              <span
                className={`absolute w-5 h-[1.5px] bg-brand-dark transition-all duration-300 ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              {/* LINE 2 */}
              <span
                className={`absolute w-5 h-[1.5px] bg-brand-dark transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* LINE 3 */}
              <span
                className={`absolute w-5 h-[1.5px] bg-brand-dark transition-all duration-300 ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl font-semibold animate-fadeIn">
          <Link href={`/${locale}`} onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href={`/${locale}/services`} onClick={() => setOpen(false)}>
            {t("services")}
          </Link>

          <Link href={`/${locale}/methodology`} onClick={() => setOpen(false)}>
            {t("methodology")}
          </Link>

          <Link href={`/${locale}/about`} onClick={() => setOpen(false)}>
            {t("about")}
          </Link>

          {/* CTA */}
          <button
            onClick={() => {
              handleCalendly();
              setOpen(false);
            }}
            className="bg-brand-primary text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
          >
            {t("cta")}
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => {
              handleWhatsApp();
              setOpen(false);
            }}
            className="text-[#25D366] font-medium"
          >
            WhatsApp
          </button>

          {/* LANGUAGE dentro del menú */}
          <button
            onClick={() => {
              toggleLanguage();
              setOpen(false);
            }}
            className="mt-6 text-sm text-brand-dark/70 border border-brand-primary/20 px-4 py-2 rounded-full"
          >
            {locale === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>
        </div>
      )}
    </>
  );
}
