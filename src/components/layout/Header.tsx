"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, LogIn, UserPlus } from "lucide-react";
import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";
import { nav, onlineServices } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Market status strip — mirrors the live BK Capital ticker. Collapses
          away on scroll so the sticky header stays compact once you're
          reading, not just browsing the top of the page. */}
      <div
        className={cn(
          "hidden overflow-hidden bg-primary-dark text-white/80 transition-[max-height,opacity] duration-500 ease-premium md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-8 opacity-100"
        )}
      >
        <Container className="flex h-8 items-center justify-between text-xs">
          <span className="font-medium tracking-wide text-accent">
            Market Status — Closed
          </span>
          <span className="truncate">
            RSI 164.81 &nbsp;/&nbsp; ALSI 187.10 &nbsp;·&nbsp; BKC TRI 395.79
          </span>
        </Container>
      </div>

      {/* Primary nav */}
      <div
        className={cn(
          "transition-colors duration-500 ease-premium",
          solid
            ? "border-b border-border bg-background/90 shadow-[var(--shadow-sm)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="focus-ring flex shrink-0 items-center gap-2">
            <Image
              src="/logos/bk-capital.svg"
              alt="BK Capital"
              width={168}
              height={40}
              priority
              className={cn(
                "h-9 w-auto transition-[filter] duration-500 ease-premium",
                !solid && "brightness-0 invert"
              )}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-premium",
                    solid
                      ? "text-foreground/80 hover:bg-primary-light hover:text-primary"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                  {"children" in item && item.children && (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:rotate-180"
                      strokeWidth={2}
                    />
                  )}
                </Link>

                {"children" in item && item.children && (
                  <div
                    className={cn(
                      "pointer-events-none absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all duration-300 ease-premium",
                      "group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                      "group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    )}
                  >
                    <div className="rounded-2xl border border-border bg-surface-elevated/95 p-2 shadow-[var(--shadow-lg)] backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors duration-200 hover:bg-primary-light hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={onlineServices.signIn}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-premium",
                solid
                  ? "text-primary hover:bg-primary-light"
                  : "text-white hover:bg-white/10"
              )}
            >
              <LogIn className="h-4 w-4" /> Sign In
            </a>
            <a
              href={onlineServices.register}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-md)] transition-colors duration-300 ease-premium",
                solid
                  ? "bg-primary text-white hover:bg-primary-hover"
                  : "bg-accent text-primary-dark hover:bg-accent-hover"
              )}
            >
              <UserPlus className="h-4 w-4" /> Register
            </a>
          </div>

          <button
            type="button"
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              solid ? "text-foreground" : "text-white"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <Menu
                className={cn(
                  "absolute inset-0 h-6 w-6 -translate-x-3 -translate-y-1 transition-all duration-300 ease-premium",
                  mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 h-6 w-6 -translate-x-3 -translate-y-1 transition-all duration-300 ease-premium",
                  mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                )}
              />
            </span>
          </button>
        </Container>
      </div>

      {/* Mobile nav — accordion grid-rows transition, no layout jump */}
      <div
        className={cn(
          "grid overflow-hidden bg-surface-elevated/98 backdrop-blur-xl transition-[grid-template-rows] duration-500 ease-premium lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex max-h-[calc(100svh-80px)] flex-col gap-1 overflow-y-auto py-4">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-border py-1">
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-sm text-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex gap-2 pt-4">
              <a
                href={onlineServices.signIn}
                className="flex-1 rounded-full border border-primary px-4 py-2.5 text-center text-sm font-semibold text-primary"
              >
                Sign In
              </a>
              <a
                href={onlineServices.register}
                className="flex-1 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Register
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
