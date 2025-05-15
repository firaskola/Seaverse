import { cn } from "@/lib/utils"

interface WaveSeparatorProps {
  className?: string
  color?: "seafoam-blue" | "abyssal-teal" | "dark-sapphire"
}

export default function WaveSeparator({ className, color = "seafoam-blue" }: WaveSeparatorProps) {
  const colorMap = {
    "seafoam-blue": "bg-seafoam-blue",
    "abyssal-teal": "bg-abyssal-teal",
    "dark-sapphire": "bg-dark-sapphire",
  }

  return <div className={cn("wave-separator", colorMap[color], className)} />
}
