import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes/AppRouter';
import './styles/styles.scss'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './translations/ES/global.json'
import global_en from './translations/EN/global.json'

const lastLang = localStorage.getItem('lastLang') || 'en'
var lang

if (lastLang === 'ES') {
    lang = 'es'
} else {
    lang = 'en'
}

i18next.init({
    interpolation: { escapeValue: false },
    lng: lang,
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
        <AppRouter />
    </I18nextProvider>
);

