import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, BookOpen, Users } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

type Warning = {
  title: string
  body: string
  position: string
  delay: number
  float: 'float-1' | 'float-2' | 'float-3'
  icon: string
}

const WARNINGS: Warning[] = [
  {
    title: 'Unknown Sender',
    body: 'Click here to verify your account',
    position: 'top-[8%] -left-2 sm:left-2',
    delay: 0.6,
    float: 'float-1',
    icon: '!',
  },
  {
    title: 'OTP Alert',
    body: 'Do not share this code · 123456',
    position: 'top-[12%] right-0 sm:right-4',
    delay: 0.8,
    float: 'float-2',
    icon: '🔒',
  },
  {
    title: 'WIN iPHONE 15',
    body: 'Claim your prize now! bit.ly/free-gift',
    position: 'top-[42%] -left-2 sm:left-4',
    delay: 1.0,
    float: 'float-3',
    icon: '🎁',
  },
  {
    title: 'Fake Support',
    body: 'We need more info to unblock your ID',
    position: 'top-[40%] right-0 sm:right-2',
    delay: 1.2,
    float: 'float-1',
    icon: '?',
  },
  {
    title: 'Suspicious Login',
    body: 'New device detected from unknown location',
    position: 'bottom-[12%] -left-2 sm:left-2',
    delay: 1.4,
    float: 'float-2',
    icon: '!',
  },
  {
    title: 'Scam Call',
    body: '+91 98765 43210 · Incoming call…',
    position: 'bottom-[18%] right-0 sm:right-4',
    delay: 1.6,
    float: 'float-3',
    icon: '☎',
  },
]

const MINI_FEATURES = [
  {
    icon: ShieldCheck,
    label: 'Report',
    desc: 'Cyber incidents with confidence',
  },
  {
    icon: BookOpen,
    label: 'Learn',
    desc: 'Understand risks and stay safe',
  },
  {
    icon: Users,
    label: 'Connect',
    desc: 'Get expert guidance and support',
  },
]

const STATS = [
  { n: '1,446+', l: 'Communities Reached', icon: '👥' },
  { n: '25K+', l: 'Safety Sessions Conducted', icon: '📖' },
  { n: '1,000+', l: 'Reports Supported', icon: '🛡️' },
  { n: '21+', l: 'States Impacted', icon: '🗺️' },
]

export default function Hero() {
  return (
    <section id="home" className="bg-cream relative overflow-hidden">
      {/* Top nav */}
      <nav className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
            alt="CopConnect"
            className="h-12 sm:h-14 w-auto"
          />
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {[
            { label: 'About', href: '#about' },
            { label: 'Platform', href: '#platform' },
            { label: 'Learning', href: '#learning' },
            { label: 'CCIO', href: '#ccio' },
            { label: 'Safety Tips', href: '#tips' },
            { label: 'Merch', href: '#merch' },
            { label: 'Sessions', href: '#sessions' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-ink-mid hover:text-brand transition-colors px-3 py-2 rounded-full"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#about"
          className="bg-brand hover:bg-[#d4541c] text-white font-semibold text-sm sm:text-base rounded-full px-5 py-2.5 sm:px-6 sm:py-3 inline-flex items-center gap-2 transition-all hover:scale-[1.03] whitespace-nowrap"
        >
          Portal Login
          <ArrowRight className="w-4 h-4" />
        </a>
      </nav>

      {/* Hero body: 2-col on desktop */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: hero image + floating scam-warning cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <img
              src="https://copconnect-new-site.vercel.app/images/hero.png"
              alt="Family using a tablet — cyber safety starts at home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle warm glow + vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
            {/* Shield aura around center */}
            <div className="absolute inset-[18%] rounded-full shield-pulse pointer-events-none" />

            {/* Floating scam warning cards */}
            {WARNINGS.map((w) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: w.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${w.position} z-10 pointer-events-none`}
              >
                <div className={`${w.float} bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] px-3 py-2 max-w-[180px] sm:max-w-[200px]`}>
                  <div className="flex items-start gap-2">
                    <span className="text-brand text-sm leading-none mt-0.5 flex-shrink-0">{w.icon}</span>
                    <div className="min-w-0">
                      <div className="font-bold text-[11px] sm:text-xs text-ink leading-tight">{w.title}</div>
                      <div className="text-[10px] sm:text-[11px] text-muted leading-snug mt-0.5">{w.body}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: headline + subtitle + CTAs + mini-features */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3 py-1.5 self-start mb-5 sm:mb-6"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand" />
              <span className="text-[11px] sm:text-xs font-semibold text-ink-mid">
                Trusted by Schools · Families · ISAC Foundation
              </span>
            </motion.div>

            <h1 className="font-serif text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[5.5vw] xl:text-[5vw] leading-[0.95] tracking-[-0.03em] text-ink mb-5 sm:mb-6">
              <WordsPullUp text="Protecting" />
              <br />
              <span className="text-brand">
                <WordsPullUp text="Families" delayBase={0.1} />
              </span>
              <br />
              <WordsPullUp text="Online." delayBase={0.2} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-ink-mid leading-relaxed max-w-xl mb-7 sm:mb-8"
            >
              CopConnect helps families, schools, and communities respond to cyber threats with{' '}
              <span className="text-brand font-semibold">real guidance</span>, verified support, and{' '}
              <span className="text-brand font-semibold">human connection</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mb-10 sm:mb-12"
            >
              <a
                href="#about"
                className="group bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-6 py-3.5 sm:px-7 sm:py-4 inline-flex items-center gap-3 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
              >
                Access the Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="group bg-white hover:bg-cream-dark text-ink font-semibold text-base sm:text-lg rounded-full px-6 py-3.5 sm:px-7 sm:py-4 inline-flex items-center gap-3 border border-border transition-all hover:scale-[1.03]"
              >
                Book a Safety Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              {MINI_FEATURES.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm sm:text-base text-ink leading-tight">{label}</div>
                    <div className="text-[11px] sm:text-xs text-muted leading-snug mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 bg-white border border-border rounded-3xl shadow-[0_14px_40px_-20px_rgba(0,0,0,0.12)] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-[1.2fr_repeat(4,1fr)_1.1fr] gap-6 items-center"
        >
          <div>
            <div className="font-serif text-lg sm:text-xl text-ink leading-tight">
              Making the internet<br />safer for everyone
            </div>
            <div className="mt-3 h-0.5 w-12 bg-brand rounded-full" />
          </div>
          {STATS.map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center flex-shrink-0 text-lg">
                {s.icon}
              </div>
              <div className="min-w-0">
                <div className="font-serif font-bold text-xl sm:text-2xl text-ink leading-none">{s.n}</div>
                <div className="text-[10px] sm:text-[11px] text-muted leading-tight mt-1">{s.l}</div>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 md:justify-end md:border-l md:border-border md:pl-5">
            <div className="text-2xl">🇮🇳</div>
            <div className="min-w-0">
              <div className="font-bold text-sm text-ink leading-tight">Active across India</div>
              <div className="text-[11px] text-muted leading-snug flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Powered by ISAC Foundation
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
