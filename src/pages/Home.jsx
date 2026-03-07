import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [hovered, setHovered] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [cursorX, setCursorX] = useState(50) // percentage across screen
  const navigate = useNavigate()
  const mainRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Only track cursor on non-touch devices
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const handleMouseMove = (e) => {
      const pct = (e.clientX / window.innerWidth) * 100
      setCursorX(pct)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Map cursor position to flex ratio
  // Center (50%) = equal split, far left = tech dominant, far right = marketing dominant
  const deadZone = 10 // px buffer around center before it starts shifting
  const clampedPct = Math.max(5, Math.min(95, cursorX))

  // When hovering a side via click intent, override with that
  const techFlex = hovered === 'tech' ? 1.6 : hovered === 'marketing' ? 0.4 : 0.5 + (50 - clampedPct) / 100
  const mktFlex  = hovered === 'marketing' ? 1.6 : hovered === 'tech' ? 0.4 : 0.5 + (clampedPct - 50) / 100

  return (
    <main
      ref={mainRef}
      className={`home ${loaded ? 'home--loaded' : ''}`}
    >
      {/* Center identity strip */}
      <div className={`home__center ${hovered ? `home__center--shift-${hovered}` : ''}`}>
        <h1 className="home__name">SAKSHI</h1>
        <p className="home__tagline">Engineer&nbsp;&amp;&nbsp;<strong>Storyteller</strong></p>
        <p className="home__sub">Choose your side</p>
        <a href="/about" className="home__about-link">About me</a>
        <div className="home__arrow">↓</div>
      </div>

      {/* Tech side */}
      <div
        className={`home__side home__side--tech ${hovered === 'tech' ? 'home__side--active' : ''} ${hovered === 'marketing' ? 'home__side--dim' : ''}`}
        style={{ flex: techFlex }}
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
        <span className="home__mobile-label">The Engineer ↑</span>
      </div>

      {/* Marketing side */}
      <div
        className={`home__side home__side--marketing ${hovered === 'marketing' ? 'home__side--active' : ''} ${hovered === 'tech' ? 'home__side--dim' : ''}`}
        style={{ flex: mktFlex }}
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
          <h2 className="home__side-title">Words <br/>&amp; Brands</h2>
          <ul className="home__side-tags">
            <li>Brand Copywriting</li>
            <li>SEO Content</li>
            <li>Campaign Strategy</li>
            <li>Brand Voice</li>
          </ul>
          <span className="home__side-enter">Enter →</span>
        </div>
        <span className="home__mobile-label home__mobile-label--right">The Storyteller ↓</span>
      </div>

      {/* Divider line — follows cursor */}
      <div
        className="home__divider"
        style={{ left: `${clampedPct}%` }}
      />
    </main>
  )
}