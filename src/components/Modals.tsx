import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, ArrowRight } from 'lucide-react'

const FORMSPREE_ID = 'xvzypjgk'

export default function Modals({ activeModal, onClose }: { activeModal: string | null, onClose: () => void }) {
  const [earlyAccessForm, setEarlyAccessForm] = useState({ nombre: '', email: '', empresa: '' })
  const [earlyAccessStatus, setEarlyAccessStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleEarlyAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEarlyAccessStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ tipo: 'Acceso Anticipado', ...earlyAccessForm }),
      })
      setEarlyAccessStatus(res.ok ? 'success' : 'error')
    } catch {
      setEarlyAccessStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif' }}
            className="bg-[#1c1c1e] border border-white/[0.08] rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors duration-200">
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'earlyAccess' && (
              <div className="space-y-6 text-center">
                <div className="inline-block p-4 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 mb-2">
                  <ShieldCheck className="w-8 h-8 text-[#0071e3]" />
                </div>
                <h2 style={{ letterSpacing: '-0.03em', fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }} className="text-2xl md:text-3xl font-bold text-white">Portal en Desarrollo</h2>
                <p className="text-gray-400 max-w-sm mx-auto text-sm">Dejá tus datos y te damos acceso prioritario cuando esté listo.</p>
                <div className="inline-flex items-center gap-2 bg-[#0071e3]/[0.08] border border-[#0071e3]/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse" />
                  <span className="text-[#0071e3] text-xs font-mono tracking-wider">23 empresas ya en lista de espera</span>
                </div>
                {earlyAccessStatus === 'success' ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-8">
                    <p className="text-[#0071e3] text-lg font-semibold mb-2">¡Listo, estás dentro!</p>
                    <p className="text-gray-400 text-sm">Te contactamos cuando el portal esté disponible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleEarlyAccessSubmit} className="max-w-sm mx-auto space-y-4 text-left mt-6">
                    {['nombre', 'email', 'empresa'].map((field) => (
                      <div key={field}>
                        <label className="block text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-wider">{field}</label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          required
                          value={earlyAccessForm[field as keyof typeof earlyAccessForm]}
                          onChange={(e) => setEarlyAccessForm(f => ({ ...f, [field]: e.target.value }))}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0071e3] text-white transition-all duration-200 placeholder:text-gray-700"
                          placeholder={field === 'email' ? 'tu@empresa.com' : field === 'nombre' ? 'Tu nombre' : 'Nombre de tu empresa'}
                        />
                      </div>
                    ))}
                    {earlyAccessStatus === 'error' && <p className="text-red-400 text-xs">Hubo un error, intentá de nuevo.</p>}
                    <button
                      type="submit"
                      disabled={earlyAccessStatus === 'loading'}
                      className="w-full mt-4 bg-white text-black font-semibold py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {earlyAccessStatus === 'loading' ? 'Enviando...' : <><span>Solicitar Acceso Anticipado</span><ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeModal === 'legal' && (
              <div className="space-y-6">
                <h2 style={{ letterSpacing: '-0.02em' }} className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/[0.08] pb-4">Aviso Legal</h2>
                {[
                  { title: 'Identidad', text: 'Austreon Market Architecture & Synthetic Intelligence SpA, con domicilio en Osorno, Chile.' },
                  { title: 'Propiedad Intelectual', text: 'Todos los algoritmos de IA, el software Dent-OS by Austreon, interfaces y diseños de arquitectura presentados son propiedad exclusiva de Austreon.' },
                  { title: 'Uso del Sitio', text: 'Queda strictly prohibido el uso de bots, scraping, minería de datos o cualquier método automatizado para copiar, extraer o replicar la estructura de los proyectos, código o estrategias expuestas en esta plataforma.' },
                  { title: 'Cláusula de Exención', text: 'Austreon ofrece soluciones de automatización conversacional para negocios de servicios. No nos hacemos responsables por el mal uso, alteraciones no autorizadas o negligencia operativa que terceros den a los sistemas integrados.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[#0071e3] font-mono text-xs tracking-widest uppercase mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-6">
                <h2 style={{ letterSpacing: '-0.02em' }} className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/[0.08] pb-4">Política de Privacidad</h2>
                {[
                  { title: 'Compromiso de Soberanía', text: 'En Austreon no vendemos ni monetizamos datos. Los datos pertenecen exclusivamente al cliente y se alojan en infraestructura cifrada dedicada (Hetzner Cloud).' },
                  { title: 'Seguridad', text: 'Aplicamos cifrado en tránsito y en reposo (AES-256) y buenas prácticas de seguridad. No realizamos auditorías externas de terceros ni certificaciones como ISO 27001 en esta etapa.' },
                  { title: 'Derechos ARCO', text: 'Garantizamos que cualquier usuario puede ejercer sus derechos para solicitar Acceso, Rectificación, Cancelación u Oposición a sus datos en cualquier momento.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[#0071e3] font-mono text-xs tracking-widest uppercase mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-6 text-center">
                <h2 style={{ letterSpacing: '-0.03em', fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }} className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Construyamos la próxima <span className="text-[#0071e3]">pieza maestra.</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">Selecciona tu línea de interés para conectarte con el equipo especializado.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 text-left">
                  {[
                    { email: 'contacto@austreon.cl', subject: 'Alianzas%20Globales', title: 'Alianzas Globales', desc: 'Partners tecnológicos y co-ingeniería internacional.' },
                    { email: 'headproject@austreon.cl', subject: 'Vertical%20Salud%20e%20Industria', title: 'Vertical Salud / Industria', desc: 'Despliegues locales y pilotos operativos en Chile.' },
                    { email: 'soporte@austreon.cl', subject: 'Soporte%20Técnico', title: 'Soporte Técnico', desc: 'Para clientes actuales con infraestructura desplegada.' },
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={`mailto:${item.email}?subject=${item.subject}`}
                      className="block p-4 md:p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-[#0071e3]/[0.08] hover:border-[#0071e3]/30 transition-all duration-300 group"
                    >
                      <h4 className="text-white font-semibold mb-1 group-hover:text-[#0071e3] transition-colors duration-200 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </a>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/[0.08] pt-6">
                  <div className="text-center md:text-left">
                    <h4 className="text-[#0071e3] font-mono text-xs tracking-widest uppercase mb-2">Ubicación</h4>
                    <p className="text-gray-400 text-sm"><strong className="text-white">Osorno, Los Lagos, Chile.</strong></p>
                  </div>
                  <div className="h-12 w-px bg-white/[0.08] hidden md:block" />
                  <div className="flex flex-col gap-3 items-center">
                    <a href="mailto:contacto@austreon.cl" className="text-white hover:text-[#0071e3] font-medium transition-colors duration-200 text-sm">contacto@austreon.cl</a>
                    <a
                      href="https://wa.me/56964985161"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-black px-4 py-2 rounded-full font-semibold text-sm hover:scale-[1.02] transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp Directo
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}