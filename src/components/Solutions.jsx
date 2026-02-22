import { useState } from 'react'
import './Solutions.css'

const infrastructureItems = [
  { icon: 'cloud', title: 'Cloud Solutions' },
  { icon: 'message', title: 'Unified Communication' },
  { icon: 'server', title: 'Data Center' },
]

const cybersecurityItems = [
  { icon: 'shield', title: 'Threat Detection' },
  { icon: 'lock', title: 'Data Protection' },
  { icon: 'monitor', title: 'Security Monitoring' },
]

function Icon({ name }) {
  const icons = {
    cloud: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
    ),
    message: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    server: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    lock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    monitor: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
  }
  return <span className="solution-icon">{icons[name] || icons.cloud}</span>
}

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('infrastructure')
  const items = activeTab === 'infrastructure' ? infrastructureItems : cybersecurityItems

  return (
    <section className="solutions" id="solutions">
      <div className="solutions-inner">
        <h2 className="solutions-title">Solutions</h2>
        <div className="solutions-tabs">
          <button
            type="button"
            className={`tab ${activeTab === 'infrastructure' ? 'active' : ''}`}
            onClick={() => setActiveTab('infrastructure')}
          >
            Infrastructure Solutions
          </button>
          <button
            type="button"
            className={`tab ${activeTab === 'cybersecurity' ? 'active' : ''}`}
            onClick={() => setActiveTab('cybersecurity')}
          >
            Cybersecurity Solution
          </button>
        </div>
        <div className="solutions-grid">
          {items.map((item) => (
            <div key={item.title} className="solution-card">
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
