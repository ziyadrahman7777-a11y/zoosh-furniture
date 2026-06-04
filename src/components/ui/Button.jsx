import { motion } from 'framer-motion'

const styles = {
  primary: 'bg-charcoal text-white hover:bg-charcoal-light',
  outline:
    'border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10',
  wood: 'bg-warm-wood text-white hover:bg-warm-wood-light',
  light:
    'border border-charcoal/20 bg-white text-charcoal hover:border-charcoal hover:bg-charcoal/5',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-wood focus-visible:ring-offset-2'

  const classes = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    </motion.div>
  )
}
