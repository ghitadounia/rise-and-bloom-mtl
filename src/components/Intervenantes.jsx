const speakers = [
  {
    initials: 'SA',
    name: 'Sofia A.',
    role: 'Coach Carrière',
    bio: 'Spécialiste en transition professionnelle, Sofia aide les femmes à (re)trouver leur voie avec confiance et clarté.',
  },
  {
    initials: 'MD',
    name: 'Mariame D.',
    role: 'DRH Tech',
    bio: "Directrice des ressources humaines dans une startup montréalaise, Mariame connaît le recrutement de l'intérieur.",
  },
  {
    initials: 'AT',
    name: 'Amélie T.',
    role: 'Entrepreneureure',
    bio: "Fondatrice de deux ventures, Amélie partage les réalités de l'entrepreneuriat féminin au Québec — sans filtre.",
  },
  {
    initials: 'LK',
    name: 'Lina K.',
    role: 'Speaker & Coach',
    bio: 'Conférencière internationale et coach en leadership, Lina a aidé des centaines de femmes à trouver leur voix.',
  },
]

export default function Intervenantes() {
  return (
    <section id="intervenantes">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">∿ Intervenantes</span>
          <h2 className="section-title">Des femmes excellentes</h2>
          <p className="section-subtitle">
            Elles partagent leur expertise, leur vécu et leur énergie dans chaque atelier.
          </p>
        </div>

        <div className="speakers-grid">
          {speakers.map((s) => (
            <div className="speaker-card fade-in" key={s.name}>
              <div className="speaker-avatar" aria-hidden="true">{s.initials}</div>
              <h3>{s.name}</h3>
              <p className="speaker-role">{s.role}</p>
              <p>{s.bio}</p>
            </div>
          ))}
        </div>

        <p className="speakers-note fade-in">
          Tu es intervenante et tu veux participer ?{' '}
          <a href="#contact">Écris-nous.</a>
        </p>

      </div>
    </section>
  )
}
