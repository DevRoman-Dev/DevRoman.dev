import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { BLOG_POSTS } from "@/lib/blog-posts";

export function BlogPreview() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Wiedza i porady</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              Blog dla firm
            </h2>
          </div>
          <p className="max-w-md text-foreground/60">
            Praktyczne artykuły o e-commerce, tworzeniu aplikacji i wyborze technologii — bez zbędnego żargonu.
          </p>
        </div>

        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group block mb-6 rounded-3xl border border-hairline bg-gradient-to-br from-surface to-background p-8 md:p-12 hover:border-accent/40 transition-colors"
        >
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent px-2 py-1 border border-accent/40 rounded">Najnowszy artykuł</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">{featured.tag}</span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl group-hover:text-accent transition-colors">
            {featured.title}
          </h3>
          <p className="text-foreground/60 mb-6 max-w-2xl">{featured.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
            <span>📅 {featured.date}</span>
            <span>⏱ {featured.read}</span>
            <span className="ml-auto text-accent group-hover:translate-x-1 transition-transform">Czytaj →</span>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((b) => (
            <Link
              key={b.slug}
              to="/blog/$slug"
              params={{ slug: b.slug }}
              className="group p-6 rounded-2xl border border-hairline bg-background hover:bg-surface hover:border-accent/40 transition-colors flex flex-col gap-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{b.tag}</span>
              <h4 className="font-display text-lg font-bold tracking-tight group-hover:text-accent transition-colors">{b.title}</h4>
              <p className="text-sm text-foreground/60 line-clamp-2">{b.description}</p>
              <div className="mt-auto flex items-center gap-3 text-xs text-foreground/40">
                <span>📅 {b.date}</span>
                <span>⏱ {b.read}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
