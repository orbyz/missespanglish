import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutTrust from "@/components/sections/about/AboutTrust";
import AboutValues from "@/components/sections/about/AboutValues";

import CTA from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTrust />
      <AboutValues />
      <CTA />
    </>
  );
}
