import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/sections/Contact";
import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-posts";

const BASE = "https://devroman.pl";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
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
        { property: "og:image", content: "https://devroman.pl/og-image.png" },
        { property: "article:published_time", content: post.datePublished },
        { property: "article:author", content: "Roman Matviy" },
        { property: "article:section", content: post.tag },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: "https://devroman.pl/og-image.png" },
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
      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Artykuł nie znaleziony
        </h1>
        <p className="text-foreground/60 mb-8">
          Sprawdź adres lub wróć do listy artykułów.
        </p>
        <Link
          to="/blog"
          className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
        >
          ← Wszystkie artykuły
        </Link>
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
                    className="group p-6 rounded-2xl border border-hairline bg-background hover:bg-surface hover:border-accent/40 transition-colors flex flex-col gap-3"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {r.tag}
                    </span>
                    <h4 className="font-display text-base font-bold tracking-tight group-hover:text-accent transition-colors">
                      {r.title}
                    </h4>
                    <span className="mt-auto text-xs text-foreground/40">⏱ {r.read}</span>
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
