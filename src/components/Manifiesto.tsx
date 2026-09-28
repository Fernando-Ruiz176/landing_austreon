import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

export default function Manifiesto() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.manifiesto : en.manifiesto

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 max-w-5xl mx-auto text-center">
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="text-xs font-mono text-[#0071e3] tracking-[0.22em] uppercase mb-8"
      >
        {t.label}
      </motion.p>
      <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-2xl md:text-4xl font-semibold text-white tracking-[-0.04em] leading-[1.15] mb-10"
      >
        {t.quote}
      </motion.blockquote>
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        {t.desc}
      </motion.p>
    </section>
  )
}