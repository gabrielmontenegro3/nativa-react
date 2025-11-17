import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App

