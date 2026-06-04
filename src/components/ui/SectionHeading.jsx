import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center md:mb-16"
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-warm-wood">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg ${
            light ? 'text-white/75' : 'text-charcoal/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
