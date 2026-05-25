import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import FloatBot from './components/FloatBot'

export default function App() {
  return (
    <main className="bg-black text-primary">
      <Hero />
      <About />
      <Features />
      <FloatBot />
    </main>
  )
}
