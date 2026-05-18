import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, ArrowRight } from 'lucide-react'

const FORMSPREE_ID = 'xvzypjgk'

export default function Modals({ activeModal, onClose }: { activeModal: string | null, onClose: () => void }) {
  const [earlyAccessForm, setEarlyAccessForm] = useState({ nombre: '', email: '', empresa: '' })
  const [earlyAccessStatus, setEarlyAccessStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [whatsappStatus, setWhatsappStatus] = useState<'idle' | 'error'>('idle')

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

  const handleWhatsappClick = () => {
    setWhatsappStatus('error')
    setTimeout(() => setWhatsappStatus('idle'), 8000)
  }

  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
          <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)]" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><X className="w-6 h-6" /></button>

            {activeModal === 'earlyAccess' && (
              <div className="space-y-6 text-center">
                <div className="inline-block p-4 rounded-full bg-[#00F0FF]/5 border border-[#00F0FF]/20 mb-2">
                  <ShieldCheck className="w-8 h-8 text-[#00F0FF]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Portal en Desarrollo</h2>
                <p className="text-gray-400 max-w-sm mx-auto text-sm">Dejá tus datos y te damos acceso prioritario cuando esté listo.</p>
                <div className="inline-flex items-center gap-2 bg-[#00F0FF]/5 border border-[#00F0FF]/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                  <span className="text-[#00F0FF] text-xs font-mono tracking-wider">23 empresas ya en lista de espera</span>
                </div>
                {earlyAccessStatus === 'success' ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-8">
                    <p className="text-[#00F0FF] text-lg font-semibold mb-2">¡Listo, estás dentro!</p>
                    <p className="text-gray-400 text-sm">Te contactamos cuando el portal esté disponible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleEarlyAccessSubmit} className="max-w-sm mx-auto space-y-4 text-left mt-6">
                    <div>
                      <label className="block text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-wider">Nombre</label>
                      <input type="text" required value={earlyAccessForm.nombre} onChange={(e) => setEarlyAccessForm(f => ({ ...f, nombre: e.target.value }))} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF] text-white transition-all placeholder:text-gray-700" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" required value={earlyAccessForm.email} onChange={(e) => setEarlyAccessForm(f => ({ ...f, email: e.target.value }))} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF] text-white transition-all placeholder:text-gray-700" placeholder="tu@empresa.com" />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-wider">Empresa</label>
                      <input type="text" required value={earlyAccessForm.empresa} onChange={(e) => setEarlyAccessForm(f => ({ ...f, empresa: e.target.value }))} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF] text-white transition-all placeholder:text-gray-700" placeholder="Nombre de tu empresa" />
                    </div>
                    {earlyAccessStatus === 'error' && <p className="text-red-400 text-xs">Hubo un error, intentá de nuevo.</p>}
                    <button type="submit" disabled={earlyAccessStatus === 'loading'} className="w-full mt-4 bg-white text-black font-bold py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60">
                      {earlyAccessStatus === 'loading' ? 'Enviando...' : <><span>Solicitar Acceso Anticipado</span><ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeModal === 'legal' && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Aviso Legal (The Authority Framework)</h2>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Identidad</h3><p className="text-gray-400 text-sm leading-relaxed">Austreon es una marca operada por nuestra entidad legal corporativa, con domicilio operativo conjunto en los hubs de Osorno y Santiago, Chile.</p></div>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Propiedad Intelectual</h3><p className="text-gray-400 text-sm leading-relaxed">Todos los algoritmos de IA, la "Pieza Maestra" tecnológica, el software Med-OS, interfaces y diseños de arquitectura de mercados presentados son propiedad exclusiva de Austreon.</p></div>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Uso del Sitio</h3><p className="text-gray-400 text-sm leading-relaxed">Queda estrictamente prohibido el uso de bots, scraping, minería de datos o cualquier método automatizado para copiar, extraer o replicar la estructura de los proyectos, código o estrategias expuestas en esta plataforma.</p></div>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Cláusula de Exención</h3><p className="text-gray-400 text-sm leading-relaxed">Austreon ofrece soluciones avanzadas de arquitectura e infraestructura tecnológica. No nos hacemos responsables por el mal uso, alteraciones no autorizadas o negligencia operativa que terceros den a los sistemas integrados.</p></div>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Política de Privacidad (The Sovereignty Core)</h2>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Compromiso de Soberanía</h3><p className="text-gray-400 text-sm leading-relaxed">En Austreon no vendemos ni monetizamos datos. Nuestro modelo se basa en la Soberanía Local absoluta: los datos pertenecen exclusivamente al cliente y se alojan en infraestructuras cifradas y dedicadas (Oracle / Hetzner Cloud).</p></div>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Recolección de Datos</h3><ul className="text-gray-400 text-sm leading-relaxed list-disc list-inside space-y-2"><li><strong>Formularios:</strong> Solo recolectamos nombre, email y empresa con fines estrictamente comerciales y de contacto B2B.</li><li><strong>Cookies:</strong> Uso exclusivo para el funcionamiento técnico de la plataforma, sin rastreo publicitario de terceros.</li></ul></div>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Seguridad</h3><p className="text-gray-400 text-sm leading-relaxed">Aplicamos estándares de cifrado de alto nivel (AES-256) y protocolos de auditoría interna continua, asegurando el blindaje total de la información.</p></div>
                <div><h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Derechos ARCO</h3><p className="text-gray-400 text-sm leading-relaxed">Garantizamos que cualquier usuario puede ejercer sus derechos para solicitar Acceso, Rectificación, Cancelación u Oposición a sus datos en cualquier momento.</p></div>
              </div>
            )}

            {activeModal === 'contact' && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Construyamos la próxima <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-500">pieza maestra.</span></h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">Selecciona tu línea de interés para conectarte con el equipo especializado.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 text-left">
                  <a href="mailto:austreon.am@gmail.com?subject=Alianzas%20Globales" className="block p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 transition-all group"><h4 className="text-white font-bold mb-1 group-hover:text-[#00F0FF] transition-colors text-sm">Alianzas Globales</h4><p className="text-xs text-gray-400">Partners tecnológicos y co-ingeniería internacional.</p></a>
                  <a href="mailto:austreon.am@gmail.com?subject=Vertical%20Salud%20e%20Industria" className="block p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 transition-all group"><h4 className="text-white font-bold mb-1 group-hover:text-[#00F0FF] transition-colors text-sm">Vertical Salud / Industria</h4><p className="text-xs text-gray-400">Despliegues locales y pilotos operativos en Chile.</p></a>
                  <a href="mailto:austreon.am@gmail.com?subject=Soporte%20Técnico" className="block p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 transition-all group"><h4 className="text-white font-bold mb-1 group-hover:text-[#00F0FF] transition-colors text-sm">Soporte Técnico</h4><p className="text-xs text-gray-400">Para clientes actuales con infraestructura desplegada.</p></a>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/10 pt-6">
                  <div className="text-center md:text-left">
                    <h4 className="text-[#00F0FF] font-mono text-xs tracking-widest uppercase mb-2">Datos de Ubicación</h4>
                    <p className="text-gray-400 text-sm"><strong className="text-white">Hub Sur:</strong> Osorno, Los Lagos, Chile.</p>
                    <p className="text-gray-400 text-sm"><strong className="text-white">Hub Central:</strong> Santiago, Chile.</p>
                  </div>
                  <div className="h-12 w-px bg-white/10 hidden md:block" />
                  <div className="text-center md:text-left flex flex-col gap-3">
                    <a href="mailto:austreon.am@gmail.com" className="text-white hover:text-[#00F0FF] font-medium transition-colors text-sm">austreon.am@gmail.com</a>
                    <div className="relative flex flex-col items-center md:items-start">
                      <button onClick={handleWhatsappClick} className="inline-flex items-center gap-2 bg-[#25D366] text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-[#25D366]/90 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Directo
                      </button>
                      <AnimatePresence>
                        {whatsappStatus === 'error' && (
                          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-3 text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-2 rounded-md leading-tight min-w-[250px] z-50 text-center md:text-left">
                            En estos momentos no podemos procesar su solicitud, favor contactar al mail <a href="mailto:austreon.am@gmail.com" className="font-bold underline hover:text-white transition-colors">austreon.am@gmail.com</a>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
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