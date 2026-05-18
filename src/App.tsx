import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pilares from './components/Pilares'
import VerticalSalud from './components/VerticalSalud'
import Proyectos from './components/Proyectos'
import Alianzas from './components/Alianzas'
import Manifiesto from './components/Manifiesto'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import Modals from './components/Modals'
import { useState } from 'react'

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00F0FF]/30 font-sans">
      <Navbar onOpenModal={setActiveModal} />
      <Hero />
      <Pilares />
      <VerticalSalud />
      <Proyectos />
      <Alianzas />
      <Manifiesto />
      <Roadmap />
      <Footer onOpenModal={setActiveModal} />
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  )
}

export default App