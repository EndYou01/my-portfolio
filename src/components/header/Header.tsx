import { useEffect, useState } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdWeb, MdPermContactCalendar } from 'react-icons/md'
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai'
import { HiMoon, HiSun } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

import { scrollToTop, scrollToBottom } from '../../utils/scroll'
import { useDarkMode } from '../../hooks/useDarkMode'
import { useLanguage } from '../../hooks/useLanguage'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { WhatsAppCTA } from '../whatsappCTA/WhatsAppCTA'

export const Header = () => {
  const [text] = useTranslation('global')
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { isDark, toggle: toggleTheme } = useDarkMode()
  const { lang, toggle: toggleLang } = useLanguage()
  const isMobile = useIsMobile()

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goHome = () => {
    navigate('/')
    scrollToTop()
  }

  const closeMenu = () => setIsMenuOpen(false)

  const isAboutTop =
    location.pathname === '/about' && scrollPosition < 10

  const headerClass = [
    scrollPosition < 10
      ? isDark
        ? 'header_container'
        : 'header_container_light'
      : 'header_container',
    isAboutTop ? 'header_about_top' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const menuTransform = !isMobile
    ? 'translateX(0)'
    : isMenuOpen
    ? 'translateX(-100%)'
    : 'translateX(0)'

  return (
    <header className={headerClass}>
      <div className="header_content">
        <button
          type="button"
          onClick={goHome}
          className="header_title"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {text('header.portofolio')}
        </button>

        <div className="header_right">
          {isHome && (
            <div className="header_home_cta">
              <WhatsAppCTA
                variant="primary"
                size="sm"
                label={text('header.bookCall') as string}
                className="header_home_cta_text"
              />
              <WhatsAppCTA
                variant="primary"
                size="sm"
                label=""
                className="header_home_cta_icon"
                aria-label={text('header.bookCall') as string}
              >
                <FaWhatsapp aria-hidden />
              </WhatsAppCTA>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="hamburger_menu"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            style={{ background: 'none', border: 'none' }}
          >
            <GiHamburgerMenu />
          </button>

          <div
            onClick={closeMenu}
            className={isMenuOpen ? 'nav_bg_open' : 'nav_bg_closed'}
          >
          <div
            className="nav_container_open"
            style={{
              transform: menuTransform,
              transition: 'transform 0.5s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeMenu}
              className="close_menu_button"
              aria-label="Close navigation menu"
              style={{ background: 'none', border: 'none' }}
            >
              <AiOutlineClose />
            </button>

            <ul className="navigation_list">
              <li>
                <NavLink
                  className="navigation_button"
                  onClick={() => {
                    scrollToTop()
                    closeMenu()
                  }}
                  to="/about"
                >
                  <AiOutlineInfoCircle className="menu_icon" />
                  {text('header.about')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="navigation_button"
                  onClick={() => {
                    scrollToTop()
                    closeMenu()
                  }}
                  to="/work"
                >
                  <MdWeb className="menu_icon" />
                  {text('header.work')}
                </NavLink>
              </li>

              <li>
                <button
                  type="button"
                  className="navigation_button"
                  onClick={() => {
                    scrollToBottom()
                    closeMenu()
                  }}
                >
                  <MdPermContactCalendar className="menu_icon" />
                  {text('header.contact')}
                </button>
              </li>

              <li className="dropdown">
                <button
                  type="button"
                  className="navigation_button dropdown-toggle"
                  onClick={toggleLang}
                >
                  {lang}
                </button>
              </li>

              <li className="li_icon">
                <button
                  type="button"
                  className="navigation_button li_mr-2"
                  onClick={toggleTheme}
                >
                  {isDark ? text('header.dark') : text('header.light')}
                </button>
                <span>
                  {isDark ? (
                    <HiMoon className="header_icon" />
                  ) : (
                    <HiSun className="header_icon" />
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}
