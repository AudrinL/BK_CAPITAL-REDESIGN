import Image from "next/image";
import Container from "@/components/ui/Container";
import { partners } from "@/lib/content";

export default function PartnersSection() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Regulated &amp; Affiliated With
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={140}
              height={56}
              className="h-10 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
