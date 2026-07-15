import { SectionLabel } from "@/components/site/SectionLabel";

export function About() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div className="lg:sticky lg:top-32 self-start">
          <SectionLabel>Kim jestem</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
            Programista, który dostarcza <span className="text-accent">gotowe rozwiązania.</span>
          </h2>

          <div className="mt-10 p-6 rounded-3xl bg-surface border border-hairline">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-14 rounded-full bg-accent text-accent-foreground grid place-items-center font-display font-extrabold text-xl">RM</div>
              <div>
                <div className="font-bold">Roman Matviy</div>
                <div className="text-xs text-foreground/50">Full-Stack Developer · Lwów, Ukraina</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Laravel", "PHP", "Vue.js", "PrestaShop", "WordPress", "REST API", "MySQL", "Docker"].map((t) => (
                <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-background border border-hairline rounded">{t}</span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Dostępny na nowe zlecenia</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/70">
          <p>
            Jestem <span className="text-foreground">full-stack developerem z ponad 7-letnim stażem komercyjnym</span>. Mieszkam we Lwowie na Ukrainie i od lat współpracuję z klientami z Polski, Europy i rynku angielskojęzycznego.
          </p>
          <p>
            Specjalizuję się w <span className="text-foreground">backendzie opartym na Laravel i PHP</span> — buduję REST API, systemy zarządzania, panele administracyjne i integracje z zewnętrznymi usługami. W e-commerce znam <span className="text-foreground">PrestaShop, WordPress i WooCommerce</span> od podszewki.
          </p>
          <p>
            Od strony frontendowej pracuję z <span className="text-foreground">Vue.js, JavaScript i nowoczesnymi narzędziami</span> jak Vite czy TailwindCSS. Dbam o to, żeby strony były szybkie, responsywne i łatwe w utrzymaniu.
          </p>
          <p>
            Posiadam kilkanaście <span className="text-foreground">certyfikatów z PHP, SQL, JavaScript i PrestaShop</span>, ale przede wszystkim — projekty, które działają i przynoszą realne efekty.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              { icon: "⚙️", title: "Solidny backend", desc: "Laravel, PHP, Docker, REST API — wydajne i bezpieczne systemy serwerowe." },
              { icon: "🛒", title: "E-commerce", desc: "PrestaShop, WooCommerce, Thirty Bees — integracje, moduły, migracje danych." },
              { icon: "🎨", title: "Nowoczesny frontend", desc: "Vue.js, TailwindCSS, Vite — interfejsy, które wyglądają i działają." },
              { icon: "🤝", title: "Długoterminowa współpraca", desc: "Cenię stałych klientów. Komunikuję się sprawnie i dotrzymuję terminów." },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl border border-hairline bg-surface/50">
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="font-bold mb-1">{c.title}</div>
                <div className="text-sm text-foreground/60">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
