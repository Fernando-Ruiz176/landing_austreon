import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, Cpu, ArrowRight, ExternalLink, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

// Particle Network Component
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= dx * force * 0.05;
          this.y -= dy * force * 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      particles = [];
      const numParticles = Math.floor((width * height) / 12000); // Responsive density
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-50 pointer-events-none"
    />
  );
};

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    { id: 1, title: 'Nexus Trading Engine', status: 'Live', tech: 'Rust / TypeScript', impact: 'Latencia reducida a <1ms', category: 'Arquitectura', desc: 'Motor de alta frecuencia especializado en arbitraje criptográfico. Implementa estructuras de datos lock-free para asegurar ejecución en microsegundos.' },
    { id: 2, title: 'Synthetica Alpha', status: 'Beta', tech: 'Python / PyTorch', impact: 'Precisión predictiva 94%', category: 'IA Sintética', desc: 'Generador de series de tiempo financieras para entrenamiento de modelos robustos ante eventos de cisne negro.' },
    { id: 3, title: 'Orion Workflow', status: 'R&D', tech: 'Go / React', impact: 'Eficiencia operativa +300%', category: 'Automatización', desc: 'Agentes autónomos para la conciliación de activos distribuidos, utilizando consenso BFT para verificación sin intervención humana.' },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00F0FF]/30 font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-3">
          <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-10 w-auto object-contain rounded-md mix-blend-screen" />
          AUSTREON
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          <a href="#pilares" className="hover:text-[#00F0FF] transition-colors">Ecosistema</a>
          <a href="#proyectos" className="hover:text-[#00F0FF] transition-colors">Proyectos</a>
          <a href="#alianzas" className="hover:text-[#00F0FF] transition-colors">Alianzas</a>
          <a href="#roadmap" className="hover:text-[#00F0FF] transition-colors">Roadmap</a>
        </div>
        <button className="bg-white text-black px-5 py-2 text-sm rounded-full hover:bg-gray-200 transition-colors font-semibold">
          Acceso Portal
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <ParticleNetwork />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 via-transparent to-[#0A0A0A] opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0FF]/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
              Inteligencia Artificial que Redefine su <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-600">Rentabilidad.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light"
          >
            Optimizamos su flujo operativo con arquitecturas de automatización de alto impacto. Transformamos procesos complejos en sistemas autónomos de alto rendimiento.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#pilares" className="bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-[#0A0A0A] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all text-sm md:text-base w-full sm:w-auto shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              Explorar Soluciones de IA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#proyectos" className="border border-white/20 hover:border-[#00F0FF] hover:text-[#00F0FF] px-8 py-4 rounded-full font-medium transition-all text-sm md:text-base w-full sm:w-auto backdrop-blur-sm">
              Ver Proyectos
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-gray-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </header>

      {/* Pilares (Core) */}
      <section id="pilares" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Propuesta de <span className="text-[#00F0FF]">Valor</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Bot className="w-6 h-6" />, title: "Automatización Inteligente", desc: "Eficiencia operativa sin precedentes mediante el despliegue de agentes autónomos especializados." },
            { icon: <LineChart className="w-6 h-6" />, title: "Arquitectura de Mercados", desc: "Estructuras financieras de alta latencia optimizadas mediante algoritmos de nueva generación." },
            { icon: <Cpu className="w-6 h-6" />, title: "IA Sintética", desc: "Generación y modelado de datos avanzados para la toma de decisiones predictivas." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              key={i} 
              className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-[#00F0FF]/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-[#00F0FF] group-hover:scale-110 group-hover:bg-[#00F0FF]/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
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
            <div className="text-2xl font-bold tracking-tighter mb-4 flex items-center gap-3">
              <img src="/logo_austreon1.jpg" alt="Austreon Logo" className="h-12 w-auto object-contain rounded-md mix-blend-screen" />
              AUSTREON
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
