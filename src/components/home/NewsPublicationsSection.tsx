import { FileText, Newspaper, ArrowUpRight, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const news = [
  {
    date: "27 Oct 2025",
    title: "BK Capital Newsletter — Q3",
    icon: Newspaper,
  },
  {
    date: "25 Jul 2025",
    title: "BK Capital Newsletter — Q2",
    icon: Newspaper,
  },
  {
    date: "13 Nov 2024",
    title: "BK Capital Wins Euromoney Award for Best Securities House in Rwanda 2024",
    icon: Award,
  },
];

const publications = [
  {
    date: "17 Apr 2026",
    title: "BK Capital Weekly Market Report",
    meta: "Source: Rwanda Stock Exchange",
  },
  {
    date: "22 Jun 2022",
    title: "Half Year Market Report 2022",
    meta: "PDF · 1.4 MiB",
  },
  {
    date: "30 Sep 2021",
    title: "Highlights of the Q3 2021",
    meta: "PDF · 996.7 KiB",
  },
];

export default function NewsPublicationsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="News & Events" title="Latest from BK Capital" />
            <ul className="mt-8 space-y-4">
              {news.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted">
                      {item.date}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {item.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/news" variant="ghost" className="!px-0">
                View all news <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Publications" title="Research & market reports" />
            <ul className="mt-8 space-y-4">
              {publications.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <FileText className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted">
                      {item.date}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs text-muted">{item.meta}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/publications/market-reports" variant="ghost" className="!px-0">
                View all publications <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
