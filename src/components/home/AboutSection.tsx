import { Sparkles, Cpu, Users, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { whoWeAre, missionVisionAim } from "@/lib/content";

const diffIcons = [Sparkles, Cpu, Award, Users];

export default function AboutSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="About BK Capital" title={whoWeAre.heading} />
            <p className="mt-6 text-base leading-relaxed text-muted">
              {whoWeAre.body}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whoWeAre.differentiators.map((item, i) => {
                const Icon = diffIcons[i % diffIcons.length];
                return (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-foreground/90">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <Button href="/about/who-we-are" variant="ghost">
                Read more about us
              </Button>
            </div>
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-xl)]">
            <Placeholder assetPath="images/offices/kigali-hq.webp" tone="dark" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {missionVisionAim.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-surface p-8"
            >
              <h3 className="font-display text-lg font-semibold text-primary">
                Our {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
