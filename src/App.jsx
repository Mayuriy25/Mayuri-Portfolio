
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
    demo: 'https://drive.google.com/file/d/1DxTBP78f3ye-u7OWvSjwgwvSuaFIdip3/view?usp=drive_link',
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
            <a className="button button-primary" href="#projects">
              Explore my work <span>↗</span>
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
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="indent">name: <span className="code-green">'Mayuri'</span>,</p>
              <p className="indent">role: <span className="code-green">'React Developer'</span>,</p>
              <p className="indent">curious: <span className="code-orange">true</span>,</p>
              <p className="indent">building: <span className="code-green">'the future'</span></p>
              <p>{'}'}</p>
              <br />
              <p><span className="code-purple">function</span> <span className="code-blue">create</span>() {'{'}</p>
              <p className="indent">return <span className="code-green">'something useful'</span>;</p>
              <p>{'}'}</p>
              <br />
              <p className="code-comment">// always learning ✨</p>
            </div>
          </div>

          <div className="floating-badge badge-one">⚛ React</div>
          <div className="floating-badge badge-two">✦ Always learning</div>
        </div>

        <a className="scroll-cue" href="#about">SCROLL TO EXPLORE ↓</a>
      </section>

      <section className="section container" id="about">
        <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
        <h2>Curious mind. <span>Builder's mindset.</span></h2>
        <p className="section-description">
          I enjoy learning how things work, solving problems through code,
          and building projects that turn concepts into working applications.
          I'm strengthening my JavaScript and React skills while preparing
          for opportunities in frontend development.
        </p>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>Projects I've <span>worked on.</span></h2>
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
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                ) : (
                  <span className="link-placeholder">GitHub link to add</span>
                )}

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="skills">
        <p className="eyebrow">03 / MY TOOLKIT</p>
        <h2>Technologies I'm <span>learning & using.</span></h2>

        <div className="skills-grid">
          {[
            ['01', 'HTML5', 'Semantic structure'],
            ['02', 'CSS3', 'Responsive layouts'],
            ['03', 'JavaScript', 'Core language'],
            ['04', 'React.js', 'Component-based UI'],
            ['05', 'Git & GitHub', 'Version control'],
            ['06', 'Node.js', 'Backend fundamentals'],
          ].map(([number, name, description]) => (
            <div className="skill-item" key={name}>
              <span>{number}</span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <span className="skill-star">✳</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">04 / LET'S CONNECT</p>
          <h2>Have an opportunity<br />or an idea? <span>Let's talk.</span></h2>
          <p className="section-description">
            I'm looking forward to learning, contributing, and growing
            with a team that builds meaningful products.
          </p>
          <a
            className="button button-primary"
            href="mailto:mayuriyende2001@gmail.com"
          >
            Get in touch ↗
          </a>
          <footer>
            <a className="logo" href="#home">Mayuri<span>.dev</span></a>
            <p>Designed &amp; built with React · © 2026 Mayuri Yende</p>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default App
