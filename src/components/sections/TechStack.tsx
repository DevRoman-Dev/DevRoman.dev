import { SectionLabel } from "@/components/site/SectionLabel";
import { TECH_GROUPS } from "@/lib/content";

export function TechStack() {
  const marquee = TECH_GROUPS.flatMap((g) => g.items);
  return (
    <section className="py-24 md:py-32 border-y border-hairline bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <SectionLabel>Stack technologiczny</SectionLabel>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          Technologie i narzędzia
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/60">
          Zestaw sprawdzonych technologii dobrany tak, żeby Twój projekt działał szybko, był łatwy w rozbudowie i prosty w utrzymaniu.
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden mb-16 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex gap-12 animate-marquee w-max">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground/15 hover:text-accent transition-colors whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_GROUPS.map((g) => (
          <div key={g.title} className="border-l-2 border-accent/40 pl-5">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-4">{g.title}</h4>
            <ul className="space-y-2 text-sm">
              {g.items.map((i) => (
                <li key={i} className="text-foreground/80">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
