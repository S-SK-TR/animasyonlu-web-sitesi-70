import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Gelişmiş Animasyonlar',
    description: 'Framer Motion ile oluşturulan akıcı ve etkileyici animasyonlar.',
    icon: 'Motion'
  },
  {
    title: 'Mobil Uyumluluk',
    description: 'Tüm cihazlarda mükemmel görünen responsive tasarım.',
    icon: 'Smartphone'
  },
  {
    title: 'PWA Desteği',
    description: 'Hızlı yükleme ve offline kullanım imkanı.',
    icon: 'Globe'
  },
  {
    title: 'Modern UI',
    description: 'Tailwind CSS ile oluşturulan şık ve profesyonel arayüz.',
    icon: 'Layout'
  }
]

const containerVariants = {
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

const cardVariants = {
  hover: {
    y: -5,
    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
  }
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Neden Bizi Seçmelisiniz
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Platformumuz, modern animasyonlar, mobil uyumluluk ve PWA desteği ile benzersiz bir kullanıcı deneyimi sunuyor.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                variants={cardVariants}
                whileHover="hover"
                className="h-full p-6 flex flex-col items-center text-center bg-surface/70 backdrop-blur-sm border border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary flex-grow">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}