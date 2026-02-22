import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [solutionOpen, setSolutionOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="12" r="2.5" fill="url(#logoGrad)"/>
              <circle cx="28" cy="20" r="2.5" fill="url(#logoGrad)"/>
              <circle cx="20" cy="28" r="2.5" fill="url(#logoGrad)"/>
              <circle cx="12" cy="20" r="2.5" fill="url(#logoGrad)"/>
              <path d="M20 14.5v3M20 22.5v3M17.5 20h3M22.5 20h3" stroke="url(#logoGrad)" strokeWidth="1.5"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb"/>
                  <stop offset="1" stopColor="#7c3aed"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">Genome</span>
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <div className="nav-dropdown" onMouseEnter={() => setSolutionOpen(true)} onMouseLeave={() => setSolutionOpen(false)}>
            <a href="#solutions">Solution <span className="arrow">▼</span></a>
            {solutionOpen && (
              <div className="dropdown-menu">
                <a href="#infrastructure">Infrastructure</a>
                <a href="#cybersecurity">Cybersecurity</a>
              </div>
            )}
          </div>
          <div className="nav-dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <a href="#services">Services <span className="arrow">▼</span></a>
            {servicesOpen && (
              <div className="dropdown-menu">
                <a href="#design">Design & Consultation</a>
                <a href="#infrastructure-svc">Infrastructure Services</a>
                <a href="#cybersecurity-svc">Cybersecurity Services</a>
                <a href="#managed">Managed Services</a>
              </div>
            )}
          </div>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="header-actions">
          <span className="greeting">Howdy, gtame</span>
          <button type="button" className="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button type="button" className="icon-btn" aria-label="Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3"/><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
