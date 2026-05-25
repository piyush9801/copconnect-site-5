import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const BODY_TEXT =
  "Over the last seven years, CopConnect has trained 1,000+ Cyber Community Intelligence Officers, run 222+ awareness sessions, and intervened in 1,446+ cyber incidents across India. Together with ISAC Foundation, we have reached over 2 lakh citizens — and we are only getting started."

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = BODY_TEXT.split('')

  return (
    <section id="about" className="bg-black px-4 md:px-6 py-20 md:py-32">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24 text-center">
        <div className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-8 sm:mb-10">
          About CopConnect
        </div>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "We're", className: 'font-normal text-primary' },
              { text: 'a movement,', className: 'italic font-serif text-primary' },
              { text: 'not a product —', className: 'font-normal text-primary' },
              { text: 'protecting India from', className: 'font-normal text-primary' },
              { text: 'cyber crimes', className: 'italic font-serif text-brand' },
              { text: 'together.', className: 'font-normal text-primary' },
            ]}
          />
        </div>

        <p
          ref={ref}
          className="text-[#DEDBC8] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-12 md:mt-16"
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollProgress={scrollYProgress}
              index={i}
              totalChars={chars.length}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
