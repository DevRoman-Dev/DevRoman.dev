import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:grid md:grid-cols-[1fr_2fr_1fr] md:items-center text-center md:text-left">
        <div className="font-display text-2xl font-extrabold tracking-tighter">
          DevRoman<span className="text-accent">.pl</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
          <Link to="/o-mnie" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent font-bold" }}>O mnie</Link>
          <Link to="/uslugi" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent font-bold" }}>Usługi</Link>
          <Link to="/portfolio" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent font-bold" }}>Portfolio</Link>
          <Link to="/miasta" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent font-bold" }}>Zasięg</Link>
          <Link to="/cennik" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent font-bold" }}>Cennik</Link>
          <Link to="/kontakt" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent font-bold" }}>Kontakt</Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
          <a href="https://t.me/RomanMatviy" target="_blank" rel="noreferrer" className="hover:text-accent">Telegram</a>
          <a href="https://linkedin.com/in/MatviyRoman" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="https://github.com/MatviyRoman" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-hairline text-[10px] uppercase tracking-[0.3em] text-foreground/30 flex flex-col md:flex-row justify-between gap-2 text-center md:text-left">
        <span>© {new Date().getFullYear()} Roman Matviy — Full-stack Developer</span>
        <span>Lwów, Ukraina · Obsługa po polsku 🇵🇱</span>
      </div>
    </footer>
  );
}
