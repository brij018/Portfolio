import { useFadeUp } from "../hooks/useFadeUp";

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "C++",
  "Python",
  "Node.js",
  "Git",
];

export default function About() {
  const left = useFadeUp(0);
  const right = useFadeUp(150);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-up" ref={left}>
            <p className="section-label">// about me</p>
            <h2 className="section-title">Who I Am</h2>
            <p>
              Hello! I'm Brij — a Computer Engineering student at Government
              Engineering College, Bhavnagar, with a deep passion for building
              things on the web. I'm currently furthering my skills in Full
              Stack Development at Red&White Multimedia Education.
            </p>
            <p>
              I enjoy tackling new challenges, writing clean code, and turning
              ideas into real products. Whether it's a pixel-perfect frontend or
              a robust backend, I care about crafting software that actually
              works well for people.
            </p>
            <p className="section-label" style={{ marginTop: "2rem" }}>
              // tech I work with
            </p>
            <div className="tech-grid">
              {techs.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="/cv/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary cv-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
              </svg>
              Download CV
            </a>
          </div>
          <div className="about-stats fade-up" ref={right}>
            {[
              { num: "4+", label: "projects shipped" },
              { num: "3+", label: "years learning" },
              { num: "9", label: "technologies" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number grad-text">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" style={{ marginTop: "6rem" }} />
    </section>
  );
}
