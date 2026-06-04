import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { WHATSAPP_URL } from '../../data/home'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-white lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, var(--color-warm-wood) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--color-warm-wood-light) 0%, transparent 40%)',
        }}
      />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-warm-wood-light">
            Start Your Project
          </p>
          <h2 className="font-display text-3xl font-medium sm:text-4xl md:text-5xl">
            Ready to Build Your Dream Furniture?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Book a free consultation with our design team or message us on
            WhatsApp — we respond within hours.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contact" variant="wood">
              Get Free Consultation
            </Button>
            <Button href={WHATSAPP_URL} variant="outline">
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
