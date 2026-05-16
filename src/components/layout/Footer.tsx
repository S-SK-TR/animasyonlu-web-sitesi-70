import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' }
]

export function Footer() {
  return (
    <footer className="bg-surface/80 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">PAWP</h3>
            <p className="text-text-secondary">Modern animasyon platformu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a href="/home" className="text-text-secondary hover:text-primary transition-colors">Anasayfa</a></li>
              <li><a href="/about" className="text-text-secondary hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="/contact" className="text-text-secondary hover:text-primary transition-colors">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-text-secondary">
          <p>© {new Date().getFullYear()} Premium Animation Web Platform. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}