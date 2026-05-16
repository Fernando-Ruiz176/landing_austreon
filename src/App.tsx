import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, LineChart, Cpu, ArrowRight, ExternalLink, Github, Linkedin, Twitter, ChevronDown, ShieldCheck, Clock, BrainCircuit, X } from 'lucide-react';

// Hero Carousel Slide Data
const heroSlides = [
  {
    image: '/hero_slide_1.png',
    label: 'La Inteligencia Operativa',
    title: 'IA que Redefine su Rentabilidad Operativa',
    subtitle: 'Automatización Inteligente & Arquitecturas de Alto Impacto.',
    description: 'Optimizamos su flujo operativo con ecosistemas autónomos basados en IA y computación sintética. Transformamos procesos complejos en sistemas de alto rendimiento que anticipan el mercado y maximizan la utilidad de su empresa.',
    cta: 'Explorar Soluciones',
    ctaLink: '#pilares',
  },
  {
    image: '/hero_slide_2.png',
    label: 'Infraestructura de Ejecución Global',
    title: 'Ingeniería de Clase Mundial para Mercados Locales',
    subtitle: 'Células Técnicas internacionales, Dirección Estratégica en Chile.',
    description: 'Acceda a la potencia de equipos técnicos de élite a través de nuestras alianzas estratégicas internacionales. Implementamos soporte de ingeniería y analítica de datos remota con la agilidad que exigen los sectores más competitivos del país.',
    cta: 'Ver Modelos de Staffing',
    ctaLink: '#alianzas',
  },
  {
    image: '/hero_slide_3.png',
    label: 'Innovación en Sectores Estratégicos',
    title: 'Tecnología de Punta para el ADN Productivo de Chile',
    subtitle: 'Soluciones para distintos sectores e industrias del sur.',
    description: 'Diseñamos soluciones predictivas y de automatización para optimizar la cadena de valor. Transformamos procesos complejos en ecosistemas eficientes de alto rendimiento.',
    cta: 'Descubrir Potencial Industrial',
    ctaLink: '#proyectos',
  },
  {
    image: '/hero_slide_4.png',
    label: 'Transparencia y Blindaje',
    title: 'Gobernanza de Datos y Blindaje Legal Integral',
    subtitle: 'Ciberseguridad Avanzada y Propiedad Intelectual Soberana.',
    description: 'Garantizamos la soberanía de sus datos sensibles mediante auditoría informática y ciberseguridad avanzada. Aseguramos que cada desarrollo y patente generada sea un activo protegido por una estructura legal blindada.',
    cta: 'Conocer nuestro Respaldo',
    ctaLink: '#roadmap',
  },
];

