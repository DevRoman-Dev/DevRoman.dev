import { SectionLabel } from "@/components/site/SectionLabel";
import { Link } from "@tanstack/react-router";
import { Zap, MessageSquare, DollarSign, CheckCircle, ShieldCheck, Heart } from "lucide-react";

const REASONS = [
  {
    icon: MessageSquare,
    title: "Bezpośredni kontakt z programistą",
    desc: "Rozmawiasz bezpośrednio ze mną — bez managerów, pośredników i zniekształceń zadania. Wszystkie decyzje podejmuję i realizuję osobiście, co daje jasny wpływ na rezultat i szybsze wykonanie.",
  },
  {
    icon: DollarSign,
    title: "Płacisz tylko za pracę — bez marży agencji",
    desc: "Pracuję samodzielnie, więc pieniądze idą tylko do mnie. Nie opłacasz biura, managerów ani zbędnych procesów. To samo zadanie w agencji kosztuje 2-3 razy więcej.",
  },
  {
    icon: CheckCircle,
    title: "Praca doprowadzana do rezultatu",
    desc: "Projekt nie jest zamykany, dopóki nie działa poprawnie i nie odpowiada uzgodnionemu rezultatowi. Nie zostawiam klienta z półproduktem.",
  },
  {
    icon: ShieldCheck,
    title: "Klient jako tester — albo moja żona",
    desc: "Testerem może być sam klient, co przyspiesza weryfikację. Jeśli nie ma czasu — projekt testuje moja żona, więc każda funkcja jest sprawdzona przed oddaniem.",
  },
  {
    icon: Zap,
    title: "Szybkość i elastyczność",
    desc: "Bez kolejek w agencji, bez czekania na kolejne spotkania. Decyzje podejmuję natychmiast, zmiany wprowadzam od ręki. Projekt idzie do przodu każdego dnia.",
  },
  {
    icon: Heart,
    title: "Praca na reputację, nie na przepustowość",
    desc: "Zależy mi na powracających klientach, rekomendacjach i długoterminowej współpracy. Każdy projekt to moja wizytówka — dlatego dbam o jakość, nie o ilość.",
  },
];

export function WhyMe() {
  return (
    <section className="px-6 py-24 md:py-32 bg-surface/30 border-y border-hairline">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Dlaczego ja</SectionLabel>
        <h2 className="mt-4 mb-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
          Dlaczego warto ze mną <span className="text-accent">pracować</span>
        </h2>
        <p className="mb-16 max-w-2xl text-foreground/60 text-lg">
          Podejście, które oszczędza Twój czas, pieniądze i nerwy — bez agencji, bez pośredników, bez ukrytych kosztów.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="group relative bg-background border border-hairline rounded-2xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center mb-4">
                <r.icon className="size-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 tracking-tight">
                {r.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/kontakt"
            className="h-14 px-8 bg-accent text-accent-foreground font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center gap-2 glow-accent"
          >
            Poproś o wycenę →
          </Link>
          <Link
            to="/kontakt"
            className="h-14 px-8 border border-foreground/20 hover:border-accent hover:bg-accent/5 transition-colors font-bold rounded-xl inline-flex items-center gap-2"
          >
            Umów rozmowę
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/50">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
            Odpowiadam osobiście w ciągu 24h
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
            Wycena bezpłatna i bez zobowiązań
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
            Praca po fakturze — formalnie i bezpiecznie
          </span>
        </div>
      </div>
    </section>
  );
}
