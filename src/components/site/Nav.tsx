import { Link } from "@tanstack/react-router";

const links = [
  { to: "/o-mnie", label: "O mnie" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/cennik", label: "Cennik" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-hairline">
      <div className="max-w-7xl mx-auto h-16 px-[15px] md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold tracking-tighter text-lg">
          <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
          DevRoman<span className="text-accent">.pl</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/60">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-[0.18em] hover:brightness-110 transition-all"
        >
          Zacznij projekt →
        </Link>
      </div>
    </nav>
  );
}
