import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://miss-espanglish.vercel.app"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico", // Esto hará que tu logo sea el favicon (el icono de la pestaña)
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/hero-illustration.jpeg"], // Imagen que sale al compartir por WhatsApp/RRSS
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // En Next 15 es una Promesa
}) {
  const { locale } = await params;

  // Validamos que el locale sea correcto
  if (!["en", "es"].includes(locale)) {
    notFound();
  }

  // Obtenemos los mensajes para el Provider
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
