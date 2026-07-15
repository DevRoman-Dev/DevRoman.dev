import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-12 mt-24">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 items-center">
        <div className="font-display text-2xl font-extrabold tracking-tighter">
          DevRoman<span className="text-accent">.pl</span>
        </div>
        <div className="flex justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
          <Link to="/o-mnie" className="hover:text-accent">O mnie</Link>
          <Link to="/uslugi" className="hover:text-accent">Usługi</Link>
          <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
          <Link to="/cennik" className="hover:text-accent">Cennik</Link>
          <Link to="/kontakt" className="hover:text-accent">Kontakt</Link>
        </div>
        <div className="flex md:justify-end gap-6 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
          <a href="https://t.me/RomanMatviy" target="_blank" rel="noreferrer" className="hover:text-accent">Telegram</a>
          <a href="https://linkedin.com/in/MatviyRoman" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="https://github.com/MatviyRoman" target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-hairline text-[10px] uppercase tracking-[0.3em] text-foreground/30 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Roman Matviy — Full-stack Developer</span>
        <span>Lwów, Ukraina · Obsługa po polsku 🇵🇱</span>
      </div>
    </footer>
  );
}
