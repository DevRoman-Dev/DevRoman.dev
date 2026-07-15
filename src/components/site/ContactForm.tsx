import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setSent(false);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr("Podano nieprawidłowy adres e-mail.");
      return;
    }
    
    if (message.length < 5) {
      setErr("Wiadomość musi mieć minimum 5 znaków.");
      return;
    }

    data.append("source", "DevRoman.pl");
    
    setLoading(true);
    try {
      // Create URLSearchParams to send as application/x-www-form-urlencoded which is sometimes more reliable with PHP
      const urlEncodedData = new URLSearchParams(data as any);
      
      const response = await fetch("https://bot.programist.top/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
      });
      
      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        const text = await response.text();
        console.error("API Error Response:", text);
        setErr(`Błąd serwera (kod: ${response.status}). Zobacz konsolę po więcej szczegółów.`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setErr("Wystąpił błąd sieci. Prawdopodobnie problem z CORS. Zobacz konsolę w przeglądarce (F12).");
    } finally {
      setLoading(false);
    }
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
        {/*
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">Telefon</label>
          <input
            name="phone"
            type="tel"
            maxLength={20}
            className="w-full bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm"
            placeholder="+48 123 456 789"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">Budżet</label>
          <input
            name="budget"
            type="text"
            maxLength={50}
            className="w-full bg-background/60 border border-hairline px-4 py-3 rounded-md outline-none focus:border-accent transition-colors text-sm"
            placeholder="np. 5000 PLN"
          />
        </div>
        */}
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-mono uppercase text-foreground/50 tracking-widest">Rodzaj projektu (Usługa)</label>
        <select
          name="service"
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
        disabled={loading}
        className="w-full bg-accent text-accent-foreground py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all glow-accent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Wysyłanie..." : "📩 Wyślij wiadomość"}
      </button>
      {sent && !err && (
        <p className="text-sm text-accent">✅ Wiadomość wysłana! Odpiszę najdalej do jutra.</p>
      )}
      {err && (
        <p className="text-sm text-destructive">
          ❌ {err}
        </p>
      )}
    </form>
  );
}
