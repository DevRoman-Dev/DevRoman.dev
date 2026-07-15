import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const type = String(data.get("type") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 5) {
      setErr(true);
      return;
    }

    const body = `Imię: ${name}\nTyp: ${type}\n\n${message}`;
    window.location.href = `mailto:contact@devroman.pl?subject=${encodeURIComponent(
      "Zapytanie ze strony · " + (type || "projekt")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-surface/80 p-8 rounded-2xl border border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">Imię i nazwisko</label>
          <input
            name="name"
            type="text"
            maxLength={100}
            className="w-full bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm"
            placeholder="Jan Kowalski"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">E-mail *</label>
          <input
            name="email"
            type="email"
            required
            maxLength={255}
            className="w-full bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm"
            placeholder="jan@firma.pl"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">Rodzaj projektu</label>
        <select
          name="type"
          defaultValue=""
          className="w-full bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm"
        >
          <option value="">— wybierz —</option>
          <option>Sklep PrestaShop</option>
          <option>Sklep WooCommerce</option>
          <option>Strona WordPress</option>
          <option>Aplikacja webowa Laravel</option>
          <option>REST API / integracja</option>
          <option>Utrzymanie / poprawki</option>
          <option>Inne</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">Opis projektu</label>
        <textarea
          name="message"
          rows={5}
          maxLength={2000}
          className="w-full bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm resize-y"
          placeholder="Krótko o celach, terminie i budżecie…"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent text-accent-foreground py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all glow-accent"
      >
        📩 Wyślij wiadomość
      </button>
      {sent && !err && (
        <p className="text-sm text-accent">✅ Wiadomość wysłana! Odpiszę najdalej do jutra.</p>
      )}
      {err && (
        <p className="text-sm text-destructive">
          ❌ Coś poszło nie tak. Sprawdź pola lub napisz bezpośrednio na{" "}
          <a className="underline" href="mailto:contact@devroman.pl">contact@devroman.pl</a>
        </p>
      )}
    </form>
  );
}
