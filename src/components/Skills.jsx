import { useFadeUp } from '../hooks/useFadeUp'

const cards = [
  {
    num: '01',
    title: 'non-stop learning',
    desc: 'Technology evolves fast. I make it a habit to stay current — picking up new tools, frameworks, and patterns that make me a better developer.',
  },
  {
    num: '02',
    title: 'communicative',
    desc: 'Good code is only half the job. I value clear communication with teammates and stakeholders, making sure everyone\'s on the same page.',
  },
  {
    num: '03',
    title: 'open-minded',
    desc: 'I welcome new ideas and feedback, treating every critique as an opportunity to grow and every perspective as a chance to build something better.',
  },
]

export default function Skills() {
  const heading = useFadeUp(0)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="fade-up" ref={heading} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <p className="section-label">// what drives me</p>
          <h2 className="section-title">Core Values</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            Since the beginning of my journey as a developer, I've sharpened my soft skills alongside my technical ones —
            always seeking to be a better professional.
          </p>
        </div>
        <div className="skills-cards">
          {cards.map((c, i) => (
            <SkillCard key={c.num} card={c} delay={i * 120} />
          ))}
        </div>
      </div>
      <div className="divider" style={{ marginTop: '6rem' }} />
    </section>
  )
}

function SkillCard({ card, delay }) {
  const ref = useFadeUp(delay)
  return (
    <div className="skill-card fade-up" ref={ref}>
      <span className="skill-num">{card.num}</span>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </div>
  )
}
