import { useTranslations } from "next-intl";
import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutMe from "@/components/AboutMe";
import CTA from "@/components/CTA";

export default function HomePage() {
  const t = useTranslations("Index");

  return (
    <main className="min-h-screen bg-hero-gradient">
      <Hero />
      <Features />
      <AboutMe />
      <CTA />
    </main>
  );
}
