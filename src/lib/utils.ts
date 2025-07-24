import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormatType = "monthYear" | "fullDate";

export const formatDate = (
  dateStr: string,
  formatType?: FormatType
): string => {
  const date = new Date(dateStr);

  switch (formatType) {
    case "monthYear":
      return format(date, "MM/yyyy"); // "07/2025"
    case "fullDate":
      return format(date, "MMM dd, yyyy"); // "Jul 01, 2025"
    default:
      return format(date, "dd/MM/yyyy"); // "24/07/2025"
  }
};
