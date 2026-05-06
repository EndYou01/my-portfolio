import { useEffect, useState } from 'react'

const getInitialMatch = (query: string): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => getInitialMatch(query))

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export const useIsMobile = () => useMediaQuery('(max-width: 900px)')
