"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "orange";
type Size = "sm" | "default";

// ROOT
export function Select({
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
}

// GROUP
export function SelectGroup({
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group {...props}>{children}</SelectPrimitive.Group>;
}

// VALUE
export function SelectValue({
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value {...props}>{children}</SelectPrimitive.Value>;
}

// TRIGGER
export function SelectTrigger({
  className,
  size = "default",
  variant = "primary",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: Size;
  variant?: Variant;
}) {
  return (
    <SelectPrimitive.Trigger
      data-size={size}
      data-variant={variant}
      className={cn(
        "flex w-fit cursor-pointer items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm outline-none shadow-sm transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[size=default]:h-9 data-[size=sm]:h-8",

        // 🌈 VARIANTS (light + dark)
        variant === "primary" &&
          "border-gray-300 bg-white text-gray-900 hover:bg-primary-100 dark:border-gray-800 dark:bg-primary-950 dark:text-gray-100 dark:hover:bg-primary-900",
        variant === "secondary" &&
          "border-gray-300 bg-white text-gray-900 hover:bg-accent-100 dark:border-gray-800 dark:bg-primary-950 dark:text-gray-100 dark:hover:bg-accent-900",
        variant === "orange" &&
          "border-gray-300 bg-white text-gray-900 hover:bg-orange-100 dark:border-gray-800 dark:bg-primary-950 dark:text-gray-100 dark:hover:bg-orange-900",

        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50 text-gray-500 dark:text-gray-400" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

// CONTENT
export function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md bg-white text-gray-900 shadow-sm dark:border-gray-800 dark:bg-primary-950 dark:text-gray-100",
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

// LABEL
export function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
}

// ITEM
export function SelectItem({
  className,
  variant = "primary",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> & {
  variant?: Variant;
}) {
  return (
    <SelectPrimitive.Item
      data-variant={variant}
      className={cn(
        "cursor-pointer relative flex w-full  select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

        // 🌈 ITEM COLORS
        variant === "primary" &&
          "text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900",
        variant === "secondary" &&
          "text-gray-700 dark:text-gray-200 hover:bg-accent-100 dark:hover:bg-accent-900",
        variant === "orange" &&
          "text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-900",

        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon
            className={cn(
              "size-4",
              variant === "primary" && "text-primary-600 dark:text-primary-400",
              variant === "secondary" && "text-accent-600 dark:text-accent-400",
              variant === "orange" && "text-orange-600 dark:text-orange-400"
            )}
          />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
