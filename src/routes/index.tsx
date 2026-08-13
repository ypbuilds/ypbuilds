import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Statement, BigStatement, VisualBreak } from "@/components/site/Statements";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process, Why } from "@/components/site/Process";
import { About, Social } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "YP Builds | Websites, Design & Performance Marketing";
const description =
  "YP Builds creates modern websites, digital experiences and performance marketing solutions designed to help ambitious businesses grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "YP Builds",
          slogan: "We Build. You Grow.",
          description,
          email: "ypbuilds@gmail.com",
          sameAs: [
            "https://instagram.com/ypbuilds",
            "https://www.linkedin.com/company/ypbuilds",
          ],
          serviceType: [
            "Website Design",
            "Website Development",
            "Performance Marketing",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Work />
        <BigStatement />
        <Process />
        <Why />
        <VisualBreak />
        <About />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
