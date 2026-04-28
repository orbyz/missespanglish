export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Fondo */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-black">
          Clases diseñadas para aprender de verdad
        </h1>

        <p className="text-lg md:text-xl text-white/90">
          Programas adaptados para niños y adolescentes con métodos dinámicos,
          divertidos y efectivos.
        </p>
      </div>
    </section>
  );
}
