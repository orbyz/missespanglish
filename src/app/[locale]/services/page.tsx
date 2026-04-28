import ServicesHero from "@/components/sections/ServicesHero";
import ServicesList from "@/components/sections/ServicesList";
import Methodology from "@/components/sections/Methodology";
import PricingPreview from "@/components/sections/PricingPreview";
import CTA from "@/components/sections/CTA";

export default function ServiciosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Methodology />
      <PricingPreview />
      <CTA />
    </>
  );
}
