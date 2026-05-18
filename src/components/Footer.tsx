import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, ShieldCheck } from 'lucide-react'

const FORMSPREE_ID = 'xvzypjgk'

export default function Footer({ onOpenModal }: { onOpenModal: (modal: string) => void }) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ tipo: 'Newsletter', email: newsletterEmail }),
      })
      if (res.ok) { setNewsletterStatus('success'); setNewsletterEmail('') }
      else setNewsletterStatus('error')
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-12 md:pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-12 md:h-14 w-auto object-contain" />
            <div className="h-8 w-px bg-white/15" />
            <span className="text-xl md:text-3xl font-extrabold tracking-[0.12em] uppercase text-white">
              AUSTREON
            </span>
          </div>
          <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">Líderes en arquitectura estratégica, soberanía de datos e inteligencia sintética aplicada a la industria y salud de alta complejidad.</p>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://www.linkedin.com/in/austreon-am/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Ecosistema</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Automatización</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Arquitectura</a></li>
            <li><a href="#" className="hover:text-white transition-colors">IA Soberana</a></li>
            <li><a href="https://proyecto1.austreon.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-[#00F0FF]">Piloto: Salud</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Austreon Insights</h4>
          <p className="text-xs text-gray-500 mb-4">Suscríbete para recibir reportes sobre soberanía tecnológica, infraestructura crítica y el futuro de la automatización industrial.</p>
          {newsletterStatus === 'success' ? (
            <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[#00F0FF] text-sm font-medium">¡Listo! Te avisamos cuando haya novedades.</motion.p>
          ) : (
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input type="email" required placeholder="Email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} className="bg-white/5 border border-white/10 rounded-md sm:rounded-l-md sm:rounded-r-none px-4 py-2 text-sm w-full focus:outline-none focus:border-[#00F0FF]" />
                <button type="submit" disabled={newsletterStatus === 'loading'} className="bg-[#00F0FF] text-[#0A0A0A] px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] whitespace-nowrap disabled:opacity-60">
                  {newsletterStatus === 'loading' ? '...' : 'Unirse'}
                </button>
              </div>
              {newsletterStatus === 'error' && <p className="text-red-400 text-xs mt-2">Hubo un error, intentá de nuevo.</p>}
            </form>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p>© {new Date().getFullYear()} Austreon. Todos los derechos reservados.</p>
          <p className="text-gray-500 font-mono tracking-wider">UBICACIÓN: SANTIAGO / OSORNO, CHILE.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex space-x-6">
            <button onClick={() => onOpenModal('legal')} className="hover:text-gray-300 transition-colors">Aviso Legal</button>
            <button onClick={() => onOpenModal('privacy')} className="hover:text-gray-300 transition-colors">Privacidad</button>
            <button onClick={() => onOpenModal('contact')} className="hover:text-gray-300 transition-colors">Contacto</button>
          </div>
          <div className="flex items-center gap-2 text-gray-400 bg-white/[0.03] px-3 py-1.5 rounded border border-white/10 mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="font-medium tracking-wide">Infraestructura Certificada: Oracle / Hetzner Cloud</span>
          </div>
        </div>
      </div>
    </footer>
  )
}