import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import NumberFlow from '@number-flow/react'

interface StatsCardProps {
  title: string
  value: number
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.15, ease: 'easeInOut' }
      }}
      className={className}
    >
      <div className="bg-white/80 backdrop-blur-xl border border-[#E0D4BC] rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-[#8D7F71] mb-1">
              {title}
            </p>

            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-4xl font-extrabold text-[#2D2216]">
                <NumberFlow
                  value={value}
                  format={{
                    notation: 'compact',
                    maximumFractionDigits: 1
                  }}
                />
              </p>

              {trend && (
                <span className={`text-xs font-bold flex items-center gap-1 px-2 py-0.5 rounded-full ${
                  trend.isPositive 
                    ? "bg-emerald-50 text-emerald-600" 
                    : "bg-red-50 text-red-500"
                }`}>
                  {trend.isPositive ? '↑' : '↓'}
                  {Math.abs(trend.value)}%
                </span>
              )}
            </div>

            {description && (
              <p className="text-sm text-[#5D4037] truncate">
                {description}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E68A44]/10 text-[#E68A44] flex-shrink-0 ml-4">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}