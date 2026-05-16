import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Anasayfa', path: '/home' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'İletişim', path: '/contact' }
]

export function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">PAWP</div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                'relative pb-1',
                isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
              )}
            >
              {item.name}
              {({ isActive }) => (
                isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}