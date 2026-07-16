import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdzamy czy użytkownik już zaakceptował cookies
    const consent = localStorage.getItem("devroman_cookie_consent");
    if (!consent) {
      // Dajemy delikatne opóźnienie, by nie atakować użytkownika w pierwszej sekundzie
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("devroman_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full max-w-4xl bg-surface/95 backdrop-blur-md border border-hairline rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-6 items-center justify-between animate-in slide-in-from-bottom-10 fade-in duration-500">
        <div className="flex-grow">
          <h3 className="font-display text-lg font-bold mb-2 flex items-center gap-2">
            <span>🍪</span> Szanujemy Twoją prywatność
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Ta strona używa ciasteczek (cookies), by działać szybko i niezawodnie. 
            Nie śledzimy Cię na innych stronach, nie sprzedajemy Twoich danych i używamy ich tylko w celach statystycznych i funkcjonalnych. 
            Czy zgadzasz się na użycie cookies?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
          <Link 
            to="/faq" 
            className="px-6 py-3 rounded-full border border-hairline text-foreground hover:bg-surface/50 text-sm font-medium transition-colors text-center"
            onClick={() => setIsVisible(false)}
          >
            Polityka prywatności
          </Link>
          <button 
            onClick={handleAccept}
            className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:brightness-110 transition-all text-sm glow-accent text-center"
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
