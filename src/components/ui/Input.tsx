import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2",
      className
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }
