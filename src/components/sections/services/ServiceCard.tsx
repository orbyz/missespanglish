"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Service } from "./types";
import { CONTACT } from "@/lib/constants/contact";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group relative rounded-2xl p-6 border overflow-hidden transition-all duration-300",
        service.featured
          ? "bg-gradient-to-b from-brand-primary/15 to-white border-brand-primary/40 shadow-md"
          : "bg-white border-gray-200 hover:shadow-md",
      )}
    >
      {/* 🔥 Glow effect (mejorado) */}
      {service.featured && service.badge && (
        <span className="inline-block text-xs font-semibold bg-brand-primary text-white px-3 py-1 rounded-full mb-3 shadow-sm">
          {service.badge}
        </span>
      )}

      {/* 🎯 Icono */}
      <div className="text-2xl mb-3">{getIcon(service.id)}</div>

      {/* 🧠 Title */}
      <h3 className="text-xl font-semibold">{service.title}</h3>

      {/* 📄 Description */}
      <p className="text-sm text-brand-dark/70 mt-2">{service.description}</p>

      {/* ✅ Bullets */}
      <ul className="mt-4 space-y-2">
        {service.bullets.map((b, i) => (
          <li key={i} className="text-sm flex items-start gap-2">
            <span className="text-brand-primary mt-[2px]">✓</span>
            {b}
          </li>
        ))}
      </ul>

      {/* 🚀 CTA */}
      <button
        onClick={() => window.open(CONTACT.calendly, "_blank")}
        className={`mt-6 w-full px-6 py-3 rounded-xl font-semibold text-base shadow-md transition-all duration-300
        hover:scale-[1.05] active:scale-[0.96]
        ${
          service.featured
            ? "bg-white text-brand-primary hover:bg-brand-primary hover:text-white border border-white"
            : "bg-brand-primary text-white hover:bg-white hover:text-brand-primary border border-brand-primary"
        }
        `}
      >
        {service.cta}
      </button>
    </motion.div>
  );
}

/* 🎨 Iconos simples */
function getIcon(id: string) {
  switch (id) {
    case "personalized":
      return "🎯";
    case "school-support":
      return "📚";
    case "exam-prep":
      return "📝";
    default:
      return "✨";
  }
}
