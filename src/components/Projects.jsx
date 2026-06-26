import { useFadeUp } from '../hooks/useFadeUp'

const projects = [
  {
    tag: 'Web App',
    title: 'Famms Website',
    desc: 'A modern full-featured web application with clean UI and seamless user experience, built end-to-end.',
    img: '/img/famms.png',
    url: 'https://famms-project.vercel.app/',
  },
  {
    tag: 'E-commerce',
    title: 'Furniture Website',
    desc: 'A stylish furniture e-commerce site with product browsing, detail pages, and a smooth shopping experience.',
    img: '/img/furn.png',
    url: 'https://furnproject.vercel.app/',
  },
  {
    tag: 'Business',
    title: 'Optics Website',
    desc: 'A professional optics business website with responsive design, product showcase, and contact integration.',
    img: '/img/optics.png',
    url: 'https://opticproject.vercel.app/',
  },
  {
    tag: 'E-commerce',
    title: 'Organics Website',
    desc: 'An organic products platform with a nature-inspired aesthetic, product listings, and clean navigation.',
    img: '/img/organic.png',
    url: 'https://organicwebsiteproject.vercel.app/',
  },
]

export default function Projects() {
  const heading = useFadeUp(0)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="fade-up" ref={heading}>
          <p className="section-label">// what i've built</p>
          <h2 className="section-title">Projects</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.5rem' }}>
            Projects are how I learn best — by building. Here are some recent ones. Click the link on each to see it live.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
      <div className="divider" style={{ marginTop: '6rem' }} />
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const ref = useFadeUp(delay)
  return (
    <div className="project-card fade-up" ref={ref}>
      <div className="project-img">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="project-info">
        <p className="project-tag">{project.tag}</p>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
          Visit site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>
    </div>
  )
}
