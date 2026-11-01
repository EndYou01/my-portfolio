import Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const SmoothScroll = () => {
  const lenis = useRef<Lenis | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const instance = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true })
    lenis.current = instance
    return () => {
      instance.destroy()
      lenis.current = null
    }
  }, [])

  useEffect(() => {
    lenis.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return null
}
