import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines clsx (conditional classNames) with tailwind-merge (conflict resolution).
// Use this anywhere you need to compose Tailwind classes conditionally.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
