import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CITIES } from "@/lib/cities";
import { SERVICES_DETAIL } from "@/lib/services-detail";
import { ContactForm } from "@/components/site/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SERVICE_ICONS: Record<string, string> = {
  "strony-internetowe": "🌐",
  "sklepy-prestashop-woocommerce": "🛒",
  "aplikacje-laravel": "⚙️",
  "utrzymanie-projektow": "🛡️",
  "integracje-api": "🔗",
  "wsparcie-konsultacje": "💬",
};

export const Route = createFileRoute("/miasta/$miasto")({
  loader: ({ params }) => {
    const city = CITIES.find((c) => c.slug === params.miasto);
    if (!city) throw new Error("City not found");
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Miasto nie znalezione" }] };
    const { city } = loaderData;
    
    // Schema Markup for Local SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Tworzenie stron internetowych i aplikacji webowych — ${city.name}`,
      "provider": {
        "@type": "Person",
        "name": "Roman Matviy",
        "url": "https://devroman.pl",
        "jobTitle": "Full-stack Developer"
      },
      "areaServed": {
        "@type": "City",
        "name": city.name
      },
      "serviceType": ["Web Development", "E-commerce Development", "Backend Development"],
      "url": `https://devroman.pl/miasta/${city.slug}`
    };

    return {
      meta: [
        { title: `Tworzenie stron internetowych i aplikacji — ${city.name} · DevRoman` },
        {
          name: "description",
          content: `Szukasz sprawdzonego programisty ${city.nameLoc}? Tworzę strony internetowe, sklepy PrestaShop/WooCommerce i systemy na zamówienie (Laravel). Zobacz ofertę!`,
        },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(schema) },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto w-full text-center">
          <div className="font-mono text-[13px] uppercase tracking-[0.25em] text-accent mb-6 animate-pulse">
            Błąd 404
          </div>
          <h1 className="font-display text-7xl md:text-8xl font-extrabold tracking-tighter mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
            Nie znaleziono miasta
          </h2>
          <p className="text-foreground/60 mb-10">
            Prawdopodobnie wpisałeś zły adres. Zobacz listę miast, w których działam.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/miasta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:brightness-110 transition-all"
            >
              ← Zasięg działania
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline hover:border-accent/40 transition-colors"
            >
              Strona główna
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  ),
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface/30 -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel>Freelancer / Programista</SectionLabel>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-balance">
            Tworzenie stron internetowych <br/> i aplikacji — <span className="text-accent">{city.name}</span>
          </h1>
          <p className="mt-8 text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Potrzebujesz stabilnego systemu IT, nowoczesnej strony lub sklepu e-commerce dla swojej firmy {city.nameLoc}? Wspieram lokalne biznesy dostarczając kod najwyższej jakości.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl border border-hairline bg-surface/50 text-lg leading-relaxed shadow-lg">
            <p className="text-xl md:text-2xl font-medium mb-6">Dlaczego warto podjąć współpracę?</p>
            <p className="text-foreground/80">{city.intro}</p>
          </div>
        </div>
      </section>

      {/* Services for City */}
      <section className="py-24 px-6 bg-surface/20 border-y border-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Moje specjalizacje</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              W czym mogę pomóc Twojej firmie z {city.nameGen}?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DETAIL.map((s) => (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group p-8 rounded-3xl border border-hairline bg-background hover:bg-surface hover:border-accent/40 transition-colors flex flex-col"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">
                  {SERVICE_ICONS[s.slug] ?? "💡"}
                </div>
                <h3 className="font-display text-xl font-bold mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-grow">{s.intro}</p>
                <div className="text-xs font-mono uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 self-start px-3 py-1.5 rounded-full">
                  {s.price}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Local */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>FAQ ({city.name})</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight mb-12">
            Częste pytania od klientów
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {city.faqLocal.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-hairline bg-surface/30 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-surface border-y border-hairline">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Gotowy na rozmowę o Twoim projekcie {city.nameLoc}?
            </h2>
            <p className="text-lg text-foreground/60">
              Zostaw kontakt do siebie lub opisz krótko, czego potrzebujesz. Odpowiadam zazwyczaj w kilka godzin.
            </p>
          </div>
          <div className="bg-background rounded-3xl p-8 border border-hairline shadow-2xl">
            {/* Przekazujemy miasto w wiadomości startowej dla wygody użytkownika */}
            <ContactForm initialMessage={`Cześć, szukam programisty do projektu dla firmy z ${city.nameGen}. Chciałbym zapytać o...`} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
