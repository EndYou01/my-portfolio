import { useEffect, useLayoutEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

type Props = {
  lang: 'es' | 'en'
  children: ReactNode
}

export const LangProvider = ({ lang, children }: Props) => {
  const { i18n } = useTranslation()

  if (i18n.language !== lang) {
    i18n.changeLanguage(lang)
  }

  useIsoLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  return <>{children}</>
}
