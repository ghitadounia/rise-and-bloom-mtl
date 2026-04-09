import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Evenements from './components/Evenements'
import Intervenantes from './components/Intervenantes'
import Ressource from './components/Ressource'
import Communaute from './components/Communaute'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.fade-in:not(.visible)')
          )
          const idx = siblings.indexOf(entry.target)
          const delay = idx >= 0 ? idx * 80 : 0
          setTimeout(() => entry.target.classList.add('visible'), delay)
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )

    fadeEls.forEach((el) => {
      if (el.closest('#hero')) {
        const heroEls = Array.from(document.querySelectorAll('#hero .fade-in'))
        const i = heroEls.indexOf(el)
        setTimeout(() => el.classList.add('visible'), 180 + i * 140)
      } else {
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Evenements />
      <Intervenantes />
      <Ressource />
      <Communaute />
      <Contact />
      <Footer />
    </>
  )
}
