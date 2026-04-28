import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://missespanglish.com"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/hero-illustration.jpeg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["en", "es"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-hero-gradient">
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {/* 🔥 AQUÍ VA EL MAIN */}
          <main id="main-content" className="min-h-screen pt-20">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
