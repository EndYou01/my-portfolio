import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(19, 48, 91)',
        secondary: 'rgb(226, 70, 48)',
        accent: 'rgb(226, 70, 48)',
        'project-section': 'rgb(10, 10, 10)',
        'bg-dark': 'rgb(20, 20, 20)',
        'bg-light': 'rgba(255, 255, 255, 0.858)',
        'text-dark': 'rgb(200, 200, 200)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
