import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { profile } from '../data/profile.js'
import { localize } from '../utils/format.js'
import { DEFAULT_LANG, LANGUAGES, translations } from './translations.js'

const STORAGE_KEY = 'amg-lang'
const SUPPORTED = LANGUAGES.map((l) => l.code)

const LanguageContext = createContext(null)

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = localize(profile.seo.title, lang)
    document.querySelector('meta[name="description"]')?.setAttribute('content', localize(profile.seo.description, lang))
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Sin almacenamiento disponible (modo privado): el idioma solo dura esta visita.
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}
