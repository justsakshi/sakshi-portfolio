import { useEffect } from 'react'
import './About.css'

const timeline = [
  { year: '2023', event: <>Started writing: <br/>OtakuKart, Korea.net. 500+ articles.</>},
  { year: '2024', event: <>DBMS Intern at HAL. <br/>Automated 80% of manual data entry for aerospace engineering teams.</> },
  { year: '2024', event: <>Content Marketing at Wylo.<br/> +32% organic traffic. Learned SEO properly.</> },
  { year: '2024', event: <>Brand Story Copywriter at TTBTE.<br/> Shaped messaging for early-stage startups.</> },
  { year: '2025', event: <>GTM Engineer Intern at Precise Leads.<br/> Python, LLMs, automation pipelines, in production.</> },
  { year: '2026', event: <>Graduating in June. <br/>Looking for what comes next.</> },
]

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero__img-col">
          <img src="/1000056836.jpg" alt="Sakshi" className="about-hero__img" />
        </div>
        <div className="about-hero__text-col">
          <span className="about-hero__eyebrow">About me</span>
          <h1 className="about-hero__title">
            Hi,<br/>
            I'm <em>Sakshi.</em>
          </h1>
          <p className="about-hero__p">
            A final-year CSE student from Bangalore who somehow ended up equally at home in Python 
            and in prose. I build things and I write things, and I've found that doing both makes me 
            better at each.
          </p>
          <p className="about-hero__p">
            My tech side loves data pipelines, LLMs, and systems that quietly make everything work better. 
            My creative side loves brand voice, long-form storytelling, and copy that sounds like a human wrote it.
          </p>
          <p className="about-hero__p">
            Outside of work: I learn languages for fun, and treat curiosity as a lifestyle..
          </p>
          <div className="about-hero__details">
            <div className="about-detail">
              <span>📍</span>
              <span>Bangalore, India</span>
            </div>
            <div className="about-detail">
              <span>🎓</span>
              <span>B.E. CSE, VTU. Graduating Jun 2026</span>
            </div>
            
          </div>
        </div>
      </section>

      <section className="about-timeline reveal">
        <h2 className="section-label">The journey so far</h2>
        <div className="timeline">
          {timeline.map((t, i) => (
            <div key={i} className="timeline__item reveal">
              <div className="timeline__year">{t.year}</div>
              <div className="timeline__dot" />
              <div className="timeline__event">{t.event}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-unusual reveal">
        <div className="about-unusual__inner">
          <h2>What makes me unusual.</h2>
          <div className="about-unusual__grid">
            <div className="about-unusual__item">
              <h3>I read the docs.</h3>
              <p>
                Most marketers can't explain how an API works. Most engineers don't think about 
                what the user actually needs to hear. <br/>I live in that gap and I like it there.
              </p>
            </div>
            <div className="about-unusual__item">
              <h3>I write everything.</h3>
              <p>
                SEO articles. Brand frameworks for startups. Pitch decks. 
                Code documentation. Website rewrites.<br/>If it needs words, I've probably written a version of it.
              </p>
            </div>
            <div className="about-unusual__item">
              <h3>I ship things.</h3>
              <p>
                Not just decks and proposals, but also actual working systems. Pipelines in production. 
                A Streamlit dashboard used by HAL engineers. <br/>Code that does something real.
              </p>
            </div>
            <div className="about-unusual__item">
              <h3>I'm genuinely curious.</h3>
              <p>
                I spent two years writing about Korean culture for an international audience. 
                Have been a professional Bharatanatyam artist. <br/>Curiosity isn't a soft skill. It's how I work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta reveal">
        <p>Want to know more?</p>
        <a href="/contact">Get in touch →</a>
      </section>
    </main>
  )
}
