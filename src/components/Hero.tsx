import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const NAV = ['About', 'Platform', 'CCIO', 'Stories', 'Connect']

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-ink">
        {/* Hero image (animated subtle zoom for cinematic feel) */}
        <motion.img
          src="https://copconnect-new-site.vercel.app/images/hero.png"
          alt=""
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 24, ease: 'linear' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/85 pointer-events-none" />

        {/* Top pill nav */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3 z-20 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
              alt="CopConnect"
              className="h-6 md:h-8 w-auto"
            />
          </a>
          <div className="hidden sm:flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 text-[10px] sm:text-xs md:text-sm">
            {NAV.map((label) => (
              <a
                key={label}
                href="#about"
                className="transition-colors"
                style={{ color: 'rgba(225,224,204,0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(225,224,204,0.8)')
                }
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Active badge (top-left) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 left-6 md:top-10 md:left-10 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-[10px] sm:text-xs"
          style={{ color: 'rgba(225,224,204,0.85)' }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
          </span>
          Active across India · Powered by ISAC Foundation
        </motion.div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            <div
              className="col-span-12 lg:col-span-8 relative"
              style={{ color: '#E1E0CC' }}
            >
              <WordsPullUp
                text="CopConnect"
                showAsterisk
                className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] 2xl:text-[10vw] font-medium leading-[0.85] tracking-[-0.07em]"
              />
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pb-6">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.3] max-w-md"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                CopConnect bridges the gap between cyber victims and law enforcement —
                building a culture where every family, school, and community feels safe online.
              </motion.p>
              <motion.a
                href="#about"
                className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary text-black font-medium text-sm sm:text-base rounded-full pl-5 pr-1 py-1 w-fit"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Access the Portal
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 inline-flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
