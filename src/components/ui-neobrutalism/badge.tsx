import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-base border-2 border-border dark:border-darkBorder px-2.5 py-0.5 text-xs font-heading transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-main text-black shadow-light dark:shadow-dark",
        secondary:
          "bg-white dark:bg-darkBg text-black dark:text-darkText shadow-light dark:shadow-dark",
        destructive: "bg-red-500 text-white shadow-light dark:shadow-dark",
        outline: "text-black border-2 border-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
