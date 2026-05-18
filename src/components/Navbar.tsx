import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { href: '#pilares', label: 'Ecosistema' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#alianzas', label: 'Alianzas' },
  { href: '#roadmap', label: 'Roadmap' },
]

export default function Navbar({ onOpenModal }: { onOpenModal: (modal: string) => void }) {
  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsNavScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className={`fixed top-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-50 transition-all duration-500 ${isNavScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-2 sm:gap-4">
          <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-10 sm:h-12 w-auto object-contain" />
          <div className="h-7 w-px bg-white/15" />
          <span className="text-lg sm:text-2xl md:text-[1.7rem] font-extrabold tracking-[0.12em] uppercase whitespace-nowrap text-white">
            AUSTREON
          </span>
        </div>
        <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-300">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-[#00F0FF] transition-colors">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => onOpenModal('earlyAccess')} className="bg-white text-black px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm rounded-full hover:bg-gray-200 transition-all font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] whitespace-nowrap">
            Acceso Anticipado
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 w-full z-40 bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/10 lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-[#00F0FF] transition-colors border-b border-white/5 pb-4 last:border-0">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}