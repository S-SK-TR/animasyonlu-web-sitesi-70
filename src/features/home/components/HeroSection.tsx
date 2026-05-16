import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  },
  tap: { scale: 0.98 }
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            Modern Animasyonlar İle <span className="text-accent">Deneyim</span> Yaratın
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Etkileyici animasyonlarla donatılmış mobil öncelikli platformumuzla kullanıcı deneyiminizi bir üst seviyeye taşıyın.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 text-lg font-semibold"
            >
              <a href="/features">Keşfet <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>
    </section>
  )
}