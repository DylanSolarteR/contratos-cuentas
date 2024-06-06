"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 max-h-full",
  {
    variants: {
      variant: {
        default:
          "bg-light-fondo dark:bg-dark-fondo text-light-texto dark:text-dark-texto hover:scale-95 h-full",
        destructive:
          "bg-destructive/60 text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-light-texto/5 bg-light-fondo dark:bg-dark-fondo hover:bg-light-acento-2/10 hover:text-light-texto/90 dark:hover:bg-dark-acento-2/10 dark:hover:text-dark-texto",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "dark:hover:bg-dark-acento-2/10 hover:bg-light-acento-2/10 hover:text-light-texto/90 dark:hover:text-dark-texto",
        link: "text-primary underline-offset-4 hover:underline",
        delete: "text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
