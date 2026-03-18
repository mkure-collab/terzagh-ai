import React from 'react';

export default function TerzaghAI() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo KuadRante style */}
            <div className="flex items-center">
              <div className="relative">
                <div className="w-8 h-8 border-l-4 border-green-500"></div>
                <div className="absolute -top-1 left-0 w-8 h-8 border-t-4 border-green-500"></div>
              </div>
              <span className="ml-3 text-3xl font-bold tracking-tighter">
                Terzagh<span className="text-green-500">AI</span>
              </span>
            </div>
          </div>

          <a 
            href="#chat"
            className="bg-green-500 hover:bg-green-600 text-zinc-950 px-8 py-3 rounded-2xl font-semibold transition-all duration-200"
          >
            Probar el Agente
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2">
            <span className="text-green-500">●</span>
            <span className="text-sm tracking-widest uppercase">Ingeniería Geotécnica Inteligente</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-[-3px] leading-none mb-6">
            Terzagh<span className="text-green-500">AI</span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mx-auto leading-tight">
            El agente geotécnico senior que analiza tus informes,<br />
            extrae parámetros, aplica normas chilenas y te recomienda valores de diseño.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#chat"
              className="bg-green-500 hover:bg-green-600 text-zinc-950 text-xl font-semibold px-12 py-5 rounded-3xl transition-all"
            >
              Consultar ahora con TerzaghAI →
            </a>
            <a 
              href="#about"
              className="border border-zinc-700 hover:bg-zinc-900 px-12 py-5 rounded-3xl font-medium text-xl transition-all"
            >
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* KuadRante Inspiration */}
      <div className="border-t border-zinc-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-zinc-500 mb-4">Desarrollado con el mismo rigor de</p>
          <div className="flex justify-center items-center gap-3">
            <div className="text-5xl font-bold tracking-widest text-zinc-700">KUADRANTE</div>
            <div className="text-green-500 text-4xl">•</div>
          </div>
          <p className="text-zinc-600 mt-1">Ingeniería</p>
        </div>
      </div>

      {/* Chat Preview */}
      <section id="chat" className="px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <div className="text-center mb-10">
            <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-5xl">🧬</span>
            </div>
            <h2 className="text-3xl font-semibold mb-3">Habla con tu agente geotécnico</h2>
            <p className="text-zinc-400">
              Sube informes, pregunta sobre SPT, CPTu, suelos, correlaciones, 
              clasificaciones sísmicas y recomendaciones de diseño.
            </p>
          </div>

          <div className="bg-black/50 border border-zinc-700 rounded-2xl p-8 text-left min-h-[280px] flex items-center justify-center">
            <p className="text-zinc-500 text-center">
              El chatbot interactivo con Gemini 3.1 Pro + tus +2000 informes<br />
              estará activo aquí muy pronto.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-zinc-500 text-sm">
        TerzaghAI © 2026 • Un proyecto inspirado en KuadRante Ingeniería
      </footer>
    </div>
  );
}
