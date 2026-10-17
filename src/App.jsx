
import './App.css'

const projects = [
  {
    number: '01',
    name: 'Batchify',
    category: 'WEB APPLICATION',
    description:
      'A delivery-order batching project focused on organizing orders and improving delivery workflow.',
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Mayuriy25/Batchify',
    demo: '',
  },
  {
    number: '02',
    name: 'PrepPilot',
    category: 'PERSONAL PROJECT',
    description:
      'An interview preparation project designed to support structured practice and career preparation.',
    technologies: ['React', 'JavaScript'],
    github: 'https://github.com/Mayuriy25/Prepilot',
    demo: '',
  },
  {
    number: '03',
    name: 'IoT Robotic Arm',
    category: 'ACADEMIC PROJECT',
    description:
      'An academic project combining a robotic arm, sensors, and machine learning.',
    technologies: ['IoT', 'Sensors', 'Machine Learning'],
    github: '',
    demo: 'https://drive.google.com/file/d/1DxTBP78f3ye-u7OWvSjwgwvSuaFIdip3/view?usp=drive_link',
  },
]

const skillGroups = [
  {
    title: 'Frontend Development',
    subtitle: 'Building user interfaces',
    icon: '✦',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend Development',
    subtitle: 'Server-side fundamentals',
    icon: '⌘',
    skills: ['Node.js'],
  },
  {
    title: 'Tools & Workflow',
    subtitle: 'Building and managing projects',
    icon: '⚡',
    skills: ['Git', 'GitHub'],
  },
]

function App() {
  return (
    <main>
      <nav className="navbar container">
        <a className="logo" href="#home">
          mayuri<span>.dev</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M MAYURI YENDE</p>

          <h1>
            Building digital
            <br />
            experiences with
            <br />
            <span>React &amp; code.</span>
          </h1>

          <p className="hero-description">
            I'm a Computer Science graduate building practical web
            applications and growing as a frontend developer.
            I enjoy turning ideas into clean, responsive interfaces.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Get in Touch <span>↗</span>
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/Mayuriy25"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
          </div>

          <div className="hero-tech">
            <span>CURRENTLY WORKING WITH</span>
            <div>React.js <i /> JavaScript <i /> CSS3 <i /> Git</div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer introduction">
          <div className="visual-glow" />

          <div className="code-card">
            <div className="code-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {'{'}
              </p>
              <p className="indent">
                name: <span className="code-green">'Mayuri'</span>,
              </p>
              <p className="indent">
                role: <span className="code-green">'React Developer'</span>,
              </p>
              <p className="indent">
                curious: <span className="code-orange">true</span>,
              </p>
              <p className="indent">
                building: <span className="code-green">'the future'</span>
              </p>
              <p>{'}'}</p>
              <br />
              <p>
                <span className="code-purple">function</span>{' '}
                <span className="code-blue">create</span>() {'{'}
              </p>
              <p className="indent">
                return <span className="code-green">'something useful'</span>;
              </p>
              <p>{'}'}</p>
              <br />
              <p className="code-comment">// always learning ✨</p>
            </div>
          </div>

          <div className="floating-badge badge-one">⚛ React</div>
          <div className="floating-badge badge-two">✦ Always learning</div>
        </div>

        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      {/* ABOUT */}
      <section className="section container" id="about">
        <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
        <h2>
          Curious mind. <span>Builder's mindset.</span>
        </h2>
        <p className="section-description">
          I enjoy learning how things work, solving problems through code,
          and building projects that turn concepts into working applications.
          I'm strengthening my JavaScript and React skills while preparing
          for opportunities in frontend development.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section container" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              Projects I've <span>worked on.</span>
            </h2>
          </div>
          <p className="muted">Ideas turned into code.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-arrow">↗</span>
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section className="skills-section container" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / MY EXPERTISE</p>
            <h2>
              Skills &amp; <span>Technologies.</span>
            </h2>
          </div>
          <p className="muted">The tools behind my ideas.</p>
        </div>

        <p className="section-description">
          I enjoy turning ideas into responsive, interactive
          interfaces while continuously improving my development skills.
        </p>

        <div className="skill-showcase">
          <article className="skill-feature-card">
            <div className="skill-feature-heading">
              <div className="skill-feature-icon">✦</div>
              <div>
                <span className="skill-kicker">01 — CORE FOCUS</span>
                <h3>Frontend Development</h3>
                <p>Creating responsive, interactive interfaces.</p>
              </div>
            </div>

            <div className="skill-tech-grid">
              <div className="skill-tech">
                <div className="tech-symbol html-symbol">5</div>
                <div>
                  <h4>HTML5</h4>
                  <p>Web structure</p>
                </div>
              </div>

              <div className="skill-tech">
                <div className="tech-symbol css-symbol">3</div>
                <div>
                  <h4>CSS3</h4>
                  <p>Styling & layouts</p>
                </div>
              </div>

              <div className="skill-tech">
                <div className="tech-symbol js-symbol">JS</div>
                <div>
                  <h4>JavaScript</h4>
                  <p>Logic & interaction</p>
                </div>
              </div>

              <div className="skill-tech">
                <div className="tech-symbol react-symbol">⚛</div>
                <div>
                  <h4>React.js</h4>
                  <p>Reusable UI components</p>
                </div>
              </div>
            </div>

            <div className="skill-feature-footer">
              <span className="skill-footer-dot" />
              Building, practicing, improving.
            </div>
          </article>

          <div className="skill-side-column">
            <article className="skill-side-card">
              <div className="skill-side-icon">⌘</div>
              <span className="skill-kicker">02 — VERSION CONTROL</span>
              <h3>Tools & Workflow</h3>
              <p>Managing code and project changes.</p>
              <div className="skill-pills">
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </article>

            <article className="skill-side-card">
              <div className="skill-side-icon">↗</div>
              <span className="skill-kicker">03 — BACKEND</span>
              <h3>Backend Fundamentals</h3>
              <p>Exploring server-side development.</p>
              <div className="skill-pills">
                <span>Node.js</span>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">04 / LET'S CONNECT</p>

          <h2>
            Have an opportunity
            <br />
            or an idea? <span>Let's talk.</span>
          </h2>

          <p className="section-description">
            I'm looking forward to learning, contributing, and growing
            with a team that builds meaningful products.
          </p>

          <div className="contact-grid">
            <a
              className="contact-card"
              href="tel:+919322730792"
            >
              <span className="contact-icon">☎</span>
              <div>
                <h3>Phone</h3>
                <p>+91 93227 30792</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/mayuri-yende-105781284/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">in</span>
              <div>
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="contact-card"
              href="mailto:mayuriyende2004@gmail.com"
            >
              <span className="contact-icon">✉</span>
              <div>
                <h3>Email</h3>
                <p>mayuriyende2004@gmail.com</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          </div>

          <footer>
            <a className="logo" href="#home">
              mayuri<span>.dev</span>
            </a>
            <p>Designed &amp; built with React · © 2026 Mayuri Yende</p>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default App
