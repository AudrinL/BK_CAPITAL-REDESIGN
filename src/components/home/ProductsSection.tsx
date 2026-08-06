import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { products } from "@/lib/content";

export default function ProductsSection() {
  return (
    <section className="py-24 sm:py-32">
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
              className="group overflow-hidden rounded-3xl border border-border bg-surface-elevated"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Placeholder
                  assetPath={`images/investment/${product.slug}.webp`}
                  tone={i % 2 === 0 ? "primary" : "gold"}
                />
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
                    <ArrowRight className="h-4 w-4" />
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
