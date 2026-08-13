export type Project = {
  id: number;
  name: string;
  category: string;
  industry: string;
  services: string;
  year: string;
  image: string;
  description: string;
  url: string;
  accent: "violet" | "coral" | "lime" | "bluey";
};

/**
 * Replace name / category / industry / image / description / url below
 * to swap in real case studies. Layout adapts automatically.
 */
export const projects: Project[] = [
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
    accent: "violet",
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
    accent: "coral",
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
    accent: "bluey",
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
    accent: "lime",
  },
];

export type Service = {
  key: string;
  index: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  accent: string;
};

export const services: Service[] = [
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
      "Interactive Experiences",
    ],
    accent: "var(--violet)",
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
      "Deployment",
    ],
    accent: "var(--lime)",
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
      "Campaign Strategy",
    ],
    accent: "var(--coral)",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "Understand the business, audience, goals and competition.",
  },
  {
    n: "02",
    title: "Design",
    body: "Create the visual direction, user experience and conversion journey.",
  },
  {
    n: "03",
    title: "Build",
    body: "Develop a fast, responsive and scalable digital experience.",
  },
  {
    n: "04",
    title: "Grow",
    body: "Use performance marketing and optimization to turn traffic into results.",
  },
];

export const principles = [
  { title: "Design With Purpose", body: "Every visual decision has a reason." },
  { title: "Built For Performance", body: "Speed and usability matter." },
  { title: "Designed To Convert", body: "Beautiful isn't enough." },
  {
    title: "Built To Grow",
    body: "Your digital presence should evolve with your business.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  email: "ypbuilds@gmail.com",
  instagram: "@ypbuilds",
  instagramUrl: "https://instagram.com/ypbuilds",
  linkedin: "YP Builds",
  linkedinUrl: "https://www.linkedin.com/company/ypbuilds",
};
