const posts = [
  {
    title: "10 palabras en inglés que usas mal",
    excerpt: "Aprende a corregir errores comunes fácilmente.",
    category: "Inglés",
  },
  {
    title: "Cómo ayudar a tu hijo a aprender inglés",
    excerpt: "Consejos prácticos para padres.",
    category: "Padres",
  },
  {
    title: "Trucos para mejorar tu pronunciación",
    excerpt: "Habla con más confianza desde hoy.",
    category: "Tips",
  },
];

export default function BlogGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {posts.map((post, i) => (
          <article
            key={i}
            className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
          >

            {/* Imagen placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-200 to-yellow-100" />

            <div className="p-6 space-y-4">

              <span className="text-sm font-semibold text-brand-accent">
                {post.category}
              </span>

              <h3 className="text-xl font-black group-hover:text-brand-primary transition">
                {post.title}
              </h3>

              <p className="text-gray-600">
                {post.excerpt}
              </p>

              <div className="pt-2">
                <span className="text-sm font-semibold">
                  Leer más →
                </span>
              </div>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}
