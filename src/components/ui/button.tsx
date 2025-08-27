import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium
    transition-all cursor-pointer
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
    outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    aria-invalid:ring-destructive-500/20 dark:aria-invalid:ring-destructive-400 aria-invalid:border-destructive-500
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-primary-500 text-primary-50 shadow-xs
          hover:bg-primary-600 active:bg-primary-700
          dark:bg-primary-500 dark:text-primary-50
          dark:hover:bg-primary-700 dark:active:bg-primary-800
        `,
        secondary: `
          bg-secondary-500 text-secondary-50 shadow-xs
          hover:bg-secondary-600 active:bg-secondary-700
          dark:bg-secondary-500 dark:text-secondary-50
          dark:hover:bg-secondary-600 dark:active:bg-secondary-700
        `,
        accent: `
          bg-accent-500 text-accent-50 shadow-xs
          hover:bg-accent-600 active:bg-accent-700
          dark:bg-accent-500 dark:text-accent-50
          dark:hover:bg-accent-600 dark:active:bg-accent-700
        `,
        destructive: `
          bg-destructive-500 text-white shadow-xs
          hover:bg-destructive-600 active:bg-destructive-700
          dark:bg-destructive-500 dark:text-white
          dark:hover:bg-destructive-600 dark:active:bg-destructive-700
        `,
        outline: `
          border border-border bg-background text-foreground shadow-xs
          hover:bg-gray-100 active:bg-gray-200
          dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-600
        `,
        ghost: `
          bg-transparent text-foreground shadow-none
          hover:bg-accent-100 active:bg-accent-200
          dark:hover:bg-accent-700 dark:active:bg-accent-600
        `,
        ghost2: `
          bg-transparent text-primary-500 shadow-none
          hover:bg-gray-100 active:bg-gray-200
          dark:text-primary-400 dark:hover:bg-gray-700 dark:active:bg-gray-600
        `,
        link: `
          text-primary-500 underline-offset-4
          hover:underline active:text-primary-700
          dark:text-primary-400 dark:hover:underline dark:active:text-primary-600
        `,
        orange: `
          bg-orange-500 text-white shadow-xs
          hover:bg-orange-600 active:bg-orange-700
          dark:bg-orange-400 dark:text-black
          dark:hover:bg-orange-500 dark:active:bg-orange-600
        `,
        yellow: `
          bg-yellow-400 text-black shadow-xs
          hover:bg-yellow-500 active:bg-yellow-600
          dark:bg-yellow-300 dark:text-black
          dark:hover:bg-yellow-400 dark:active:bg-yellow-500
        `,
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
