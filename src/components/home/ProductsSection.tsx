"use client";

import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { products } from "@/lib/content";
import { useScrollReveal } from "@/lib/motion";

export default function ProductsSection() {
  const ref = useScrollReveal<HTMLElement>({ selector: ".reveal-item" });

  return (
    <section className="py-section-md" ref={ref}>
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Purpose-built investment vehicles"
          description="Two flagship products designed to make investing and retirement planning accessible, whoever you are."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className="reveal-item group overflow-hidden rounded-3xl border border-border bg-surface-elevated transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-[var(--shadow-xl)]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-105">
                  <Placeholder
                    assetPath={`images/investment/${product.slug}.webp`}
                    tone={i % 2 === 0 ? "primary" : "gold"}
                  />
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {product.tagline}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.summary}
                </p>
                <div className="mt-6">
                  <Button href={`/products/${product.slug}`} variant="ghost" className="!px-0">
                    Discover {product.name.split(" ")[0]}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
