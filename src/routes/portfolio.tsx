import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Wybrane realizacje · Roman Matviy" },
      { name: "description", content: "Projekty Laravel, PrestaShop, WordPress i Vue.js — od CRM i REST API po sklepy i narzędzia webowe." },
      { property: "og:title", content: "Portfolio — Roman Matviy" },
      { property: "og:description", content: "Wybrane realizacje z różnych obszarów — backend, e-commerce, SaaS." },
      { property: "og:url", content: "https://devroman.pl/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/portfolio" }],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-16">
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </SiteLayout>
  ),
});
