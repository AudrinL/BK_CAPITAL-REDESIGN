import { ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { factsAndFigures } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-dark)]">
      {/*
        Drop public/videos/hero.mp4 + hero.webm to replace this with a
        cinematic background video; falls back to images/hero/hero.webp.
      */}
      <div className="absolute inset-0">
        <Placeholder assetPath="images/hero/hero.webp" tone="primary" className="opacity-70" />
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181f] via-[#14181f]/60 to-transparent" />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-center py-28">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
          Licensed by the Capital Markets Authority · Member, Rwanda Stock Exchange
        </div>

        <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your trusted partner in building lasting wealth
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          A subsidiary of BK Group PLC, BK Capital delivers investment
          management, corporate finance, and securities brokerage built on
          two decades of Rwandan market expertise.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="https://onboarding.bkcapital.rw/auth/signup" variant="gold">
            Open an Account <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/services" variant="outline">
            Explore Our Services
          </Button>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            { label: "Assets Under Management", value: factsAndFigures.aum.value },
            { label: "Founded", value: factsAndFigures.founded.value },
            { label: "Parent Company", value: "BK Group" },
            { label: "Market", value: "RSE Member" },
          ].map((stat) => (
            <div key={stat.label}>
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
