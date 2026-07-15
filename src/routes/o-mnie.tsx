import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/o-mnie")({
  head: () => ({
    meta: [
      { title: "O mnie — Roman Matviy · Full-stack Developer" },
      { name: "description", content: "Roman Matviy — full-stack developer z Lwowa. 7+ lat komercyjnego doświadczenia w Laravel, PrestaShop, WordPress i Vue.js." },
      { property: "og:title", content: "O mnie — Roman Matviy" },
      { property: "og:description", content: "Programista, który dostarcza gotowe rozwiązania. Historia, doświadczenie i podejście." },
      { property: "og:url", content: "https://devroman.pl/o-mnie" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/o-mnie" }],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-16">
        <About />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </SiteLayout>
  ),
});
