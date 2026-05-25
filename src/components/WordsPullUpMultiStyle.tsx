import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Segment = { text: string; className?: string }
type Props = { segments: Segment[]; className?: string }

export default function WordsPullUpMultiStyle({ segments, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  const allWords = segments.flatMap((seg, segIdx) =>
    seg.text.split(' ').map((word, wIdx) => ({
      word,
      className: seg.className ?? '',
      key: `${segIdx}-${wIdx}`,
    }))
  )

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map(({ word, className: wc, key }, i) => (
        <span key={key} className="overflow-hidden inline-block mr-[0.22em] last:mr-0 pb-[0.18em]">
          <motion.span
            className={`inline-block ${wc}`}
            initial={{ y: 28, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
