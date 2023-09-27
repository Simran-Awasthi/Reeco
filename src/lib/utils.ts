import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trancatedString = (str: string, limit: number) => {
  if (str.length <= limit) {
    return limit;
  }
  return str.substring(0, limit) + "...";
};
