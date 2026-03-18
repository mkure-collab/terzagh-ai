import React from 'react';

export default function TerzaghAI() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-green-500 rounded flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-2xl leading-none">T</span>
              </div>
              <span className="text-3xl font-bold tracking-tighter">
                Terzagh<span className="text-green-500">AI</span>
              </span>
            </div>
          </div>
          <a 
            href="#chat" 
            className="bg-green-500 hover:bg-green-600 text-zinc-950 px-6 py-3 rounded-2xl font-semibold transition"
          >
            Probar Agente
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full mb-6 border border-zinc-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">Agente Geotécnico Inteligente • Chile</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            Terzagh<span className="text-green-500">AI</span>
          </h1>

          <p className="text-2xl text-zinc-400 mb-10">
            Tu ingeniero geotécnico senior con IA.<br />
            Análisis inteligente de informes, ensayos SPT, CPTu, parámetros de diseño y recomendaciones según normas chilenas.
          </p>

          <a 
            href="#chat"
            className="inline-block bg-green-500 hover:bg-green-600 text-zinc-950 text-xl font-semibold px-12 py-5 rounded-3xl transition"
          >
            Consultar con TerzaghAI →
          </a>
        </div>
      </section>

      {/* Inspirado en KuadRante */}
      <div className="text-center py-12 border-t border-zinc-800">
        <p className="text-zinc-500 mb-4">Inspirado en la excelencia de</p>
        <div className="flex justify-center">
          <span className="text-4xl font-bold tracking-widest text-zinc-600">
            KUADRANTE
          </span>
        </div>
        <p className="text-sm text-zinc-600 mt-1">Ingeniería</p>
      </div>

      {/* Chat placeholder */}
      <section id="chat" className="px-6 pb-24">
        <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 min-h-[420px] flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h3 className="text-2xl font-semibold mb-3">Agente Geotécnico listo</h3>
          <p className="text-zinc-400 mb-8">
            Sube tus informes o pregunta directamente sobre SPT, CPTu, parámetros de suelos, 
            clasificaciones sísmicas NCh433, correlaciones y recomendaciones de diseño.
          </p>
          <div className="text-sm text-green-500 bg-green-950 px-5 py-2 rounded-full">
            Próximamente: Chatbot completo con Gemini 3.1 Pro + tus 2000+ informes
          </div>
        </div>
      </section>

      <footer className="text-center py-12 text-zinc-500 text-sm border-t border-zinc-800">
        TerzaghAI © 2026 • Powered by Vercel + Gemini • Hecho para ingenieros geotécnicos chilenos
      </footer>
    </div>
  );
}
