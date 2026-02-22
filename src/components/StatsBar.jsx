import './StatsBar.css'

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        <div className="stat">
          <span className="stat-value">13+</span>
          <span className="stat-label">Customers</span>
        </div>
        <div className="stat">
          <span className="stat-value">2+</span>
          <span className="stat-label">Vendor Collaborated</span>
        </div>
      </div>
    </section>
  )
}
