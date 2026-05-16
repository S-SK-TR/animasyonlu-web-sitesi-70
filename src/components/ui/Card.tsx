import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: any
}

export function Card({ className, variants, ...props }: CardProps) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow',
        className
      )}
      {...props}
    />
  )
}