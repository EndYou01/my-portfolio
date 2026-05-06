import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  isDark: boolean
  toggle: () => void
}

const STORAGE_KEY = 'theme'
const LEGACY_KEY = 'FillVariable'
const LEGACY_DARK_VALUE = 'rgb(20,20,20)'

const ThemeContext = createContext<ThemeContextValue | null>(null)

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'

  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored === 'dark' || stored === 'light') return stored

  const legacy = localStorage.getItem(LEGACY_KEY)
  if (legacy) return legacy === LEGACY_DARK_VALUE ? 'dark' : 'light'

  return 'dark'
}

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme
  document.body.classList.toggle('body-dark-mode', theme === 'light')
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
    localStorage.setItem(
      LEGACY_KEY,
      theme === 'dark' ? LEGACY_DARK_VALUE : 'rgb(255,255,255)',
    )
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, isDark: theme === 'dark', toggle }),
    [theme, toggle],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useDarkMode = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useDarkMode must be used inside ThemeProvider')
  return ctx
}
