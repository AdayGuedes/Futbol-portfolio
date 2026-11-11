import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { CloseIcon, MenuIcon } from './Icons.jsx'
import './Header.css'

const SECTIONS = ['profile', 'highlights', 'athletic', 'career', 'contact']

export default function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuBtnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const links = SECTIONS.map((id) => (
    <a key={id} href={`#${id}`} onClick={closeMenu}>
      {t.nav[id]}
    </a>
  ))

  return (
    <header className={`header${scrolled || menuOpen ? ' is-solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label={t.header.home} onClick={closeMenu}>
          {profile.initials}
          <span className="header__logo-dot" aria-hidden="true" />
        </a>

        <nav className="header__nav" aria-label={t.header.navLabel}>
          {links}
        </nav>

        <div className="header__right">
          <LanguageSwitcher />
          <button
            ref={menuBtnRef}
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.header.closeMenu : t.header.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label={t.header.navLabel}>
          {links}
        </nav>
      )}
    </header>
  )
}
