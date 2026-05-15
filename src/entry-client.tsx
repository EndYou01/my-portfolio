import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import { App } from './App'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

import './styles/tailwind.css'

const initialLang = window.location.pathname.startsWith('/en/') ||
  window.location.pathname === '/en'
  ? 'en'
  : 'es'

i18next.init({
  interpolation: { escapeValue: false },
  lng: initialLang,
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
})

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const tree = (
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree)
} else {
  createRoot(rootElement).render(tree)
}
