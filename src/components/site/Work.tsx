import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

const accentMap: Record<Project["accent"], string> = {
  violet: "var(--violet)",
  coral: "var(--coral)",
  lime: "var(--lime)",
  bluey: "var(--bluey)",
};

export function Work() {
  const [p1, p2, p3, p4] = projects;

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal from="left">
            <p className="label-mono text-ink/45">03 — Work</p>
            <h2 className="display-lg mt-3">Selected Work.</h2>
          </Reveal>
          <Reveal from="right" delay={100}>
            <p className="text-ink/60">A few things we've built.</p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-8">
          {p1 && (
            <Reveal from="left">
              <ProjectCard project={p1} label="Project 01" variant="wide" />
            </Reveal>
          )}

          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {p2 && (
              <Reveal from="left" delay={80}>
                <ProjectCard project={p2} label="Project 02" variant="tall" />
              </Reveal>
            )}
            {p3 && (
              <Reveal from="right" delay={160} className="md:mt-16">
                <ProjectCard project={p3} label="Project 03" variant="overlap" />
              </Reveal>
            )}
          </div>

          {p4 && (
            <Reveal from="right" delay={80}>
              <ProjectCard project={p4} label="Project 04" variant="editorial" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  label,
  variant,
}: {
  project: Project;
  label: string;
  variant: "wide" | "tall" | "overlap" | "editorial";
}) {
  const accent = accentMap[project.accent];
  const dark = variant === "editorial";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-colors",
        dark ? "on-ink border-transparent" : "border-ink/12 bg-white",
      )}
    >
      <div
        className={cn(
          "gap-6 p-5 sm:p-7",
          variant === "wide" && "grid lg:grid-cols-[1.4fr_1fr] lg:items-center",
          variant === "editorial" && "grid lg:grid-cols-[1fr_1.3fr] lg:items-center",
        )}
      >
        <Frame
          project={project}
          accent={accent}
          variant={variant}
          dark={dark}
          className={variant === "editorial" ? "lg:order-2" : ""}
        />

        <div className={cn(variant === "tall" || variant === "overlap" ? "mt-5" : "")}>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full" style={{ background: accent }} />
            <span className={cn("label-mono", dark ? "text-paper/50" : "text-ink/45")}>
              {label}
            </span>
          </div>

          <p className={cn("mt-3 text-xs", dark ? "text-paper/50" : "text-ink/50")}>
            Featured Project
          </p>
          <h3 className="display-md mt-1">{project.name}</h3>
          <p className={cn("mt-2 text-sm", dark ? "text-paper/65" : "text-ink/60")}>
            {project.category}
          </p>
          <p className={cn("mt-3 max-w-sm text-sm", dark ? "text-paper/55" : "text-ink/55")}>
            {project.description}
          </p>

          <dl
            className={cn(
              "mt-5 grid grid-cols-3 gap-3 border-t pt-4 text-xs",
              dark ? "border-paper/15" : "border-ink/10",
            )}
          >
            <Meta label="Industry" value={project.industry} dark={dark} />
            <Meta label="Services" value={project.services} dark={dark} />
            <Meta label="Year" value={project.year} dark={dark} />
          </dl>

          <a
            href={project.url}
            className={cn(
              "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
              dark ? "text-paper" : "text-ink",
            )}
          >
            View Project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value, dark }: { label: string; value: string; dark: boolean }) {
  return (
    <div>
      <dt className={cn("label-mono text-[0.55rem]", dark ? "text-paper/40" : "text-ink/40")}>
        {label}
      </dt>
      <dd className={cn("mt-1", dark ? "text-paper/80" : "text-ink/75")}>{value}</dd>
    </div>
  );
}

function Frame({
  project,
  accent,
  variant,
  dark,
  className,
}: {
  project: Project;
  accent: string;
  variant: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        dark ? "relative overflow-hidden rounded-xl border border-paper/15 bg-paper/5" : "relative overflow-hidden rounded-xl border border-ink/10 bg-ink/4",
        variant === "tall" ? "aspect-4/3" : "aspect-16/10",
        className,
      )}
    >
      <div className={cn("flex items-center gap-1.5 border-b px-3 py-2", dark ? "border-paper/15 bg-paper/10" : "border-ink/10 bg-white/70")}>
        <span className={cn("size-2 rounded-full", dark ? "bg-paper/25" : "bg-ink/15")} />
        <span className={cn("size-2 rounded-full", dark ? "bg-paper/25" : "bg-ink/15")} />
        <span className={cn("size-2 rounded-full", dark ? "bg-paper/25" : "bg-ink/15")} />
        <span className={cn("ml-2 h-3 flex-1 rounded-full", dark ? "bg-paper/10" : "bg-ink/8")} />
      </div>

      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} by YP Builds`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="relative flex h-full items-center justify-center overflow-hidden">
          <div
            aria-hidden
            className={cn("grid-lines absolute inset-0 opacity-70", dark ? "text-paper" : "text-ink")}
            style={{ backgroundSize: "38px 38px" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-16 -right-10 size-56 rounded-full blur-3xl opacity-35"
            style={{ background: accent }}
          />
          <div className="relative text-center">
            <span className={cn("label-mono", dark ? "text-paper/45" : "text-ink/40")}>Image Placeholder</span>
            <p className={cn("display-md mt-2", dark ? "text-paper/30" : "text-ink/25")}>{project.id.toString().padStart(2, "0")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
