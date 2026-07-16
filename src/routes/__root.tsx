import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SERVICES_DETAIL } from "@/lib/services-detail";

const SERVICE_ICONS: Record<string, string> = {
  "strony-internetowe": "🌐",
  "sklepy-prestashop-woocommerce": "🛒",
  "aplikacje-laravel": "⚙️",
  "utrzymanie-projektow": "🛡️",
  "integracje-api": "🔗",
  "wsparcie-konsultacje": "💬",
};

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="font-mono text-[14px] uppercase tracking-[0.25em] text-accent mb-6 animate-pulse">
            Błąd 404
          </div>
          <h1 className="font-display text-7xl md:text-9xl font-extrabold tracking-tighter text-foreground mb-6 glow-accent">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ups! Zabłądziłeś w sieci
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12">
            Strona, której szukasz, nie istnieje, została przeniesiona lub adres URL jest błędny.
          </p>

          <div className="mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold hover:brightness-110 transition-all glow-accent"
            >
              Wróć na stronę główną
            </Link>
          </div>

          <div className="text-left border-t border-hairline pt-12">
            <h3 className="font-display text-2xl font-bold tracking-tight mb-8 text-center">
              Może interesuje Cię jedna z moich usług?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {SERVICES_DETAIL.map((s) => (
                <Link
                  key={s.slug}
                  to="/uslugi/$slug"
                  params={{ slug: s.slug }}
                  className="group p-6 rounded-2xl border border-hairline bg-surface/30 hover:bg-surface hover:border-accent/40 transition-colors flex flex-col"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">
                    {SERVICE_ICONS[s.slug] ?? "💡"}
                  </div>
                  <div className="font-bold mb-2 group-hover:text-accent transition-colors text-sm">{s.title}</div>
                  <div className="text-xs text-foreground/50 line-clamp-2 mt-auto">{s.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roman Matviy",
  url: "https://devroman.pl",
  jobTitle: "Full-stack Developer",
  description:
    "Full-stack developer z 7+ lat doświadczenia. Laravel, PHP, Vue.js, PrestaShop, WordPress. Aplikacje, sklepy i systemy backendowe.",
  knowsLanguage: ["pl", "en", "uk"],
  sameAs: [
    "https://t.me/RomanMatviy",
    "https://linkedin.com/in/MatviyRoman",
    "https://github.com/MatviyRoman",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "devroman — Roman Matviy",
  url: "https://devroman.pl",
  inLanguage: "pl-PL",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://devroman.pl/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Roman Matviy — Full-stack Developer · Laravel, PrestaShop, WordPress" },
      {
        name: "description",
        content:
          "Full-stack developer z 7+ lat doświadczenia. Laravel, PHP, Vue.js, PrestaShop i WordPress. Aplikacje, sklepy i systemy backendowe dla firm z Polski i Europy.",
      },
      { name: "author", content: "Roman Matviy" },
      { property: "og:site_name", content: "devroman — Roman Matviy" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:image", content: "https://devroman.pl/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://devroman.pl/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORGANIZATION_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
