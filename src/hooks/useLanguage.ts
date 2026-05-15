import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type Lang = 'EN' | 'ES'

const STORAGE_KEY = 'lastLang'

const detectLangFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'EN' : 'ES'

export const swapLangPath = (pathname: string): string => {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const rest = pathname.slice(3)
    return rest.length === 0 ? '/' : rest
  }
  return pathname === '/' ? '/en' : `/en${pathname}`
}

export const useLanguage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { i18n } = useTranslation('global')
  const lang: Lang = detectLangFromPath(location.pathname)

  const setLang = useCallback(
    (next: Lang) => {
      const targetPath =
        next === detectLangFromPath(location.pathname)
          ? location.pathname
          : swapLangPath(location.pathname)
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          /* ignore storage errors */
        }
      }
      i18n.changeLanguage(next === 'ES' ? 'es' : 'en')
      navigate(targetPath)
    },
    [i18n, location.pathname, navigate],
  )

  const toggle = useCallback(() => {
    setLang(lang === 'ES' ? 'EN' : 'ES')
  }, [lang, setLang])

  const localizePath = useCallback(
    (raw: string) => {
      if (lang === 'EN') {
        if (raw === '/') return '/en'
        if (raw.startsWith('/en')) return raw
        return `/en${raw}`
      }
      return raw
    },
    [lang],
  )

  return { lang, setLang, toggle, localizePath }
}
