import { motion } from 'framer-motion'

const items = [
  { q: "Q1 2025", title: "Validación de Arquitectura", desc: "Despliegue del núcleo tecnológico de Austreon. Validación de protocolos de Soberanía de Datos y lanzamiento exitoso del piloto Med-OS en el sector clínico." },
  { q: "Q1 2026", title: "Consolidación y Escalamiento", desc: "Integración de la 'Pieza Maestra' en infraestructuras industriales. Optimización de procesos críticos mediante agentes de automatización local." },
  { q: "Q2-Q3 2026", title: "Alianzas Globales", desc: "FASE ACTUAL: Apertura del hub de co-ingeniería internacional. Integración estratégica de capacidades globales para el despliegue masivo en LATAM." },
  { q: "Q4 2026+", title: "Ecosistema Autónomo", desc: "Lanzamiento de la red de Inteligencia Sintética auto-gestionada. Estándar de soberanía tecnológica para grandes corporaciones regionales." },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Roadmap Tecnológico</h2>
        <p className="text-gray-400 text-sm md:text-base">Nuestra trayectoria hacia la singularidad operativa.</p>
      </div>
      <div className="relative border-l border-white/10 ml-4 md:mx-auto md:w-0">
        {items.map((item, i) => {
          const isActive = i === 2
          return (
            <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} key={i} className={`mb-16 md:mb-24 md:w-[400px] relative ${i % 2 === 0 ? 'md:ml-auto md:pl-12 pl-8' : 'md:mr-auto md:pr-12 md:-ml-[400px] md:text-right pl-8'} ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100 transition-opacity duration-500'}`}>
              <div className={`absolute top-1 w-4 h-4 rounded-full ${isActive ? 'bg-[#00F0FF] shadow-[0_0_20px_#00F0FF]' : 'bg-[#0A0A0A] border-2 border-[#00F0FF]/30'} ${i % 2 === 0 ? 'left-[-8px] md:left-[-8px]' : 'left-[-8px] md:right-[-8px] md:left-auto'} transition-all duration-300 z-10`}>
                {isActive && <div className="absolute inset-0 rounded-full bg-[#00F0FF] animate-ping opacity-75" />}
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-mono font-bold tracking-widest ${isActive ? 'text-[#00F0FF]' : 'text-[#00F0FF]/60'} flex items-center ${i % 2 !== 0 ? 'md:justify-end' : ''} gap-3 flex-wrap`}>
                  {item.q}
                  {isActive && <span className="text-[9px] bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 px-2 py-0.5 rounded-full inline-block animate-pulse tracking-widest uppercase">USTED ESTÁ AQUÍ</span>}
                </span>
                <h3 className={`text-xl md:text-2xl font-bold mt-2 mb-3 ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.title}</h3>
                <p className={`text-sm md:text-base leading-relaxed ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}