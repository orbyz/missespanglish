import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Define los idiomas soportados
const locales = ["es", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // Validamos que el locale existe y está en nuestra lista
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale as string, // Forzamos a que sea string para que TS no se queje
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
