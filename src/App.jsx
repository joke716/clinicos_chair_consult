import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConsultSection from './components/ConsultSection'
import ProcessSection from './components/ProcessSection'
import ChairSection from './components/ChairSection'
import CompareSection from './components/CompareSection'
import PricingSection from './components/PricingSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ConsultSection />
      <ProcessSection />
      <ChairSection />
      <CompareSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  )
}
