import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { PROCESS } from '../../data/home'

export function ProcessTimeline() {
  return (
    <section id="process" className="bg-charcoal py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          light
          eyebrow="How It Works"
          title="Custom Furniture Process"
          subtitle="A seamless journey from your first conversation to delivery at your doorstep."
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-[10%] right-[10%] top-6 h-px bg-warm-wood/30" />
            {PROCESS.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative z-10 flex flex-1 flex-col items-center px-2"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1, type: 'spring', stiffness: 200 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-warm-wood-light bg-charcoal font-display text-lg text-warm-wood-light"
                >
                  {index + 1}
                </motion.div>
                <p className="mt-5 max-w-[8rem] text-center text-sm font-medium leading-snug text-white/90">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden">
          <div className="relative space-y-8 pl-10">
            <div className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-warm-wood/30" />
            {PROCESS.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="relative flex items-center gap-6"
              >
                <div className="absolute -left-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-warm-wood-light bg-charcoal font-display text-sm text-warm-wood-light">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-warm-wood-light">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-lg font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
