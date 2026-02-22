import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-left" />
        <div className="hero-shape hero-shape-right" />
        <div className="hero-shape hero-shape-bottom" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-tag">IT SOLUTION</span>
          <h1 className="hero-title">
            Digital Shield In A <span className="highlight">Connected World</span>
          </h1>
          <p className="hero-desc">
            GTC delivers robust IT solutions and cybersecurity services to keep your business safe, smart, and future-ready.
          </p>
          <a href="#contact" className="hero-cta">Let's Secure Your Future</a>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-shape hero-image-shape-1" />
          <div className="hero-image-shape hero-image-shape-2" />
          <div className="hero-image-placeholder">
            <div className="hero-image-inner">
              <div className="hero-avatar" />
              <div className="hero-monitors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
