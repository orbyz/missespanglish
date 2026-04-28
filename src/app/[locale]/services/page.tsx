import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesProcess from "@/components/sections/services/ServicesProcess";
import ServicesBenefits from "@/components/sections/services/ServicesBenefits";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesBenefits />
      <ServicesCTA />
    </main>
  );
}
