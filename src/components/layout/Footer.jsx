import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../ui/Container'
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../data/home'


export function Footer() {
  return (
    <footer id="contact" className="border-t border-charcoal/10 bg-charcoal text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="font-display text-2xl tracking-wide">
              ZOOSH{' '}
              <span className="text-warm-wood-light">Furniture</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Premium custom furniture manufacturer — sofas, beds, dining sets,
              wardrobes, office furniture, and bespoke pieces made to your
              requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-wood-light">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-wood-light">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-warm-wood-light" />
                <span>+91 90000 00000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-warm-wood-light" />
                <span>hello@zooshfurniture.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-warm-wood-light" />
                <span>Custom Furniture Workshop, Bangalore, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-wood-light">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/80 transition-colors hover:border-warm-wood-light hover:text-warm-wood-light"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} ZOOSH Furniture. All rights reserved.</p>
          <p id="about">Crafted with precision. Built for your lifestyle.</p>
        </div>
      </Container>
    </footer>
  )
}
