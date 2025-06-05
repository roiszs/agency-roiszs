// src/app/page.tsx

export default function Home(){
  return (
    <main className="flex flex-col">
      {/* ---------------- Hero ---------------- */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-400 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-20 lg:py-32">
          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Creamos software y sitios web <br className="hidden md:block" />
              que impulsan tu negocio
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Desde páginas corporativas y tiendas en línea hasta sistemas
              especializados. Soluciones a medida, bilingües y optimizadas
              para la región fronteriza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/portfolio"
                className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
              >
                Ver Portafolio
              </a>
              <a
                href="/pricing"
                className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-purple-600 transition text-center"
              >
                Paquetes y Precios
              </a>
            </div>
          </div>
          {/* Imagen Hero */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <img
              src="/images/hero-devices.png"
              alt="Desarrollo web y software"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
        {/* SVG decorativo en la base del hero */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 text-white"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,20 1440,80 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* --------------- Sobre Nosotros --------------- */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Quiénes Somos?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Somos <span className="font-semibold">Agencia Web CJ</span>, un equipo
            especializado en el desarrollo de software, páginas web, sistemas
            a la medida y tiendas en línea. Con base en Ciudad Juárez, ofrecemos
            soluciones bilingües (ES/EN) y adaptadas al mercado fronterizo,
            optimizando costos de impuestos (IVA 8 %) y métodos de pago locales.
          </p>
        </div>
      </section>

      {/* -------------- Servicios Destacados -------------- */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-gray-600 mt-4">
            Ofrecemos un portafolio completo para cubrir todas tus necesidades
            digitales.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Desarrollo Web</h3>
            <p className="text-gray-600 leading-relaxed">
              Sitios corporativos, landing pages y portales bilingües.
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
            <p className="text-gray-600 leading-relaxed">
              Tiendas en línea con integración de Stripe, PayPal y Oxxo Pay,
              optimizadas con IVA 8 %.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Sistemas Especializados</h3>
            <p className="text-gray-600 leading-relaxed">
              Software a la medida, automatización de procesos y dashboards
              para PyMEs industriales.
            </p>
          </div>
          {/* Servicio 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Mantenimiento y Soporte</h3>
            <p className="text-gray-600 leading-relaxed">
              Hosting, actualizaciones y soporte 24/7 para tu infraestructura.
            </p>
          </div>
          {/* Servicio 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">UI/UX y Diseño</h3>
            <p className="text-gray-600 leading-relaxed">
              Interfaces atractivas y usables, pruebas de usuario y optimización
              de conversión.
            </p>
          </div>
          {/* Servicio 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">SEO Local y Marketing</h3>
            <p className="text-gray-600 leading-relaxed">
              Estrategias SEO/SEM para atraer clientes de El Paso, NM y la
              franja fronteriza.
            </p>
          </div>
        </div>
      </section>

      {/* ------------- Llamado a Portafolio ------------- */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Quieres Ver Nuestros Proyectos?
          </h2>
          <p className="text-gray-700 mb-8">
            Conoce algunos de los trabajos que hemos desarrollado para empresas
            locales e internacionales.
          </p>
          <a
            href="/portfolio"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow hover:bg-purple-700 transition"
          >
            Ir al Portafolio
          </a>
        </div>
      </section>

      {/* -------------- Footer Simplificado -------------- */}
      <footer className="bg-purple-800 text-purple-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm text-center lg:text-left">
            &copy; 2025 Agencia Web CJ. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-6 lg:mt-0">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.547 9.876v-6.99h-2.64v-2.886h2.64V9.578c0-2.605 1.553-4.043 3.932-4.043 1.14 0 2.333.204 2.333.204v2.568h-1.317c-1.3 0-1.705.805-1.705 1.632v1.962h2.902l-.464 2.886h-2.438v6.99A10.002 10.002 0 0022 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.534 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

