import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const helpWith = [
  'automation pipelines', 'LLM integrations', 'data workflows',
  'GTM engineering', 'Python scripting', 'API orchestration',
  'brand storytelling', 'website copy', 'SEO strategy', 'campaign messaging',
  'brand voice', 'launch copy', 'newsletter writing',
  'building things that perform', 'making tech feel human',
  'content that converts', 'systems that scale',
]

function TypewriterCycler({ items }) {
  const [displayText, setDisplayText] = useState('')
  const [itemIndex, setItemIndex] = useState(0)
  const [phase, setPhase] = useState('typing')
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = items[itemIndex]
    if (phase === 'typing') {
      if (displayText.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60)
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), 1800)
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 400)
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30)
      } else {
        setItemIndex((itemIndex + 1) % items.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayText, phase, itemIndex, items])

  return (
    <span className="typewriter">
      {displayText}<span className="typewriter__cursor">|</span>
    </span>
  )
}

/*
  HOW THIS WORKS:
  This form submits silently to your Google Form in the background.
  The user sees your beautiful custom UI — Google never shows.

  To wire it up:
  1. Open your Google Form: https://docs.google.com/forms/d/e/1FAIpQLSdEmesZKh98HJiUAPCTpCh3a7Go90wgYaotEOMr22pNWfhltg/viewform
  2. Right-click the page → View Page Source
  3. Search for "entry." — you'll find entry IDs like entry.123456789 for each field
  4. Replace ENTRY_NAME, ENTRY_EMAIL, ENTRY_MESSAGE below with the actual entry IDs
*/
const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdEmesZKh98HJiUAPCTpCh3a7Go90wgYaotEOMr22pNWfhltg/formResponse'
const ENTRY_NAME = 'entry.REPLACE_NAME_ID'
const ENTRY_EMAIL = 'entry.REPLACE_EMAIL_ID'
const ENTRY_MESSAGE = 'entry.REPLACE_MESSAGE_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const body = new FormData()
    body.append(ENTRY_NAME, form.name)
    body.append(ENTRY_EMAIL, form.email)
    body.append(ENTRY_MESSAGE, form.message)
    try {
      // Google Forms doesn't allow CORS, so we use no-cors — it always "succeeds" visually
      await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact">
      {/* Hero typewriter */}
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span className="contact-hero__eyebrow">Get in touch</span>
          <h1 className="contact-hero__title">
            I can help you with<br />
            <TypewriterCycler items={helpWith} />
          </h1>
          <p className="contact-hero__sub">
            Whether you have a project, a problem, or just want to say hi, my inbox is a good place to start.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="contact-links reveal">
        <a href="mailto:sakshiny08@gmail.com" className="contact-link">
          <span className="contact-link__label">Email</span>
          <span className="contact-link__val">sakshiny08@gmail.com ↗</span>
        </a>
        <a href="https://www.linkedin.com/in/sakshi-6a7a60282" target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link__label">LinkedIn</span>
          <span className="contact-link__val">Connect with me ↗</span>
        </a>
        <a href="https://github.com/justsakshi" target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link__label">GitHub</span>
          <span className="contact-link__val">justsakshi ↗</span>
        </a>
      </section>

      {/* Clean custom form */}
      <section className="contact-form-section reveal">
        <div className="contact-form-wrap">
          <h2>Send a message.</h2>
          {status === 'sent' ? (
            <div className="contact-form-success">
              <p>Got it. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project, problem, or just say hello..." required />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send message →'}
              </button>
              {status === 'error' && (
                <p className="form-error">Something went wrong. Email me directly at sakshiny08@gmail.com</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Availability */}
      <section className="contact-avail reveal">
        <div className="contact-avail__inner">
          <span className="contact-avail__dot" />
          <div>
            <p className="contact-avail__status">Open to opportunities</p>
            <p className="contact-avail__text">
              Graduating June 2026. <br/>
              Currently, open to full-time/freelancing roles in tech, growth, or anywhere the two overlap.<br/>
              Willing to relocate :)
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
