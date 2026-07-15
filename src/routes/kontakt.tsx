import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Opowiedz mi o swoim projekcie · Roman Matviy" },
      { name: "description", content: "Napisz na Telegramie lub przez formularz. Odpowiadam w ciągu 24h z wyceną lub pytaniami doprecyzowującymi." },
      { property: "og:title", content: "Kontakt — Roman Matviy" },
      { property: "og:description", content: "Telegram, e-mail, LinkedIn, GitHub oraz formularz kontaktowy." },
      { property: "og:url", content: "https://devroman.pl/kontakt" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/kontakt" }],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-16">
        <Contact />
      </div>
    </SiteLayout>
  ),
});
