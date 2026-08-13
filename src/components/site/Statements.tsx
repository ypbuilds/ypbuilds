import { Reveal } from "@/components/Reveal";

export function Statement() {
  const words = ["Websites", "Design", "Development", "Performance Marketing", "Growth Systems"];
  return (
    <section className="relative border-y border-ink/10 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="display-lg max-w-4xl leading-[1.04]">
          <Reveal from="left">
            <span className="block">Your website shouldn't just look good.</span>
          </Reveal>
          <Reveal from="right" delay={100}>
            <span className="block">
              It should <span className="box-decoration-clone bg-lime px-2 text-ink">work hard.</span>
            </span>
          </Reveal>
        </h2>
        <Reveal from="up" delay={160} className="mt-8 max-w-xl md:ml-auto">
          <p className="text-lg leading-relaxed text-ink/65">
            We combine strategy, design, development and performance marketing to build digital
            experiences that help businesses attract attention, generate leads and grow.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 overflow-hidden border-y border-ink/10 py-4">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {words.map((w) => (
                <span key={w} className="label-mono flex items-center gap-6 px-6 text-ink/60">
                  {w}
                  <span className="size-1.5 rounded-full bg-violet" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BigStatement() {
  return (
    <section className="on-ink relative overflow-hidden py-24 sm:py-36">
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 text-paper opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <Reveal from="left">
          <h2 className="display-lg leading-[1.02]">Good design gets attention.</h2>
        </Reveal>
        <Reveal from="right" delay={120}>
          <p className="display-lg leading-[1.02] text-lime">Great digital experiences get results.</p>
        </Reveal>
        <Reveal from="scale" delay={220}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-paper/70">
            We care about the entire journey — from the first impression to the final conversion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function VisualBreak() {
  return (
    <section className="relative overflow-hidden bg-violet-deep py-24 text-paper sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full border border-paper/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 size-96 rounded-full bg-coral/30 blur-[100px]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal from="left">
          <p className="display-xl leading-[0.85]">Your next</p>
        </Reveal>
        <Reveal from="right" delay={100}>
          <p className="display-xl text-right leading-[0.85] italic text-lavender">
            digital experience
          </p>
        </Reveal>
        <Reveal from="scale" delay={200}>
          <p className="display-xl leading-[0.85]">
            starts <span className="text-lime">here.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
