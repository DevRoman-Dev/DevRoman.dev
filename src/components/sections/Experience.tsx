import { SectionLabel } from "@/components/site/SectionLabel";
import { EXPERIENCE } from "@/lib/content";

export function Experience() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Historia zawodowa</SectionLabel>
        <h2 className="mt-4 mb-16 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          Doświadczenie
        </h2>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-hairline" />
          <ul className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <li
                key={e.company}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 size-2 rounded-full bg-accent ring-4 ring-background mt-2" />
                <div className="pl-10 md:pl-0 md:pr-12 md:text-right">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-2">{e.company}</div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">{e.role}</h3>
                </div>
                <div className="pl-10 md:pl-12 text-foreground/60 leading-relaxed">
                  {e.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
