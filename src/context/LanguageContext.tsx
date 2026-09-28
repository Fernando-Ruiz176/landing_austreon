import { createContext, useContext, useState } from 'react'

type Lang = 'es' | 'en'

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: 'es', setLang: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}