import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import BackgroundConstellation from './BackgroundConstellation'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

export default function Hero() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.hero : en.hero

  return (
    <header className="hero-premium relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0"><BackgroundConstellation /></div>
      <div className="hero-premium__bg-wrapper absolute inset-0 z-10">
        <motion.img src="/hero_banner.png" alt="Austreon" className="hero-premium__bg opacity-20"
          animate={{ scale: [1, 1.04, 1], x: [0, -10, 0], y: [0, -6, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className="hero-premium__blue-glow"
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="hero-premium__overlay" />
      </div>
      <div className="hero-premium__content relative z-20 flex items-center justify-center min-h-screen px-6">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="text-center w-full"
        >
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }} className="hero-premium__label"
          >
            {t.label}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="hero-premium__title"
          >
            {t.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }} className="hero-premium__description"
          >
            {t.desc}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.8 }} className="hero-premium__actions"
          >
            <a href="#pilares" className="hero-premium__cta-primary group">
              {t.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#proyectos" className="hero-premium__cta-secondary">{t.cta2}</a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="hero-premium__scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </header>
  )
}