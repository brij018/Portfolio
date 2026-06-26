import { useState, useEffect } from 'react'

const links = ['home', 'about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // Determine active section
      const sections = links.map(l => document.getElementById(l === 'home' ? 'hero' : l))
      const idx = sections.findLastIndex(s => s && s.getBoundingClientRect().top <= 120)
      if (idx >= 0) setActive(links[idx])
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id === 'home' ? 'hero' : id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a className="nav-logo" href="#" onClick={e => { e.preventDefault(); scrollTo('home') }}>
          &lt;BR/&gt;
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l === 'home' ? 'hero' : l}`}
                className={active === l ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(l) }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
