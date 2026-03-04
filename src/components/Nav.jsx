import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${isHome ? 'nav--home' : ''}`}>
      <Link to="/" className="nav__logo">SAKSHI</Link>

      {!isHome && (
        <>
          <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
          <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
            <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="/tech" className={pathname === '/tech' ? 'active' : ''}>Tech</Link>
            <Link to="/marketing" className={pathname === '/marketing' ? 'active' : ''}>Marketing</Link>
            <Link to="/contact" className={`nav__cta ${pathname === '/contact' ? 'active' : ''}`}>Let's Talk</Link>
          </div>
        </>
      )}
    </nav>
  )
}
