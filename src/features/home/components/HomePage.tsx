import { motion } from 'framer-motion'
import { AnimatedPage } from '@/components/layout/AppShell'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { TestimonialsSection } from './TestimonialsSection'

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function HomePage() {
  return (
    <AnimatedPage>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </motion.div>
    </AnimatedPage>
  )
}