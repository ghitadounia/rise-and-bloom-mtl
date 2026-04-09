import { useState } from 'react'

export default function Ressource() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="ressource">
      <div className="container">
        <div className="ressource-inner fade-in">
          <span className="section-tag">∿ Cadeau gratuit · Free gift</span>
          <h2 className="section-title">
            Télécharge gratuitement<br />
            <em>Free download</em>
          </h2>
          <p className="section-subtitle">
            5 erreurs sur ton CV que les recruteurs ne te diront jamais
          </p>

          <form className="email-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              id="dl-email"
              name="email"
              placeholder="ton@email.com"
              required
              autoComplete="email"
              aria-label="Ton adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" disabled={sent}>
              {sent ? 'Envoyé ! 🌸' : 'Je télécharge'}
            </button>
          </form>

          <p className="form-note">On ne spam pas. Promis. 🌸</p>
        </div>
      </div>
    </section>
  )
}
