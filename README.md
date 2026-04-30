# 🎓 Miss Espanglish — Web Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-✔-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

---

## 📌 Overview

Miss Espanglish es una plataforma web enfocada en la enseñanza de inglés y español para niños y adolescentes.

El objetivo principal de la web es:

- Generar confianza en padres
- Explicar la metodología
- Convertir visitas en reservas (Calendly)
- Ofrecer contacto rápido (WhatsApp)

🌐 **Live:** https://www.missespanglish.com

---

## 🧠 Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### Internacionalización
- next-intl
  - Multi idioma (ES / EN)
  - Routing por locale (/es, /en)
  - Contenido via JSON

---

## 🌐 Hosting & Deployment

- Vercel
  - Deploy automático desde GitHub
  - Edge network
  - Optimización de performance

---

## 🗂️ Project Structure


    src/
      components/
        sections/
          hero/
          services/
          methodology/
          about/
        ui/
          HeroSplit.tsx

      lib/
        constants/
          contact.ts
        utils/
          whatsapp.ts

      messages/
        es.json
        en.json

    app/
      [locale]/
        page.tsx
        services/
        methodology/
        about/
        

---

## 🌍 Internationalization

Se utiliza `next-intl con separación completa de contenido en archivos es.json y en.json.
Los componentes no contienen texto hardcodeado; todo se gestiona mediante useTranslations.

- es.json
- en.json



## 🧩 Core Component — HeroSplit

Se desarrolló un componente reusable para los HERO:

Features
Layout dividido (texto / imagen)
CTA primario (Calendly)
CTA secundario (WhatsApp)
Desacoplado de i18n
Reutilizable en múltiples páginas

## 📲 Integrations
Calendly

- Reserva de clases:

- WhatsApp
Helper

## 🎨 Design Principles
Minimalismo moderno
Jerarquía visual clara
Mobile-first
Componentización
Uso de gradientes y elementos suaves

## 📈 Conversion Strategy
Doble CTA:
Reserva directa (Calendly)
Contacto asistido (WhatsApp)
Copy orientado a padres
Flujo simple: Landing → Acción

## 🧪 Development Workflow
main → producción
dev → integración
feature/* → desarrollo

## Flow:
feature → dev → main → deploy (Vercel)

## ⚙️ Best Practices
Separación UI / lógica
Componentes reutilizables
i18n desacoplado
Evitar hardcoding
Uso de helpers para lógica compartida

## 🚀 Future Improvements
Testimonios
SEO avanzado
Analytics
A/B testing
Automatización post-reserva
Sistema de leads

## 💡 Key Insight

Esta web no solo informa — está diseñada para convertir.

## 👨‍💻 Author

**Jonathan**

- 🌐 Portfolio: https://orbyzstudio.dev 
- 💼 GitHub: https://github.com/orbyz    
- ✉️ Email: olbes.es@gmail.com  

Desarrollado como parte de una estrategia digital enfocada en:

UX orientado a conversión
Arquitectura escalable
Desarrollo moderno con Next.js
