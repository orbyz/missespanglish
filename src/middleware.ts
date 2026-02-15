import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Lista de todos los idiomas soportados
  locales: ["en", "es"],
  // Idioma por defecto si no hay ninguno en la URL
  defaultLocale: "es",
});

export const config = {
  // Machaca todas las rutas excepto las internas de Next.js (_next), archivos (favicon, etc)
  matcher: ["/", "/(es|en)/:path*"],
};
