import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import { AppRouter } from './routes/AppRouter'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

import './styles/tailwind.css'

const lastLang = localStorage.getItem('lastLang') || 'EN'
const lang = lastLang === 'ES' ? 'es' : 'en'

i18next.init({
  interpolation: { escapeValue: false },
  lng: lang,
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
})

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

ReactDOM.createRoot(rootElement).render(
  <I18nextProvider i18n={i18next}>
    <AppRouter />
  </I18nextProvider>,
)
