import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Idiomas soportados
  locales: ["en", "es"],

  // Idioma por defecto si no hay coincidencia
  defaultLocale: "es",
});

export const config = {
  // Este matcher es CRUCIAL.
  // Debe incluir '/' para que la raíz no de 404
  matcher: [
    "/",
    "/(es|en)/:path*",
    // Esto excluye archivos internos de Next.js y estáticos
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
