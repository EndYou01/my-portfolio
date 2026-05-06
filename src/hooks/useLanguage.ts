import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

type Lang = 'EN' | 'ES'

const STORAGE_KEY = 'lastLang'

export const useLanguage = () => {
  const { i18n } = useTranslation('global')
  const lang: Lang = i18n.language === 'es' ? 'ES' : 'EN'

  const setLang = useCallback(
    (next: Lang) => {
      i18n.changeLanguage(next === 'ES' ? 'es' : 'en')
      localStorage.setItem(STORAGE_KEY, next)
    },
    [i18n],
  )

  const toggle = useCallback(() => {
    setLang(lang === 'ES' ? 'EN' : 'ES')
  }, [lang, setLang])

  return { lang, setLang, toggle }
}
