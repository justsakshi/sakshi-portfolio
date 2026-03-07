import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [cursorX, setCursorX] = useState(50)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    const checkMobile = () => setIsMobile(window.matchMedia('(hover: none)').matches || window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => { clearTimeout(t); window.removeEventListener('resize', checkMobile) }
  }, [])

  useEffect(() => {
    if (isMobile) return
    const handleMouseMove = (e) => {
      setCursorX((e.clientX / window.innerWidth) * 100)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const clamped = Math.max(5, Math.min(95, cursorX))
  const offset = (clamped - 50) / 50 // -1 to +1

  // Smooth flex: center = 1:1, edges = 1.7:0.3
  const techFlex = isMobile ? 1 : 1 - offset * 0.7
  const mktFlex  = isMobile ? 1 : 1 + offset * 0.7

  // Center strip fades when cursor is far to either side
  const centerOpacity = isMobile ? 1 : 1 - Math.abs(offset) * 0.85

  return (
    <main className={`home ${loaded ? 'home--loaded' : ''}`}>

      {/* Center identity strip */}
      <div
        className="home__center"
        style={{ opacity: centerOpacity }}
      >
        <h1 className="home__name">SAKSHI</h1>
        <p className="home__tagline">Engineer&nbsp;&amp;&nbsp;<strong>Storyteller</strong></p>
        <p className="home__sub">Choose your side</p>
        <a href="/about" className="home__about-link">About me</a>
        <div className="home__arrow">↓</div>
      </div>

      {/* Tech side */}
      <div
        className="home__side home__side--tech"
        style={{ flex: techFlex }}
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
        className="home__side home__side--marketing"
        style={{ flex: mktFlex }}
        onClick={() => navigate('/marketing')}
      >
        <div className="home__side-img-wrap">
          <img src="/sakshi-staircase1.jpg" alt="Sakshi" className="home__side-img home__side-img--marketing" />
          <div className="home__side-overlay home__side-overlay--marketing" />
        </div>
        <div className="home__side-content home__side-content--right">
          <span className="home__side-label">The Storyteller</span>
          <h2 className="home__side-title">Words<br/>&amp; Brands</h2>
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

    </main>
  )
}