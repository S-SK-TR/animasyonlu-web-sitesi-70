import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmet Y.',
    role: 'Frontend Geliştirici',
    content: 'Bu platform, projelerimi hızlandırdı ve kullanıcı deneyimini bir üst seviyeye taşıdı. Kesinlikle tavsiye ederim!',
    rating: 5
  },
  {
    name: 'Ayşe K.',
    role: 'UI Tasarımcısı',
    content: 'Modern animasyonlar ve şık tasarım, müşterilerimizden çok olumlu geri bildirim aldık.',
    rating: 5
  },
  {
    name: 'Mehmet T.',
    role: 'Proje Yöneticisi',
    content: 'Takımımız, bu platform sayesinde daha hızlı ve etkileyici prototipler oluşturabiliyor.',
    rating: 4
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

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
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
            Müşteri Yorumları
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Platformumuzu kullanan gerçek müşterilerimizden gelen yorumlar.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6 bg-surface/70 backdrop-blur-sm border border-white/10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-primary mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}