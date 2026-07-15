import { SectionLabel } from "@/components/site/SectionLabel";
import { TESTIMONIALS } from "@/lib/content";
import { Link } from "@tanstack/react-router";

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Opinie i zaufanie</SectionLabel>
        <h2 className="mt-4 mb-16 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          Co mówią klienci
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-surface rounded-3xl p-8 border border-hairline flex flex-col gap-6">
              <div className="text-accent text-lg tracking-widest">★★★★★</div>
              <blockquote className="text-foreground/80 leading-relaxed italic">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-hairline">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-foreground/50 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 bg-surface border border-hairline rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
              Chcesz dołączyć do zadowolonych klientów?
            </h3>
            <p className="mt-2 text-foreground/60">
              Bezpłatna wycena w 24 h — bez zobowiązań.
            </p>
          </div>
          <Link
            to="/kontakt"
            className="h-14 px-8 bg-accent text-accent-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center gap-2 glow-accent"
          >
            Poproś o wycenę →
          </Link>
        </div>
      </div>
    </section>
  );
}
