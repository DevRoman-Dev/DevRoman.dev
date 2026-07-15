import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Usługi — Laravel, PrestaShop, WordPress · Roman Matviy" },
      { name: "description", content: "Aplikacje webowe Laravel, sklepy PrestaShop i WooCommerce, REST API, integracje, utrzymanie i konsultacje. Pełen zakres usług full-stack." },
      { property: "og:title", content: "Usługi — Roman Matviy" },
      { property: "og:description", content: "Pełen zakres usług developerskich: backend Laravel, e-commerce, integracje, utrzymanie." },
      { property: "og:url", content: "https://devroman.pl/uslugi" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/uslugi" }],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-16">
        <Services />
        <TechStack />
        <Process />
        <Contact />
      </div>
    </SiteLayout>
  ),
});
