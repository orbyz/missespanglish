import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image"; // Importante para el logo

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        {/* Columna 1: Marca y Logo */}
        <div className="space-y-6">
          <Link href={`/${locale}`} className="relative block h-16 w-48">
            <Image
              src="/logo.svg"
              alt="Miss Espanglish Logo"
              fill
              className="object-contain object-left"
              /* Si el logo es oscuro y no se ve, puedes añadir: className="object-contain object-left brightness-0 invert" */
            />
          </Link>
          <p className="text-white/60 max-w-xs leading-relaxed text-sm">
            {t("description")}
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="font-bold mb-6 text-brand-primary uppercase tracking-wider text-sm">
            {t("navTitle")}
          </h4>
          <ul className="space-y-3 text-white/80">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-brand-accent transition-colors"
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="hover:text-brand-accent transition-colors"
              >
                {t("methodology")}
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-brand-accent transition-colors"
              >
                {t("about")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Social */}
        <div>
          <h4 className="font-bold mb-6 text-brand-primary uppercase tracking-wider text-sm">
            {t("socialTitle")}
          </h4>
          <div className="flex flex-col gap-3 text-white/80">
            <a
              href="https://www.instagram.com/missespanglish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 text-center text-white/30 text-xs">
        © {year} Miss Espanglish. {t("rights")}
      </div>
    </footer>
  );
}
