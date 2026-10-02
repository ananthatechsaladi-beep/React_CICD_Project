import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { en } from '../i18n/en'
import { hi } from '../i18n/hi'
import { te } from '../i18n/te'

const translations = { en, hi, te }
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('weather-language') || 'en')

  useEffect(() => {
    localStorage.setItem('weather-language', language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations.en,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
