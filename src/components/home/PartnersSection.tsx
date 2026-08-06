"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { partners } from "@/lib/content";
import { useScrollReveal } from "@/lib/motion";

const track = [...partners, ...partners];

export default function PartnersSection() {
  const ref = useScrollReveal<HTMLElement>({ selector: ".reveal-item" });

  return (
    <section className="border-y border-border bg-surface py-16" ref={ref}>
      <Container>
        <p className="reveal-item text-center text-xs font-semibold uppercase tracking-wideish text-muted">
          Regulated &amp; Affiliated With
        </p>
      </Container>

      <div className="reveal-item marquee-paused group relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16">
          {track.map((partner, i) => (
            <Image
              key={`${partner.name}-${i}`}
              src={partner.logo}
              alt={partner.name}
              width={140}
              height={56}
              className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
