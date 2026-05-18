import { motion } from 'framer-motion'
import { Bot, LineChart, Cpu } from 'lucide-react'

export default function Pilares() {
  return (
    <section id="pilares" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
      <h2 className="text-2xl md:text-5xl font-bold mb-10 md:mb-16 text-center tracking-tight">Propuesta de <span className="text-[#00F0FF]">Valor</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 group/cards">
        {[
          { icon: <Bot className="w-6 h-6 group-hover/card:animate-pulse" />, title: "Automatización Inteligente", desc: "Diseñamos ecosistemas autónomos y células de trabajo híbridas que ejecutan tareas críticas con precisión algorítmica. Reducimos la fricción operativa mediante flujos de trabajo inteligentes que aprenden y se adaptan a la velocidad de su industria." },
          { icon: <LineChart className="w-6 h-6 group-hover/card:animate-pulse" />, title: "Arquitectura de Mercados e Infraestructura", desc: "Construimos la estructura técnica donde convergen el hardware y la tecnología. Diseñamos el mapa de procesos, la integración de sistemas locales y la estrategia de ejecución para asegurar un despliegue operativo de alto impacto en sectores productivos." },
          { icon: <Cpu className="w-6 h-6 group-hover/card:animate-pulse" />, title: "IA Sintética & Soberana", desc: "Transformamos datos de alta densidad en activos de decisión que residen físicamente en su organización. Implementamos capas de IA para el análisis predictivo bajo modelos de soberanía de datos, garantizando ventaja competitiva y blindaje digital." }
        ].map((item, i) => (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.2 }} key={i} className="p-6 md:p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/5 transition-all duration-500 group/card relative overflow-hidden opacity-100 hover:!opacity-100 group-hover/cards:opacity-40 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(0,240,255,0.15)] hover:border-[#00F0FF]/40 cursor-default">
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #00F0FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl flex items-center justify-center mb-5 md:mb-6 text-[#00F0FF] group-hover/card:scale-110 group-hover/card:bg-[#00F0FF]/10 transition-all duration-500 relative z-10">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 relative z-10">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm relative z-10">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}