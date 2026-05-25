import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'

const TIERS = [
  {
    kicker: 'Entry Level',
    title: 'CCIO Associate',
    desc: 'For anyone who wants to protect their community. No tech background needed — just the will to make a difference.',
    perks: ['16-hour certification', 'Digital CCIO badge', 'Community resource kit', 'Monthly webinars', 'CCIO directory listing'],
    hot: false,
  },
  {
    kicker: 'Most Popular',
    title: 'CCIO Professional',
    desc: 'For educators, NGO workers, trainers and RWA leaders who want to run sessions and drive real, measurable impact.',
    perks: ['40-hour curriculum', 'Scroll Control access', 'Session facilitation kit', 'ISAC mentorship', 'Impact dashboard', 'LEA coordination'],
    hot: true,
  },
  {
    kicker: 'NCC / Youth',
    title: 'CCIO Cadet',
    desc: 'A special track for NCC cadets joining the 293+ NCC CCIOs already serving as cyber safety ambassadors.',
    perks: ['NCC-integrated curriculum', 'Campus ambassador role', 'Annual CCIO Meetup invite', 'Service credit recognition'],
    hot: false,
  },
]

const IMPACT = [
  { n: '1,000+', l: 'CCIOs Trained' },
  { n: '293', l: 'NCC Cadets as CCIOs' },
  { n: '222+', l: 'Awareness Sessions' },
  { n: '1,446+', l: 'Total Interventions' },
  { n: '2 Lakh+', l: 'Indirect Beneficiaries' },
  { n: '25,455+', l: 'Direct Beneficiaries' },
]

function Tier({ t, i }: { t: typeof TIERS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] ${
        t.hot ? 'bg-brand-pale border-2 border-brand' : 'bg-white border border-border'
      }`}
    >
      {t.hot && (
        <span className="absolute top-5 right-5 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      <div className="text-brand text-xs font-bold uppercase tracking-wider">{t.kicker}</div>
      <h3 className="font-serif text-2xl text-ink mt-1.5 mb-3">{t.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-5">{t.desc}</p>
      <ul className="space-y-2.5">
        {t.perks.map(p => (
          <li key={p} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
            <span className="text-sm text-ink-mid">{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function CCIO() {
  return (
    <section id="ccio" className="bg-cream px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">CCIO Program</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Become a Cyber Community <span className="text-brand italic">Intelligence Officer</span>
          </h2>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-5">
            CCIOs are community champions — trained people who bridge the gap between citizens and law enforcement at the grassroots level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {TIERS.map((t, i) => <Tier key={t.title} t={t} i={i} />)}
        </div>

        <div className="text-center mt-10">
          <a
            href="#sessions"
            className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
          >
            Apply to Become a CCIO
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12"
        >
          {IMPACT.map(s => (
            <div key={s.l} className="bg-ink rounded-2xl p-6 text-center">
              <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-mid leading-none">{s.n}</div>
              <div className="text-[11px] sm:text-xs text-white/50 mt-2">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
