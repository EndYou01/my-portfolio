import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { I18nextProvider } from 'react-i18next'
import { createInstance } from 'i18next'

import { App } from './App'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import {
  getHead,
  renderHeadString,
  resetHead,
} from './utils/headStore'

export type RenderResult = {
  html: string
  headHtml: string
  htmlLang: string
}

export async function render(url: string): Promise<RenderResult> {
  const lang: 'es' | 'en' =
    url.startsWith('/en/') || url === '/en' ? 'en' : 'es'
  resetHead(lang)

  const i18n = createInstance()
  await i18n.init({
    interpolation: { escapeValue: false },
    lng: lang,
    resources: {
      es: { global: global_es },
      en: { global: global_en },
    },
  })

  const html = renderToString(
    <I18nextProvider i18n={i18n}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </I18nextProvider>,
  )

  const snap = getHead()
  return {
    html,
    headHtml: renderHeadString(snap),
    htmlLang: snap.lang,
  }
}

export { buildRoutePlan } from './routes/routeManifest'
