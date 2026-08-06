"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useMagnetic } from "@/lib/motion";

type Variant = "primary" | "gold" | "outline" | "ghost";

const fillFor: Record<Exclude<Variant, "ghost">, string> = {
  primary: "bg-primary text-white",
  gold: "bg-accent text-primary-dark",
  outline: "border border-white/30 text-white backdrop-blur-sm",
};

const sweepFor: Record<Exclude<Variant, "ghost">, string> = {
  primary: "bg-primary-hover",
  gold: "bg-accent-hover",
  outline: "bg-white/15",
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
  const magneticRef = useMagnetic<HTMLAnchorElement | HTMLButtonElement>(0.25);

  if (variant === "ghost") {
    const cls = cn(
      "group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 ease-premium hover:text-primary-hover",
      className
    );
    const content = (
      <>
        {children}
      </>
    );
    return href ? (
      <Link href={href} className={cls}>
        {content}
      </Link>
    ) : (
      <button type={type} onClick={onClick} className={cls}>
        {content}
      </button>
    );
  }

  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]",
    fillFor[variant],
    className
  );

  const inner = (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 origin-bottom translate-y-full transition-transform duration-500 ease-premium group-hover:translate-y-0",
          sweepFor[variant]
        )}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          ref={magneticRef as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        ref={magneticRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={magneticRef as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={cls}
    >
      {inner}
    </button>
  );
}
