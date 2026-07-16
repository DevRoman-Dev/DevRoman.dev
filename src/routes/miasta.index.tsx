import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CITIES } from "@/lib/cities";

export const Route = createFileRoute("/miasta/")({
  head: () => ({
    meta: [
      { title: "Zasięg działania — Tworzenie stron internetowych Polska · DevRoman" },
      {
        name: "description",
        content: "Zobacz listę miast w Polsce, w których realizuję usługi programistyczne, tworzę strony internetowe i sklepy e-commerce. Pracuję zdalnie dla firm z całej Polski.",
      },
    ],
  }),
  component: CitiesIndexPage,
});

function CitiesIndexPage() {
  return (
    <SiteLayout>
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Lokalizacje</SectionLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Zasięg działania w Polsce
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70 mb-16">
            Na co dzień pracuję zdalnie, wspierając firmy z największych polskich miast. Niezależnie od tego, gdzie mieści się Twoja firma, zapewniam sprawną komunikację i najwyższą jakość usług programistycznych.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to="/miasta/$miasto"
                params={{ miasto: c.slug }}
                className="group p-8 rounded-3xl border border-hairline bg-surface/30 hover:bg-surface hover:border-accent/40 transition-colors flex flex-col"
              >
                <div className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {c.name}
                </div>
                <div className="text-sm text-foreground/50 mb-6">
                  {c.population} mieszkańców · {c.distance}
                </div>
                <div className="text-accent text-sm font-bold uppercase tracking-wider mt-auto group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Zobacz ofertę <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
