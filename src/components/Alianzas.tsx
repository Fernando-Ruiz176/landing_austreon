import { motion } from 'framer-motion'
import { SiHetzner, SiN8n, SiWhatsapp, SiDocker, SiAirtable } from '@icons-pack/react-simple-icons'
import { useLang } from '../context/LanguageContext'
import { es } from '../translations/es'
import { en } from '../translations/en'

// El paquete de íconos instalado no trae el logo de OpenAI (solo "OpenAI Gym", otro producto),
// así que va como SVG suelto con el path oficial de la marca.
function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>OpenAI</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4592a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

const partners = [
  { name: 'Hetzner', role: { es: 'Bare Metal & Cloud Infrastructure', en: 'Bare Metal & Cloud Infrastructure' }, logo: <SiHetzner className="w-8 h-8" /> },
  { name: 'n8n', role: { es: 'Workflow Automation Engine', en: 'Workflow Automation Engine' }, logo: <SiN8n className="w-8 h-8" /> },
  { name: 'WhatsApp', role: { es: 'Comunicación Omnicanal', en: 'Omnichannel Communication' }, logo: <SiWhatsapp className="w-8 h-8" /> },
  { name: 'OpenAI', role: { es: 'Motor de Inteligencia Conversacional', en: 'Conversational AI Engine' }, logo: <OpenAIIcon className="w-8 h-8" /> },
  { name: 'Airtable', role: { es: 'Base de Datos Operativa', en: 'Operational Database' }, logo: <SiAirtable className="w-8 h-8" /> },
  // Se saco "Co-Engineering" (icono generico, sin alianza real detras). Confirmar con Fernando si hay una alianza real para poner aca.
]

const stack = [
  { name: 'Docker', role: { es: 'Despliegue Local en Contenedores', en: 'Container & Local Deployment' }, logo: <SiDocker className="w-8 h-8" /> },
  // Se saco "Oracle Cloud" -- nunca se uso, solo Hetzner.
  // Se saco "Python" y "Kubernetes" -- no hay codigo en Python (es n8n, low-code) ni Kubernetes.
]

export default function Alianzas() {
  const { lang } = useLang()
  const t = lang === 'es' ? es.alianzas : en.alianzas

  return (
    <section id="alianzas" className="py-24 md:py-36 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-xs font-mono text-[#0071e3] tracking-[0.22em] uppercase mb-5"
        >{t.label}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white tracking-[-0.04em]"
        >{t.title}</motion.h2>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-mono text-white/20 tracking-widest uppercase mb-4 px-1">{t.rowAlliances}</p>
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] border border-white/[0.06] rounded-3xl overflow-hidden">
          {partners.map((partner, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col items-center justify-center gap-4 p-10 md:p-12 bg-[#000000] hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
            >
              <div className="text-white/30 group-hover:text-white transition-colors duration-500">{partner.logo}</div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors duration-400 mb-1">{partner.name}</p>
                <p className="text-[10px] font-mono text-white/20 tracking-widest uppercase leading-relaxed group-hover:text-white/40 transition-colors duration-400">{partner.role[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-mono text-white/20 tracking-widest uppercase mb-4 px-1">{t.rowStack}</p>
        <div className="grid grid-cols-1 divide-y md:divide-y-0 divide-white/[0.06] border border-white/[0.06] rounded-3xl overflow-hidden">
          {stack.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
              className="group flex flex-col items-center justify-center gap-4 p-10 md:p-12 bg-[#000000] hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
            >
              <div className="text-white/30 group-hover:text-white transition-colors duration-500">{item.logo}</div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors duration-400 mb-1">{item.name}</p>
                <p className="text-[10px] font-mono text-white/20 tracking-widest uppercase leading-relaxed group-hover:text-white/40 transition-colors duration-400">{item.role[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}