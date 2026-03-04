import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [hovered, setHovered] = useState(null) // 'tech' | 'marketing' | null
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className={`home ${loaded ? 'home--loaded' : ''}`}>
      {/* Center identity strip */}
      <div className={`home__center ${hovered ? `home__center--shift-${hovered}` : ''}`}>
        <h1 className="home__name">SAKSHI</h1>
        <p className="home__tagline">Engineer&nbsp;&amp;&nbsp;<strong>Storyteller</strong></p>
        <p className="home__sub">Choose your side</p>
        <div className="home__arrow">↓</div>
      </div>

      {/* Tech side */}
      <div
        className={`home__side home__side--tech ${hovered === 'tech' ? 'home__side--active' : ''} ${hovered === 'marketing' ? 'home__side--dim' : ''}`}
        onMouseEnter={() => setHovered('tech')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => navigate('/tech')}
      >
        <div className="home__side-img-wrap">
          <img src="/sakshi-mumbai.jpg" alt="Sakshi" className="home__side-img home__side-img--tech" />
          <div className="home__side-overlay home__side-overlay--tech" />
        </div>
        <div className="home__side-content">
          <span className="home__side-label">The Engineer</span>
          <h2 className="home__side-title">Code &amp;<br/>Systems</h2>
          <ul className="home__side-tags">
            <li>Python &amp; Automation</li>
            <li>LLM Integration</li>
            <li>Data Pipelines</li>
            <li>GTM Engineering</li>
          </ul>
          <span className="home__side-enter">Enter →</span>
        </div>
      </div>

      {/* Marketing side */}
      <div
        className={`home__side home__side--marketing ${hovered === 'marketing' ? 'home__side--active' : ''} ${hovered === 'tech' ? 'home__side--dim' : ''}`}
        onMouseEnter={() => setHovered('marketing')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => navigate('/marketing')}
      >
        <div className="home__side-img-wrap">
          <img src="/sakshi-staircase1.jpg" alt="Sakshi" className="home__side-img home__side-img--marketing" />
          <div className="home__side-overlay home__side-overlay--marketing" />
        </div>
        <div className="home__side-content home__side-content--right">
          <span className="home__side-label">The Storyteller</span>
          <h2 className="home__side-title">Words &amp;<br/>  Brands</h2>
          <ul className="home__side-tags">
            <li>Brand Copywriting</li>
            <li>SEO Content</li>
            <li>Campaign Strategy</li>
            <li>Brand Voice</li>
          </ul>
          <span className="home__side-enter">Enter →</span>
        </div>
      </div>

    </main>
  )
}
