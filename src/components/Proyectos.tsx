import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, title: 'Aether Infrastructure', status: 'Live', tech: 'Edge Computing / Kubernetes / Hybrid Cloud', impact: 'Disponibilidad del 99.9% en entornos críticos', category: 'Arquitectura', desc: 'Ecosistema de infraestructura híbrida diseñado para la convergencia de hardware local y procesamiento en la nube.' },
  { id: 2, title: 'Sovereign Core', status: 'Beta', tech: 'LLM Local / Python / Vector Databases', impact: 'Seguridad de datos nivel Grado Médico', category: 'IA Soberana', desc: 'Motor de inteligencia sintética entrenado para ejecución On-Premise, garantizando soberanía digital absoluta.' },
  { id: 3, title: 'Axiom Workflow', status: 'R&D', tech: 'Low-Code Engine / REST APIs / IA Agents', impact: 'Reducción del 40% en costos operativos', category: 'Automatización', desc: 'Sistema de automatización de procesos operativos de punta a punta.' },
  { id: 4, title: 'Industrial Bridge', status: 'R&D', tech: 'IoT Protocols / SCADA / API Gateway', impact: 'Interoperabilidad hardware-software total', category: 'Arquitectura', desc: 'Conectividad de hardware legado con sistemas de gestión moderna para sectores productivos.' },
  { id: 5, title: 'Guardian QA', status: 'Beta', tech: 'ISO 27001 / Pentesting / CI/CD Pipelines', impact: 'Validación bajo estándares globales', category: 'Arquitectura', desc: 'Célula de auditoría técnica bajo estándares globales para la validación de seguridad y calidad.' },
  { id: 6, title: 'Ethic Data Fortress', status: 'R&D', tech: 'AES-256 / Zero-Knowledge / On-Premise DB', impact: 'Cumplimiento normativo de salud 100%', category: 'IA Soberana', desc: 'Protocolos de encriptación y manejo de datos sensibles para el cumplimiento de normativas de salud.' },
  { id: 7, title: 'Synthetic Intelligence Lab', status: 'R&D', tech: 'Fine-Tuning LLM / RAG / MLOps', impact: 'Modelos IA especializados por industria', category: 'IA Soberana', desc: 'Laboratorio de entrenamiento de modelos LLM propios para nichos específicos de la industria chilena.' },
  { id: 8, title: 'Flow-Ops Manager', status: 'Live', tech: 'BPM Engine / RPA / Dashboard Analytics', impact: 'Eliminación de carga operativa manual', category: 'Automatización', desc: 'Motor de automatización de procesos administrativos y logísticos de punta a punta.' },
  { id: 9, title: 'Master Engine: Localizer', status: 'R&D', tech: 'i18n Framework / RegTech / Workflow Adapters', impact: 'Soluciones globales adaptadas a LATAM', category: 'Automatización', desc: 'Framework de adaptación cultural y técnica para soluciones de automatización hacia el ecosistema LATAM.' },
]

const statusConfig = {
  Live: { label: 'Live', dot: 'bg-white', text: 'text-white' },
  Beta: { label: 'Beta', dot: 'bg-white', text: 'text-white/70' },
  'R&D': { label: 'R&D', dot: 'bg-gray-600', text: 'text-gray-600' },
}

export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="proyectos" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">

      <div className="mb-12 md:mb-20">
        <p className="text-xs font-mono text-[#00F0FF] tracking-[0.3em] uppercase mb-4">Ecosistema Tecnológico</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight max-w-lg leading-tight">
            Proyectos en<br className="hidden md:block" /> Desarrollo
          </h2>
          <div className="flex gap-1.5 bg-white/[0.03] p-1 rounded-full border border-white/[0.06] overflow-x-auto w-full md:w-auto">
            {['All', 'Automatización', 'Arquitectura', 'IA Soberana'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const status = statusConfig[project.status as keyof typeof statusConfig]
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-[#0A0A0A] p-7 md:p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    <span className={`text-xs font-mono tracking-wider ${status.text}`}>{status.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{project.category}</span>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/[0.05] flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mt-0.5 shrink-0">Stack</span>
                    <span className="text-[11px] text-gray-400 font-mono leading-relaxed">{project.tech}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mt-0.5 shrink-0">Impacto</span>
                    <span className="text-[11px] text-[#00F0FF]/70 font-mono leading-relaxed">{project.impact}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}