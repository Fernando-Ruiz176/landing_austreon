import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, LineChart, Cpu, ArrowRight, ExternalLink, Github, Linkedin, Twitter, ChevronDown, ShieldCheck, Clock, BrainCircuit } from 'lucide-react';

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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    { id: 1, title: 'Nexus Trading Engine', status: 'Live', tech: 'Rust / TypeScript', impact: 'Latencia reducida a <1ms', category: 'Arquitectura', desc: 'Motor de alta frecuencia especializado en arbitraje criptográfico. Implementa estructuras de datos lock-free para asegurar ejecución en microsegundos.' },
    { id: 2, title: 'Synthetica Alpha', status: 'Beta', tech: 'Python / PyTorch', impact: 'Precisión predictiva 94%', category: 'IA Sintética', desc: 'Generador de series de tiempo financieras para entrenamiento de modelos robustos ante eventos de cisne negro.' },
    { id: 3, title: 'Orion Workflow', status: 'R&D', tech: 'Go / React', impact: 'Eficiencia operativa +300%', category: 'Automatización', desc: 'Agentes autónomos para la conciliación de activos distribuidos, utilizando consenso BFT para verificación sin intervención humana.' },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00F0FF]/30 font-sans">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-500 ${isNavScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-4">
          <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-12 w-auto object-contain rounded-lg mix-blend-screen" />
          <div className="h-7 w-px bg-white/15" />
          <span className="text-2xl md:text-[1.7rem] font-extrabold tracking-[0.12em] uppercase">
            <span className="text-white">AUS</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#38bdf8]">TREON</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#pilares" className="hover:text-[#00F0FF] transition-colors">Ecosistema</a>
          <a href="#proyectos" className="hover:text-[#00F0FF] transition-colors">Proyectos</a>
          <a href="#alianzas" className="hover:text-[#00F0FF] transition-colors">Alianzas</a>
          <a href="#roadmap" className="hover:text-[#00F0FF] transition-colors">Roadmap</a>
        </div>
        <button className="bg-white text-black px-5 py-2 text-sm rounded-full hover:bg-gray-200 transition-colors font-semibold">
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
            { icon: <Bot className="w-6 h-6 group-hover/card:animate-pulse" />, title: "Automatización Inteligente", desc: "Diseñamos ecosistemas autónomos que ejecutan tareas críticas con precisión algorítmica. Reducimos la fricción operativa mediante flujos de trabajo inteligentes que aprenden y se adaptan a la velocidad de su industria." },
            { icon: <LineChart className="w-6 h-6 group-hover/card:animate-pulse" />, title: "Arquitectura de Mercados", desc: "Construimos la estructura técnica necesaria para el despliegue de soluciones de alto impacto. No solo consultamos; diseñamos el mapa de procesos, la integración de sistemas y la estrategia de ejecución para sectores productivos, industriales y de salud." },
            { icon: <Cpu className="w-6 h-6 group-hover/card:animate-pulse" />, title: "IA Sintética & Analítica", desc: "Transformamos datos de alta densidad en activos de decisión. Implementamos capas de inteligencia sintética para el análisis predictivo y la optimización de resultados, garantizando una ventaja competitiva basada en evidencia digital." }
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
              Nuestro primer despliegue estratégico se centra en la intersección de la medicina y la inteligencia de datos. En Austreon, hemos desarrollado un ecosistema capaz de transformar la gestión clínica en un proceso predictivo.
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
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Anticipación de necesidades de insumos y gestión de pacientes.</p>
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
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Blindaje total de fichas clínicas bajo estándares de ciberseguridad avanzada.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos en Desarrollo */}
      <section id="proyectos" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Proyectos en Desarrollo</h2>
            <p className="text-gray-400">Innovación continua materializada en soluciones escalables.</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto w-full md:w-auto">
            {['All', 'Automatización', 'Arquitectura', 'IA Sintética'].map(filter => (
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
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Alianzas Estratégicas</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                <div className="w-32 h-12 bg-white/10 rounded border border-white/20 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                  <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">PARTNER {i}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 inline-flex items-center bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-6 py-3 rounded-full text-[#00F0FF] font-medium text-sm">
            <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-[#00F0FF] mr-2"></span>
            Alianzas Estratégicas: Próximamente
          </div>
        </div>
      </section>

      {/* Manifiesto / Breve Historia */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-blue-600/5 blur-[80px] -z-10 rounded-full" />
        <h2 className="text-sm font-mono text-[#00F0FF] tracking-[0.3em] uppercase mb-6">Nuestra Génesis</h2>
        <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-8">
          "Nacimos de la convergencia entre la ingeniería de datos y la arquitectura de mercados financieros. Austreon se fundó con una premisa inquebrantable: <strong className="text-white font-medium">los ecosistemas del mañana no pueden ser construidos con las herramientas del pasado.</strong>"
        </p>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Comenzamos como un laboratorio de investigación enfocado en latencia ultra-baja y, a través de la IA Sintética, evolucionamos hasta convertirnos en los arquitectos de las soluciones operativas que hoy redefinen la rentabilidad.
        </p>
      </section>

      {/* Roadmap & Visión */}
      <section id="roadmap" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Roadmap Tecnológico</h2>
          <p className="text-gray-400">Nuestra trayectoria hacia la singularidad operativa.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:mx-auto md:w-0">
          {[
            { q: "Q1 2024", title: "Fundación Arquitectónica", desc: "Establecimiento de infraestructura core y validación de modelos." },
            { q: "Q3 2024", title: "Despliegue Beta", desc: "Lanzamiento controlado de Synthetica Alpha para partners." },
            { q: "Q1 2025", title: "Expansión de Ecosistema", desc: "Integración de Orion Workflow con sistemas legacy financieros." },
            { q: "Q4 2025", title: "Inteligencia Autónoma", desc: "Red de agentes capaces de auto-optimización en tiempo real." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={i} 
              className={`mb-12 md:w-[400px] relative ${i % 2 === 0 ? 'md:ml-auto md:pl-10 pl-8' : 'md:mr-auto md:pr-10 md:-ml-[400px] md:text-right pl-8'}`}
            >
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#00F0FF] ${i % 2 === 0 ? 'left-[-8px] md:left-[-8px]' : 'left-[-8px] md:right-[-8px] md:left-auto'} shadow-[0_0_10px_rgba(0,240,255,0.5)]`} />
              <span className="text-[#00F0FF] text-sm font-mono font-bold tracking-widest">{item.q}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
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
              Firma líder en automatizaciones de alto nivel, arquitectura de mercados financieros e Inteligencia Artificial Sintética.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-[#00F0FF] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#00F0FF] transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Ecosistema</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Automatización</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Arquitectura</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IA Sintética</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">Suscríbete para recibir research papers y updates técnicos.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:border-[#00F0FF]" />
              <button className="bg-[#00F0FF] text-[#0A0A0A] px-4 py-2 rounded-r-md text-sm font-bold hover:bg-[#00F0FF]/90 transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Austreon. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
