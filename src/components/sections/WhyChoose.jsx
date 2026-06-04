import { motion } from 'framer-motion'
import { Gem, Hammer, Ruler, Tag } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { WHY_CHOOSE } from '../../data/home'

const iconMap = { Ruler, Gem, Hammer, Tag }

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

export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why ZOOSH"
          title="Why Choose ZOOSH"
          subtitle="A premium workshop experience — from first sketch to final installation."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.article
                key={card.title}
                variants={item}
                className="group relative overflow-hidden rounded-sm border border-charcoal/5 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-cream text-warm-wood">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {card.desc}
                </p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-warm-wood transition-all duration-500 group-hover:w-full" />
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
