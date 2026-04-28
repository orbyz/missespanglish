"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const features = [
  { id: 1, icon: "🎯" },
  { id: 2, icon: "📚" },
  { id: 3, icon: "🚀" },
];

export default function Features() {
  const t = useTranslations("Index");

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-brand-cream">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.2]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-60px] right-[-60px] w-[250px] h-[250px] bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">
            {t("featuresTitle")}
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const title = t(`feat${f.id}Title`);
            const desc = t(`feat${f.id}Desc`);

            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-white/40"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-primary/10 text-2xl mb-6 group-hover:scale-110 transition">
                  {f.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-primary transition">
                  {title}
                </h3>

                {/* DESC */}
                <p className="text-brand-dark/70 leading-relaxed text-sm">
                  {desc}
                </p>

                {/* subtle glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-brand-primary/5 transition pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
