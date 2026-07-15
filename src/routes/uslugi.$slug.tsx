import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Contact } from "@/components/sections/Contact";
import { SERVICES_DETAIL, getServiceBySlug } from "@/lib/services-detail";

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Usługa nie znaleziona · DevRoman.pl" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const url = `https://devroman.pl/uslugi/${params.slug}`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDesc,
      provider: {
        "@type": "Person",
        name: "Roman Matviy",
        url: "https://devroman.pl",
      },
      areaServed: "PL",
      serviceType: service.title,
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "PLN",
        url,
      },
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDesc },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDesc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "https://devroman.pl/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: service.metaTitle },
        { name: "twitter:description", content: service.metaDesc },
        { name: "twitter:image", content: "https://devroman.pl/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(jsonLd) },
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <SectionLabel>404</SectionLabel>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          Nie znalazłem takiej usługi
        </h1>
        <p className="mt-6 text-foreground/60">
          Sprawdź pełną listę usług i wybierz interesujący Cię obszar.
        </p>
        <Link
          to="/uslugi"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold"
        >
          ← Wszystkie usługi
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl font-extrabold">Coś poszło nie tak</h1>
        <button
          onClick={() => reset()}
          className="mt-6 px-6 py-3 rounded-full border border-hairline hover:border-accent"
        >
          Spróbuj ponownie
        </button>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug)!;
  const related = SERVICES_DETAIL.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <div className="pt-16">
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <nav className="mb-8 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-foreground/50">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/uslugi" className="hover:text-accent">Usługi</Link>
              <span>/</span>
              <span className="text-foreground/80">{service.title}</span>
            </nav>
            <SectionLabel>Usługa {service.n}</SectionLabel>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-foreground/50 uppercase tracking-[0.18em]">Cena</span>
                <span className="font-display text-2xl font-extrabold text-accent">{service.price}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-foreground/50 uppercase tracking-[0.18em]">Czas</span>
                <span className="font-display text-lg font-bold">{service.timeline}</span>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-accent text-accent-foreground font-bold glow-accent"
              >
                Poproś o wycenę →
              </Link>
              <Link
                to="/cennik"
                className="inline-flex items-center justify-center h-14 px-8 rounded-xl border border-hairline hover:border-accent transition-colors font-bold"
              >
                Zobacz cennik
              </Link>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="px-6 py-16 bg-surface/30 border-y border-hairline">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-foreground/75 leading-relaxed max-w-3xl">
              {service.desc}
            </p>
          </div>
        </section>

        {/* For who */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Dla kogo</SectionLabel>
            <h2 className="mt-4 mb-10 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Kto korzysta z tej usługi
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {service.forWho.map((item) => (
                <li key={item} className="flex gap-3 p-5 rounded-2xl border border-hairline">
                  <span className="text-accent shrink-0">→</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section className="px-6 py-20 bg-surface/30 border-y border-hairline">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Zakres</SectionLabel>
            <h2 className="mt-4 mb-10 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Co dostajesz w cenie
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-1">✓</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Stack</SectionLabel>
            <h2 className="mt-4 mb-8 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Technologie
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-hairline text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-20 bg-surface/30 border-y border-hairline">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Proces</SectionLabel>
            <h2 className="mt-4 mb-10 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Jak wygląda współpraca
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {service.process.map((step, idx) => (
                <div key={step.title} className="p-6 rounded-2xl border border-hairline bg-background">
                  <div className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
                    Etap {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 mb-10 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Częste pytania
            </h2>
            <div className="space-y-4">
              {service.faq.map((f) => (
                <details
                  key={f.q}
                  className="group p-6 rounded-2xl border border-hairline"
                >
                  <summary className="cursor-pointer font-display text-lg font-bold flex justify-between items-start gap-4">
                    <span>{f.q}</span>
                    <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="px-6 py-20 bg-surface/30 border-y border-hairline">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Pozostałe usługi</SectionLabel>
            <h2 className="mt-4 mb-10 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
              Sprawdź też
            </h2>
            <div className="grid gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/uslugi/$slug"
                  params={{ slug: r.slug }}
                  className="group bg-background p-8 hover:bg-surface transition-colors"
                >
                  <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">{r.n}</span>
                  <h3 className="mt-4 font-display text-xl font-bold">{r.title}</h3>
                  <p className="mt-3 text-sm text-foreground/60 leading-relaxed line-clamp-3">{r.intro}</p>
                  <span className="mt-4 inline-block text-sm text-accent font-bold">Zobacz →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </SiteLayout>
  );
}
