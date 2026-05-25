import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

type Item = {
  num: string
  title: string
  icon: string
  bullets: string[]
}

const ITEMS: Item[] = [
  {
    num: '01',
    title: 'Incident Reporting.',
    icon: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&auto=format&q=80',
    bullets: [
      'Report cyber crimes in under 60 seconds.',
      'Track your case with real-time updates.',
      'Direct routing to verified law enforcement.',
      'Multilingual support across 12 Indian languages.',
    ],
  },
  {
    num: '02',
    title: 'CCIO Directory.',
    icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop&auto=format&q=80',
    bullets: [
      '1,000+ trained CCIOs across India.',
      'Find your nearest officer by pincode.',
      'In-person guidance for victims and families.',
    ],
  },
  {
    num: '03',
    title: 'Family Safety Mode.',
    icon: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=200&fit=crop&auto=format&q=80',
    bullets: [
      'Unified dashboard for parents and kids.',
      'Set boundaries together, not in secret.',
      'Weekly digital check-ins built into the app.',
    ],
  },
]

function MissionCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[300px] lg:min-h-0"
    >
      <motion.img
        src="https://copconnect-new-site.vercel.app/images/hero.png"
        alt=""
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 18, ease: 'linear' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      <div className="relative p-6 md:p-7">
        <div className="text-brand text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">
          The Mission
        </div>
        <h3
          className="text-xl sm:text-2xl font-medium leading-tight"
          style={{ color: '#E1E0CC' }}
        >
          Your creative canvas for cyber safety.
        </h3>
      </div>
    </motion.div>
  )
}

function FeatureCard({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#212121] rounded-2xl p-6 md:p-7 flex flex-col min-h-[300px] lg:min-h-0"
    >
      <img
        src={item.icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-6"
      />
      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-primary text-lg sm:text-xl font-medium">{item.title}</h3>
      </div>
      <div className="text-gray-500 text-xs mb-6">({item.num})</div>
      <ul className="space-y-2.5 flex-1">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-gray-400 text-[13px] leading-snug">{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-primary text-sm mt-6 inline-flex items-center gap-2 group"
      >
        Learn more
        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
      </a>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="relative min-h-screen bg-black px-4 md:px-6 py-20 md:py-32">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Grassroots workflows', className: 'text-primary' },
                { text: 'for visionary citizens.', className: 'italic font-serif text-primary' },
              ]}
            />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mt-2">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Built for pure safety.', className: 'text-gray-500' },
                { text: 'Powered by people.', className: 'italic font-serif text-gray-500' },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:h-[480px]">
          <MissionCard index={0} />
          {ITEMS.map((item, i) => (
            <FeatureCard key={item.num} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
