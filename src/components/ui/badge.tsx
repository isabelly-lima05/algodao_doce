import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default: "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-100",
        secondary: "bg-rose-500 text-white",
        outline: "border border-stone-200 bg-white text-stone-800 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
