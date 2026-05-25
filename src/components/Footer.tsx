import { Twitter, Linkedin, Facebook, Instagram, Youtube, ShieldCheck, type LucideIcon } from 'lucide-react'

const COLS = [
  {
    h: 'Platform',
    links: ['Scroll Control Portal', 'Report Cyber Crime', 'CCIO Directory', 'Alert Network', 'Family Safety Mode'],
  },
  {
    h: 'Programs',
    links: ['Become a CCIO', 'Micro Video Learning', 'Junior Certification', 'Cyber Safety Comics', 'Book a Session', 'Merchandise'],
  },
  {
    h: 'About',
    links: ['Our Mission', 'Impact Numbers', 'ISAC Foundation', 'CCIO Meetup 2026', 'Contact Us', 'Privacy Policy'],
  },
]

const SOCIAL: { Ico: LucideIcon; label: string }[] = [
  { Ico: Twitter, label: 'Twitter' },
  { Ico: Linkedin, label: 'LinkedIn' },
  { Ico: Facebook, label: 'Facebook' },
  { Ico: Instagram, label: 'Instagram' },
  { Ico: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white px-4 sm:px-6 lg:px-8 pt-20 pb-9">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr_1fr] gap-10 md:gap-12">
        <div>
          <img
            src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
            alt="CopConnect"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="text-white/40 text-sm leading-relaxed mt-4 max-w-sm">
            Bridging the gap between cyber victims and law enforcement. Building a culture of cyber safety, one community at a time.
          </p>
          <p className="text-white/35 text-xs mt-4">
            Powered by ISAC Foundation<br />
            Cyber Crime Helpline: <b className="text-brand-mid">1930</b>
          </p>
          <div className="flex gap-2.5 mt-5">
            {SOCIAL.map(({ Ico, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 bg-white/[0.07] rounded-lg flex items-center justify-center text-white/50 hover:bg-brand hover:text-white transition-all"
              >
                <Ico className="w-4 h-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {COLS.map(c => (
          <div key={c.h}>
            <h4 className="font-bold text-sm mb-4">{c.h}</h4>
            <div className="flex flex-col gap-2.5">
              {c.links.map(l => (
                <a key={l} href="#" className="text-white/40 hover:text-brand-mid text-sm transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[1320px] mx-auto mt-12 pt-7 border-t border-white/8 flex flex-wrap justify-between gap-3">
        <p className="text-white/28 text-xs">© 2026 CopConnect / ISAC Foundation. All rights reserved.</p>
        <p className="text-white/28 text-xs inline-flex items-center gap-1.5">
          Resilience begins with awareness.
          <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.8} />
        </p>
      </div>
    </footer>
  )
}
