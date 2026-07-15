import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyMe } from "@/components/sections/WhyMe";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roman Matviy — Full-stack Developer · Laravel, PrestaShop, WordPress" },
      {
        name: "description",
        content:
          "Programista z 7+ lat doświadczenia. Aplikacje webowe Laravel, sklepy PrestaShop i WooCommerce, REST API. Bezpłatna wycena w 24h.",
      },
      { property: "og:title", content: "Roman Matviy — Full-stack Developer" },
      { property: "og:description", content: "Laravel · PrestaShop · WordPress · Vue.js. 50+ projektów dla firm z Polski i Europy." },
      { property: "og:url", content: "https://devroman.pl/" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <WhyMe />
      <Services />
      <TechStack />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Process />
      <BlogPreview />
      <FAQ />
      <Contact />
    </SiteLayout>
  );
}
