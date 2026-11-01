import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

/** The surname set to the full width of its container; recedes as you scroll. */
export const Wordmark = ({ intro = true }: { intro?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  return (
    <div ref={ref} aria-hidden className="w-full" style={{ containerType: 'inline-size' }}>
      <motion.div style={reduce ? undefined : { scale, opacity }}>
        <span
          className={`block whitespace-nowrap text-center font-medium uppercase ${intro ? 'marca-entrada' : ''}`}
          style={{
            fontSize: '22.8cqw',
            lineHeight: 0.82,
            letterSpacing: '-0.075em',
          }}
        >
          Senjudo
        </span>
      </motion.div>
    </div>
  )
}
