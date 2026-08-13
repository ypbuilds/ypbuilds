import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const floaters = [
  { text: "DESIGN", cls: "left-[2%] top-[14%] bg-violet text-white", d: "0s" },
  { text: "DEVELOPMENT", cls: "right-[1%] top-[30%] bg-lime text-ink", d: "1.2s" },
  { text: "GROWTH", cls: "left-[6%] bottom-[16%] bg-coral text-ink", d: "2.1s" },
  { text: "CONVERSION", cls: "right-[6%] bottom-[8%] bg-ink text-paper", d: "0.7s" },
  { text: "PERFORMANCE", cls: "left-[40%] top-[2%] bg-bluey text-white", d: "1.7s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 text-ink opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 size-[38rem] rounded-full bg-lavender/50 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 size-[30rem] rounded-full bg-coral/25 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal from="left">
          <p className="label-mono flex flex-wrap items-center gap-2 text-ink/55">
            <span className="inline-block size-1.5 rounded-full bg-lime" />
            Digital Studio / Design × Development × Growth
          </p>
        </Reveal>

        <h1 className="mt-6">
          <Reveal from="left" delay={60}>
            <span className="display-xl block">We Build.</span>
          </Reveal>
          <Reveal from="right" delay={160}>
            <span className="display-xl block text-violet italic">You Grow.</span>
          </Reveal>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
          <Reveal from="left" delay={220} className="max-w-md">
            <p className="text-lg leading-relaxed text-ink/70">
              Websites, digital experiences and performance-driven marketing built to turn
              attention into growth.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-violet"
              >
                Start a Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                View Our Work
              </a>
            </div>
          </Reveal>

          <Reveal from="right" delay={200}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-4/3 w-full select-none sm:aspect-16/11">
      {/* back browser window */}
      <div className="absolute right-0 top-0 w-[78%] rotate-2 rounded-xl border border-ink/10 bg-white shadow-[0_30px_80px_-40px_rgba(30,20,60,0.55)]">
        <BrowserBar />
        <div className="grid grid-cols-3 gap-2 p-3">
          <div className="col-span-2 h-16 rounded-md bg-linear-to-br from-violet to-violet-deep" />
          <div className="h-16 rounded-md bg-lavender/70" />
          <div className="h-2.5 rounded bg-ink/10" />
          <div className="h-2.5 rounded bg-ink/10" />
          <div className="h-2.5 rounded bg-lime" />
        </div>
      </div>

      {/* front browser window */}
      <div className="float-slow absolute bottom-0 left-0 w-[72%] -rotate-1 rounded-xl border border-ink/10 bg-white shadow-[0_40px_90px_-45px_rgba(30,20,60,0.65)]">
        <BrowserBar />
        <div className="space-y-2 p-3">
          <div className="h-3 w-2/3 rounded bg-ink/80" />
          <div className="h-3 w-1/3 rounded bg-coral" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-md bg-ink/5" />
            <div className="h-10 rounded-md bg-ink/5" />
            <div className="h-10 rounded-md bg-bluey/30" />
          </div>
        </div>
      </div>

      {/* analytics chip */}
      <div className="absolute right-[4%] bottom-[16%] hidden rounded-lg border border-ink/10 bg-white p-3 shadow-xl sm:block">
        <div className="label-mono text-[0.6rem] text-ink/50">Conversions</div>
        <div className="mt-2 flex h-12 items-end gap-1">
          {[30, 45, 38, 62, 80, 100].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="w-2.5 rounded-sm bg-linear-to-t from-violet to-lime"
            />
          ))}
        </div>
      </div>

      <MousePointer2 className="absolute left-[52%] top-[48%] size-6 fill-ink text-paper drop-shadow" />

      {floaters.map((f) => (
        <span
          key={f.text}
          className={`float-slow label-mono absolute rounded-full px-3 py-1.5 text-[0.6rem] shadow-lg ${f.cls}`}
          style={{ animationDelay: f.d }}
        >
          {f.text}
        </span>
      ))}
    </div>
  );
}

function BrowserBar() {
  return (
    <div className="flex items-center gap-1.5 border-b border-ink/8 px-3 py-2">
      <span className="size-2 rounded-full bg-coral" />
      <span className="size-2 rounded-full bg-lime" />
      <span className="size-2 rounded-full bg-bluey" />
      <span className="ml-2 h-3 flex-1 rounded-full bg-ink/6" />
    </div>
  );
}
