import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function AboutMe() {
const t = useTranslations("Index");

    return (
    <section className="bg-brand-cream py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
        {/* Contenedor de Imagen con el Rombo de fondo */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* El Rombo Azul de fondo (como en tu imagen) */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-primary/40 rounded-[60px] rotate-[15deg] -z-0" />

          {/* La Foto con borde blanco e inclinación */}
          <div className="relative z-10 w-[280px] md:w-[400px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white -rotate-[5deg] transition-transform hover:rotate-0 duration-500">
            <Image
              src="/section-aboutme.png"
              alt="About Miss Espanglish"
              width={400}
              height={500}
              className="w-full h-auto object-cover scale-105"
            />
          </div>
        </div>

        {/* Texto Informativo */}
        <div className="flex-1 space-y-8 z-10">
          <h2 className="text-5xl md:text-6xl text-center font-bold text-brand-dark leading-tight">
            {t("aboutTitle")}
          </h2>

          <div className="space-y-6 text-xl text-brand-dark/80 text-justify leading-relaxed max-w-xl">
            <p>{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
          </div>

          <div className="flex justify-center md:justify-start pt-6">
            <button className=" bg-brand-accent text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-brand-accent/85 flex items-center gap-3 group transition-all">
              {t("aboutButton")}
              <span className="group-hover:translate-x-2 transition-transform text-2xl">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
)
