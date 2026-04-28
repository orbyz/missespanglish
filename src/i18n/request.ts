import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import en from "@/messages/en.json";
import es from "@/messages/es.json";

const locales = ["es", "en"];

const messagesMap = {
  en,
  es,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: messagesMap[locale as "en" | "es"],
  };
});
