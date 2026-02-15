"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/10">
      {/* Logo real con link a la home */}
      <Link
        href={`/${locale}`}
        className="relative h-12 w-40 transition-transform hover:scale-105"
      >
        <Image
          src="/logo.svg"
          alt="Miss Espanglish Logo"
          width={260}
          height={60}
          className="object-contain object-left mix-blend-multiply"
          priority
        />
      </Link>

      {/* Lado derecho: Selector de idiomas */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all font-bold text-brand-dark border border-brand-primary/20 group"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            {locale === "es" ? (
              <svg viewBox="0 0 640 480" className="w-full h-full">
                <path fill="#f1bf00" d="M0 0h640v480H0z" />
                <path fill="#c60b1e" d="M0 0h640v120H0zm0 360h640v120H0z" />
              </svg>
            ) : (
              <svg viewBox="0 0 640 480" className="w-full h-full">
                <path fill="#012169" d="M0 0h640v480H0z" />
                <path
                  stroke="#fff"
                  strokeWidth="60"
                  d="m0 0 640 480M640 0 0 480"
                />
                <path
                  stroke="#c8102e"
                  strokeWidth="40"
                  d="m0 0 640 480M640 0 0 480"
                />
                <path
                  stroke="#fff"
                  strokeWidth="100"
                  d="M320 0v480M0 240h640"
                />
                <path
                  stroke="#c8102e"
                  strokeWidth="60"
                  d="M320 0v480M0 240h640"
                />
              </svg>
            )}
          </div>
          <span className="text-sm md:text-base group-hover:text-brand-accent transition-colors">
            {locale === "es" ? "ES" : "EN"}
          </span>
        </button>
      </div>
    </nav>
  );
}
