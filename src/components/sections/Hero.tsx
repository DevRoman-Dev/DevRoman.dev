import { Link } from "@tanstack/react-router";
import { STATS } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/3 -translate-y-1/2 w-[55vw] aspect-square bg-accent/15 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute left-[-20%] bottom-[-10%] w-[40vw] aspect-square bg-accent/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-accent/30 rounded-full bg-accent/5">
          <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
          <span className="text-accent text-[11px] font-bold uppercase tracking-[0.2em]">
            Dostępny dla nowych projektów
          </span>
        </div>

        <h1 className="animate-fade-up [animation-delay:80ms] font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] font-extrabold tracking-tight mb-8 text-balance">
          Full-stack developer<br />
          <span className="text-stroke">Laravel</span> · <span className="text-accent">WordPress</span><br />
          <span>PrestaShop</span> <span className="italic font-light text-foreground/60">do Twoich projektów.</span>
        </h1>

        <p className="animate-fade-up [animation-delay:160ms] max-w-2xl text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed text-pretty">
          Roman Matviy — programista z <span className="text-foreground">ponad 7-letnim doświadczeniem komercyjnym</span>.
          Aplikacje webowe, sklepy internetowe i systemy backendowe.
          Pracuję z klientami z Polski i Europy.
        </p>

        <div className="animate-fade-up [animation-delay:240ms] flex flex-wrap gap-4 mb-16">
          <a
            href="https://t.me/RomanMatviy"
            target="_blank"
            rel="noreferrer"
            className="h-14 px-8 bg-accent text-accent-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center gap-2 glow-accent"
          >
            📩 Napisz na Telegramie
          </a>
          <Link
            to="/kontakt"
            className="h-14 px-8 border border-foreground/20 hover:border-accent hover:bg-accent/5 transition-colors font-bold rounded-xl inline-flex items-center gap-2"
          >
            ✉️ Opisz projekt →
          </Link>
        </div>

        <div className="animate-fade-up [animation-delay:320ms] grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-8">
              <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter">
                {s.value}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
