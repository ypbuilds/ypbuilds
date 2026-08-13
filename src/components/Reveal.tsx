import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Dir = "left" | "right" | "up" | "scale";

const offsets: Record<Dir, { rx?: string; ry?: string; rs?: string }> = {
  left: { rx: "-48px", ry: "0px" },
  right: { rx: "48px", ry: "0px" },
  up: { ry: "32px" },
  scale: { ry: "0px", rs: "0.94" },
};

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  from?: Dir;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const o = offsets[from];

  return (
    <Tag
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={
        {
          "--rx": o.rx ?? "0px",
          "--ry": o.ry ?? "0px",
          "--rs": o.rs ?? "1",
          "--rd": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
