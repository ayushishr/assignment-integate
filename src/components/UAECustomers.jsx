import './UAECustomers.css'

const uaeCustomers = [
  'TEJARA', 'belkin', 'NAMSHI', 'ETG', 'CONCORDIA On-Demand', 'novo nordisk',
]

export default function UAECustomers() {
  return (
    <section className="uae-customers">
      <div className="uae-customers-inner">
        <h2 className="uae-customers-title">Our UAE Customers</h2>
        <div className="uae-logos">
          {uaeCustomers.map((name) => (
            <div key={name} className="uae-logo">
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
