// src/app/pricing/page.tsx

import Link from "next/link";
import { PricingCard } from "@/components/PricingCard";

export default function PricingPage() {
  const paquetes = [
    {
      title: "Básico",
      price: "12 000 MXN",
      features: [
        "Landing page (1 sección)",
        "Diseño responsive",
        "Formulario de contacto",
        "SEO básico",
        "Soporte 1 mes",
      ],
      popular: false,
      ctaLink: "#",
      ctaText: "Contratar Básico",
    },
    {
      title: "Estándar",
      price: "28 000 MXN",
      features: [
        "Sitio corporativo (5–8 páginas)",
        "CMS WordPress + Elementor",
        "Optimización SEO local",
        "Integración IVA 8 %",
        "Soporte 1 mes",
      ],
      popular: true,
      ctaLink: "#",
      ctaText: "Contratar Estándar",
    },
    {
      title: "Premium",
      price: "45 000 MXN",
      features: [
        "E-commerce (hasta 20 productos)",
        "Stripe, PayPal y Oxxo Pay",
        "Integración completa IVA 8 %",
        "Dashboard administrativo",
        "Soporte 2 meses",
      ],
      popular: false,
      ctaLink: "#",
      ctaText: "Contratar Premium",
    },
  ];

  return (
    <main className="bg-gray-50 py-16 px-6">
      {/* Enlace para volver al Home */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-block text-blue-600 font-semibold hover:underline"
        >
          ← Volver al Home
        </Link>
      </div>

      {/* Título de la sección */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">Paquetes y Precios</h1>
        <p className="text-gray-600 mt-4">
          Elige el plan que mejor se adapte a tus necesidades. Todos nuestros
          planes incluyen diseño responsive, optimización para la región
          fronteriza, pagina bilingües ES/EN y soporte de un mes.
        </p>
      </section>

      {/* Grid de tarjetas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paquetes.map((paquete) => (
          <PricingCard
            key={paquete.title}
            title={paquete.title}
            price={paquete.price}
            features={paquete.features}
            popular={paquete.popular}
            ctaLink={paquete.ctaLink}
            ctaText={paquete.ctaText}
          />
        ))}
      </div>
    </main>
  );
}
