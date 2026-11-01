import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

import { useLanguage } from '../../hooks/useLanguage'
import { Clock } from '../ui/Clock'
import { EASE } from '../ui/motion'
import { WhatsAppCTA } from '../whatsappCTA/WhatsAppCTA'

export const Header = () => {
  const [text] = useTranslation('global')
  const { lang, toggle: toggleLang, localizePath } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const root = document.documentElement
    root.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      root.style.overflow = ''
    }
  }, [open])

  const links = [
    { to: localizePath('/'), label: text('header.home'), end: true },
    { to: localizePath('/work'), label: text('header.work'), end: false },
    { to: localizePath('/about'), label: text('header.about'), end: false },
  ]
  const otherLang = lang === 'ES' ? 'EN' : 'ES'

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-tinta">
      <div className="margenes relative z-10 flex h-[60px] items-center justify-between text-etiqueta uppercase md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          to={localizePath('/')}
          onClick={() => setOpen(false)}
          className="justify-self-start font-medium"
        >
          Jorge Senjudo
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className="enlace">
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="#contact" className="enlace">
                {text('header.contact')}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 justify-self-end">
          <span className="hidden xl:inline">
            <Clock />
          </span>
          <button
            type="button"
            onClick={toggleLang}
            className="enlace uppercase"
            aria-label={otherLang === 'EN' ? 'Switch to English' : 'Cambiar a español'}
          >
            {otherLang}
          </button>
          <WhatsAppCTA
            variant="plain"
            label={text('header.bookCall') as string}
            className="hidden text-salvia md:inline"
          />
          <button
            type="button"
            className="uppercase md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? text('header.close') : text('header.menu')}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            data-lenis-prevent
            aria-label="Principal"
            className="fixed inset-0 bg-tinta px-margen-movil pt-[84px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.15 } }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {links.map((l, i) => (
                <li key={l.to} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%', transition: { duration: 0.3, ease: EASE } }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.05 + i * 0.06 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.end}
                      onClick={() => setOpen(false)}
                      className="block text-titulo font-medium uppercase !leading-[1.3] aria-[current=page]:text-salvia"
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
              <li className="overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%', transition: { duration: 0.3, ease: EASE } }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.05 + links.length * 0.06 }}
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-titulo font-medium uppercase !leading-[1.3]"
                  >
                    {text('header.contact')}
                  </a>
                </motion.div>
              </li>
            </ul>
            <div className="absolute inset-x-margen-movil bottom-6 flex items-end justify-between gap-4 text-etiqueta uppercase">
              <span className="text-niebla">
                <Clock />
              </span>
              <WhatsAppCTA
                variant="plain"
                label={text('header.bookCall') as string}
                className="text-salvia"
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
