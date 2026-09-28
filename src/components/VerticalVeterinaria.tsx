import { motion } from 'framer-motion'
import {
  ArrowRight,
  PawPrint,
  Siren,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react'

import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

const icons = [
  <PawPrint className="w-5 h-5" />,
  <Siren className="w-5 h-5" />,
  <ShieldCheck className="w-5 h-5" />,
]

export default function VerticalVeterinaria() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.verticalVeterinaria : en.verticalVeterinaria

  return (
    <section id="veterinaria" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Texto primero en el orden del DOM (aparece a la derecha en desktop), invirtiendo el layout de Vertical Salud */}
        <div className="lg:order-2 relative rounded-3xl overflow-hidden group h-[300px] md:h-[400px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1770836037793-95bdbf190f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Veterinary Clinic Interface"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse" />

              <span className="text-xs font-mono text-white/70 tracking-widest">
                {t.badgeMedos}
              </span>
            </div>

            <div className="h-1 w-28 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#0071e3] w-[85%] rounded-full" />
            </div>
          </div>

          <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex gap-3 items-center">
            <CheckCircle className="w-8 h-8 text-[#0071e3] shrink-0" />

            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                {t.badgePrecision}
              </p>

              <p className="text-xl font-bold text-white tracking-tight">
                24/7
              </p>
            </div>
          </div>
        </div>

        <div className="lg:order-1">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/[0.04] text-[#0071e3] text-xs font-mono tracking-widest uppercase">
            {t.badge}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-[-0.04em] leading-[1.05] text-white">
            {t.title}{' '}
            <span className="text-[#0071e3]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            {t.desc}
          </p>

          <div className="space-y-7">
            {t.features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0071e3]">
                  {icons[i]}
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1 tracking-[-0.02em]">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="https://vet.austreon.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 active:scale-95 transition-all duration-200 group"
            >
              {t.cta}

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
