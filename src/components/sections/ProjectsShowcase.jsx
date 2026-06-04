import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { PROJECTS } from '../../data/home'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function ProjectsShowcase() {
  const featured = PROJECTS.find((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Recent bespoke installations crafted for modern homes and workspaces."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 md:grid-cols-2 md:gap-6"
        >
          {featured && (
            <motion.article
              variants={item}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-2 md:aspect-[21/9]"
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <ProjectOverlay title={featured.title} tag={featured.tag} large />
            </motion.article>
          )}

          {rest.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <ProjectOverlay title={project.title} tag={project.tag} />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function ProjectOverlay({ title, tag, large = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      <div
        className={`absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0 md:p-8 ${
          large ? 'md:p-10' : ''
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-wood-light">
          {tag}
        </p>
        <h3
          className={`mt-2 font-display font-medium text-white ${
            large ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}
        >
          {title}
        </h3>
      </div>
    </>
  )
}
