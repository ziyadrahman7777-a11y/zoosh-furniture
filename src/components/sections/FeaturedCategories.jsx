import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { CATEGORIES } from '../../data/home'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function FeaturedCategories() {
  return (
    <section id="collections" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Collections"
          title="Featured Categories"
          subtitle="Explore our signature ranges — each piece can be customized to your exact specifications."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6"
        >
          {CATEGORIES.map((category) => (
            <motion.a
              key={category.name}
              href={category.href}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={`${category.name} — ZOOSH Furniture`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 lg:p-6">
                <h3 className="font-display text-xl text-white sm:text-2xl lg:text-3xl">
                  {category.name}
                </h3>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
