export default function ServicesList() {
  const services = [
    {
      title: "Clases para niños",
      description:
        "Aprendizaje a través de juegos, música y actividades dinámicas.",
      color: "bg-white",
    },
    {
      title: "Clases para adolescentes",
      description:
        "Refuerzo escolar, conversación y preparación para exámenes.",
      color: "bg-brand-primary text-white",
    },
    {
      title: "Clases personalizadas",
      description: "Adaptadas al nivel, ritmo y objetivos de cada estudiante.",
      color: "bg-white",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className={`group p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 ${s.color}`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-black">{s.title}</h3>

              <p className="text-gray-600 group-hover:text-gray-800 transition">
                {s.description}
              </p>

              <div className="pt-4">
                <span className="text-sm font-semibold opacity-70">
                  Ver más →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
