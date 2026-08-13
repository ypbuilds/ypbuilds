import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal from="left">
            <p className="label-mono text-ink/45">06 — About</p>
            <h2 className="display-lg mt-3">Who We Are.</h2>
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="text-xl leading-relaxed text-ink/70">
              YP Builds is a modern digital studio focused on building websites, digital experiences
              and growth systems for ambitious businesses.
            </p>
            <p className="mt-4 text-ink/55">
              Design, development and performance marketing under one roof — so the work stays
              consistent from the first pixel to the final conversion.
            </p>
          </Reveal>
        </div>

        <Reveal from="scale" delay={160} className="mt-14">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3">
            {[
              { k: "Design", v: "Brand-led visual systems" },
              { k: "Development", v: "Fast, modern frontends" },
              { k: "Growth", v: "Paid media & CRO" },
            ].map((c) => (
              <div key={c.k} className="bg-paper p-7">
                <p className="label-mono text-violet">{c.k}</p>
                <p className="mt-3 text-lg tracking-tight">{c.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Social() {
  return (
    <section className="on-ink relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-20 size-96 rounded-full bg-coral/25 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal from="left">
          <p className="label-mono text-paper/45">07 — Social</p>
          <h2 className="display-lg mt-3">Follow The Build.</h2>
          <p className="mt-4 text-paper/60">Behind the screens, designs and experiments.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <Reveal from="left" delay={100}>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl bg-linear-to-br from-violet via-coral to-lime p-7 text-ink transition-transform duration-500 hover:scale-[1.01]"
            >
              <div className="flex items-center justify-between">
                <Instagram className="size-8" />
                <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="mt-16">
                <p className="label-mono">Instagram</p>
                <p className="display-md mt-1">{contact.instagram}</p>
              </div>
            </a>
          </Reveal>

          <Reveal from="right" delay={180} className="grid gap-5">
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-paper/15 bg-paper/5 p-7 transition-colors hover:bg-paper/10"
            >
              <div>
                <Linkedin className="size-6 text-bluey" />
                <p className="label-mono mt-5 text-paper/50">LinkedIn</p>
                <p className="mt-1 text-xl tracking-tight">{contact.linkedin}</p>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between rounded-2xl border border-paper/15 bg-paper/5 p-7 transition-colors hover:bg-paper/10"
            >
              <div>
                <Mail className="size-6 text-lime" />
                <p className="label-mono mt-5 text-paper/50">Email</p>
                <p className="mt-1 text-xl tracking-tight">{contact.email}</p>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
