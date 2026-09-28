import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

export default function Pilares() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.pilares : en.pilares

  return (
    <section id="pilares" className="py-10 md:py-24 px-4 md:px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-8 md:mb-16">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-xs font-mono text-[#0071e3] tracking-[0.22em] uppercase mb-5"
        >
          {t.label}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-[-0.05em] leading-[0.95]"
        >
          {t.title}
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
        {t.items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group px-0 md:px-10 py-8 md:py-0 flex flex-col gap-6 first:pl-0 last:pr-0"
          >
            <span className="text-[11px] font-mono text-white/20 tracking-widest">{item.num}</span>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-[-0.03em] leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}