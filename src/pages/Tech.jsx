import { useEffect, useRef } from 'react'
import './Tech.css'

const projects = [
  {
    title: 'GTM Automation Pipelines',
    org: 'Precise Leads',
    year: '2025 to present',
    desc: 'Built Python + Make/n8n automations syncing lead data across APIs. Maintains clean, deduped ICP datasets and uses LLMs for research and personalisation.',
    tags: ['Python', 'n8n', 'Make', 'LLMs', 'REST APIs', 'JSON'],
    type: 'internship',
  },
  {
    title: 'Aircraft Component Data System',
    org: 'Hindustan Aeronautics Limited',
    year: '2024',
    desc: 'Oracle SQL + Streamlit dashboard automating 80% of manual data entry for 1000+ aircraft components. Improved query performance by 40%.',
    tags: ['Oracle SQL', 'Python', 'Streamlit'],
    type: 'internship',
  },
  {
    title: 'Infra Asset Dashboard (infra-bot)',
    org: 'Personal Project',
    year: '2025',
    desc: 'Manages domains and email inboxes across clients. Tracks expiry, costs, and status in a live dashboard. Supports bulk actions, CSV import/export, and a Slack bot that sends daily reminders on weekdays so nothing expires unnoticed.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Slack Bolt', 'Google Sheets', 'Render'],
    type: 'project',
    link: 'https://github.com/justsakshi/infra-bot',
  },
  {
    title: 'Vibe Matcher Prototype',
    org: 'Nexora',
    year: '2025',
    desc: 'AI-powered product discovery that understands shopper mood, not just keywords. Encodes products and vibe-rich queries into a shared semantic space to serve hyper-relevant fashion recommendations fast.',
    tags: ['Python', 'Semantic Search', 'Vector Embeddings', 'AI', 'E-commerce'],
    type: 'project',
    link: 'https://github.com/justsakshi/vibe-matcher-prototype',
  },
  {
    title: 'Multi-Omics Pharmacogenomics Platform',
    org: 'IEEE Research Paper',
    year: '2025',
    desc: 'A comprehensive platform for analyzing multi-omics data and predicting drug responses using machine learning. Integrates genomics, transcriptomics, proteomics, and drug response data to provide personalized medicine insights.',
    tags: ['Python', 'Deep Learning', 'Multi-omics', 'Bioinformatics', 'IEEE'],
    type: 'research',
    link: 'https://github.com/justsakshi/multi-omics-pharmacogenomic',
  },
  {
    title: 'Virtual Mouse via Hand Gestures',
    org: 'Personal Project',
    year: '2024',
    desc: 'Real-time gesture tracking using computer vision, achieving 92% detection accuracy with optimised pipeline latency.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    type: 'project',
    link: 'https://github.com/justsakshi/Virtual-Mouse',
  },
  {
    title: 'NoteHub',
    org: 'Personal Project',
    year: '2024',
    desc: 'Minimal and efficient note-taking app built with Flutter. Create, edit, reorder, and manage notes with a simple responsive interface. Uses Hive for local storage so all notes persist between sessions.',
    tags: ['Flutter', 'Dart', 'Hive'],
    type: 'project',
    link: 'https://github.com/justsakshi/NoteHub',
  },
  {
    title: 'HENNGE Admission Challenge',
    org: 'Open Challenge',
    year: '2024',
    desc: 'Completed all missions including RFC6238 TOTP implementation and complex recursion-based algorithmic tasks.',
    tags: ['Python', 'Algorithms', 'TOTP'],
    type: 'project',
    link: 'https://github.com/justsakshi/hennge-admission-challenge',
  },
]

const skills = [
  { cat: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Dart'] },
  { cat: 'AI & ML', items: ['LLM Integration', 'OpenAI APIs', 'Prompt Engineering', 'Data Preprocessing'] },
  { cat: 'Automation', items: ['Make', 'n8n', 'Zapier', 'Webhooks', 'REST APIs'] },
  { cat: 'Data', items: ['Oracle SQL', 'MySQL', 'Streamlit', 'Data Pipelines'] },
  { cat: 'Tools', items: ['Git', 'GitHub', 'JSON', 'Clay', 'Apollo'] },
]

export default function Tech() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="tech">
      {/* Hero */}
      <section className="tech-hero" ref={heroRef}>
        <div className="tech-hero__img-col">
          <div className="tech-hero__img-wrap">
            <img src="/sakshi-mumbai.jpg" alt="Sakshi" />
            <div className="tech-hero__img-label">CSE Student, Graduating Jun '26</div>
          </div>
        </div>
        <div className="tech-hero__text-col">
          <span className="tech-hero__eyebrow">The Engineer</span>
          <h1 className="tech-hero__title">
            Building things<br/>
            <em>that actually work.</em>
          </h1>
          <p className="tech-hero__bio">
            I'm a Computer Science engineering student who prefers working close to the problem. 
            I build automation systems, data pipelines, and LLM-powered tools that quietly make everything run better.
          </p>
          <div className="tech-hero__links">
            <a href="https://github.com/justsakshi" target="_blank" rel="noreferrer" className="tech-hero__link">
              GitHub ↗
            </a>
            <a href="https://leetcode.com/u/just_sakshi/" target="_blank" rel="noreferrer" className="tech-hero__link">
              LeetCode ↗
            </a>
            <a href="https://www.linkedin.com/in/sakshi-6a7a60282" target="_blank" rel="noreferrer" className="tech-hero__link">
              LinkedIn ↗
            </a>
          </div>
          <div className="tech-hero__stat-row">
            <div className="tech-hero__stat"><span>8.2</span><small>CGPA</small></div>
            <div className="tech-hero__stat"><span>2+</span><small>Years experience</small></div>
            <div className="tech-hero__stat"><span>5+</span><small>Projects shipped</small></div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="tech-skills reveal">
        <h2 className="section-label">Skills & Stack</h2>
        <div className="tech-skills__grid">
          {skills.map(s => (
            <div key={s.cat} className="tech-skills__card">
              <h3>{s.cat}</h3>
              <ul>
                {s.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="tech-projects reveal">
        <h2 className="section-label">Work &amp; Projects</h2>
        <div className="tech-projects__list">
          {projects.map((p, i) => (
            <div key={i} className="tech-project-card reveal">
              <div className="tech-project-card__meta">
                <span className={`tech-project-card__type type--${p.type}`}>{p.type}</span>
                <span className="tech-project-card__year">{p.year}</span>
              </div>
              <div className="tech-project-card__body">
                <div>
                  <h3 className="tech-project-card__title">{p.title}</h3>
                  <p className="tech-project-card__org">{p.org}</p>
                  <p className="tech-project-card__desc">{p.desc}</p>
                </div>
                <div className="tech-project-card__tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="tech-project-card__link">
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crossover to marketing */}
      <section className="tech-also reveal">
        <div className="tech-also__inner">
          <h2>Also? I write things.</h2>
          <p>
            Two years of brand copywriting, SEO content, and campaign strategy. I know how to 
            make a product sound human, shape a brand voice from scratch, and write copy 
            that actually converts. Being a builder makes me a better writer. Being a writer makes 
            me a better builder.
          </p>
          <a href="/marketing" className="tech-also__link">See the storyteller side →</a>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta reveal">
        <p>Interested in working together?</p>
        <a href="/contact">Let's Talk →</a>
      </section>
    </main>
  )
}
