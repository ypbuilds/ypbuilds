import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { processSteps, principles } from "@/data/site";
import { cn } from "@/lib/utils";

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["idx"]);
            setActive(i);
          }
        }
      },
      { threshold: 0.6 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal from="left">
          <p className="label-mono text-ink/45">04 — Process</p>
          <h2 className="display-lg mt-3">How We Build.</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="display-xl leading-none text-violet transition-all duration-500">
                {processSteps[active]?.n}
              </div>
              <p className="label-mono mt-4 text-ink/50">{processSteps[active]?.title}</p>
              <div className="mt-6 h-1 w-full rounded-full bg-ink/10">
                <div
                  className="h-1 rounded-full bg-lime transition-all duration-700"
                  style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            {processSteps.map((step, i) => (
              <div
                key={step.n}
                data-idx={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={cn(
                  "border-t border-ink/12 py-8 transition-all duration-700 last:border-b",
                  active === i ? "opacity-100" : "opacity-45",
                )}
              >
                <div className="flex items-baseline gap-5">
                  <span className="label-mono text-ink/40 lg:hidden">{step.n}</span>
                  <div>
                    <h3
                      className="display-md transition-colors duration-500"
                      style={active === i ? { color: "var(--violet)" } : undefined}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-ink/65">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="border-y border-ink/10 bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal from="left">
            <p className="label-mono text-ink/45">05 — Why YP Builds</p>
            <h2 className="display-lg mt-3">We Think Beyond The Website.</h2>
          </Reveal>
          <Reveal from="right" delay={100}>
            <p className="text-lg leading-relaxed text-ink/65">
              A website is only one part of your digital presence. We think about how your brand
              looks, how users experience it and what happens after they click.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              from={i % 2 === 0 ? "left" : "right"}
              delay={i * 90}
              className="bg-paper p-7 transition-colors hover:bg-white"
            >
              <span
                className="block size-3 rounded-full"
                style={{
                  background: ["var(--violet)", "var(--lime)", "var(--coral)", "var(--bluey)"][i],
                }}
              />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
