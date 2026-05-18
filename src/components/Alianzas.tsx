export default function Alianzas() {
  const partners = [
    {
      name: 'Hetzner',
      role: 'Bare Metal & Cloud Infrastructure',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10" fill="currentColor">
          <path d="M50 5L5 27.5v45L50 95l45-22.5v-45L50 5zm0 8.5l37.5 18.75v37.5L50 88.25 12.5 69.75v-37.5L50 13.5z"/>
          <path d="M50 25L25 37.5v25L50 75l25-12.5v-25L50 25zm0 8l17.5 8.75v17.5L50 68 32.5 59.25V41.75L50 33z"/>
        </svg>
      ),
      color: 'group-hover:text-red-500',
    },
    {
      name: 'n8n',
      role: 'Workflow Automation Engine',
      logo: (
        <svg viewBox="0 0 100 60" className="w-16 h-10" fill="currentColor">
          <text x="0" y="48" fontSize="52" fontWeight="800" fontFamily="monospace">n8n</text>
        </svg>
      ),
      color: 'group-hover:text-orange-500',
    },
    {
      name: 'WhatsApp',
      role: 'Omnichannel Communication',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'group-hover:text-green-500',
    },
    {
      name: 'Co-Engineering',
      role: 'International Strategic Alliances',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
        </svg>
      ),
      color: 'group-hover:text-[#00F0FF]',
    },
  ]

  return (
    <section id="alianzas" className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Alianzas Estratégicas</h2>
        <p className="text-gray-400 text-sm md:text-base font-light mb-16 md:mb-24 max-w-2xl mx-auto">
          "Nuestras soluciones se construyen sobre la infraestructura más robusta y segura a nivel global."
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center">
          {partners.map((partner, i) => (
            <div key={i} className={`group flex flex-col items-center gap-4 text-white/30 transition-all duration-500 hover:text-white cursor-default ${partner.color}`}>
              <div className="h-12 flex items-center justify-center transition-all duration-500">
                {partner.logo}
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-semibold tracking-wide text-white/60 group-hover:text-white transition-colors duration-500">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 group-hover:text-white/60 transition-colors duration-500 text-center leading-relaxed">
                  {partner.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}