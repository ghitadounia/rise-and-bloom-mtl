import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav style={{ boxShadow: scrolled ? '0 4px 26px rgba(74,42,53,0.08)' : 'none' }}>
      <div className="nav-inner">
        <a href="#" className="logo" aria-label="Rise & Bloom MTL — Accueil">
          <span className="logo-rose">Rise &amp; </span>
          <span className="logo-bloom">Bloom</span>
          <span className="logo-rose"> MTL</span>
        </a>

        <ul className="nav-links" role="list">
          <li><a href="#vision">Vision</a></li>
          <li><a href="#evenements">Événements</a></li>
          <li><a href="#intervenantes">Intervenantes</a></li>
          <li><a href="#communaute">Communauté</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#communaute" className="nav-cta">Rejoindre · Join</a>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu open" role="navigation" aria-label="Menu mobile">
          <a href="#vision" onClick={closeMenu}>Vision</a>
          <a href="#evenements" onClick={closeMenu}>Événements</a>
          <a href="#intervenantes" onClick={closeMenu}>Intervenantes</a>
          <a href="#communaute" onClick={closeMenu}>Communauté</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#communaute" className="nav-cta" onClick={closeMenu}>Rejoindre · Join</a>
        </div>
      )}
    </nav>
  )
}
