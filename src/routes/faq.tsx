import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FAQ as FAQ_ITEMS } from "@/lib/content";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Najczęstsze pytania · Roman Matviy" },
      { name: "description", content: "Odpowiedzi na pytania o ceny, terminy, komunikację i współpracę z developerem freelancerem." },
      { property: "og:title", content: "FAQ — Roman Matviy" },
      { property: "og:description", content: "Wszystko, co warto wiedzieć przed rozpoczęciem projektu." },
      { property: "og:url", content: "https://devroman.pl/faq" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/faq" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-16">
        <FAQ />
        <Contact />
      </div>
    </SiteLayout>
  ),
});
