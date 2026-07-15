import { ContactForm } from "@/components/site/ContactForm";

export function Contact() {
  return (
    <section id="kontakt" className="px-6 py-24 md:py-32 border-t border-hairline">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-10 text-balance">
              Opowiedz mi <br />
              <span className="italic text-accent underline decoration-2 decoration-accent/40 underline-offset-8">
                o swoim projekcie.
              </span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10 max-w-md">
              Szukasz programisty do jednorazowego projektu lub długoterminowej współpracy? Odpiszę w ciągu 24 godzin z wyceną lub pytaniami doprecyzowującymi. Bez zobowiązań.
            </p>

            <div className="space-y-3">
              {[
                { icon: "💬", label: "Telegram (preferowany)", value: "@RomanMatviy", href: "https://t.me/RomanMatviy" },
                { icon: "✉️", label: "E-mail", value: "contact@devroman.pl", href: "mailto:contact@devroman.pl" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/MatviyRoman", href: "https://linkedin.com/in/MatviyRoman" },
                { icon: "🐙", label: "GitHub", value: "github.com/MatviyRoman", href: "https://github.com/MatviyRoman" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-hairline hover:border-accent/40 hover:bg-surface transition-colors"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{c.label}</div>
                    <div className="font-mono text-sm group-hover:text-accent transition-colors">{c.value}</div>
                  </div>
                  <span className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
