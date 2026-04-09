const events = [
  {
    emoji: '📄',
    title: 'CV & LinkedIn qui ouvrent des portes',
    desc: 'Transforme ton profil en outil puissant. Les secrets que les recruteurs ne te diront jamais — enfin révélés.',
  },
  {
    emoji: '🎤',
    title: 'Prise de parole & Leadership féminin',
    desc: 'Prends la parole avec impact. Apprends à affirmer tes idées et à diriger avec authenticité.',
  },
  {
    emoji: '🌿',
    title: 'Mindset & Glow Up personnel',
    desc: 'Redéfinis ton mindset, libère-toi des blocages et commence à construire la vie que tu mérites.',
  },
]

export default function Evenements() {
  return (
    <section id="evenements">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">∿ Ateliers</span>
          <h2 className="section-title">Nos prochains ateliers</h2>
          <p className="section-subtitle">
            Des sessions intimes dans de beaux cafés montréalais. Accessibles, impactantes, et toujours entre femmes.
          </p>
        </div>

        <div className="events-grid">
          {events.map((e) => (
            <article className="event-card fade-in" key={e.title}>
              <div className="event-thumb">
                <span className="event-emoji" aria-hidden="true">{e.emoji}</span>
                <span className="event-badge">À venir bientôt</span>
              </div>
              <div className="event-body">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="event-footer">
                  <span className="event-price">15 $</span>
                  <a href="#" className="btn btn-primary" rel="noopener">
                    Réserver sur Eventbrite
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
