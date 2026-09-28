import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

export default function Navbar({
  onOpenModal,
}: {
  onOpenModal: (modal: string) => void
}) {
  const { lang, setLang } = useLang()
  const t = lang === 'es' ? es : en

  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#pilares', label: t.nav.ecosystem },
    { href: '#proyectos', label: t.nav.projects },
    { href: '#alianzas', label: t.nav.alliances },
    { href: '#roadmap', label: t.nav.roadmap },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isNavScrolled
            ? 'h-16 bg-black/90 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'h-[78px] bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/austreon-logo.png"
              alt="Austreon"
              className="h-7 w-auto object-contain"
            />

            <span className="text-white text-[22px] font-semibold tracking-[-0.02em]">
              AUSTREON
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-x-10 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#86868b] hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Language switcher */}
            <div className="hidden lg:flex items-center gap-1 text-xs font-mono">
              <button
                onClick={() => setLang('es')}
                className={`transition-colors duration-200 ${
                  lang === 'es'
                    ? 'text-white'
                    : 'text-white/30 hover:text-white/60'
                }`}
              >
                ES
              </button>

              <span className="text-white/20">|</span>

              <button
                onClick={() => setLang('en')}
                className={`transition-colors duration-200 ${
                  lang === 'en'
                    ? 'text-white'
                    : 'text-white/30 hover:text-white/60'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Desktop */}
            <button
              onClick={() => onOpenModal('earlyAccess')}
              className="hidden lg:block bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 active:scale-95 transition-all duration-200"
            >
              {t.nav.earlyAccess}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 left-0 w-full bg-black/95 backdrop-blur-2xl lg:hidden z-40 border-b border-white/[0.04]"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-[#86868b] hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}

              {/* Language switcher mobile */}
              <div className="flex items-center gap-2 text-sm font-mono pt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => setLang('es')}
                  className={`${
                    lang === 'es' ? 'text-white' : 'text-white/30'
                  }`}
                >
                  ES
                </button>

                <span className="text-white/20">|</span>

                <button
                  onClick={() => setLang('en')}
                  className={`${
                    lang === 'en' ? 'text-white' : 'text-white/30'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* CTA Mobile */}
              <button
                onClick={() => {
                  onOpenModal('earlyAccess')
                  setMobileMenuOpen(false)
                }}
                className="mt-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium w-full"
              >
                {t.nav.earlyAccess}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}