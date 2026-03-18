import React from 'react';

export default function TerzaghAI() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Navbar */}
      <nav className="border-b border-zinc-200 bg-white/95 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 border-l-4 border-[#0A3D62] relative">
                <div className="absolute -top-1 left-0 w-9 h-9 border-t-4 border-green-500"></div>
              </div>
              <span className="text-4xl font-bold tracking-tighter">
                Terzagh<span className="text-green-500">AI</span>
              </span>
            </div>
          </div>

          <a 
            href="#chat"
            className="bg-[#0A3D62] hover:bg-[#0A3D62]/90 text-white px-8 py-3.5 rounded-2xl font-semibold transition"
          >
            Probar el Agente
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-[#0A3D62]">
            Terzagh<span className="text-green-500">AI</span>
          </h1>

          <p className="text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            El agente de ingeniería geotécnica impulsado por inteligencia artificial.<br />
            Análisis de informes, correlaciones de ensayos y recomendaciones según normas chilenas.
          </p>

          <div className="mt-12">
            <a 
              href="#chat"
              className="inline-block bg-[#0A3D62] hover:bg-[#0A3D62]/90 text-white text-xl font-semibold px-14 py-5 rounded-3xl transition"
            >
              Iniciar consulta con TerzaghAI
            </a>
          </div>
        </div>
      </section>

      {/* Inspirado en KuadRante */}
      <div className="py-16 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-zinc-500 mb-4">Desarrollado con el rigor de</p>
          <div className="text-5xl font-bold tracking-widest text-[#0A3D62]">KUADRANTE</div>
          <p className="text-green-600 mt-1 font-medium">Ingeniería</p>
        </div>
      </div>

      {/* Chat Section */}
      <section id="chat" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4 text-[#0A3D62]">¿Listo para consultar?</h2>
          <p className="text-xl text-zinc-600 mb-12">
            Sube tus informes geotécnicos o pregúntame directamente sobre SPT, CPTu, 
            parámetros de suelos, clasificaciones sísmicas y valores de diseño.
          </p>

          <div className="bg-zinc-100 border border-zinc-200 rounded-3xl p-16">
            <div className="text-6xl mb-6">🧠</div>
            <p className="text-zinc-500 text-lg">
              El chatbot completo con Gemini 3.1 Pro estará disponible aquí muy pronto.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-900 text-white py-12 text-center">
        <p>TerzaghAI © 2026 • Inspirado en KuadRante Ingeniería</p>
      </footer>
    </div>
  );
}
