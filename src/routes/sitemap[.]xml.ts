import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SERVICES_DETAIL } from "@/lib/services-detail";
import { CITIES } from "@/lib/cities";

const BASE_URL = "https://devroman.pl";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/o-mnie", changefreq: "monthly", priority: "0.8" },
          { path: "/uslugi", changefreq: "monthly", priority: "0.9" },
          ...SERVICES_DETAIL.map((s) => ({
            path: `/uslugi/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/portfolio", changefreq: "monthly", priority: "0.9" },
          { path: "/cennik", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/kontakt", changefreq: "monthly", priority: "0.8" },
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.datePublished,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          { path: "/miasta", changefreq: "monthly", priority: "0.5" },
          ...CITIES.map((c) => ({
            path: `/miasta/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n${e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : ""}  </url>`
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
