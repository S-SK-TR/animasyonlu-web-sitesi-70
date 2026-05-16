import { motion } from 'framer-motion'
import { AnimatedPage } from '@/components/layout/AppShell'
import { Button } from '@/components/ui/Button'
import { Home } from 'lucide-react'

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

export function NotFoundPage() {
  return (
    <AnimatedPage>
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center max-w-md mx-auto px-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-primary mb-6"
          >
            404
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-text-primary mb-4"
          >
            Sayfa Bulunamadı
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary mb-8"
          >
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 text-lg font-semibold"
            >
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Anasayfaya Dön
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedPage>
  )
}