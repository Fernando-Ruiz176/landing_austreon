import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

export default function Roadmap() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.roadmap : en.roadmap

  return (
    <section id="roadmap" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/[0.05]">
      <div className="text-center mb-16 md:mb-24">
        <p className="text-xs font-semibold text-[#0071e3] tracking-[0.22em] uppercase mb-5">{t.label}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.04em]">{t.title}</h2>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/[0.06]" />
        <div className="flex flex-col gap-12 md:gap-0">
          {t.items.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start md:gap-0 gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
              >
                <div className={`pl-10 md:pl-0 w-full md:w-[calc(50%-32px)] ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className={`inline-block mb-3 ${isEven ? 'md:float-right md:clear-both' : ''}`}>
                    <span className={`text-[11px] font-mono tracking-widest ${
                      item.active ? 'text-[#0071e3]' : item.done ? 'text-white/40' : 'text-white/20'
                    }`}>{item.q}</span>
                  </div>
                  {item.active && (
                    <div className={`clear-both mb-2 ${isEven ? 'md:flex md:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#0071e3]/10 text-[#0071e3] border border-[#0071e3]/20 px-2.5 py-1 rounded-full font-mono tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
                        {t.current}
                      </span>
                    </div>
                  )}
                  <h3 className={`clear-both text-lg font-semibold tracking-[-0.02em] mb-2 ${
                    item.active ? 'text-white' : item.done ? 'text-white/60' : 'text-white/30'
                  }`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    item.active ? 'text-gray-400' : item.done ? 'text-gray-600' : 'text-gray-700'
                  }`}>{item.desc}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    item.active ? 'bg-[#0071e3] border-[#0071e3] shadow-[0_0_12px_rgba(0,113,227,0.6)]'
                      : item.done ? 'bg-white/20 border-white/20' : 'bg-transparent border-white/10'
                  }`}>
                    {item.active && <div className="absolute inset-0 rounded-full bg-[#0071e3] animate-ping opacity-40" />}
                  </div>
                </div>
                <div className="hidden md:block md:w-[calc(50%-32px)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}