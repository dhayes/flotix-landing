import { CallToAction } from "./components/CallToAction"
import { CoreFeatures } from "./components/CoreFeatures"
import { FeaturesGrid } from "./components/FeaturesGrid"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { LandingHero } from "./components/LandingHero"
import { Showcase } from "./components/Showcase"
import { WatchDemo } from "./components/WatchDemo"

function App() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white">
      <LandingHero />
      <Showcase />
      <CoreFeatures />
      <WatchDemo />
      <FeaturesGrid />
      <CallToAction />
      <Footer />
    </div>
    </>
  )
}

export default App

