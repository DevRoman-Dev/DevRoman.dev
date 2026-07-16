import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/sections/Contact";
import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-posts";

const BASE = "https://devroman.pl";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    // 301 Redirects dla starych adresów URL
    if (
      params.slug === "prestashop-vs-woocommerce" ||
      params.slug === "prestashop-czy-woocommerce-co-wybrac-w-2026"
    ) {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: "prestashop-czy-woocommerce-co-wybrac" },
        statusCode: 301,
      });
    }
    if (params.slug === "top-10-seo-trendow-2026") {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: "top-10-seo-trendow" },
        statusCode: 301,
      });
    }
    if (params.slug === "ile-kosztuje-sklep-prestashop-w-2026") {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: "ile-kosztuje-sklep-prestashop" },
        statusCode: 301,
      });
    }
    if (params.slug === "rest-api-co-to-jest") {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: "rest-api-co-to-jest-i-dlaczego-sklep-go-potrzebuje" },
        statusCode: 301,
      });
    }
    if (params.slug === "crm-na-zamowienie-vs-gotowy") {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: "crm-na-zamowienie-vs-gotowe-rozwiazanie" },
        statusCode: 301,
      });
    }
    if (params.slug === "laravel-vs-wordpress") {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: "laravel-vs-wordpress-co-wybrac-dla-firmy" },
        statusCode: 301,
      });
    }

    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Artykuł nie znaleziony · devroman" }],
      };
    }
    const url = `${BASE}/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} · devroman` },
        { name: "description", content: post.description },
        { name: "keywords", content: post.keywords.join(", ") },
        { name: "author", content: "Roman Matviy" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: url },
        { property: "og:image", content: post.image ? `${BASE}${post.image}` : "https://devroman.pl/og-image.png" },
        { property: "article:published_time", content: post.datePublished },
        { property: "article:author", content: "Roman Matviy" },
        { property: "article:section", content: post.tag },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: post.image ? `${BASE}${post.image}` : "https://devroman.pl/og-image.png" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            author: {
              "@type": "Person",
              name: "Roman Matviy",
              url: BASE,
            },
            publisher: {
              "@type": "Person",
              name: "Roman Matviy",
              url: BASE,
            },
            datePublished: post.datePublished,
            dateModified: post.datePublished,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: post.keywords.join(", "),
            inLanguage: "pl-PL",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Start", item: `${BASE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
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
            Artykuł nie znaleziony
          </h2>
          <p className="text-foreground/60 mb-10">
            Sprawdź adres lub wróć do listy artykułów.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:brightness-110 transition-all"
            >
              ← Wszystkie artykuły
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
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Coś poszło nie tak</h1>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-full bg-accent text-accent-foreground"
        >
          Spróbuj ponownie
        </button>
      </div>
    </SiteLayout>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: import("@/lib/blog-posts").BlogPost };
  const related = post.related
    .map((slug: string) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <SiteLayout>
      <article className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <Link to="/" className="hover:text-accent">Start</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-accent">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/60">{post.tag}</span>
          </nav>

          {/* Tag */}
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-accent px-2 py-1 border border-accent/40 rounded mb-6">
            {post.tag}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {post.title}
          </h1>
          
          {/* Main Image */}
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-3xl border border-hairline mb-8 bg-surface">
            <img 
              src={post.image || `https://picsum.photos/seed/${post.slug}/1200/630`} 
              onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${post.slug}/1200/630`; }}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50 mb-12 pb-12 border-b border-hairline">
            <span>📅 {post.date}</span>
            <span>⏱ {post.read}</span>
            <span>✍️ Roman Matviy</span>
          </div>

          {/* Intro */}
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 font-light">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {post.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  {s.h2}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="space-y-2 mt-4 mb-4">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground/80 leading-relaxed">
                        <span className="text-accent shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 p-8 rounded-3xl border border-hairline bg-surface">
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4">Podsumowanie</h2>
            <p className="text-foreground/80 leading-relaxed">{post.conclusion}</p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-3xl border border-accent/40 bg-gradient-to-br from-surface to-background text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
              Masz projekt?
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              Porozmawiajmy o Twoim sklepie lub aplikacji
            </h3>
            <p className="text-foreground/60 mb-6 max-w-lg mx-auto">
              Bezpłatna wycena w 24h. Bez zobowiązań i ukrytych kosztów.
            </p>
            <Link
              to="/kontakt"
              className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Napisz do mnie →
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Powiązane artykuły
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="group rounded-2xl border border-hairline bg-background hover:bg-surface hover:border-accent/40 transition-colors flex flex-col overflow-hidden"
                  >
                    {r.image && (
                      <div className="w-full h-32 overflow-hidden bg-surface/50 border-b border-hairline">
                        <img 
                          src={r.image}
                          onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${r.slug}/600/400`; }}
                          alt={`Powiązany artykuł: ${r.title}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {r.tag}
                      </span>
                      <h4 className="font-display text-base font-bold tracking-tight group-hover:text-accent transition-colors">
                        {r.title}
                      </h4>
                      <span className="mt-auto text-xs text-foreground/40 pt-2">⏱ {r.read}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-16 text-center">
            <Link to="/blog" className="text-accent hover:opacity-80 font-medium">
              ← Wszystkie artykuły
            </Link>
          </div>
        </div>
      </article>
      <Contact />
    </SiteLayout>
  );
}
