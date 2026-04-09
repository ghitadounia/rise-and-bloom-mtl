const placeholders = [
  { emoji: '🌸' },
  { emoji: '✨' },
  { emoji: '🌿' },
  { emoji: '💫' },
  { emoji: '🎀' },
  { emoji: '🌺' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.53V6.77a4.84 4.84 0 0 1-1.01-.08z" />
    </svg>
  )
}

export default function Communaute() {
  return (
    <section id="communaute">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">∿ Notre communauté</span>
          <h2 className="section-title">Notre communauté</h2>
          <p className="section-subtitle">
            Les photos arrivent après notre premier atelier — stay tuned 🌸
          </p>
        </div>

        <div className="community-grid" aria-label="Galerie — bientôt disponible">
          {placeholders.map((p, i) => (
            <div className="community-ph fade-in" key={i}>
              <span className="ph-emoji" aria-hidden="true">{p.emoji}</span>
              <p>Bientôt · Coming soon</p>
            </div>
          ))}
        </div>

        <div className="social-row fade-in">
          <a
            href="https://instagram.com/riseandbloom.mtl"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <InstagramIcon />
            @riseandbloom.mtl
          </a>
          <a
            href="https://tiktok.com/@riseandbloom.mtl"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <TikTokIcon />
            @riseandbloom.mtl
          </a>
        </div>

      </div>
    </section>
  )
}
