import { CONTACT } from "@/lib/constants/contact";

export const openCalendly = () => {
  if (!CONTACT.calendly) {
    console.error("Calendly URL is not defined");
    return;
  }

  window.open(CONTACT.calendly, "_blank", "noopener,noreferrer");
};
