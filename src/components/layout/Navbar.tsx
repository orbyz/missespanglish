"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants/contact";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/10">
      {/* LOGO */}
      <Link
        href={`/${locale}`}
        className="relative h-12 w-40 transition-transform hover:scale-105"
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

      {/* NAV LINKS */}
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
      <div className="flex items-center gap-4">
        {/* CTA */}
        <Link
          href={`/${locale}/services`}
          className="hidden md:inline-block bg-brand-accent text-white px-5 py-2 rounded-full font-semibold shadow-sm hover:shadow-md hover:scale-105 transition"
        >
          {t("cta")}
        </Link>

        {/* LANGUAGE */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all font-bold text-brand-dark border border-brand-primary/20"
        >
          <span className="text-sm">{locale === "es" ? "ES" : "EN"}</span>
        </button>
      </div>
    </nav>
  );
}
