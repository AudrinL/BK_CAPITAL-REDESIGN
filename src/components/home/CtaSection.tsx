"use client";

import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { contact } from "@/lib/content";
import { useScrollReveal } from "@/lib/motion";

export default function CtaSection() {
  const ref = useScrollReveal<HTMLElement>({ selector: ".reveal-item", y: 24 });

  return (
    <section className="py-section-md" ref={ref}>
      <Container>
        <div className="reveal-item relative overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-primary)] px-8 py-16 text-center sm:px-16">
          <div className="absolute inset-0 bg-[image:var(--gradient-mesh)]" />
          <div className="relative">
            <h2 className="text-fluid-h2 font-display font-semibold tracking-tightest text-white">
              Ready to start investing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-fluid-body text-white/75">
              Open an account online in minutes, or speak with our advisory
              team about the right product for your goals.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="https://onboarding.bkcapital.rw/auth/signup" variant="gold">
                Open an Account{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
              </Button>
              <Button href={`tel:${contact.supportLine.replace(/\s/g, "")}`} variant="outline">
                <Phone className="h-4 w-4" /> {contact.supportLine}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
