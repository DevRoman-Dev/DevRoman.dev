import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { SERVICES_DETAIL } from "@/lib/services-detail";

export function Services() {
  return (
    <section id="uslugi" className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Co robię</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              Usługi
            </h2>
          </div>
          <p className="max-w-md text-foreground/60">
            Kompleksowa obsługa — od prostej strony firmowej po rozbudowane systemy backendowe i integracje z zewnętrznymi API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
          {SERVICES_DETAIL.map((s) => (
            <Link
              key={s.n}
              to="/uslugi/$slug"
              params={{ slug: s.slug }}
              className="group bg-background p-8 md:p-10 hover:bg-surface transition-colors relative"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">{s.n}</span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed line-clamp-3">{s.desc}</p>
              <p className="mt-4 font-display text-lg font-extrabold text-accent">{s.price}</p>
              <span className="mt-4 inline-block text-xs font-mono uppercase tracking-[0.18em] text-foreground/50 group-hover:text-accent transition-colors">
                Szczegóły →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
