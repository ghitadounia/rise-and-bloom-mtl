const pillars = [
  {
    emoji: '🌸',
    title: 'Confiance en soi',
    text: "Développe ton assurance, ta voix et l'audace de prendre ta place sans t'excuser.",
  },
  {
    emoji: '💼',
    title: 'Carrière & Emploi',
    text: "CV, LinkedIn, entretiens, négociation — tout ce qu'on ne te dit pas à l'école.",
  },
  {
    emoji: '✨',
    title: 'Développement personnel',
    text: 'Mindset, gestion du stress, objectifs — construis la version de toi que tu veux être.',
  },
  {
    emoji: '🤝',
    title: 'Mentorat & Réseau',
    text: "Rencontre des femmes qui te hissent vers le haut — et deviens cette femme pour d'autres.",
  },
]

export default function Vision() {
  return (
    <section id="vision">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">∿ Notre Vision</span>
          <h2 className="section-title">
            Un espace bienveillant,<br />conçu pour toi.
          </h2>
        </div>

        <p className="vision-intro fade-in">
          <strong>Rise &amp; Bloom MTL</strong>, c'est un espace où les femmes se réunissent dans des{' '}
          <strong>cafés chaleureux de Montréal</strong> pour se développer personnellement et professionnellement.
          Des ateliers adaptés à ta réalité, du <strong>mentorat entre femmes</strong>, du{' '}
          <strong>coaching carrière</strong> — dans une ambiance informelle et bienveillante. Parce que
          grandir n'a pas à se faire seule.
        </p>

        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="pillar-card fade-in" key={p.title}>
              <div className="pillar-icon" aria-hidden="true">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
