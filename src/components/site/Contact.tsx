import { useState, type FormEvent } from "react";
import { ArrowUpRight, Instagram, Linkedin, Mail, Check } from "lucide-react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

const needs = [
  "Website Design",
  "Website Development",
  "Performance Marketing",
  "Complete Digital Package",
  "Not Sure Yet",
];

const budgets = ["Under ₹25k", "₹25k – ₹75k", "₹75k – ₹2L", "₹2L+", "Let's discuss"];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid number").max(30),
  company: z.string().trim().max(120).optional(),
  need: z.string().trim().min(1, "Select what you need"),
  budget: z.string().trim().max(60).optional(),
  details: z.string().trim().min(10, "Tell us a bit more").max(1500),
});

export function Contact() {
  const [need, setNeed] = useState(needs[0]!);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      need,
      budget,
      details: String(fd.get("details") ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    const d = parsed.data;
    const body = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Company: ${d.company || "—"}`,
      `Need: ${d.need}`,
      `Budget: ${d.budget || "—"}`,
      "",
      d.details,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `New project inquiry — ${d.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal from="left">
            <p className="label-mono text-ink/45">08 — Contact</p>
            <h2 className="display-lg mt-3">
              Have A Project <span className="text-violet">In Mind?</span>
            </h2>
            <p className="mt-5 max-w-sm text-lg text-ink/65">
              Tell us what you're building. We'll figure out how to make it better.
            </p>

            <div className="mt-10 space-y-3">
              <Detail
                icon={<Mail className="size-4" />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <Detail
                icon={<Instagram className="size-4" />}
                label="Instagram"
                value={contact.instagram}
                href={contact.instagramUrl}
              />
              <Detail
                icon={<Linkedin className="size-4" />}
                label="LinkedIn"
                value={contact.linkedin}
                href={contact.linkedinUrl}
              />
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-ink/12 bg-white p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors["name"]} placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors["email"]}
                  placeholder="you@email.com"
                />
                <Field
                  label="Phone / WhatsApp"
                  name="phone"
                  error={errors["phone"]}
                  placeholder="+91 00000 00000"
                />
                <Field
                  label="Company / Brand"
                  name="company"
                  error={errors["company"]}
                  placeholder="Optional"
                />
              </div>

              <fieldset className="mt-7">
                <legend className="label-mono text-ink/45">What do you need?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {needs.map((n) => (
                    <button
                      type="button"
                      key={n}
                      onClick={() => setNeed(n)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        need === n
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/15 text-ink/70 hover:border-ink/40",
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="label-mono text-ink/45">Budget range</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        budget === b
                          ? "border-violet bg-violet text-white"
                          : "border-ink/15 text-ink/70 hover:border-ink/40",
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7">
                <label htmlFor="details" className="label-mono text-ink/45">
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  maxLength={1500}
                  placeholder="What are you building, and what does success look like?"
                  className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-violet"
                />
                {errors["details"] && <ErrorText>{errors["details"]}</ErrorText>}
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper transition-colors hover:bg-violet"
              >
                {sent ? "Opening your email…" : "Let's Build Something"}
                {sent ? (
                  <Check className="size-5" />
                ) : (
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={name} className="label-mono text-ink/45">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-violet"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-coral">{children}</p>;
}

function Detail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-ink/12 bg-white px-4 py-3.5 transition-colors hover:border-ink/30"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-ink text-paper">
        {icon}
      </span>
      <span>
        <span className="label-mono block text-ink/40">{label}</span>
        <span className="text-sm">{value}</span>
      </span>
      <ArrowUpRight className="ml-auto size-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}
