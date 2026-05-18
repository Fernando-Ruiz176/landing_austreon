import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const heroSlides = [
  {
    image: '/hero_slide_1.png',
    label: 'La Inteligencia Operativa',
    title: 'IA que redefine tu rentabilidad operativa.',
    description: 'Optimizamos tu flujo operativo con ecosistemas autónomos basados en IA. Procesos complejos convertidos en sistemas de alto rendimiento que anticipan el mercado.',
    cta: 'Explorar Soluciones',
    ctaLink: '#pilares',
  },
  {
    image: '/hero_slide_2.png',
    label: 'Infraestructura de Ejecución Global',
    title: 'Ingeniería de clase mundial para mercados locales.',
    description: 'Células técnicas internacionales con dirección estratégica en Chile. La agilidad que exigen los sectores más competitivos del país.',
    cta: 'Ver Modelos de Staffing',
    ctaLink: '#alianzas',
  },
  {
    image: '/hero_slide_3.png',
    label: 'Innovación en Sectores Estratégicos',
    title: 'Tecnología de punta para el ADN productivo de Chile.',
    description: 'Soluciones predictivas y de automatización para optimizar la cadena de valor. Procesos complejos convertidos en ecosistemas eficientes de alto rendimiento.',
    cta: 'Descubrir Potencial Industrial',
    ctaLink: '#proyectos',
  },
  {
    image: '/hero_slide_4.png',
    label: 'Transparencia y Blindaje',
    title: 'Gobernanza de datos y blindaje legal integral.',
    description: 'Soberanía de tus datos mediante auditoría informática y ciberseguridad avanzada. Cada desarrollo y patente, un activo protegido y blindado.',
    cta: 'Conocer nuestro Respaldo',
    ctaLink: '#roadmap',
  },
]

const SLIDE_INTERVAL = 8500

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_INTERVAL)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goToSlide = (index: number) => { setCurrentSlide(index); resetTimer() }

  return (
    <header className="hero-carousel">

      <AnimatePresence mode="sync">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              className="hero-carousel__slide"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img src={slide.image} alt={slide.label} className="hero-carousel__image" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="hero-carousel__overlay" />

      <div className="hero-carousel__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-carousel__text-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="hero-carousel__label">
              {heroSlides[currentSlide].label}
            </span>
            <h1 className="hero-carousel__title">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="hero-carousel__description">
              {heroSlides[currentSlide].description}
            </p>
            <div className="hero-carousel__actions">
              <a href={heroSlides[currentSlide].ctaLink} className="hero-carousel__cta-primary group">
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a href="#proyectos" className="hero-carousel__cta-secondary">
                Ver proyectos
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-carousel__dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-carousel__dot ${index === currentSlide ? 'hero-carousel__dot--active' : ''}`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-carousel__progress-track">
        <motion.div
          className="hero-carousel__progress-bar"
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hero-carousel__scroll-indicator"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>

    </header>
  )
}