const SLIDE_INTERVAL = 8500; // ms

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [whatsappStatus, setWhatsappStatus] = useState<'idle' | 'error'>('idle');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://arquitecturademercados.cl/', '_blank');
  };

  const handleWhatsappClick = () => {
    setWhatsappStatus('error');
    setTimeout(() => setWhatsappStatus('idle'), 8000);
  };

  // Auto-advance carousel
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const projects = [
    { id: 1, title: 'Aether Infrastructure', status: 'Live', tech: 'Edge Computing / Kubernetes / Hybrid Cloud', impact: 'Disponibilidad del 99.9% en entornos críticos', category: 'Arquitectura', desc: 'Ecosistema de infraestructura híbrida diseñado para la convergencia de hardware local y procesamiento en la nube. Optimiza la transferencia de datos en sectores industriales de alta demanda.' },
    { id: 2, title: 'Sovereign Core', status: 'Beta', tech: 'LLM Local / Python / Vector Databases', impact: 'Seguridad de datos nivel Grado Médico', category: 'IA Soberana', desc: 'Motor de inteligencia sintética entrenado para ejecución On-Premise. Especializado en el procesamiento de datos sensibles sin dependencia de nubes públicas, garantizando soberanía digital absoluta.' },
    { id: 3, title: 'Axiom Workflow', status: 'R&D', tech: 'Low-Code Engine / REST APIs / IA Agents', impact: 'Reducción del 40% en costos operativos', category: 'Automatización', desc: 'Sistema de automatización de procesos operativos de punta a punta. Integra células de trabajo especializadas con flujos lógicos para eliminar cuellos de botella en la gestión administrativa y logística.' },
    { id: 4, title: 'Industrial Bridge', status: 'R&D', tech: 'IoT Protocols / SCADA / API Gateway', impact: 'Interoperabilidad hardware-software total', category: 'Arquitectura', desc: 'Conectividad de hardware legado con sistemas de gestión moderna para sectores productivos (acuícola/agrícola).' },
    { id: 5, title: 'Guardian QA', status: 'Beta', tech: 'ISO 27001 / Pentesting / CI/CD Pipelines', impact: 'Validación bajo estándares globales', category: 'Arquitectura', desc: 'Célula de auditoría técnica bajo estándares globales para la validación de seguridad y calidad en despliegues críticos.' },
    { id: 6, title: 'Ethic Data Fortress', status: 'R&D', tech: 'AES-256 / Zero-Knowledge / On-Premise DB', impact: 'Cumplimiento normativo de salud 100%', category: 'IA Soberana', desc: 'Protocolos de encriptación y manejo de datos sensibles para el cumplimiento de normativas de salud en servidores locales.' },
    { id: 7, title: 'Synthetic Intelligence Lab', status: 'R&D', tech: 'Fine-Tuning LLM / RAG / MLOps', impact: 'Modelos IA especializados por industria', category: 'IA Soberana', desc: 'Laboratorio de entrenamiento de modelos LLM propios para nichos específicos de la industria chilena.' },
    { id: 8, title: 'Flow-Ops Manager', status: 'Live', tech: 'BPM Engine / RPA / Dashboard Analytics', impact: 'Eliminación de carga operativa manual', category: 'Automatización', desc: 'Motor de automatización de procesos administrativos y logísticos de punta a punta, diseñado para eliminar la carga operativa manual.' },
    { id: 9, title: 'Master Engine: Localizer', status: 'R&D', tech: 'i18n Framework / RegTech / Workflow Adapters', impact: 'Soluciones globales adaptadas a LATAM', category: 'Automatización', desc: 'Framework de adaptación cultural y técnica para soluciones de automatización de mercados globales hacia el ecosistema LATAM.' },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00F0FF]/30 font-sans">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-50 transition-all duration-500 ${isNavScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-2 sm:gap-4">
          <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-10 sm:h-12 w-auto object-contain rounded-lg mix-blend-screen" />
          <div className="h-7 w-px bg-white/15" />
          <span className="text-lg sm:text-2xl md:text-[1.7rem] font-extrabold tracking-[0.12em] uppercase whitespace-nowrap">
            <span className="text-white">AUS</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#38bdf8]">TREON</span>
          </span>
        </div>
        <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#pilares" className="hover:text-[#00F0FF] transition-colors">Ecosistema</a>
          <a href="#proyectos" className="hover:text-[#00F0FF] transition-colors">Proyectos</a>
          <a href="#alianzas" className="hover:text-[#00F0FF] transition-colors">Alianzas</a>
          <a href="#roadmap" className="hover:text-[#00F0FF] transition-colors">Roadmap</a>
        </div>
        <button onClick={() => setActiveModal('login')} className="bg-white text-black px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm rounded-full hover:bg-gray-200 transition-all font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] whitespace-nowrap">
          Acceso Portal
        </button>
      </nav>

      {/* Hero Carousel Section */}
      <header className="hero-carousel">
        {/* Background Images */}
        <AnimatePresence mode="sync">
          {heroSlides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className="hero-carousel__slide"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="hero-carousel__image"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="hero-carousel__overlay" />

        {/* Slide Content */}
        <div className="hero-carousel__content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-carousel__text-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="hero-carousel__label">
                {heroSlides[currentSlide].label}
              </span>
              <h1 className="hero-carousel__title">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="hero-carousel__subtitle">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="hero-carousel__description">
                {heroSlides[currentSlide].description}
              </p>
              <a
                href={heroSlides[currentSlide].ctaLink}
                className="hero-carousel__cta group"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
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

        {/* Progress Bar */}
        <div className="hero-carousel__progress-track">
          <motion.div
            className="hero-carousel__progress-bar"
            key={currentSlide}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
          />
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hero-carousel__scroll-indicator"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>

        {/* Ethical Tech Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-30 bg-[#0A0A0A]/60 backdrop-blur-md border border-[#00F0FF]/30 px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_0_15px_rgba(0,240,255,0.15)] group hover:border-[#00F0FF]/60 hover:bg-[#0A0A0A]/80 transition-all cursor-default"
        >
          <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
          <span className="text-xs font-semibold tracking-wide text-gray-200 group-hover:text-white transition-colors">TECNOLOGÍA ÉTICA</span>
        </motion.div>
      </header>

      {/* Pilares (Core) */}
      <section id="pilares" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Propuesta de <span className="text-[#00F0FF]">Valor</span></h2>
        
        {/* Usamos group/cards para detectar el hover general y atenuar el resto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 group/cards">
          {[
            { icon: <Bot className="w-6 h-6 group-hover/card:animate-pulse" />, title: "Automatización Inteligente", desc: "Diseñamos ecosistemas autónomos y células de trabajo híbridas que ejecutan tareas críticas con precisión algorítmica. Reducimos la fricción operativa mediante flujos de trabajo inteligentes que aprenden y se adaptan a la velocidad de su industria." },
            { icon: <LineChart className="w-6 h-6 group-hover/card:animate-pulse" />, title: "Arquitectura de Mercados e Infraestructura", desc: "Construimos la estructura técnica donde convergen el hardware y la tecnología. Diseñamos el mapa de procesos, la integración de sistemas locales y la estrategia de ejecución para asegurar un despliegue operativo de alto impacto en sectores productivos." },
            { icon: <Cpu className="w-6 h-6 group-hover/card:animate-pulse" />, title: "IA Sintética & Soberana", desc: "Transformamos datos de alta densidad en activos de decisión que residen físicamente en su organización. Implementamos capas de IA para el análisis predictivo bajo modelos de soberanía de datos, garantizando ventaja competitiva y blindaje digital." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              /* Hover Effects: Translate Y, Shadow, Opacity logic for peers */
              className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/5 transition-all duration-500 group/card relative overflow-hidden opacity-100 hover:!opacity-100 group-hover/cards:opacity-40 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(0,240,255,0.15)] hover:border-[#00F0FF]/40 cursor-default"
            >
              {/* Background Data Matrix Pattern (visible only on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle at center, #00F0FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
              />
              
              {/* Top border highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-[#00F0FF] group-hover/card:scale-110 group-hover/card:bg-[#00F0FF]/10 transition-all duration-500 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vertical Salud */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-[400px] lg:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Dental Clinic Interface" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-overlay" />
            
            {/* Overlay Data Elements for tech feel */}
            <div className="absolute top-6 left-6 bg-[#0A0A0A]/60 backdrop-blur-md border border-[#00F0FF]/30 rounded-xl p-5 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
                <span className="text-xs font-mono text-[#00F0FF] tracking-wider">AUSTREON MED-OS</span>
              </div>
              <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00F0FF] to-blue-500 w-[85%]" />
              </div>
            </div>
            
            {/* Bottom floating metric */}
            <div className="absolute bottom-6 right-6 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex gap-4 items-center shadow-2xl">
              <div className="w-10 h-10 rounded-full border-2 border-[#00F0FF] border-t-transparent animate-spin" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Precisión Diagnóstica</p>
                <p className="text-xl font-bold text-white">99.2%</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-bold tracking-widest uppercase">
              Primer Despliegue Estratégico
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Vertical Salud: La Eficiencia que Humaniza el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-600">Cuidado.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
              Aunque hoy optimizamos la gestión en clínicas dentales de alta complejidad, hemos diseñado una pieza maestra tecnológica capaz de ser adaptada a cualquier vertical de la salud o industria. Nuestro ecosistema de IA Soberana es un motor universal que se moldea según la realidad operativa de cada cliente.
            </p>

            <div className="space-y-8">
              {/* Point 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-5"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Optimización de Flujos</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Reducción de tiempos de espera mediante algoritmos de asignación inteligente.</p>
                </div>
              </motion.div>

              {/* Point 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-5"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Análisis Predictivo</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Anticipación de necesidades de insumos y gestión predictiva de pacientes.</p>
                </div>
              </motion.div>

              {/* Point 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-5"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Soberanía de Datos</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Blindaje total mediante infraestructura local que asegura que la información sensible nunca salga de la red de la clínica.</p>
                </div>
              </motion.div>
            </div>

              {/* CTA Proyecto Piloto */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <a
                  href="https://proyecto1.austreon.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#00F0FF]/60 text-[#00F0FF] font-semibold text-base md:text-lg hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 group"
                >
                  Explorar Proyecto Piloto: Gestión Dental
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </motion.div>
          </div>
        </div>

        {/* Frase de cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg md:text-2xl font-light italic max-w-4xl mx-auto leading-relaxed px-4 py-6 border-t border-b border-white/5 bg-white/[0.01]">
            "Austreon entrega soluciones cerradas: proporcionamos la estrategia, la tecnología y el capital humano especializado para operar su infraestructura de manera autónoma."
          </p>
        </motion.div>
      </section>

      {/* Proyectos en Desarrollo */}
      <section id="proyectos" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Proyectos en Desarrollo</h2>
            <p className="text-gray-400">Innovación continua materializada en soluciones escalables.</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto w-full md:w-auto">
            {['All', 'Automatización', 'Arquitectura', 'IA Soberana'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === filter ? 'bg-[#00F0FF] text-[#0A0A0A]' : 'text-gray-400 hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              className={`p-6 rounded-2xl bg-white/[0.02] border border-white/5 cursor-pointer hover:bg-white/[0.04] transition-all overflow-hidden ${expandedProject === project.id ? 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.status === 'Live' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : project.status === 'Beta' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                  {project.status}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-[#00F0FF] text-sm mb-4">{project.category}</p>
              
              {expandedProject === project.id && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <p className="text-gray-300 mb-6">{project.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#0A0A0A]/50 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-gray-500 mb-1">Tecnologías Clave</p>
                      <p className="font-mono text-sm">{project.tech}</p>
                    </div>
                    <div className="bg-[#0A0A0A]/50 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-gray-500 mb-1">Impacto Esperado</p>
                      <p className="font-mono text-sm">{project.impact}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alianzas Estratégicas */}
      <section id="alianzas" className="py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Alianzas Estratégicas</h2>
          <p className="text-gray-400 text-sm md:text-base font-light mb-16 max-w-2xl mx-auto">
            "Nuestras soluciones se construyen sobre la infraestructura más robusta y segura a nivel global."
          </p>
          <div className="flex flex-wrap justify-center items-start gap-12 md:gap-20 opacity-80">
            {[
              { name: 'Hetzner / Oracle', role: 'Bare Metal & Cloud Infrastructure', icon: '☁️' },
              { name: 'n8n', role: 'Workflow Automation Engine', icon: '⚙️' },
              { name: 'WhatsApp Business', role: 'Omnichannel Communication', icon: '💬' },
              { name: 'Strategic Alliances', role: 'International Co-Engineering', icon: '🌍' }
            ].map((partner, i) => (
              <div key={i} className="group flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 max-w-[200px]">
                <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm relative overflow-hidden mb-4 group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/5 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{partner.icon}</span>
                </div>
                <div className="text-base font-bold text-white mb-1 text-center">{partner.name}</div>
                <span className="text-[10px] font-mono text-[#00F0FF] tracking-widest text-center uppercase">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifiesto / Breve Historia */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-blue-600/5 blur-[80px] -z-10 rounded-full" />
        <h2 className="text-sm font-mono text-[#00F0FF] tracking-[0.3em] uppercase mb-6">NUESTRA GÉNESIS</h2>
        <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-8">
          "Nacimos de la necesidad de devolverle el control a las organizaciones. Austreon se fundó con una premisa inquebrantable: <strong className="text-white font-medium">los ecosistemas del mañana deben ser soberanos, autónomos y construidos para durar.</strong>"
        </p>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Lo que comenzó como un laboratorio de investigación en alta fidelidad de datos, evolucionó al entender que la verdadera innovación no está en la nube, sino en la arquitectura local estratégica. Hoy, somos los arquitectos que integran inteligencia sintética y hardware robusto para redefinir la eficiencia operativa donde más importa: en el corazón de la industria y la salud.
        </p>
      </section>

      {/* Roadmap & Visión */}
      <section id="roadmap" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Roadmap Tecnológico</h2>
          <p className="text-gray-400">Nuestra trayectoria hacia la singularidad operativa.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:mx-auto md:w-0">
          {[
            { q: "Q1 2025", title: "Validación de Arquitectura", desc: "Despliegue del núcleo tecnológico de Austreon. Validación de protocolos de Soberanía de Datos y lanzamiento exitoso del piloto Med-OS en el sector clínico." },
            { q: "Q1 2026", title: "Consolidación y Escalamiento", desc: "Integración de la 'Pieza Maestra' en infraestructuras industriales. Optimización de procesos críticos mediante agentes de automatización local." },
            { q: "Q2-Q3 2026", title: "Alianzas Globales", desc: "FASE ACTUAL: Apertura del hub de co-ingeniería internacional. Integración estratégica de capacidades globales para el despliegue masivo en LATAM." },
            { q: "Q4 2026+", title: "Ecosistema Autónomo", desc: "Lanzamiento de la red de Inteligencia Sintética auto-gestionada. Estándar de soberanía tecnológica para grandes corporaciones regionales." }
          ].map((item, i) => {
            const isActive = i === 2;
            return (
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={i} 
                className={`mb-24 md:w-[400px] relative ${i % 2 === 0 ? 'md:ml-auto md:pl-12 pl-10' : 'md:mr-auto md:pr-12 md:-ml-[400px] md:text-right pl-10'} ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100 transition-opacity duration-500'}`}
              >
                {/* Dot / Indicator */}
                <div className={`absolute top-1 w-4 h-4 rounded-full ${isActive ? 'bg-[#00F0FF] shadow-[0_0_20px_#00F0FF]' : 'bg-[#0A0A0A] border-2 border-[#00F0FF]/30'} ${i % 2 === 0 ? 'left-[-8px] md:left-[-8px]' : 'left-[-8px] md:right-[-8px] md:left-auto'} transition-all duration-300 z-10`}>
                  {isActive && <div className="absolute inset-0 rounded-full bg-[#00F0FF] animate-ping opacity-75" />}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className={`text-sm font-mono font-bold tracking-widest ${isActive ? 'text-[#00F0FF]' : 'text-[#00F0FF]/60'} flex items-center ${i % 2 !== 0 ? 'md:justify-end' : ''} gap-3`}>
                    {item.q}
                    {isActive && (
                      <span className="text-[9px] bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 px-2 py-0.5 rounded-full inline-block animate-pulse tracking-widest uppercase">
                        USTED ESTÁ AQUÍ
                      </span>
                    )}
                  </span>
                  <h3 className={`text-2xl font-bold mt-2 mb-3 ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.title}</h3>
                  <p className={`text-base leading-relaxed ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-14 w-auto object-contain rounded-lg mix-blend-screen" />
              <div className="h-8 w-px bg-white/15" />
              <span className="text-2xl md:text-3xl font-extrabold tracking-[0.12em] uppercase">
                <span className="text-white">AUS</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#38bdf8]">TREON</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
              Líderes en arquitectura estratégica, soberanía de datos e inteligencia sintética aplicada a la industria y salud de alta complejidad.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-[#00F0FF] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/austreon-am/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors"><Github className="w-5 h-5" /></a>
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
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input type="email" required placeholder="Email" className="bg-white/5 border border-white/10 rounded-md sm:rounded-l-md sm:rounded-r-none px-4 py-2 text-sm w-full focus:outline-none focus:border-[#00F0FF]" />
                <button type="submit" className="bg-[#00F0FF] text-[#0A0A0A] px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm font-bold transition-all duration-300 hover:bg-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] whitespace-nowrap">
                  Unirse
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p>© {new Date().getFullYear()} Austreon. Todos los derechos reservados.</p>
            <p className="text-gray-500 font-mono tracking-wider">UBICACIÓN: SANTIAGO / OSORNO, CHILE.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <button onClick={() => setActiveModal('legal')} className="hover:text-gray-300 transition-colors">Aviso Legal</button>
              <button onClick={() => setActiveModal('privacy')} className="hover:text-gray-300 transition-colors">Privacidad</button>
              <button onClick={() => setActiveModal('contact')} className="hover:text-gray-300 transition-colors">Contacto</button>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-white/[0.03] px-3 py-1.5 rounded border border-white/10 mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="font-medium tracking-wide">Infraestructura Certificada: Oracle / Hetzner Cloud</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {activeModal === 'legal' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Aviso Legal (The Authority Framework)</h2>
                  
                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Identidad</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Austreon es una marca operada por nuestra entidad legal corporativa, con domicilio operativo conjunto en los hubs de Osorno y Santiago, Chile.</p>
                  </div>

                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Propiedad Intelectual</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Todos los algoritmos de IA, la "Pieza Maestra" tecnológica, el software Med-OS, interfaces y diseños de arquitectura de mercados presentados son propiedad exclusiva de Austreon.</p>
                  </div>

                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Uso del Sitio</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Queda estrictamente prohibido el uso de bots, scraping, minería de datos o cualquier método automatizado para copiar, extraer o replicar la estructura de los proyectos, código o estrategias expuestas en esta plataforma.</p>
                  </div>

                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Cláusula de Exención (Disclaimer)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Austreon ofrece soluciones avanzadas de arquitectura e infraestructura tecnológica. No nos hacemos responsables por el mal uso, alteraciones no autorizadas o negligencia operativa que terceros den a los sistemas integrados una vez entregados bajo el marco de soluciones cerradas.</p>
                  </div>
                </div>
              )}

              {activeModal === 'privacy' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Política de Privacidad (The Sovereignty Core)</h2>
                  
                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Compromiso de Soberanía</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">En Austreon no vendemos ni monetizamos datos. Nuestro modelo se basa en la Soberanía Local absoluta: los datos pertenecen exclusivamente al cliente y se alojan en infraestructuras cifradas y dedicadas (Oracle / Hetzner Cloud).</p>
                  </div>

                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Recolección de Datos</h3>
                    <ul className="text-gray-400 text-sm leading-relaxed list-disc list-inside space-y-2">
                      <li><strong>Formularios:</strong> Solo recolectamos nombre, email y empresa con fines estrictamente comerciales y de contacto B2B.</li>
                      <li><strong>Cookies:</strong> Uso exclusivo para el funcionamiento técnico de la plataforma y análisis interno de rendimiento, sin rastreo publicitario de terceros.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Seguridad</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Aplicamos estándares de cifrado de alto nivel (AES-256) y protocolos de auditoría interna continua a través de nuestro equipo Guardian QA, asegurando el blindaje total de la información.</p>
                  </div>

                  <div>
                    <h3 className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-2">Derechos ARCO</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Garantizamos que cualquier usuario puede ejercer sus derechos para solicitar Acceso, Rectificación, Cancelación u Oposición a sus datos en cualquier momento escribiendo a nuestros canales oficiales.</p>
                  </div>
                </div>
              )}

              {activeModal === 'contact' && (
                <div className="space-y-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Construyamos la próxima <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-500">pieza maestra.</span></h2>
                  <p className="text-gray-400 mb-10 max-w-md mx-auto">Selecciona tu línea de interés para conectarte con el equipo especializado.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                    <a href="mailto:contacto@austreon.cl?subject=Alianzas%20Globales" className="block p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 transition-all group">
                      <h4 className="text-white font-bold mb-1 group-hover:text-[#00F0FF] transition-colors">Alianzas Globales</h4>
                      <p className="text-xs text-gray-400">Partners tecnológicos y co-ingeniería internacional.</p>
                    </a>
                    <a href="mailto:contacto@austreon.cl?subject=Vertical%20Salud%20e%20Industria" className="block p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 transition-all group">
                      <h4 className="text-white font-bold mb-1 group-hover:text-[#00F0FF] transition-colors">Vertical Salud / Industria</h4>
                      <p className="text-xs text-gray-400">Despliegues locales y pilotos operativos en Chile.</p>
                    </a>
                    <a href="mailto:contacto@austreon.cl?subject=Soporte%20Técnico" className="block p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 transition-all group">
                      <h4 className="text-white font-bold mb-1 group-hover:text-[#00F0FF] transition-colors">Soporte Técnico</h4>
                      <p className="text-xs text-gray-400">Para clientes actuales con infraestructura desplegada.</p>
                    </a>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/10 pt-8 mt-8">
                    <div className="text-center md:text-left">
                      <h4 className="text-[#00F0FF] font-mono text-xs tracking-widest uppercase mb-2">Datos de Ubicación</h4>
                      <p className="text-gray-400 text-sm"><strong className="text-white">Hub Sur:</strong> Osorno, Los Lagos, Chile.</p>
                      <p className="text-gray-400 text-sm"><strong className="text-white">Hub Central:</strong> Santiago, Chile.</p>
                    </div>
                    
                    <div className="h-12 w-px bg-white/10 hidden md:block" />
                    
                    <div className="text-center md:text-left flex flex-col gap-3">
                      <a href="mailto:contacto@austreon.cl" className="text-white hover:text-[#00F0FF] font-medium transition-colors flex items-center gap-2 justify-center md:justify-start">
                        contacto@austreon.cl
                      </a>
                      <div className="relative flex flex-col items-center md:items-start">
                        <button onClick={handleWhatsappClick} className="inline-flex items-center gap-2 bg-[#25D366] text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-[#25D366]/90 transition-colors mx-auto md:mx-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          WhatsApp Directo
                        </button>
                        <AnimatePresence>
                          {whatsappStatus === 'error' && (
                            <motion.p 
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-3 text-xs text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-2 rounded-md leading-tight min-w-[250px] z-50 text-center md:text-left"
                            >
                              En estos momentos no podemos procesar su solicitud, favor contactar al mail <a href="mailto:contacto@austreon.cl" className="font-bold underline hover:text-white transition-colors">contacto@austreon.cl</a>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'login' && (
                <div className="space-y-6 text-center">
                  <div className="inline-block p-4 rounded-full bg-[#00F0FF]/5 border border-[#00F0FF]/20 mb-2 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                    <ShieldCheck className="w-8 h-8 text-[#00F0FF]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Portal de Gestión Soberana</h2>
                  <p className="text-[#00F0FF] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-8 border border-[#00F0FF]/20 bg-[#00F0FF]/5 py-1.5 px-4 rounded-full inline-block">
                    Acceso Restringido a Clientes y Partners
                  </p>
                  
                  <form className="max-w-sm mx-auto space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-wider">Identificador de Sesión</label>
                      <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] text-white transition-all placeholder:text-gray-700" placeholder="ID Operación / Email" />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 font-mono mb-2 uppercase tracking-wider">Clave de Encriptación</label>
                      <input type="password" className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] text-white transition-all placeholder:text-gray-700" placeholder="••••••••••••" />
                    </div>
                    
                    <button type="submit" className="w-full mt-8 bg-white text-black font-bold py-3.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2">
                      Validar Credenciales <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="text-center mt-6">
                      <a href="mailto:soporte@austreon.cl" className="text-[10px] text-gray-500 hover:text-[#00F0FF] transition-colors uppercase tracking-wider">¿Requiere asistencia de acceso?</a>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
