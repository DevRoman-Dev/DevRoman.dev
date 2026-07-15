import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Contact } from "@/components/sections/Contact";

const PACKAGES = [
  {
    name: "Strona WWW / Landing",
    price: "2 000 – 6 000 zł",
    timeline: "1–2 tygodnie",
    desc: "WordPress lub statyczny landing. Idealne dla firm usługowych, portfolio, oferty B2B.",
    includes: [
      "Projekt UI dopasowany do marki",
      "Responsywność (mobile / tablet / desktop)",
      "Podstawowe SEO + integracja z Google Analytics",
      "Formularz kontaktowy + integracja z e-mailem",
      "Panel CMS do samodzielnej edycji treści",
    ],
    badge: null as string | null,
  },
  {
    name: "Sklep PrestaShop / WooCommerce",
    price: "6 000 – 20 000 zł",
    timeline: "4–10 tygodni",
    desc: "Pełne wdrożenie sklepu z płatnościami, kurierami i integracjami. Migracje również w cenie.",
    includes: [
      "Szablon dopasowany do marki + UX checkoutu",
      "Płatności (Stripe / PayU / Przelewy24 / BLIK)",
      "Integracje kurierskie (InPost, DPD, DHL)",
      "Import produktów / migracja z innego sklepu",
      "Konfiguracja podatków, faktur, e-mail marketingu",
      "Szkolenie i dokumentacja dla zespołu",
    ],
    badge: "Najczęściej wybierane" as string | null,
  },
  {
    name: "Aplikacja webowa Laravel",
    price: "od 8 000 zł",
    timeline: "6–16 tygodni",
    desc: "Dedykowane systemy: CRM, panele klienta, kalendarze, REST API, automatyzacje procesów.",
    includes: [
      "Analiza wymagań + architektura systemu",
      "Backend Laravel + baza danych",
      "Panel admina (Filament / Livewire / Vue)",
      "REST API + dokumentacja",
      "Autoryzacja, role, uprawnienia",
      "Wdrożenie produkcyjne + monitoring",
    ],
    badge: null as string | null,
  },
];

const HOURLY = [
  { label: "Stawka godzinowa (rozwój / poprawki)", price: "120 – 180 zł / h" },
  { label: "Audyt kodu lub wydajności", price: "od 800 zł" },
  { label: "Abonament utrzymaniowy", price: "od 600 zł / mies." },
  { label: "Konsultacja techniczna (1h online)", price: "200 zł" },
];

const PRICING_JSONLD = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  name: "Cennik usług — Roman Matviy",
  description:
    "Orientacyjne ceny projektów WordPress, PrestaShop, WooCommerce i Laravel.",
  priceCurrency: "PLN",
};

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik — ile kosztuje sklep, strona, aplikacja · Roman Matviy" },
      {
        name: "description",
        content:
          "Orientacyjny cennik: strona WordPress 2 000–6 000 zł, sklep PrestaShop 6 000–20 000 zł, aplikacja Laravel od 8 000 zł. Transparentne wyceny i terminy.",
      },
      { property: "og:title", content: "Cennik usług — Roman Matviy" },
      {
        property: "og:description",
        content:
          "Konkretne widełki cenowe dla stron, sklepów i aplikacji webowych. Bezpłatna wycena w 24h.",
      },
      { property: "og:url", content: "https://devroman.pl/cennik" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/cennik" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PRICING_JSONLD) },
    ],
  }),
  component: CennikPage,
});

function CennikPage() {
  return (
    <SiteLayout>
      <div className="pt-16">
        <section className="px-6 pt-20 pb-12 md:pt-28">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Cennik</SectionLabel>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
              Ile kosztuje projekt — konkretne widełki, bez ukrytych kosztów
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/60 leading-relaxed">
              Każdy projekt jest inny, ale poniżej znajdziesz realistyczne
              przedziały cenowe na podstawie 50+ zrealizowanych projektów. Po
              krótkim opisie Twojego pomysłu przygotowuję bezpłatną wycenę w
              ciągu 24 godzin.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div key={p.name} className="bg-background p-8 md:p-10 flex flex-col">
                {p.badge && (
                  <span className="self-start mb-4 inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.18em]">
                    {p.badge}
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  {p.name}
                </h2>
                <div className="mt-4 font-display text-3xl font-extrabold text-accent">
                  {p.price}
                </div>
                <div className="mt-1 font-mono text-xs text-foreground/50 uppercase tracking-[0.18em]">
                  {p.timeline}
                </div>
                <p className="mt-5 text-sm text-foreground/60 leading-relaxed">
                  {p.desc}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/75 flex-1">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-hairline hover:border-accent hover:text-accent text-[11px] font-bold uppercase tracking-[0.18em] transition-all"
                >
                  Wyceń projekt →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 bg-surface/30 border-y border-hairline">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Stawki godzinowe i utrzymanie</SectionLabel>
            <h2 className="mt-4 mb-10 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Inne formy współpracy
            </h2>
            <div className="grid gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden md:grid-cols-2">
              {HOURLY.map((h) => (
                <div
                  key={h.label}
                  className="bg-background p-6 flex items-center justify-between gap-4"
                >
                  <span className="text-sm text-foreground/75">{h.label}</span>
                  <span className="font-display text-lg font-extrabold text-accent whitespace-nowrap">
                    {h.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-foreground/55 leading-relaxed max-w-2xl">
              Standardowo 30–50% zaliczki na start, reszta po odbiorze lub w
              transzach. Wystawiam faktury VAT. Akceptuję przelewy bankowe i
              PayPal. Kod oraz dostępy są Twoje od pierwszego dnia projektu.
            </p>
          </div>
        </section>

        <Contact />
      </div>
    </SiteLayout>
  );
}
