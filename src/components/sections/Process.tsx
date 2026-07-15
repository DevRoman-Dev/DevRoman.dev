import { SectionLabel } from "@/components/site/SectionLabel";
import { PROCESS } from "@/lib/content";

export function Process() {
  return (
    <section id="proces" className="px-6 py-24 md:py-32 bg-surface/30 border-y border-hairline">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Proces współpracy</SectionLabel>
        <h2 className="mt-4 mb-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          Jak pracuję
        </h2>
        <p className="mb-16 max-w-2xl text-foreground/60">
          Przejrzysty i przewidywalny proces — od pierwszej rozmowy aż po wdrożenie i wsparcie po starcie projektu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="relative bg-background border border-hairline rounded-2xl p-6 hover:border-accent/40 transition-colors">
              {i < PROCESS.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 text-accent/40">→</span>
              )}
              <div className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-4">{p.n}</div>
              <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/60">
          💬 Komunikacja w projekcie po <span className="text-foreground font-bold">polsku</span>, <span className="text-foreground font-bold">angielsku</span> lub <span className="text-foreground font-bold">ukraińsku</span> — jak Ci wygodniej.
        </p>
      </div>
    </section>
  );
}
