import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("rounded-3xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-950", className)} {...props} />
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-3 px-6 pt-6", className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-lg font-semibold text-stone-900 dark:text-stone-100", className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-sm leading-6 text-stone-500 dark:text-stone-400", className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center justify-between gap-3 px-6 pb-6 pt-4", className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardFooter }
