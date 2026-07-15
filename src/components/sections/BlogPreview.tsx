import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { BLOG_POSTS } from "@/lib/blog-posts";

export function BlogPreview({ searchQuery = "", showSearch = false }: { searchQuery?: string; showSearch?: boolean }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(searchQuery);

  // Sync input value if URL changes from outside
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/blog",
      search: inputValue ? { q: inputValue } : {},
    });
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (!searchQuery) return true;
    const term = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.description.toLowerCase().includes(term) ||
      post.keywords.some((k) => k.toLowerCase().includes(term))
    );
  });

  // Limit to 3 posts on homepage if showSearch is false
  const postsToShow = showSearch ? filteredPosts : filteredPosts.slice(0, 4);
  const [featured, ...rest] = postsToShow;

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
          <div className="max-w-md w-full">
            <p className="text-foreground/60 mb-4">
              Praktyczne artykuły o e-commerce, tworzeniu aplikacji i wyborze technologii — bez zbędnego żargonu.
            </p>
            {showSearch && (
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm"
                />
                <button type="submit" className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold text-sm hover:brightness-110 transition-all glow-accent">
                  Szukaj
                </button>
              </form>
            )}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 border border-hairline rounded-3xl bg-surface/30">
            <h3 className="font-display text-2xl font-bold mb-2">Brak wyników</h3>
            <p className="text-foreground/60">Nie znaleźliśmy artykułów dla "{searchQuery}".</p>
          </div>
        ) : (
          <>
            {featured && (
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group block mb-6 rounded-3xl border border-hairline bg-gradient-to-br from-surface to-background p-8 md:p-12 hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-wrap gap-3 items-center mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent px-2 py-1 border border-accent/40 rounded">
                    {searchQuery ? "Najlepszy wynik" : "Najnowszy artykuł"}
                  </span>
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
            )}

            {rest.length > 0 && (
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
            )}
          </>
        )}
      </div>
    </section>
  );
}
