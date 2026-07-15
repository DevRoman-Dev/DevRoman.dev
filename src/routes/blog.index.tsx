import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    return {
      q: typeof search.q === "string" ? search.q : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Blog — porady dla właścicieli firm · Roman Matviy" },
      { name: "description", content: "Praktyczne artykuły o e-commerce, Laravel, WordPress i wyborze technologii — bez zbędnego żargonu." },
      { property: "og:title", content: "Blog — Roman Matviy" },
      { property: "og:description", content: "PrestaShop vs WooCommerce, koszty sklepów, migracje, bezpieczeństwo i więcej." },
      { property: "og:url", content: "https://devroman.pl/blog" },
    ],
    links: [{ rel: "canonical", href: "https://devroman.pl/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { q } = Route.useSearch();
  return (
    <SiteLayout>
      <div className="pt-16">
        <BlogPreview searchQuery={q} showSearch={true} />
        <Contact />
      </div>
    </SiteLayout>
  );
}
