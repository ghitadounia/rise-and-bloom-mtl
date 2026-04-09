import { useState } from 'react'

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Info */}
          <div className="contact-info fade-in">
            <h2>On se parle&nbsp;?</h2>
            <p>
              Tu veux intervenir, collaborer ou juste dire bonjour — on est là.
              Chaque message est lu avec amour. 🌸
            </p>

            <div className="contact-detail">
              <span className="c-dot" aria-hidden="true" />
              <span>hello@riseandbloom.ca</span>
            </div>
            <div className="contact-detail">
              <span className="c-dot" style={{ backgroundColor: 'var(--jade-mint)' }} aria-hidden="true" />
              <span>Montréal, Québec</span>
            </div>

            <div className="contact-socials">
              <a
                href="https://instagram.com/riseandbloom.mtl"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ padding: '10px 20px', fontSize: '0.83rem' }}
              >
                <InstagramIcon />
                Instagram
              </a>
              <a
                href="https://tiktok.com/@riseandbloom.mtl"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ padding: '10px 20px', fontSize: '0.83rem' }}
              >
                <TikTokIcon />
                TikTok
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="c-name">Nom · Name</label>
                <input
                  type="text"
                  id="c-name"
                  name="name"
                  placeholder="Ton prénom"
                  autoComplete="given-name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input
                  type="email"
                  id="c-email"
                  name="email"
                  placeholder="ton@email.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  name="message"
                  placeholder="Dis-nous tout..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={sent}
              >
                {sent ? 'Message envoyé ✓' : 'Envoyer ✦'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
