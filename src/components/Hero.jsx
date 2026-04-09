export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">

          {/* Text content */}
          <div className="hero-content fade-in">
            <span className="hero-tag">✦ Montréal · Communauté féminine</span>
            <h1 className="hero-title">
              Un espace pour <span>grandir</span>,<br />
              briller et se connecter.
            </h1>
            <p className="hero-subtitle">
              A warm, girly &amp; seriously impactful space<br />
              for ambitious women in Montréal.
            </p>
            <div className="hero-buttons">
              <a href="#communaute" className="btn btn-primary">Je rejoins la communauté</a>
              <a href="#vision" className="btn btn-outline">En savoir plus</a>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual fade-in">
            <div className="hero-blob" aria-hidden="true" />

            {/* Floating workshop card */}
            <div className="floating-card" aria-label="Prochain atelier">
              <p className="fc-tag">✦ Prochain atelier</p>
              <p className="fc-title">CV &amp; LinkedIn</p>
              <p className="fc-meta">15 $ · Places limitées</p>
              <div className="avatars-row" aria-label="Participantes">
                <div className="av av-1" aria-hidden="true">SA</div>
                <div className="av av-2" aria-hidden="true">MD</div>
                <div className="av av-3" aria-hidden="true">AT</div>
                <div className="av av-4" aria-hidden="true">LK</div>
                <span className="av-count">+12 inscrites</span>
              </div>
            </div>

            {/* Mini floating card */}
            <div className="floating-card-mini" aria-hidden="true">
              <div className="fc-dot" />
              <div>
                <p>Bientôt disponible</p>
                <small>Ateliers mensuels · MTL</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
