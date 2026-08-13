import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Linkedin, c as ArrowUpRight, i as Mail, n as MousePointer2, o as Instagram, r as Menu, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B3C0Hwe8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Replace name / category / industry / image / description / url below
* to swap in real case studies. Layout adapts automatically.
*/
var projects = [
	{
		id: 1,
		name: "[Project Name]",
		category: "Website Design + Development",
		industry: "Industry",
		services: "UI/UX + Development",
		year: "2026",
		image: "",
		description: "Placeholder for featured website. Reserved for an upcoming case study.",
		url: "#",
		accent: "violet"
	},
	{
		id: 2,
		name: "[Project Name]",
		category: "Website Design + Development",
		industry: "Industry",
		services: "Design + Performance Marketing",
		year: "2026",
		image: "",
		description: "Placeholder for featured website. Reserved for an upcoming case study.",
		url: "#",
		accent: "coral"
	},
	{
		id: 3,
		name: "[Project Name]",
		category: "Website Design + Development",
		industry: "Industry",
		services: "Brand Site + Development",
		year: "2026",
		image: "",
		description: "Placeholder for featured website. Reserved for an upcoming case study.",
		url: "#",
		accent: "bluey"
	},
	{
		id: 4,
		name: "[Project Name]",
		category: "Website Design + Development",
		industry: "Industry",
		services: "Complete Digital Package",
		year: "2026",
		image: "",
		description: "Placeholder for featured website. Reserved for an upcoming case study.",
		url: "#",
		accent: "lime"
	}
];
var services = [
	{
		key: "design",
		index: "01",
		title: "Website Design",
		short: "Design",
		description: "Websites designed to make your brand impossible to ignore.",
		items: [
			"UI/UX Design",
			"Responsive Design",
			"Brand-focused Visual Systems",
			"Landing Pages",
			"Conversion-focused UX",
			"Interactive Experiences"
		],
		accent: "var(--violet)"
	},
	{
		key: "development",
		index: "02",
		title: "Website Development",
		short: "Development",
		description: "Fast, scalable websites built for real-world performance.",
		items: [
			"Modern Frontend Development",
			"Responsive Development",
			"Custom Web Experiences",
			"Performance Optimization",
			"Integrations",
			"Deployment"
		],
		accent: "var(--lime)"
	},
	{
		key: "marketing",
		index: "03",
		title: "Performance Marketing",
		short: "Marketing",
		description: "Turn attention into traffic, leads and measurable growth.",
		items: [
			"Google Ads",
			"Meta Ads",
			"Conversion Optimization",
			"Landing Page Optimization",
			"Analytics",
			"Campaign Strategy"
		],
		accent: "var(--coral)"
	}
];
var processSteps = [
	{
		n: "01",
		title: "Discover",
		body: "Understand the business, audience, goals and competition."
	},
	{
		n: "02",
		title: "Design",
		body: "Create the visual direction, user experience and conversion journey."
	},
	{
		n: "03",
		title: "Build",
		body: "Develop a fast, responsive and scalable digital experience."
	},
	{
		n: "04",
		title: "Grow",
		body: "Use performance marketing and optimization to turn traffic into results."
	}
];
var principles = [
	{
		title: "Design With Purpose",
		body: "Every visual decision has a reason."
	},
	{
		title: "Built For Performance",
		body: "Speed and usability matter."
	},
	{
		title: "Designed To Convert",
		body: "Beautiful isn't enough."
	},
	{
		title: "Built To Grow",
		body: "Your digital presence should evolve with your business."
	}
];
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Work",
		href: "#work"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var contact = {
	email: "ypbuilds@gmail.com",
	instagram: "@ypbuilds",
	instagramUrl: "https://instagram.com/ypbuilds",
	linkedin: "YP Builds",
	linkedinUrl: "https://www.linkedin.com/company/ypbuilds"
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: cn("mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5", scrolled ? "border-ink/10 bg-paper/80 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "border-transparent bg-transparent"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3 label-mono text-ink text-xl sm:text-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "YP Builds Logo",
						className: "h-10 w-auto object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["YP ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-violet",
						children: "Builds"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-7 md:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "story-link text-sm text-ink/70 transition-colors hover:text-ink",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "group hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-violet sm:inline-flex",
						children: ["Let's Talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "inline-flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("fixed inset-0 top-0 z-40 flex flex-col justify-between bg-ink px-6 pt-24 pb-10 transition-all duration-500 md:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: navLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "display-md block border-b border-paper/10 py-3 text-paper transition-all duration-500",
					style: {
						transform: open ? "translateX(0)" : "translateX(-24px)",
						opacity: open ? 1 : 0,
						transitionDelay: `${80 + i * 45}ms`
					},
					children: l.label
				}) }, l.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				onClick: () => setOpen(false),
				className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-base font-semibold text-ink",
				children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })]
			})]
		})]
	});
}
var offsets = {
	left: {
		rx: "-48px",
		ry: "0px"
	},
	right: {
		rx: "48px",
		ry: "0px"
	},
	up: { ry: "32px" },
	scale: {
		ry: "0px",
		rs: "0.94"
	}
};
function Reveal({ children, from = "up", delay = 0, className, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const o = offsets[from];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", shown && "reveal-in", className),
		style: {
			"--rx": o.rx ?? "0px",
			"--ry": o.ry ?? "0px",
			"--rs": o.rs ?? "1",
			"--rd": `${delay}ms`
		},
		children
	});
}
var floaters = [
	{
		text: "DESIGN",
		cls: "left-[2%] top-[14%] bg-violet text-white",
		d: "0s"
	},
	{
		text: "DEVELOPMENT",
		cls: "right-[1%] top-[30%] bg-lime text-ink",
		d: "1.2s"
	},
	{
		text: "GROWTH",
		cls: "left-[6%] bottom-[16%] bg-coral text-ink",
		d: "2.1s"
	},
	{
		text: "CONVERSION",
		cls: "right-[6%] bottom-[8%] bg-ink text-paper",
		d: "0.7s"
	},
	{
		text: "PERFORMANCE",
		cls: "left-[40%] top-[2%] bg-bluey text-white",
		d: "1.7s"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "grid-lines pointer-events-none absolute inset-0 text-ink opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-40 -left-32 size-[38rem] rounded-full bg-lavender/50 blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-40 top-24 size-[30rem] rounded-full bg-coral/25 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "label-mono flex flex-wrap items-center gap-2 text-ink/55",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-lime" }), "Digital Studio / Design × Development × Growth"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							from: "left",
							delay: 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-xl block",
								children: "We Build."
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							from: "right",
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-xl block text-violet italic",
								children: "You Grow."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							from: "left",
							delay: 220,
							className: "max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg leading-relaxed text-ink/70",
								children: "Websites, digital experiences and performance-driven marketing built to turn attention into growth."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-violet",
									children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									className: "inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper",
									children: "View Our Work"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							from: "right",
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})
						})]
					})
				]
			})
		]
	});
}
function HeroVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-4/3 w-full select-none sm:aspect-16/11",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-0 top-0 w-[78%] rotate-2 rounded-xl border border-ink/10 bg-white shadow-[0_30px_80px_-40px_rgba(30,20,60,0.55)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col-span-2 h-16 rounded-md bg-linear-to-br from-violet to-violet-deep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 rounded-md bg-lavender/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 rounded bg-ink/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 rounded bg-ink/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 rounded bg-lime" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "float-slow absolute bottom-0 left-0 w-[72%] -rotate-1 rounded-xl border border-ink/10 bg-white shadow-[0_40px_90px_-45px_rgba(30,20,60,0.65)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-2/3 rounded bg-ink/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/3 rounded bg-coral" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 rounded-md bg-ink/5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 rounded-md bg-ink/5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 rounded-md bg-bluey/30" })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-[4%] bottom-[16%] hidden rounded-lg border border-ink/10 bg-white p-3 shadow-xl sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono text-[0.6rem] text-ink/50",
					children: "Conversions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex h-12 items-end gap-1",
					children: [
						30,
						45,
						38,
						62,
						80,
						100
					].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: { height: `${h}%` },
						className: "w-2.5 rounded-sm bg-linear-to-t from-violet to-lime"
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointer2, { className: "absolute left-[52%] top-[48%] size-6 fill-ink text-paper drop-shadow" }),
			floaters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `float-slow label-mono absolute rounded-full px-3 py-1.5 text-[0.6rem] shadow-lg ${f.cls}`,
				style: { animationDelay: f.d },
				children: f.text
			}, f.text))
		]
	});
}
function BrowserBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5 border-b border-ink/8 px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-coral" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-lime" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-bluey" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-2 h-3 flex-1 rounded-full bg-ink/6" })
		]
	});
}
function Statement() {
	const words = [
		"Websites",
		"Design",
		"Development",
		"Performance Marketing",
		"Growth Systems"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-y border-ink/10 bg-paper py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "display-lg max-w-4xl leading-[1.04]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "Your website shouldn't just look good."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "right",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block",
						children: ["It should ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "box-decoration-clone bg-lime px-2 text-ink",
							children: "work hard."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				from: "up",
				delay: 160,
				className: "mt-8 max-w-xl md:ml-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-ink/65",
					children: "We combine strategy, design, development and performance marketing to build digital experiences that help businesses attract attention, generate leads and grow."
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 overflow-hidden border-y border-ink/10 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: [0, 1].map((dup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex shrink-0 items-center",
					children: words.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "label-mono flex items-center gap-6 px-6 text-ink/60",
						children: [w, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-violet" })]
					}, w))
				}, dup))
			})
		})]
	});
}
function BigStatement() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "on-ink relative overflow-hidden py-24 sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "grid-lines pointer-events-none absolute inset-0 text-paper opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-[140px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg leading-[1.02]",
							children: "Good design gets attention."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "right",
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-lg leading-[1.02] text-lime",
							children: "Great digital experiences get results."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "scale",
						delay: 220,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-8 max-w-xl text-lg text-paper/70",
							children: "We care about the entire journey — from the first impression to the final conversion."
						})
					})
				]
			})
		]
	});
}
function VisualBreak() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-violet-deep py-24 text-paper sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-24 top-10 size-72 rounded-full border border-paper/20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-16 bottom-0 size-96 rounded-full bg-coral/30 blur-[100px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-xl leading-[0.85]",
							children: "Your next"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "right",
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-xl text-right leading-[0.85] italic text-lavender",
							children: "digital experience"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "scale",
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "display-xl leading-[0.85]",
							children: ["starts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lime",
								children: "here."
							})]
						})
					})
				]
			})
		]
	});
}
function Services() {
	const [active, setActive] = (0, import_react.useState)(0);
	const s = services[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "on-ink relative overflow-hidden py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-paper/45",
						children: "02 — Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-3",
						children: "What We Build."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "right",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs text-paper/60",
						children: "From first impression to final conversion."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "left",
					delay: 120,
					className: "border-t border-paper/12",
					children: [services.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onMouseEnter: () => setActive(i),
						onFocus: () => setActive(i),
						onClick: () => setActive(i),
						className: "group flex w-full items-center justify-between gap-4 border-b border-paper/12 py-6 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-baseline gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-mono text-paper/40",
								children: item.index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("display-md transition-all duration-500", active === i ? "translate-x-1" : "text-paper/45"),
								style: active === i ? { color: item.accent } : void 0,
								children: item.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: cn("size-5 shrink-0 transition-all duration-500", active === i ? "opacity-100" : "-translate-x-2 opacity-0") })]
					}, item.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lime",
						children: ["Let's Build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "right",
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-fade-in rounded-2xl border border-paper/12 bg-paper/5 p-6 backdrop-blur-sm sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceVisual, {
								index: active,
								accent: s.accent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xl leading-snug",
								style: { color: s.accent },
								children: s.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 grid gap-y-3 sm:grid-cols-2",
								children: s.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-paper/75",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-4 shrink-0",
										style: { color: s.accent }
									}), item]
								}, item))
							})
						]
					}, s.key)
				})]
			})]
		})
	});
}
function ServiceVisual({ index, accent }) {
	if (index === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid aspect-16/9 grid-cols-3 gap-3 rounded-xl bg-ink/60 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-2 rounded-lg",
				style: { background: accent }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1/2 rounded-lg bg-paper/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[38%] rounded-lg bg-paper/10" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-3 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/3 rounded bg-paper/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/4 rounded bg-paper/10" })]
			})
		]
	});
	if (index === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "aspect-16/9 overflow-hidden rounded-xl bg-ink/60 p-4 font-mono text-[0.7rem] leading-6 text-paper/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: accent },
					children: "const"
				}),
				" site = build(",
				"{"
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pl-4",
				children: "stack: \"react + typescript\","
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pl-4",
				children: [
					"speed: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: accent },
						children: "\"instant\""
					}),
					","
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pl-4",
				children: "responsive: true,"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"}",
				") ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-paper/30",
					children: "// shipped"
				})
			] })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex aspect-16/9 items-end gap-2 rounded-xl bg-ink/60 p-4",
		children: [
			24,
			38,
			30,
			55,
			48,
			72,
			90
		].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 rounded-t-md",
			style: {
				height: `${h}%`,
				background: i > 4 ? accent : "color-mix(in oklab, var(--paper) 16%, transparent)"
			}
		}, i))
	});
}
var accentMap = {
	violet: "var(--violet)",
	coral: "var(--coral)",
	lime: "var(--lime)",
	bluey: "var(--bluey)"
};
function Work() {
	const [p1, p2, p3, p4] = projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-ink/45",
						children: "03 — Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-3",
						children: "Selected Work."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "right",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink/60",
						children: "A few things we've built."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 space-y-8",
				children: [
					p1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project: p1,
							label: "Project 01",
							variant: "wide"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-2 md:items-start",
						children: [p2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							from: "left",
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project: p2,
								label: "Project 02",
								variant: "tall"
							})
						}), p3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							from: "right",
							delay: 160,
							className: "md:mt-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project: p3,
								label: "Project 03",
								variant: "overlap"
							})
						})]
					}),
					p4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						from: "right",
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project: p4,
							label: "Project 04",
							variant: "editorial"
						})
					})
				]
			})]
		})
	});
}
function ProjectCard({ project, label, variant }) {
	const accent = accentMap[project.accent];
	const dark = variant === "editorial";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("group relative overflow-hidden rounded-2xl border transition-colors", dark ? "on-ink border-transparent" : "border-ink/12 bg-white"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("gap-6 p-5 sm:p-7", variant === "wide" && "grid lg:grid-cols-[1.4fr_1fr] lg:items-center", variant === "editorial" && "grid lg:grid-cols-[1fr_1.3fr] lg:items-center"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				project,
				accent,
				variant,
				dark,
				className: variant === "editorial" ? "lg:order-2" : ""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn(variant === "tall" || variant === "overlap" ? "mt-5" : ""),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2 rounded-full",
							style: { background: accent }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("label-mono", dark ? "text-paper/50" : "text-ink/45"),
							children: label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-3 text-xs", dark ? "text-paper/50" : "text-ink/50"),
						children: "Featured Project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display-md mt-1",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-2 text-sm", dark ? "text-paper/65" : "text-ink/60"),
						children: project.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-3 max-w-sm text-sm", dark ? "text-paper/55" : "text-ink/55"),
						children: project.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: cn("mt-5 grid grid-cols-3 gap-3 border-t pt-4 text-xs", dark ? "border-paper/15" : "border-ink/10"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								label: "Industry",
								value: project.industry,
								dark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								label: "Services",
								value: project.services,
								dark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								label: "Year",
								value: project.year,
								dark
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: project.url,
						className: cn("mt-6 inline-flex items-center gap-1.5 text-sm font-semibold", dark ? "text-paper" : "text-ink"),
						children: ["View Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
					})
				]
			})]
		})
	});
}
function Meta({ label, value, dark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: cn("label-mono text-[0.55rem]", dark ? "text-paper/40" : "text-ink/40"),
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: cn("mt-1", dark ? "text-paper/80" : "text-ink/75"),
		children: value
	})] });
}
function Frame({ project, accent, variant, dark, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(dark ? "relative overflow-hidden rounded-xl border border-paper/15 bg-paper/5" : "relative overflow-hidden rounded-xl border border-ink/10 bg-ink/4", variant === "tall" ? "aspect-4/3" : "aspect-16/10", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex items-center gap-1.5 border-b px-3 py-2", dark ? "border-paper/15 bg-paper/10" : "border-ink/10 bg-white/70"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", dark ? "bg-paper/25" : "bg-ink/15") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", dark ? "bg-paper/25" : "bg-ink/15") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", dark ? "bg-paper/25" : "bg-ink/15") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("ml-2 h-3 flex-1 rounded-full", dark ? "bg-paper/10" : "bg-ink/8") })
			]
		}), project.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: project.image,
			alt: `${project.name} — ${project.category} by YP Builds`,
			loading: "lazy",
			decoding: "async",
			className: "size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full items-center justify-center overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: cn("grid-lines absolute inset-0 opacity-70", dark ? "text-paper" : "text-ink"),
					style: { backgroundSize: "38px 38px" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -bottom-16 -right-10 size-56 rounded-full blur-3xl opacity-35",
					style: { background: accent }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("label-mono", dark ? "text-paper/45" : "text-ink/40"),
						children: "Image Placeholder"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("display-md mt-2", dark ? "text-paper/30" : "text-ink/25"),
						children: project.id.toString().padStart(2, "0")
					})]
				})
			]
		})]
	});
}
function Process() {
	const [active, setActive] = (0, import_react.useState)(0);
	const refs = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				const i = Number(e.target.dataset["idx"]);
				setActive(i);
			}
		}, { threshold: .6 });
		refs.current.forEach((el) => el && io.observe(el));
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				from: "left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-mono text-ink/45",
					children: "04 — Process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-3",
					children: "How We Build."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "display-xl leading-none text-violet transition-all duration-500",
								children: processSteps[active]?.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-mono mt-4 text-ink/50",
								children: processSteps[active]?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 h-1 w-full rounded-full bg-ink/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1 rounded-full bg-lime transition-all duration-700",
									style: { width: `${(active + 1) / processSteps.length * 100}%` }
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-idx": i,
					ref: (el) => {
						refs.current[i] = el;
					},
					className: cn("border-t border-ink/12 py-8 transition-all duration-700 last:border-b", active === i ? "opacity-100" : "opacity-45"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono text-ink/40 lg:hidden",
							children: step.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-md transition-colors duration-500",
							style: active === i ? { color: "var(--violet)" } : void 0,
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-ink/65",
							children: step.body
						})] })]
					})
				}, step.n)) })]
			})]
		})
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-ink/10 bg-secondary py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-ink/45",
						children: "05 — Why YP Builds"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-3",
						children: "We Think Beyond The Website."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "right",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-ink/65",
						children: "A website is only one part of your digital presence. We think about how your brand looks, how users experience it and what happens after they click."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4",
				children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: i % 2 === 0 ? "left" : "right",
					delay: i * 90,
					className: "bg-paper p-7 transition-colors hover:bg-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block size-3 rounded-full",
							style: { background: [
								"var(--violet)",
								"var(--lime)",
								"var(--coral)",
								"var(--bluey)"
							][i] }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-lg font-semibold tracking-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink/60",
							children: p.body
						})
					]
				}, p.title))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-ink/45",
						children: "06 — About"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-3",
						children: "Who We Are."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "right",
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl leading-relaxed text-ink/70",
						children: "YP Builds is a modern digital studio focused on building websites, digital experiences and growth systems for ambitious businesses."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink/55",
						children: "Design, development and performance marketing under one roof — so the work stays consistent from the first pixel to the final conversion."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				from: "scale",
				delay: 160,
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3",
					children: [
						{
							k: "Design",
							v: "Brand-led visual systems"
						},
						{
							k: "Development",
							v: "Fast, modern frontends"
						},
						{
							k: "Growth",
							v: "Paid media & CRO"
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-paper p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono text-violet",
							children: c.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg tracking-tight",
							children: c.v
						})]
					}, c.k))
				})
			})]
		})
	});
}
function Social() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "on-ink relative overflow-hidden py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-24 -top-20 size-96 rounded-full bg-coral/25 blur-[120px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				from: "left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-paper/45",
						children: "07 — Social"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-3",
						children: "Follow The Build."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-paper/60",
						children: "Behind the screens, designs and experiments."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "left",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.instagramUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex h-full flex-col justify-between rounded-2xl bg-linear-to-br from-violet via-coral to-lime p-7 text-ink transition-transform duration-500 hover:scale-[1.01]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-mono",
								children: "Instagram"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display-md mt-1",
								children: contact.instagram
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "right",
					delay: 180,
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.linkedinUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex items-center justify-between rounded-2xl border border-paper/15 bg-paper/5 p-7 transition-colors hover:bg-paper/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-6 text-bluey" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-mono mt-5 text-paper/50",
								children: "LinkedIn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl tracking-tight",
								children: contact.linkedin
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${contact.email}`,
						className: "group flex items-center justify-between rounded-2xl border border-paper/15 bg-paper/5 p-7 transition-colors hover:bg-paper/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-6 text-lime" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-mono mt-5 text-paper/50",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl tracking-tight",
								children: contact.email
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
					})]
				})]
			})]
		})]
	});
}
var needs = [
	"Website Design",
	"Website Development",
	"Performance Marketing",
	"Complete Digital Package",
	"Not Sure Yet"
];
var budgets = [
	"Under ₹25k",
	"₹25k – ₹75k",
	"₹75k – ₹2L",
	"₹2L+",
	"Let's discuss"
];
var schema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Enter a valid email").max(255),
	phone: stringType().trim().min(6, "Enter a valid number").max(30),
	company: stringType().trim().max(120).optional(),
	need: stringType().trim().min(1, "Select what you need"),
	budget: stringType().trim().max(60).optional(),
	details: stringType().trim().min(10, "Tell us a bit more").max(1500)
});
function Contact() {
	const [need, setNeed] = (0, import_react.useState)(needs[0]);
	const [budget, setBudget] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			company: String(fd.get("company") ?? ""),
			need,
			budget,
			details: String(fd.get("details") ?? "")
		});
		if (!parsed.success) {
			const next = {};
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
			d.details
		].join("\n");
		window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`New project inquiry — ${d.name}`)}&body=${encodeURIComponent(body)}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					from: "left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-mono text-ink/45",
							children: "08 — Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-3",
							children: ["Have A Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-violet",
								children: "In Mind?"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-lg text-ink/65",
							children: "Tell us what you're building. We'll figure out how to make it better."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
									label: "Email",
									value: contact.email,
									href: `mailto:${contact.email}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }),
									label: "Instagram",
									value: contact.instagram,
									href: contact.instagramUrl
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" }),
									label: "LinkedIn",
									value: contact.linkedin,
									href: contact.linkedinUrl
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					from: "right",
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						noValidate: true,
						className: "rounded-2xl border border-ink/12 bg-white p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										name: "name",
										error: errors["name"],
										placeholder: "Your name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										error: errors["email"],
										placeholder: "you@email.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone / WhatsApp",
										name: "phone",
										error: errors["phone"],
										placeholder: "+91 00000 00000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company / Brand",
										name: "company",
										error: errors["company"],
										placeholder: "Optional"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "label-mono text-ink/45",
									children: "What do you need?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: needs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setNeed(n),
										className: cn("rounded-full border px-4 py-2 text-sm transition-colors", need === n ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink/70 hover:border-ink/40"),
										children: n
									}, n))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "label-mono text-ink/45",
									children: "Budget range"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setBudget(b),
										className: cn("rounded-full border px-4 py-2 text-sm transition-colors", budget === b ? "border-violet bg-violet text-white" : "border-ink/15 text-ink/70 hover:border-ink/40"),
										children: b
									}, b))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "details",
										className: "label-mono text-ink/45",
										children: "Project details"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "details",
										name: "details",
										rows: 4,
										maxLength: 1500,
										placeholder: "What are you building, and what does success look like?",
										className: "mt-2 w-full resize-none rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-violet"
									}),
									errors["details"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, { children: errors["details"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper transition-colors hover:bg-violet",
								children: [sent ? "Opening your email…" : "Let's Build Something", sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					})
				})]
			})
		})
	});
}
function Field({ label, name, type = "text", placeholder, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "label-mono text-ink/45",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			maxLength: 255,
			placeholder,
			className: "mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-violet"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, { children: error })
	] });
}
function ErrorText({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-xs text-coral",
		children
	});
}
function Detail({ icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		className: "group flex items-center gap-4 rounded-xl border border-ink/12 bg-white px-4 py-3.5 transition-colors hover:border-ink/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-9 items-center justify-center rounded-full bg-ink text-paper",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label-mono block text-ink/40",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm",
				children: value
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto size-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "on-ink relative overflow-hidden pt-20 pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-paper/45",
						children: "Ready when you are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "group mt-4 inline-flex items-center gap-3 text-lime",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display-md",
							children: "Start Your Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-paper/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${contact.email}`,
							className: "story-link",
							children: contact.email
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Navigate",
							links: navLinks.map((l) => ({
								label: l.label,
								href: l.href
							}))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Services",
							links: [
								{
									label: "Website Design",
									href: "#services"
								},
								{
									label: "Website Development",
									href: "#services"
								},
								{
									label: "Performance Marketing",
									href: "#services"
								}
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Social",
							links: [{
								label: "Instagram",
								href: contact.instagramUrl
							}, {
								label: "LinkedIn",
								href: contact.linkedinUrl
							}]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border-t border-paper/12 pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display-xl leading-[0.8] text-paper/90",
					children: "YP BUILDS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-paper/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-mono text-paper/70",
						children: "We Build. You Grow."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 YP Builds. All Rights Reserved." })]
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "label-mono text-paper/40",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2.5",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: l.href,
			target: l.href.startsWith("http") ? "_blank" : void 0,
			rel: "noreferrer",
			className: "text-sm text-paper/70 transition-colors hover:text-lime",
			children: l.label
		}) }, l.label + l.href))
	})] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Statement, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStatement, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualBreak, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
