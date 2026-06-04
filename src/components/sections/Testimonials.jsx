import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { TESTIMONIALS } from '../../data/home'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by homeowners, designers, and businesses across India."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.blockquote
              key={testimonial.name}
              variants={item}
              className="relative flex flex-col rounded-sm border border-charcoal/8 bg-cream p-8"
            >
              <span
                className="font-display text-6xl leading-none text-warm-wood/25"
                aria-hidden
              >
                &ldquo;
              </span>
              <div className="mb-4 flex gap-0.5 text-warm-wood" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-charcoal/80">
                {testimonial.quote}
              </p>
              <footer className="mt-6 border-t border-charcoal/10 pt-6">
                <cite className="not-italic">
                  <p className="font-medium text-charcoal">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-charcoal/55">{testimonial.role}</p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
