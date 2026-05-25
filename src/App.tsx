import Hero from './components/Hero'
import About from './components/About'
import Platform from './components/Platform'
import Learning from './components/Learning'
import CCIO from './components/CCIO'
import Comics from './components/Comics'
import Tips from './components/Tips'
import Merch from './components/Merch'
import Sessions from './components/Sessions'
import Footer from './components/Footer'
import FloatBot from './components/FloatBot'

export default function App() {
  return (
    <main className="bg-cream text-ink">
      <Hero />
      <About />
      <Platform />
      <Learning />
      <CCIO />
      <Comics />
      <Tips />
      <Merch />
      <Sessions />
      <Footer />
      <FloatBot />
    </main>
  )
}
