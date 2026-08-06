"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { factsAndFigures } from "@/lib/content";

const stats = [
  { label: "Assets Under Management", value: factsAndFigures.aum.value },
  { label: "Founded", value: factsAndFigures.founded.value },
  { label: "Parent Company", value: "BK Group" },
  { label: "Market", value: "RSE Member" },
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15, defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          ".hero-heading",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.45"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.55"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[image:var(--gradient-dark)]"
    >
      {/*
        Drop public/videos/hero.mp4 + hero.webm to replace this with a
        cinematic background video; falls back to images/hero/hero.webp.
      */}
      <div className="absolute inset-0">
        <Placeholder assetPath="images/hero/hero.webp" tone="primary" className="opacity-70" />
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181f] via-[#14181f]/60 to-transparent" />
      </div>

      <Container className="relative flex min-h-[92vh] flex-col justify-center pb-20 pt-36">
        <div className="hero-badge inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
          Licensed by the Capital Markets Authority · Member, Rwanda Stock Exchange
        </div>

        <h1 className="hero-heading mt-8 max-w-3xl text-fluid-h1 font-display font-semibold leading-[1.05] tracking-tightest text-white">
          Your trusted partner in building lasting wealth
        </h1>

        <p className="hero-sub mt-6 max-w-xl text-fluid-body leading-relaxed text-white/70">
          A subsidiary of BK Group PLC, BK Capital delivers investment
          management, corporate finance, and securities brokerage built on
          two decades of Rwandan market expertise.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="hero-cta">
            <Button href="https://onboarding.bkcapital.rw/auth/signup" variant="gold">
              Open an Account{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="hero-cta">
            <Button href="/services" variant="outline">
              Explore Our Services
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <dt className="text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
