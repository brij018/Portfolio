import { useMemo } from 'react'

export default function Particles({ count = 20 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 6 + 2}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * -20}s`,
    })), [count])

  return (
    <div className="particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
