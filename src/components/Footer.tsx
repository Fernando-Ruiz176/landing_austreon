import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, ShieldCheck } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

const FORMSPREE_ID = 'xvzypjgk'

export default function Footer({
  onOpenModal,
}: {
  onOpenModal: (modal: string) => void
}) {
  const { lang } = useLang()
  const t = lang === 'es' ? es.footer : en.footer
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ tipo: 'Newsletter', email: newsletterEmail }),
      })
      if (res.ok) {
        setNewsletterStatus('success')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <footer className="relative z-10 bg-[#080808] border-t border-white/[0.06] pt-20 md:pt-28 pb-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.7fr_1fr] gap-16 md:gap-20 pb-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-7">
              <img src="/austreon-logo.png" alt="Austreon" className="h-10 w-auto object-contain" />
              <div className="h-7 w-px bg-white/10" />
              <span className="text-xl uppercase text-white font-medium tracking-[0.2em]">
                AUSTREON<sup className="text-xs">®</sup>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#86868b] max-w-sm">{t.desc}</p>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://www.linkedin.com/company/austreon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#86868b] hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white text-[12px] uppercase tracking-[0.18em] mb-7 font-semibold">{t.ecosystem}</h4>
            <ul className="space-y-4">
              {t.links.map((label) => (
                <li key={label}>
                  <a href="#proyectos" className="text-sm text-[#86868b] hover:text-white transition-colors duration-300">{label}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://dent.austreon.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0071e3] hover:text-white transition-colors duration-300"
                >
                  {t.pilotLink}
                </a>
              </li>
              <li>
                <a
                  href="https://vet.austreon.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0071e3] hover:text-white transition-colors duration-300"
                >
                  {t.pilotLinkVet}
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-white text-[12px] uppercase tracking-[0.18em] mb-7 font-semibold">{t.insightsTitle}</h4>
            <p className="text-sm leading-relaxed text-[#86868b] mb-6">{t.insightsDesc}</p>
            {newsletterStatus === 'success' ? (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-[#0071e3] text-sm font-medium">
                {t.successMsg}
              </motion.p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="h-12 w-full rounded-full border border-white/[0.08] bg-white/[0.03] px-5 text-sm text-white placeholder-[#555] outline-none focus:border-[#0071e3] transition-colors duration-300"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="h-12 px-6 rounded-full bg-white text-black text-sm font-medium whitespace-nowrap hover:bg-white/90 active:scale-95 transition-all duration-200 disabled:opacity-60"
                >
                  {newsletterStatus === 'loading' ? '...' : t.join}
                </button>
                {newsletterStatus === 'error' && (
                  <p className="text-red-400 text-xs mt-2">{t.errorMsg}</p>
                )}
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 items-center md:items-start">
            <p className="text-[13px] text-[#86868b]">© {new Date().getFullYear()} Austreon Market Architecture & Synthetic Intelligence SpA. {t.rights}</p>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#444]">{t.location}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              {[
                { label: t.legal, modal: 'legal' },
                { label: t.privacy, modal: 'privacy' },
                { label: t.contact, modal: 'contact' },
              ].map((item) => (
                <button
                  key={item.modal}
                  onClick={() => onOpenModal(item.modal)}
                  className="text-[13px] text-[#86868b] hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0071e3]" />
              <span className="text-[11px] text-[#555] tracking-wide">{t.certified}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}