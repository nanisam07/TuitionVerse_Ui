import React from "react"

type ButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: "outline" | "default"
  size?: "lg" | "md" | "sm"
  onClick?: () => void
  type?: "button" | "submit"
}

export function Button({
  children,
  className = "",
  variant = "default",
  size = "lg",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition duration-200 focus:outline-none"

  const sizes = {
    lg: "h-12 px-6 text-base",
    md: "h-10 px-5 text-sm",
    sm: "h-9 px-4 text-sm",
  }

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}