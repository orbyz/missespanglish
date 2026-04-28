import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Index");

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark text-center mb-16">
          {t("featuresTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Tarjeta 1 */}
          <div className="group p-8 rounded-3xl bg-brand-cream border border-brand-primary/10 hover:border-brand-accent/30 transition-all hover:shadow-xl">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">
              {t("feat1Title")}
            </h3>
            <p className="text-brand-dark/70 leading-relaxed">
              {t("feat1Desc")}
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="group p-8 rounded-3xl bg-brand-cream border border-brand-primary/10 hover:border-brand-accent/30 transition-all hover:shadow-xl">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">
              {t("feat2Title")}
            </h3>
            <p className="text-brand-dark/70 leading-relaxed">
              {t("feat2Desc")}
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="group p-8 rounded-3xl bg-brand-cream border border-brand-primary/10 hover:border-brand-accent/30 transition-all hover:shadow-xl">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">
              {t("feat3Title")}
            </h3>
            <p className="text-brand-dark/70 leading-relaxed">
              {t("feat3Desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
