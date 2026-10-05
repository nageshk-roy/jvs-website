import { useState } from "react";

const business = [
  ["01", "JVS", "Jyoshna's Versatile Stability"],
  ["02", "JVS Tech", "Technology & innovation"],
  ["03", "Jyora Events", "Events & experiences"],
  ["04", "Versatile Academy", "Education & training"],
  ["05", "VexoBiz", "Business & consulting"],
  ["06", "Signature Stays", "Hospitality"],
];

const services = [
  ["01", "Education & Training", "Training | Skills | Careers"],
  ["02", "Internships & Projects", "Internships | Projects | Portfolio"],
  ["03", "Career Development", "Placements | Careers | Interviews"],
  ["04", "Technology & Innovation", "Web | Apps | Software"],
  ["05", "Digital Solutions", "Marketing | SEO | Branding"],
  ["06", "Business & Consulting", "Startups | Registration | Consulting"],
  ["07", "Events & Experiences", "Corporate | Celebrations | Experiences"],
  ["08", "Growth & Opportunities", "Business | Development | Growth"],
];

function SectionTitle({ label, title, children }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="header">
        <nav className="container nav">
          <a className="brand" href="#home" onClick={closeMenu}>
            JVS<span>.</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#business" onClick={closeMenu}>Our Business</a>
            <a href="#services" onClick={closeMenu}>How We Serve</a>
            <a href="#perspective" onClick={closeMenu}>Perspective</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact Us ↗</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Jyoshna's Versatile Stability</span>
              <h1>
                Driving ideas into
                <span> meaningful opportunities.</span>
              </h1>
              <p>
                Driving Success Through Education, Events & Innovation — creating
                solutions that move people and businesses forward.
              </p>

              <div className="actions">
                <a className="button primary" href="#business">Explore Our Business ↗</a>
                <a className="button secondary" href="#contact">Contact Us</a>
              </div>

              <div className="hero-meta">
                <span>Education</span>
                <i />
                <span>Events</span>
                <i />
                <span>Innovation</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="visual-lines" />
              <div className="visual-content">
                <div className="jvs-mark">JVS</div>
                <p>Jyoshna's Versatile Stability</p>
                <div className="visual-divider" />
                <small>Vision • Versatility • Growth</small>
              </div>
              <div className="floating-card">
                <span>Our Vision</span>
                <strong>Ideas → Value → Growth</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container two-column">
            <div>
              <SectionTitle
                label="About Us"
                title="A growing business group driven by vision."
              />
              <div className="feature-list">
                {[
                  "Event Management",
                  "Career Placements",
                  "Startup Entrepreneurship",
                  "Technology Innovation",
                  "Company Registrations",
                  "Hospitality",
                ].map((item) => (
                  <div className="feature-item" key={item}>
                    <span>✦</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-content">
              <p className="lead">
                JVS (Jyoshna’s Versatile Stability) is a growing business group
                driven by innovation, vision, and versatility.
              </p>
              <p>
                We create and develop ventures designed to bring value,
                opportunity, and lasting growth.
              </p>

              <blockquote>
                <p>
                  “I believe in turning ideas into meaningful opportunities,
                  creating with purpose, and building a vision that grows
                  beyond today.”
                </p>
                <footer>Jyoshna Yellapu <span>Managing Director of JVS</span></footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section business" id="business">
          <div className="container">
            <div className="business-heading">
              <SectionTitle label="Our Business" title="Multiple ventures. One vision.">
                <p className="section-description">
                  A portfolio spanning education, technology, events, business
                  and hospitality.
                </p>
              </SectionTitle>
            </div>

            <div className="business-grid">
              {business.map(([number, title, description]) => (
                <article className="business-card" key={title}>
                  <span className="card-number">{number}</span>
                  <div className="card-icon">↗</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <SectionTitle
              label="How We Serve"
              title={<>Solutions that move people<br />and businesses forward.</>}
            >
              <p className="section-description">
                From learning and career development to business, technology
                and experiences, we create solutions that move people and
                businesses forward.
              </p>
            </SectionTitle>

            <div className="services-grid">
              {services.map(([number, title, description]) => (
                <article className="service-card" key={title}>
                  <span className="service-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <span className="arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section perspective" id="perspective">
          <div className="container">
            <SectionTitle label="Our Perspective" title="Leadership with purpose." />

            <div className="perspective-grid">
              <article className="quote-card">
                <span className="quote-mark">“</span>
                <p>
                  I believe in turning ideas into meaningful opportunities,
                  creating with purpose, and building a vision that grows
                  beyond today.
                </p>
                <div className="person">
                  <strong>Jyoshna Yellapu</strong>
                  <span>Managing Director of JVS</span>
                </div>
              </article>

              <article className="quote-card">
                <span className="quote-mark">“</span>
                <p>
                  True growth begins with strong ideas, meaningful
                  collaboration, and the courage to turn possibilities into
                  something valuable, impactful, and lasting for the future.
                </p>
                <div className="person">
                  <strong>Vahid Shaik</strong>
                  <span>Managing Director of VexoBiz</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <span className="eyebrow">Contact Us</span>
                <h2>Let's build meaningful opportunities.</h2>
                <p>
                  Connect with JVS for enquiries, opportunities and
                  collaborations.
                </p>
              </div>

              <div className="contact-details">
                <a href="tel:+919160030342"><span>☎</span> +91 91600 30342</a>
                <a href="mailto:jvsacademyofficial@gmail.com"><span>✉</span> jvsacademyofficial@gmail.com</a>
                <a href="https://www.jvsacademy.com" target="_blank" rel="noreferrer"><span>◎</span> www.jvsacademy.com</a>
                <span><span>⌖</span> Visakhapatnam, 530022</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} JVS — Jyoshna's Versatile Stability</span>
          <span>Driving Success Through Education, Events & Innovation</span>
        </div>
      </footer>
    </div>
  );
}

export default App;