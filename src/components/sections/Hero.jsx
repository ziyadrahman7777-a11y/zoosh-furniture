import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { WHATSAPP_URL } from '../../data/home'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Luxury modern living room with premium furniture"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/90" />

      <Container className="relative z-10 pt-28 pb-20 text-center text-white lg:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-warm-wood-light"
        >
          Premium Custom Manufacturing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Custom Furniture Crafted Around Your Lifestyle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl"
        >
          Designed and manufactured to match your space, style, and requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#collections" variant="wood">
            Explore Collection
          </Button>
          <Button href={WHATSAPP_URL} variant="outline">
            <MessageCircle size={18} />
            WhatsApp Enquiry
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#why-choose"
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white/80"
        >
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </a>
      </motion.div>
    </section>
  )
}
