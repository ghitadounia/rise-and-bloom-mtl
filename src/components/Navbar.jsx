import { useState, useEffect } from 'react'

const links = [
  { href: '#vision',        label: 'Vision' },
  { href: '#evenements',    label: 'Événements' },
  { href: '#intervenantes', label: 'Intervenantes' },
  { href: '#communaute',    label: 'Communauté' },
  { href: '#contact',       label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ── Desktop navbar ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(253,245,247,0.97)'
            : 'rgba(253,245,247,0.85)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(212,160,181,0.22)' : 'rgba(212,160,181,0.10)'}`,
          boxShadow: scrolled ? '0 2px 24px rgba(74,42,53,0.07)' : 'none',
          transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 28px',
            height: 68,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Rise & Bloom MTL"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: '1.22rem',
              letterSpacing: '0.01em',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            <span style={{ color: '#d4a0b5' }}>Rise &amp; </span>
            <span style={{ color: '#78c0a8' }}>Bloom</span>
            <span style={{ color: '#d4a0b5' }}> MTL</span>
          </a>

          {/* Desktop links — hidden on mobile via CSS class */}
          <ul
            className="nav-desktop-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              listStyle: 'none',
              margin: 0,
              padding: 0,
              flexShrink: 1,
            }}
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setActiveLink(href)}
                  style={{
                    display: 'block',
                    padding: '6px 13px',
                    borderRadius: 50,
                    fontSize: '0.85rem',
                    fontWeight: activeLink === href ? 500 : 400,
                    color: activeLink === href ? '#d4a0b5' : '#4a2a35',
                    background: activeLink === href ? 'rgba(212,160,181,0.12)' : 'transparent',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#d4a0b5'
                    e.currentTarget.style.background = 'rgba(212,160,181,0.10)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = activeLink === href ? '#d4a0b5' : '#4a2a35'
                    e.currentTarget.style.background = activeLink === href ? 'rgba(212,160,181,0.12)' : 'transparent'
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button — hidden on mobile via CSS class */}
          <a
            href="#communaute"
            className="nav-desktop-cta"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              borderRadius: 50,
              background: 'linear-gradient(135deg, #d4a0b5 0%, #c48fab 100%)',
              color: '#fff',
              fontWeight: 500,
              fontSize: '0.84rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxShadow: '0 4px 18px rgba(212,160,181,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 26px rgba(212,160,181,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(212,160,181,0.35)'
            }}
          >
            Rejoindre · Join
          </a>

          {/* Hamburger — shown on mobile via CSS class */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              borderRadius: 8,
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#4a2a35', borderRadius: 2,
              transition: 'all 0.25s',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#4a2a35', borderRadius: 2,
              transition: 'all 0.25s',
              opacity: menuOpen ? 0 : 1,
            }}/>
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#4a2a35', borderRadius: 2,
              transition: 'all 0.25s',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}/>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid rgba(212,160,181,0.15)',
              background: 'rgba(253,245,247,0.98)',
              padding: '8px 20px 20px',
            }}
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '13px 4px',
                  fontSize: '0.97rem',
                  color: '#4a2a35',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(212,160,181,0.12)',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#communaute"
              onClick={closeMenu}
              style={{
                display: 'block',
                marginTop: 16,
                padding: '13px',
                borderRadius: 50,
                background: 'linear-gradient(135deg, #d4a0b5 0%, #c48fab 100%)',
                color: '#fff',
                fontWeight: 500,
                fontSize: '0.95rem',
                textAlign: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(212,160,181,0.3)',
              }}
            >
              Rejoindre · Join
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
