import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: any
  asChild?: boolean
  children: React.ReactNode
}

export function Button({ className, variants, asChild = false, children, ...props }: ButtonProps) {
  const Component = asChild ? motion.a : motion.button

  return (
    <Component
      variants={variants}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
        'bg-primary text-primary-foreground hover:bg-primary/90',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}