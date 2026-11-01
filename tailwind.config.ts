import type { Config } from 'tailwindcss'

const tight = { lineHeight: '1', letterSpacing: '-0.06em' }
const body = { lineHeight: '1.2', letterSpacing: '-0.04em' }

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tinta: '#0f0f0f',
        carbon: '#1a1a1a',
        niebla: '#a6a6a6',
        hueso: '#ffffff',
        salvia: '#bbc6af',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', tight],
        titulo: ['3rem', tight],
        cuerpo: ['1.125rem', body],
        etiqueta: ['1rem', body],
      },
      spacing: {
        margen: '2.5rem',
        'margen-movil': '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config
