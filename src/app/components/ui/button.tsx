"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline";
}

export function Button({ children, variant = "default", ...props }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded font-medium";
  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}