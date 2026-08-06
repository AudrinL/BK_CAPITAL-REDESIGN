"use client";

import { LineChart, Handshake, BarChart3, ArrowUpRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import { useScrollReveal } from "@/lib/motion";

const icons: Record<string, LucideIcon> = { LineChart, Handshake, BarChart3 };

export default function ServicesSection() {
  const ref = useScrollReveal<HTMLElement>({ selector: ".reveal-item" });

  return (
    <section className="bg-surface py-section-md" ref={ref}>
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Capital markets services, end to end"
          description="From individual wealth management to corporate advisory and brokerage, every service is built on licensed, regulated expertise."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="reveal-item group relative flex flex-col rounded-3xl border border-border bg-surface-elevated p-8 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary transition-transform duration-300 ease-premium group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
