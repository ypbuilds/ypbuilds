import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled
            ? "border-ink/10 bg-paper/80 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="flex items-center gap-3 label-mono text-ink text-xl sm:text-2xl">
          <img src="/logo.png" alt="YP Builds Logo" className="h-10 w-auto object-contain" />
          <span>YP <span className="text-violet">Builds</span></span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="story-link text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-violet sm:inline-flex"
          >
            Let's Talk
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col justify-between bg-ink px-6 pt-24 pb-10 transition-all duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="space-y-1">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display-md block border-b border-paper/10 py-3 text-paper transition-all duration-500"
                style={{
                  transform: open ? "translateX(0)" : "translateX(-24px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: `${80 + i * 45}ms`,
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-base font-semibold text-ink"
        >
          Start a Project <ArrowUpRight className="size-5" />
        </a>
      </div>
    </header>
  );
}
