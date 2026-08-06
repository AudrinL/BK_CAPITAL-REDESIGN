"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, LogIn, UserPlus } from "lucide-react";
import Container from "@/components/ui/Container";
import { nav, onlineServices } from "@/lib/content";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Market status strip — mirrors the live BK Capital ticker */}
      <div className="hidden bg-primary-dark text-white/80 md:block">
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
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logos/bk-capital.svg"
              alt="BK Capital"
              width={168}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-light hover:text-primary"
                >
                  {item.label}
                  {"children" in item && item.children && (
                    <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
                  )}
                </Link>

                {"children" in item && item.children && openMenu === item.label && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <div className="rounded-2xl border border-border bg-surface-elevated p-2 shadow-[var(--shadow-lg)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-primary-light hover:text-primary"
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
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
            >
              <LogIn className="h-4 w-4" /> Sign In
            </a>
            <a
              href={onlineServices.register}
              className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-md)] transition-colors hover:bg-primary-hover"
            >
              <UserPlus className="h-4 w-4" /> Register
            </a>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-foreground lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-b border-border bg-surface-elevated lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
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
            <div className="mt-3 flex gap-2 border-t border-border pt-4">
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
      )}
    </header>
  );
}
