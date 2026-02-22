import { useState } from 'react'
import './Services.css'

const serviceTabs = [
  'Design & Consultation',
  'Infrastructure Services',
  'Cybersecurity Services',
  'Managed Services',
]

const designServices = [
  { icon: 'planning', title: 'Planning' },
  { icon: 'consulting', title: 'Consulting' },
  { icon: 'solutioning', title: 'Solutioning' },
  { icon: 'project', title: 'Project Management' },
  { icon: 'training', title: 'Products & Technology Training' },
]

function ServiceIcon({ name }) {
  const icons = {
    planning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
      </svg>
    ),
    consulting: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4"/><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
      </svg>
    ),
    solutioning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    project: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
    ),
    training: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
  }
  return <span className="service-icon">{icons[name] || icons.planning}</span>
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <h2 className="services-title">Services</h2>
        <div className="services-tabs">
          {serviceTabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={`service-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="services-grid">
          {designServices.map((s) => (
            <div key={s.title} className="service-card">
              <ServiceIcon name={s.icon} />
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>
        <div className="services-cta-wrap">
          <a href="#contact" className="services-cta">Read More</a>
        </div>
      </div>
    </section>
  )
}
