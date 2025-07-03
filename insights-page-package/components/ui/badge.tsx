import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClasses = {
    default: "border-transparent bg-stone-900 text-stone-50 hover:bg-stone-900/80",
    secondary: "border-transparent bg-stone-100 text-stone-900 hover:bg-stone-100/80",
    destructive: "border-transparent bg-red-500 text-stone-50 hover:bg-red-500/80",
    outline: "text-stone-700 border-stone-200",
  }

  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2",
        variantClasses[variant],
        className
      )} 
      {...props} 
    />
  )
}

export { Badge } 