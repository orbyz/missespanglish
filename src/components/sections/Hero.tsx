import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Index");
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Texto del Hero */}
      <div className="flex-1 text-brand-dark space-y-6">
        <h1 className="text-4xl text-center md:text-7xl md:text-start font-extrabold leading-tight drop-shadow-sm">
          {t("title")} <br />
          <span className="text-brand-dark italic"></span>
        </h1>
        <div className="flex-1 text-white space-y-6">
          <h2 className="text-xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
            {t("subtitle")} <br />
            <span className="text-brand-dark italic"></span>
          </h2>
        </div>

        {/* Subtítulo mejorado: texto más pequeño y con max-width para forzar el salto */}
        <p className="text-lg md:text-xl text-brand-dark/90 max-w-md leading-relaxed">
          {t("paragraph")}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          {/* Botones conectados al JSON */}
          <button className="bg-brand-accent  text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all">
            {t("buttonPrimary")}
          </button>
          <button className="bg-white/90 backdrop-blur text-brand-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-white transition-all">
            {t("buttonSecondary")}
          </button>
        </div>
      </div>

      {/* Imagen Hero */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[320px] h-[420px] md:w-[480px] md:h-[620px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/30 rotate-2">
          <Image
            src="/hero-illustration.jpeg"
            alt="Miss Espanglish"
            fill
            className="object-cover -rotate-2 scale-110"
            priority
          />
        </div>
      </div>
    </section>
  );
}
