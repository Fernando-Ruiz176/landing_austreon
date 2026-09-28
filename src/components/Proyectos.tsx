import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

const statusConfig = {
  Live:  { dot: 'bg-emerald-400', text: 'text-emerald-400', ring: 'ring-emerald-400/20' },
  Beta:  { dot: 'bg-amber-400',   text: 'text-amber-400',   ring: 'ring-amber-400/20'  },
  'R&D': { dot: 'bg-gray-500',    text: 'text-gray-500',    ring: 'ring-gray-500/20'   },
}

const gradients: Record<number, string> = {
  0: 'from-[#0071e3]/20 to-transparent',
  1: 'from-blue-900/30 to-transparent',
  2: 'from-violet-900/30 to-transparent',
  3: 'from-cyan-900/30 to-transparent',
  4: 'from-rose-900/20 to-transparent',
  5: 'from-teal-900/20 to-transparent',
}

export default function Proyectos() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.proyectos : en.proyectos
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof t.items[0] | null>(null)

  const filteredProjects = activeFilter === 'All'
    ? t.items
    : t.items.filter(p => p.category === activeFilter)

  return (
    <section id="proyectos" className="py-24 md:py-36 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/[0.05]">

      <div className="mb-14 md:mb-20">
        <p className="text-xs font-semibold text-[#0071e3] tracking-[0.22em] uppercase mb-5">{t.label}</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.04em]">{t.title}</h2>
          <div className="flex gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.06] overflow-x-auto w-full md:w-auto shrink-0">
            {t.filters.map(filter => (
              <button key={filter} onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter ? 'bg-white text-black' : 'text-gray-500 hover:text-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-3xl overflow-hidden border border-white/[0.05]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const status = statusConfig[project.status as keyof typeof statusConfig]
            const isFeatured = (project as any).featured
            return (
              <motion.div layout key={project.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }} onClick={() => setSelectedProject(project)}
                className={`group relative p-8 flex flex-col gap-5 cursor-pointer overflow-hidden transition-colors duration-300 ${
                  isFeatured ? 'bg-[#0a0a0f] hover:bg-[#0d0d14] border-b border-[#0071e3]/10' : 'bg-[#080808] hover:bg-[#0f0f0f]'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                {isFeatured && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0071e3]/40 to-transparent" />}

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full ring-1 ${status.ring} bg-white/[0.03]`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                      <span className={`text-[11px] font-mono tracking-wider ${status.text}`}>{project.status}</span>
                    </div>
                    {isFeatured && (
                      <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase border border-white/[0.08] px-2 py-0.5 rounded-full">
                        {t.featured}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{project.category}</span>
                </div>

                <div className="relative flex-1">
                  <h3 className="text-lg font-semibold text-white leading-snug mb-2 tracking-[-0.02em]">{project.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{project.desc}</p>
                </div>

                <div className="relative pt-5 border-t border-white/[0.05] flex flex-col gap-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mt-0.5 shrink-0 w-12">{t.stack}</span>
                    <span className="text-[11px] text-gray-400 font-mono leading-relaxed">{project.tech}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mt-0.5 shrink-0 w-12">{t.impact}</span>
                    <span className="text-[11px] text-[#0071e3]/80 font-mono leading-relaxed">{project.impact}</span>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                  <span className="text-[#0071e3] text-xs font-medium">{t.viewMore}</span>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl border border-white/[0.08] overflow-hidden bg-[#1c1c1e] shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${statusConfig[selectedProject.status as keyof typeof statusConfig].dot}`} />
                  <span className="text-xs font-mono tracking-wider text-white/40">{selectedProject.status}</span>
                  <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{selectedProject.category}</span>
                </div>
                <button onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full text-gray-600 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-7 py-7">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-[-0.03em]">{selectedProject.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-7">{selectedProject.desc}</p>
                <div className="flex flex-col gap-3">
                  <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/[0.05]">
                    <p className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mb-2">{t.stackLabel}</p>
                    <p className="text-sm text-gray-300 font-mono leading-relaxed">{selectedProject.tech}</p>
                  </div>
                  <div className="bg-[#0071e3]/[0.07] rounded-2xl p-4 border border-[#0071e3]/20">
                    <p className="text-[10px] text-[#0071e3]/50 uppercase tracking-wider font-mono mb-2">{t.impactLabel}</p>
                    <p className="text-sm text-[#0071e3] font-mono leading-relaxed">{selectedProject.impact}</p>
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 flex flex-col gap-3">
                {(selectedProject as any).link && (
                  <a
                    href={(selectedProject as any).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl text-sm font-semibold bg-[#0071e3] text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {t.viewDemo}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <button onClick={() => setSelectedProject(null)}
                  className="w-full py-3.5 rounded-2xl text-sm font-semibold bg-white/[0.06] text-white hover:bg-white/[0.1] active:scale-[0.98] transition-all duration-200"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}