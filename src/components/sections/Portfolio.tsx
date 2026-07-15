import { SectionLabel } from "@/components/site/SectionLabel";
import { PROJECTS } from "@/lib/content";

export function Portfolio({ limit }: { limit?: number } = {}) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section id="portfolio" className="px-6 py-24 md:py-32 bg-surface/30 border-y border-hairline">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Wybrane realizacje</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              Portfolio
            </h2>
          </div>
          <p className="max-w-md text-foreground/60">
            Przykłady projektów z różnych obszarów — od systemów backendowych po sklepy i narzędzia webowe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl border border-hairline bg-background p-8 hover:border-accent/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all pointer-events-none" />
              <div className="relative">
                <div className="aspect-[16/10] rounded-2xl border border-hairline mb-6 overflow-hidden bg-surface relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex items-end p-6 md:p-8">
                    <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground/10 group-hover:text-accent/30 transition-colors duration-500">
                      {p.title.split(' ')[0]}
                    </div>
                  </div>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">{p.tag}</div>
                <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-surface border border-hairline rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
