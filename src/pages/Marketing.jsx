import { useEffect } from 'react'
import './Marketing.css'

const work = [
  {
    title: 'Freelance Copywriter',
    org: 'Independent',
    period: '2025 to present',
    desc: 'Working with studios and small brands on copy projects: website rewrites, launch messaging, social content, and brand voice guides. Ongoing, project-based.',
    highlight: 'Helping small brands sound like themselves, on purpose.',
    tags: ['Brand Voice', 'Website Copy', 'Launch Messaging', 'Freelance'],
  },
  {
    title: 'Brand Positioning & Messaging',
    org: 'TTBTE',
    period: 'Oct 2024 to Mar 2025',
    desc: 'Developed go-to-market messaging frameworks and brand voice for early-stage startups. Wrote website copy, landing pages, social media scripts, and pitch narratives.',
    highlight: 'Shaped how founders talked about their product, from first word to fundraising deck.',
    tags: ['Brand Voice', 'GTM Messaging', 'Website Copy', 'Pitch Narratives'],
  },
  {
    title: 'SEO Content & Growth Marketing',
    org: 'Wylo',
    period: 'Apr 2024 to Sep 2024',
    desc: '32% increase in organic traffic over six months. 20% CTR improvement through headline testing. Tracked user behaviour via Google Analytics to refine strategy.',
    highlight: '+32% organic traffic. +20% CTR. Real numbers, not vanity metrics.',
    link: { label: 'Read a sample post', url: 'https://www.wyloapp.com/blog/usecases-membership-community' },
    tags: ['SEO Writing', 'Newsletters', 'Google Analytics', 'Headline Testing'],
  },
  {
    title: 'Cultural Feature Writing',
    org: 'Korea.net (KOCIS)',
    period: 'May 2023 to Apr 2025',
    desc: 'Honorary Reporter for two years. Authored long-form cultural features promoting Korean heritage to a global English-speaking audience.',
    highlight: 'Two years writing about culture, identity, and connection for an international audience.',
    link: { label: 'See published articles', url: 'https://honoraryreporters.korea.net/board/main.do?pageidx=1&tpln=1&articlecate=1&searchtp=all&searchtxt=sakshi' },
    tags: ['Long-form Writing', 'Cultural Journalism', 'Multimedia Storytelling'],
  },
  {
    title: 'Entertainment & SEO Content',
    org: 'OtakuKart',
    period: 'Mar 2023 to Mar 2024',
    desc: '500+ SEO-optimised articles published. CTR improvement through headline optimisation and keyword research. Conducted competitor analysis to boost organic visibility.',
    highlight: '500+ articles. SEO from day one.',
    tags: ['SEO Articles', 'Keyword Research', 'CTR Optimisation'],
  },
]

const capabilities = [
  'Brand storytelling', 'Website copy', 'Landing page messaging',
  'SEO content strategy', 'Campaign ideation', 'Social media scripts',
  'Newsletter writing', 'Pitch narratives', 'Content audits', 'Brand voice development',
  'Video editing', 'Subtitling & captions',
]

export default function Marketing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="mkt">
      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-hero__text-col">
          <span className="mkt-hero__eyebrow">The Storyteller</span>
          <h1 className="mkt-hero__title">
            Words that<br/>
            <em>move people.</em>
          </h1>
          <p className="mkt-hero__bio">
            Copywriter and brand storyteller with a CSE degree tucked under my arm. 
            I write content that feels human and intentional, and I understand the systems 
            that make it perform.
          </p>
          <div className="mkt-hero__caps-label">What I work with</div>
          <div className="mkt-hero__caps">
            {capabilities.map(c => (
              <span key={c} className="mkt-cap">{c}</span>
            ))}
          </div>
        </div>
        <div className="mkt-hero__img-col">
          <div className="mkt-hero__img-stack">
            <img src="/sakshi-staircase1.jpg" alt="Sakshi" className="mkt-hero__img mkt-hero__img--back" />
            <img src="/sakshi-staircase1.jpg" alt="Sakshi" className="mkt-hero__img mkt-hero__img--front" />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="mkt-quote reveal">
        <blockquote>
          "No matter what anybody tells you, words and ideas <em>can</em> change the world."
        </blockquote>
        <cite>Dead Poets Society</cite>
      </section>

      {/* Work */}
      <section className="mkt-work reveal">
        <h2 className="section-label section-label--mkt">Experience & Work</h2>
        <div className="mkt-work__grid">
          {work.map((w, i) => (
            <article key={i} className="mkt-card reveal">
              <div className="mkt-card__header">
                <div>
                  <h3 className="mkt-card__title">{w.title}</h3>
                  <p className="mkt-card__org">{w.org} · {w.period}</p>
                </div>
              </div>
              <p className="mkt-card__highlight">"{w.highlight}"</p>
              <p className="mkt-card__desc">{w.desc}</p>
              <div className="mkt-card__tags">
                {w.tags.map(t => <span key={t} className="mkt-tag">{t}</span>)}
              </div>
              {w.link && (
                <a href={w.link.url} target="_blank" rel="noreferrer" className="mkt-card__link">
                  {w.link.label} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Video editing section */}
      <section className="mkt-video reveal">
        <div className="mkt-video__inner">
          <div className="mkt-video__text">
            <span className="mkt-video__eyebrow">Beyond words</span>
            <h2>I edit video, too.</h2>
            <p>
              Reels, short-form content, subtitled edits. Storytelling doesn't stop at copy —
              sometimes the cut, the caption, and the pacing are the message.
            </p>
            <a
              href="https://www.instagram.com/just.sakshi_/"
              target="_blank"
              rel="noreferrer"
              className="mkt-video__ig-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              See my edits on Instagram ↗
            </a>
          </div>
          <div className="mkt-video__tags">
            <span className="mkt-vtag">Reels</span>
            <span className="mkt-vtag">Short-form</span>
            <span className="mkt-vtag">Subtitling</span>
            <span className="mkt-vtag">Captions</span>
            <span className="mkt-vtag">Pacing & cuts</span>
            <span className="mkt-vtag">CapCut</span>
          </div>
        </div>
      </section>

      {/* Also does */}
      <section className="mkt-also reveal">
        <div className="mkt-also__inner">
          <h2>Also? I build things.</h2>
          <p>
            With a CSE background, I understand how products are built,<br/>
            which means I can write about them without needing a three-hour briefing.<br/>
            But more than that, I actually build them too. Automation pipelines, LLM workflows, 
            data systems. Technical accuracy plus human tone is a rare combo.
          </p>
          <a href="/tech" className="mkt-also__link">See the engineer side →</a>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta reveal">
        <p>Got a story that needs telling?</p>
        <a href="/contact">Let's Talk →</a>
      </section>
    </main>
  )
}