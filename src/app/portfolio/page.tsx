// src/app/portfolio/page.tsx

import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

export default function PortfolioPage() {
  // Ejemplo de datos; cuando tengas tus proyectos, reemplaza o agrega aquí
  const proyectos = [
    {
      title: "North Bridge",
      description: "NorthBridge Consulting ayuda a PyMEs y empresas en crecimiento a alinear sus objetivos con proyectos de transformación digital medibles y accionables.",
      imgSrc: "images/proyectos/NorthImage.png",
      link: "https://northbridge-landing.vercel.app/",
    },
    {
      title: "Dashboard Manufactura J&J",
      description: "Sistema de recolección de datos en producción, con gráficos en tiempo real.",
      imgSrc: "/images/proyectos/dashboard-jj.jpg",
      link: "/portfolio/dashboard-jj",
    },
    {
      title: "Sitio Corporativo XYZ Logistics",
      description: "Portal bilingüe para empresa logística con sección de seguimiento de envíos.",
      imgSrc: "/images/proyectos/xyz-logistics.jpg",
      link: "/portfolio/xyz-logistics",
    },
    // Agrega tantos objetos como proyectos tengas
  ];

  return (
    <main className="bg-gray-50 py-16 px-6">
      {/* ====== Enlace para volver al Home ====== */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-block text-purple-600 font-semibold hover:underline"
        >
          ← Volver al Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">Portafolio</h1>
        <p className="text-gray-600 mt-4">
          Aquí verás algunos de los proyectos más destacados que hemos
          desarrollado para clientes locales e internacionales.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.title}
            title={proyecto.title}
            description={proyecto.description}
            imgSrc={proyecto.imgSrc}
            link={proyecto.link}
          />
        ))}
      </div>
    </main>
  );
}
