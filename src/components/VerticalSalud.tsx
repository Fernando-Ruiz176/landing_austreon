import { motion } from 'framer-motion'
import { ArrowRight, Clock, BrainCircuit, ShieldCheck, CheckCircle } from 'lucide-react'

export default function VerticalSalud() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-[300px] md:h-[400px] lg:h-[600px]">
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Dental Clinic Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-overlay" />
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#0A0A0A]/60 backdrop-blur-md border border-[#00F0FF]/30 rounded-xl p-3 md:p-5 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-xs font-mono text-[#00F0FF] tracking-wider">AUSTREON MED-OS</span>
            </div>
            <div className="h-1.5 w-28 md:w-32 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00F0FF] to-blue-500 w-[85%]" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 items-center shadow-2xl">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-[#00F0FF] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Precisión Diagnóstica</p>
              <p className="text-lg md:text-xl font-bold text-white">99.2%</p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3 py-1 mb-5 md:mb-6 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-bold tracking-widest uppercase">Primer Despliegue Estratégico</div>
          <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 tracking-tight leading-tight">Vertical Salud: La Eficiencia que Humaniza el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-600">Cuidado.</span></h2>
          <p className="text-gray-400 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light">Aunque hoy optimizamos la gestión en clínicas dentales de alta complejidad, hemos diseñado una pieza maestra tecnológica capaz de ser adaptada a cualquier vertical de la salud o industria. Nuestro ecosistema de IA Soberana es un motor universal que se moldea según la realidad operativa de cada cliente.</p>
          <div className="space-y-6 md:space-y-8">
            {[
              { icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />, title: "Optimización de Flujos", desc: "Reducción de tiempos de espera mediante algoritmos de asignación inteligente." },
              { icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6" />, title: "Análisis Predictivo", desc: "Anticipación de necesidades de insumos y gestión predictiva de pacientes." },
              { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />, title: "Soberanía de Datos", desc: "Blindaje total mediante infraestructura local que asegura que la información sensible nunca salga de la red de la clínica." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.1 }} className="flex gap-4 md:gap-5">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">{item.icon}</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-8 md:mt-12">
            <a href="https://proyecto1.austreon.cl/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#00F0FF]/60 text-[#00F0FF] font-semibold text-sm md:text-lg hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 group">
              Explorar Proyecto Piloto: Gestión Dental
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 md:mt-16 text-center">
        <p className="text-gray-300 text-base md:text-2xl font-light italic max-w-4xl mx-auto leading-relaxed px-4 py-6 border-t border-b border-white/5 bg-white/[0.01]">
          "Austreon entrega soluciones cerradas: proporcionamos la estrategia, la tecnología y el capital humano especializado para operar su infraestructura de manera autónoma."
        </p>
      </motion.div>
    </section>
  )
}