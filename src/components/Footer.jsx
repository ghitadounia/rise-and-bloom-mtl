export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">

          <a href="#" className="logo" aria-label="Rise & Bloom MTL — Retour en haut">
            <span className="logo-rose">Rise &amp; </span>
            <span className="logo-bloom">Bloom</span>
            <span className="logo-rose"> MTL</span>
          </a>

          <nav className="footer-nav" aria-label="Navigation pied de page">
            <a href="#vision">Vision</a>
            <a href="#evenements">Événements</a>
            <a href="#intervenantes">Intervenantes</a>
            <a href="#communaute">Communauté</a>
            <a href="#contact">Contact</a>
          </nav>

          <p className="footer-copy">
            © 2025 Rise &amp; Bloom MTL · Montréal, Québec
          </p>

        </div>
      </div>
    </footer>
  )
}
