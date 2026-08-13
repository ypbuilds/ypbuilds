import { ArrowUpRight } from "lucide-react";
import { navLinks, contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="on-ink relative overflow-hidden pt-20 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="label-mono text-paper/45">Ready when you are</p>
            <a
              href="#contact"
              className="group mt-4 inline-flex items-center gap-3 text-lime"
            >
              <span className="display-md">Start Your Project</span>
              <ArrowUpRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="mt-6 text-paper/60">
              <a href={`mailto:${contact.email}`} className="story-link">
                {contact.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              title="Navigate"
              links={navLinks.map((l) => ({ label: l.label, href: l.href }))}
            />
            <FooterCol
              title="Services"
              links={[
                { label: "Website Design", href: "#services" },
                { label: "Website Development", href: "#services" },
                { label: "Performance Marketing", href: "#services" },
              ]}
            />
            <FooterCol
              title="Social"
              links={[
                { label: "Instagram", href: contact.instagramUrl },
                { label: "LinkedIn", href: contact.linkedinUrl },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 border-t border-paper/12 pt-8">
          <p className="display-xl leading-[0.8] text-paper/90">YP BUILDS</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-paper/50">
            <p className="label-mono text-paper/70">We Build. You Grow.</p>
            <p>© 2026 YP Builds. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="label-mono text-paper/40">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label + l.href}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-sm text-paper/70 transition-colors hover:text-lime"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
