import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-[var(--shadow-md)]",
  gold: "bg-accent text-primary-dark hover:bg-accent-hover shadow-[var(--shadow-md)]",
  outline:
    "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-primary hover:bg-primary-light",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
