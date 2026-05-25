import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const CARDS = [
  { num: '01', title: 'Incident Reporting', desc: 'Report cyber crimes quickly and track your case with real-time updates from connected law enforcement.' },
  { num: '02', title: 'CCIO Directory', desc: 'Find your nearest trained Cyber Community Intelligence Officer for in-person support and guidance.' },
  { num: '03', title: 'Resource Hub', desc: 'Curated guides and advisories from ISAC Foundation and law enforcement on emerging cyber threats.' },
  { num: '04', title: 'Community Alerts', desc: 'Real-time alerts about active scams, phishing campaigns, and cyber threats in your neighbourhood.' },
  { num: '05', title: 'Family Safety Mode', desc: 'A shared dashboard for parents and children to monitor activity, set safety rules, and learn together.' },
  { num: '06', title: 'LEA Connect', desc: 'Direct, verified connection to law enforcement cyber cells. No confusion about who to call.' },
]

function Card({ c, i }: { c: typeof CARDS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border rounded-2xl p-7 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] hover:-translate-y-1.5 transition-all"
    >
      <div className="font-serif text-4xl font-bold text-brand-lt leading-none mb-3">{c.num}</div>
      <h4 className="font-serif text-xl text-ink mb-2">{c.title}</h4>
      <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
    </motion.div>
  )
}

export default function Platform() {
  return (
    <section id="platform" className="bg-cream px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-ink rounded-[2rem] sm:rounded-[2.5rem] p-10 sm:p-14 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(232,101,42,0.25)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.15em] mb-4">Digital Platform</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              One platform.<br />
              <span className="text-brand-mid italic">Every community.</span>
            </h2>
            <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
              The Scroll Control Platform connects citizens, CCIOs, and law enforcement in real time — making reporting easy, help fast, and safety accessible to all.
            </p>
            <a
              href="#sessions"
              className="inline-flex items-center gap-2 bg-white text-brand font-semibold text-base rounded-full px-6 py-3 mt-8 hover:scale-[1.03] transition-transform"
            >
              Launch Platform
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10">
          {CARDS.map((c, i) => <Card key={c.num} c={c} i={i} />)}
        </div>
      </div>
    </section>
  )
}
