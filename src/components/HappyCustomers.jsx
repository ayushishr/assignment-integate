import './HappyCustomers.css'

const customers = [
  'BSES', 'Boubyan', 'Aakash', 'APLApollo', 'Assimilate', 'CIINDIA', 'Casio', 'Deefsys',
  'Devyani', 'Eureka', 'ExpertHub Robotics', 'Fortune', 'Gulf Bank', 'Hakuhodo', 'Horiba',
  'IKM', 'KFH Takaful', 'Kogta', 'MobiKwik', 'Motherson', 'Neolite', 'Talbros',
]

export default function HappyCustomers() {
  return (
    <section className="happy-customers">
      <div className="happy-customers-inner">
        <h2 className="happy-customers-title">Our Happy Customers</h2>
        <div className="customer-logos">
          {customers.map((name) => (
            <div key={name} className="customer-logo">
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
