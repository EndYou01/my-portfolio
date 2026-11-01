import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
  type AnimationPlaybackControls,
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { EASE } from './motion'

const WIDTH = 180
const HEIGHT = 180
/** Lo que recorre el ratón entre una foto y la siguiente, en píxeles. */
const SPACING = 170
/** Lo mismo con el dedo, que recorre menos en una pantalla de móvil. */
const TOUCH_SPACING = 90
/** Lo que tarda cada foto en empezar a irse. */
const LIFETIME_MS = 500
/** Lo que tiene que subir el dedo, en neto, para que al soltar se baje. */
const SWIPE_UP = 40
/** Duración de la bajada a la sección siguiente, en segundos. */
const SCROLL_DURATION = 0.9

interface TrailImage {
  id: number
  x: number
  y: number
  src: string
}

const hidden = { opacity: 0, scale: 0.8, filter: 'blur(10px)' }

/**
 * Rastro de fotos que siguen al ratón por su contenedor (el elemento padre,
 * que debe ser `relative`), como en el hero de Framer: cada foto sale
 * centrada en el cursor, se enfoca y se desvanece medio segundo después.
 *
 * Con el dedo, el contenedor no hace scroll: el gesto dibuja el rastro y, al
 * soltar, si el dedo subió, se espera a que empiece a irse la última foto
 * (nunca más de lo que duró el gesto) y se baja con suavidad hasta
 * `nextSection` (su `scroll-margin-top` deja sitio al header). Un gesto de
 * lado o hacia abajo solo dibuja. Con "reducir movimiento" no hace nada y el
 * scroll es el normal.
 */
export function ImageTrail({ images, nextSection }: { images: string[]; nextSection: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [trail, setTrail] = useState<TrailImage[]>([])

  useEffect(() => {
    const area = ref.current?.parentElement
    if (!area || reduce || images.length === 0) return

    // Se precargan para que ninguna salga en blanco la primera vez.
    for (const src of images) {
      new Image().src = src
    }

    let last: { x: number; y: number } | null = null
    let lastShownAt = 0
    let next = 0
    let id = 0
    const timers = new Set<number>()

    const show = (clientX: number, clientY: number, spacing: number) => {
      if (last && Math.hypot(clientX - last.x, clientY - last.y) < spacing) return
      last = { x: clientX, y: clientY }
      lastShownAt = performance.now()
      const rect = area.getBoundingClientRect()
      const image = { id: id++, x: clientX - rect.left, y: clientY - rect.top, src: images[next] }
      next = (next + 1) % images.length
      setTrail((list) => [...list, image])
      const timer = window.setTimeout(() => {
        timers.delete(timer)
        setTrail((list) => list.filter((i) => i.id !== image.id))
      }, LIFETIME_MS)
      timers.add(timer)
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') show(e.clientX, e.clientY, SPACING)
    }
    const onLeave = () => {
      last = null
    }

    // Gesto con el dedo en curso, bajada pendiente (espera a la última foto)
    // y bajada en marcha. Tocar la pantalla cancela las dos últimas.
    let gesture: { x: number; y: number; at: number } | null = null
    let pending: number | undefined
    let scrolling: AnimationPlaybackControls | undefined

    const stopScroll = () => {
      clearTimeout(pending)
      pending = undefined
      scrolling?.stop()
      scrolling = undefined
    }
    const scrollToNext = () => {
      pending = undefined
      const target = document.getElementById(nextSection)
      if (!target) return
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
      const to = target.getBoundingClientRect().top + window.scrollY - margin
      scrolling = animate(window.scrollY, to, {
        duration: SCROLL_DURATION,
        ease: EASE,
        onUpdate: (y) => window.scrollTo(0, y),
        onComplete: () => {
          scrolling = undefined
        },
      })
    }

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch || e.touches.length > 1) return
      last = null
      gesture = { x: touch.clientX, y: touch.clientY, at: performance.now() }
    }
    const onTouchMove = (e: TouchEvent) => {
      // `touch-action: none` ya evita el scroll; esto cubre a los navegadores
      // que no lo respetan.
      e.preventDefault()
      const touch = e.touches[0]
      if (touch) show(touch.clientX, touch.clientY, TOUCH_SPACING)
    }
    const onTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0]
      const start = gesture
      gesture = null
      last = null
      if (!start || !touch || e.type === 'touchcancel') return
      if (start.y - touch.clientY < SWIPE_UP) return
      const now = performance.now()
      const lastLeaving = Math.max(0, lastShownAt + LIFETIME_MS - now)
      pending = window.setTimeout(scrollToNext, Math.min(lastLeaving, now - start.at))
    }

    area.style.touchAction = 'none'
    area.addEventListener('pointermove', onMove)
    area.addEventListener('pointerleave', onLeave)
    area.addEventListener('touchstart', onTouchStart, { passive: true })
    area.addEventListener('touchmove', onTouchMove, { passive: false })
    area.addEventListener('touchend', onTouchEnd)
    area.addEventListener('touchcancel', onTouchEnd)
    window.addEventListener('touchstart', stopScroll, { passive: true })
    window.addEventListener('wheel', stopScroll, { passive: true })
    return () => {
      area.style.touchAction = ''
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
      area.removeEventListener('touchstart', onTouchStart)
      area.removeEventListener('touchmove', onTouchMove)
      area.removeEventListener('touchend', onTouchEnd)
      area.removeEventListener('touchcancel', onTouchEnd)
      window.removeEventListener('touchstart', stopScroll)
      window.removeEventListener('wheel', stopScroll)
      stopScroll()
      for (const timer of timers) clearTimeout(timer)
    }
  }, [images, nextSection, reduce])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      <AnimatePresence>
        {trail.map((image) => (
          <motion.img
            key={image.id}
            src={image.src}
            alt=""
            width={WIDTH}
            height={HEIGHT}
            draggable={false}
            className="absolute object-contain"
            style={{
              left: image.x - WIDTH / 2,
              top: image.y - HEIGHT / 2,
              width: WIDTH,
              height: HEIGHT,
            }}
            initial={hidden}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={hidden}
            transition={{ duration: 0.5, ease: EASE }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
