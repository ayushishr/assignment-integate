import { useState } from 'react'
import './Infrastructure.css'

const tabs = ['Infrastructure', 'Unified Communication', 'Data Center']
const cards = [
  { icon: 'network', title: 'Networking' },
  { icon: 'camera', title: 'Security Surveillance' },
]

function CardIcon({ name }) {
  const icons = {
    network: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/>
        <circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M8 12h8M12 8v8M6 8l2 2M16 8l2 2M6 16l2-2M16 16l2-2M8 6l2 2M8 18l2-2"/>
      </svg>
    ),
    camera: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  }
  return <span className="infra-icon">{icons[name] || icons.network}</span>
}

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="infrastructure" id="infrastructure">
      <div className="infrastructure-inner">
        <div className="infra-tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={`infra-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="infra-cards">
          {cards.map((card) => (
            <div key={card.title} className="infra-card">
              <CardIcon name={card.icon} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <div className="infra-cta-wrap">
          <a href="#solutions" className="infra-cta">Explore All</a>
        </div>
      </div>
    </section>
  )
}
