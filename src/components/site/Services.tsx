import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const s = services[active]!;

  return (
    <section id="services" className="on-ink relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal from="left">
            <p className="label-mono text-paper/45">02 — Services</p>
            <h2 className="display-lg mt-3">What We Build.</h2>
          </Reveal>
          <Reveal from="right" delay={100}>
            <p className="max-w-xs text-paper/60">From first impression to final conversion.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Selector */}
          <Reveal from="left" delay={120} className="border-t border-paper/12">
            {services.map((item, i) => (
              <button
                key={item.key}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center justify-between gap-4 border-b border-paper/12 py-6 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="label-mono text-paper/40">{item.index}</span>
                  <span
                    className={cn(
                      "display-md transition-all duration-500",
                      active === i ? "translate-x-1" : "text-paper/45",
                    )}
                    style={active === i ? { color: item.accent } : undefined}
                  >
                    {item.title}
                  </span>
                </span>
                <ArrowUpRight
                  className={cn(
                    "size-5 shrink-0 transition-all duration-500",
                    active === i ? "opacity-100" : "-translate-x-2 opacity-0",
                  )}
                />
              </button>
            ))}

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lime"
            >
              Let's Build <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          {/* Panel */}
          <Reveal from="right" delay={160}>
            <div
              key={s.key}
              className="animate-fade-in rounded-2xl border border-paper/12 bg-paper/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <ServiceVisual index={active} accent={s.accent} />
              <p className="mt-6 text-xl leading-snug" style={{ color: s.accent }}>
                {s.description}
              </p>
              <ul className="mt-6 grid gap-y-3 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-paper/75">
                    <Check className="mt-0.5 size-4 shrink-0" style={{ color: s.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ index, accent }: { index: number; accent: string }) {
  if (index === 0) {
    return (
      <div className="grid aspect-16/9 grid-cols-3 gap-3 rounded-xl bg-ink/60 p-4">
        <div className="col-span-2 rounded-lg" style={{ background: accent }} />
        <div className="space-y-3">
          <div className="h-1/2 rounded-lg bg-paper/15" />
          <div className="h-[38%] rounded-lg bg-paper/10" />
        </div>
        <div className="col-span-3 flex gap-3">
          <div className="h-3 w-1/3 rounded bg-paper/20" />
          <div className="h-3 w-1/4 rounded bg-paper/10" />
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="aspect-16/9 overflow-hidden rounded-xl bg-ink/60 p-4 font-mono text-[0.7rem] leading-6 text-paper/60">
        <p>
          <span style={{ color: accent }}>const</span> site = build({"{"}
        </p>
        <p className="pl-4">stack: "react + typescript",</p>
        <p className="pl-4">
          speed: <span style={{ color: accent }}>"instant"</span>,
        </p>
        <p className="pl-4">responsive: true,</p>
        <p>
          {"}"}) <span className="text-paper/30">// shipped</span>
        </p>
      </div>
    );
  }
  return (
    <div className="flex aspect-16/9 items-end gap-2 rounded-xl bg-ink/60 p-4">
      {[24, 38, 30, 55, 48, 72, 90].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md"
          style={{
            height: `${h}%`,
            background: i > 4 ? accent : "color-mix(in oklab, var(--paper) 16%, transparent)",
          }}
        />
      ))}
    </div>
  );
}
