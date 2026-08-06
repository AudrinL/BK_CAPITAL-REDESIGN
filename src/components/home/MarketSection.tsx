import { TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const tickers = [
  { code: "BLR", value: "490" },
  { code: "CMR", value: "160" },
  { code: "RHB", value: "526" },
  { code: "EQTY", value: "500" },
  { code: "MTNR", value: "127" },
  { code: "NMG", value: "1,200" },
  { code: "BOK", value: "600" },
  { code: "IMR", value: "80" },
  { code: "KCB", value: "500" },
];

// Decorative only — illustrative of report cadence, not live trading data.
const chartBars = [38, 52, 44, 61, 55, 70, 64, 78, 72, 85];

export default function MarketSection() {
  return (
    <section className="bg-[image:var(--gradient-dark)] py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Market Snapshot"
              title="Real-time visibility into the Rwandan market"
              light
              description="RSE-listed counters, tracked daily by our research desk — with BK Capital Total Return Index performance available in every weekly report."
            />

            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {tickers.map((t) => (
                <div
                  key={t.code}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur-sm"
                >
                  <div className="text-[11px] font-semibold tracking-wide text-white/50">
                    {t.code}
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold text-white">
                    {t.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/publications/market-reports" variant="gold">
                View Market Reports
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-white/70">
                <TrendingUp className="h-4 w-4 text-accent" />
                BK Capital Total Return Index
              </span>
              <span className="font-display text-lg font-semibold text-white">
                395.79
              </span>
            </div>
            <div className="mt-8 flex h-40 items-end gap-2">
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i === chartBars.length - 1
                        ? "var(--accent)"
                        : "linear-gradient(180deg, var(--chart-1), transparent)",
                    opacity: i === chartBars.length - 1 ? 1 : 0.6 + (i / chartBars.length) * 0.4,
                  }}
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">
              Illustrative trend — see published reports for verified figures.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
