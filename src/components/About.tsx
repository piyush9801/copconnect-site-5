import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const BODY_TEXT =
  "Over the last seven years, CopConnect has trained 1,000+ Cyber Community Intelligence Officers, run 222+ awareness sessions, and intervened in 1,446+ cyber incidents across India. Together with ISAC Foundation, we have reached over 2 lakh citizens — and we are only getting started."

const PILLARS = [
  { ico: '🏫', title: 'Schools', desc: 'Safe internet habits for every student age 6 to 18.' },
  { ico: '🏢', title: 'Corporates', desc: 'Employee cyber hygiene and fraud prevention at scale.' },
  { ico: '🏘️', title: 'RWAs', desc: 'Senior citizens and households protected from scams.' },
  { ico: '🚓', title: 'Law Enforcement', desc: 'Direct bridges between citizens and cyber crime cells.' },
]

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')

  return (
    <section id="about" className="bg-white px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">
            About CopConnect
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            <WordsPullUpMultiStyle
              segments={[
                { text: "We're a movement,", className: 'text-ink' },
                { text: 'not a product —', className: 'text-ink italic' },
                { text: 'protecting India from', className: 'text-ink' },
                { text: 'cyber crimes.', className: 'text-brand italic' },
              ]}
            />
          </h2>

          <p
            ref={ref}
            className="text-ink-mid text-base sm:text-lg md:text-xl leading-relaxed mt-8 sm:mt-10"
          >
            {chars.map((char, i) =>
              char === ' ' ? (
                ' '
              ) : (
                <AnimatedLetter
                  key={i}
                  char={char}
                  scrollProgress={scrollYProgress}
                  index={i}
                  totalChars={chars.length}
                />
              )
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 md:mt-20">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="bg-cream border border-border rounded-2xl p-6 sm:p-7 hover:bg-brand-pale hover:border-brand-lt transition-colors"
            >
              <div className="text-3xl mb-3">{p.ico}</div>
              <div className="font-serif font-semibold text-lg text-ink mb-1.5">{p.title}</div>
              <div className="text-sm text-muted leading-snug">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
