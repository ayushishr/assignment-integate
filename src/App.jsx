import Header from './components/Header'
import Hero from './components/Hero'
import ImageFeature from './components/ImageFeature'
import StatsBar from './components/StatsBar'
import Solutions from './components/Solutions'
import Infrastructure from './components/Infrastructure'
import Services from './components/Services'
import HappyCustomers from './components/HappyCustomers'
import UAECustomers from './components/UAECustomers'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageFeature />
        <StatsBar />
        <Solutions />
        <Infrastructure />
        <Services />
        <HappyCustomers />
        <UAECustomers />
      </main>
      <Footer />
    </>
  )
}

export default App
