export const STATS = [
  { value: "7+", label: "Lat doświadczenia" },
  { value: "50+", label: "Zrealizowanych projektów" },
  { value: "6", label: "Firm i agencji" },
  { value: "24h", label: "Czas odpowiedzi" },
];

export const SERVICES = [
  {
    n: "01",
    title: "Strony internetowe dla firm",
    desc: "Landing page'e, strony firmowe, blogi i portale na WordPress. Szybkie, responsywne i zoptymalizowane pod SEO.",
    price: "od 1 200 zł",
  },
  {
    n: "02",
    title: "Sklepy PrestaShop / WooCommerce",
    desc: "Wdrożenia od zera, migracje, własne moduły i szablony, integracje z płatnościami, kurierami oraz CRM i ERP.",
    price: "od 3 500 zł",
  },
  {
    n: "03",
    title: "Aplikacje webowe na Laravel",
    desc: "Systemy CRM, narzędzia do zarządzania projektami, kalendarze i REST API — dedykowane oprogramowanie dla biznesu.",
    price: "od 5 000 zł",
  },
  {
    n: "04",
    title: "Utrzymanie i rozwój projektów",
    desc: "Przejęcie istniejących projektów, poprawki, optymalizacja wydajności i systematyczny rozwój funkcjonalności.",
    price: "od 100 zł / h",
  },
  {
    n: "05",
    title: "Integracje z zewnętrznymi API",
    desc: "Stripe, PayU, Przelewy24, serwisy kurierskie, systemy mailingowe, bramki SMS i dowolne zewnętrzne API.",
    price: "od 400 zł",
  },
  {
    n: "06",
    title: "Wsparcie i konsultacje",
    desc: "Audyt kodu i wydajności, dobór technologii, code review oraz wsparcie techniczne dla Twojego zespołu.",
    price: "od 120 zł / h",
  },
];

export const TECH_GROUPS = [
  {
    title: "Backend",
    items: ["Laravel", "PHP 8+", "REST API", "MySQL / MariaDB", "Docker", "Composer", "Livewire", "Filament"],
  },
  {
    title: "E-commerce & CMS",
    items: ["PrestaShop", "WordPress", "WooCommerce", "Thirty Bees", "OpenCart", "ACF", "Elementor", "Twig / Smarty"],
  },
  {
    title: "Frontend",
    items: ["Vue.js 3", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "SCSS / SASS", "Bootstrap", "Vite", "GSAP"],
  },
  {
    title: "Narzędzia",
    items: ["Git / GitHub", "Linux / SSH", "Postman", "Swagger", "Webpack", "Figma", "Trello", "Asana"],
  },
];

export const EXPERIENCE = [
  {
    company: "Freelance · Freelancehunt",
    role: "Laravel Backend & Full-Stack Developer",
    desc: "REST API, systemy zarządzania, integracje z zewnętrznymi serwisami w Laravel, Livewire i Docker.",
  },
  {
    company: "NC-ONE",
    role: "Full-Stack Engineer · Laravel + Vue.js",
    desc: "Praca przy produktach webowych: Laravel, Vue.js, REST API, TailwindCSS, TypeScript, Docker, Swagger.",
  },
  {
    company: "WebSpirit",
    role: "Full-Stack PHP Developer",
    desc: "Aplikacje webowe w autorskim frameworku PHP, pełen front-end: SCSS, JS, jQuery, AJAX.",
  },
  {
    company: "SoftSprint",
    role: "Full-Stack Developer · PrestaShop & WordPress",
    desc: "Motywy i moduły dla PrestaShop, WordPress i Thirty Bees. Smarty, Twig, PHP, SCSS, jQuery.",
  },
  {
    company: "Sure Lock & Key LLC",
    role: "WordPress Developer",
    desc: "Strony WordPress z Carbon Fields i Twig. Wdrożenia multi-site dla łatwiejszego zarządzania.",
  },
  {
    company: "APARTNER.PRO",
    role: "Full-Stack · WordPress, PrestaShop, Laravel",
    desc: "Pełen cykl projektów — od grafiki po wdrożenie. ACF, Smarty, Twig, Laravel Mix.",
  },
];

import projectManagementImg from "@/assets/portfolio/project-management.jpg";
import taskApiImg from "@/assets/portfolio/task-api.jpg";
import leadsCrmImg from "@/assets/portfolio/leads-crm.jpg";
import agroImg from "@/assets/portfolio/agro-marketplace.jpg";
import openhealthImg from "@/assets/portfolio/openhealth.jpg";
import hostelImg from "@/assets/portfolio/hostel.jpg";
import invoicemakerImg from "@/assets/portfolio/invoicemaker.jpg";
import calendarImg from "@/assets/portfolio/calendar.jpg";

export const PROJECTS = [
  { tag: "Laravel · System", title: "System zarządzania projektami", desc: "Narzędzie CRM/ERP dla firm — śledzenie postępów i pracy zespołu. Laravel + Filament Admin.", stack: ["Laravel", "Filament", "PHP", "MySQL"], image: projectManagementImg },
  { tag: "Laravel · REST API", title: "Task Manager API", desc: "Pełne REST API do zarządzania zadaniami — autoryzacja, role, statusy i raporty.", stack: ["Laravel", "PHP", "Swagger"], image: taskApiImg },
  { tag: "Laravel · Usługa", title: "System leadów (Leads CRM)", desc: "Platforma do zbierania i zarządzania leadami sprzedażowymi dla branży motoryzacyjnej.", stack: ["Laravel", "Vite", "Vue.js"], image: leadsCrmImg },
  { tag: "Laravel · E-commerce", title: "Serwis sprzedaży płodów rolnych", desc: "Platforma B2B — ogłoszenia, wyceny, kontakt z dostawcami i panel zarządzania ofertami.", stack: ["Laravel", "Vite", "MySQL"], image: agroImg },
  { tag: "Laravel · SaaS", title: "OpenHealth — serwis zdrowotny", desc: "Zarządzanie danymi pacjentów, panel lekarski, harmonogram wizyt i raportowanie.", stack: ["Laravel", "Livewire", "JS"], image: openhealthImg },
  { tag: "WordPress · Usługi", title: "Intownhostel & Ifhostel", desc: "Strony dla hosteli z rezerwacją, galerią i SEO. WordPress z Twig i ACF.", stack: ["WordPress", "ACF", "jQuery"], image: hostelImg },
  { tag: "HTML/JS · Narzędzie", title: "InvoiceMaker", desc: "Darmowe narzędzie do generowania faktur w kilku walutach — eksport do PDF, bez rejestracji.", stack: ["HTML", "SCSS", "jQuery"], image: invoicemakerImg },
  { tag: "Laravel · Kalendarz", title: "Calendar Service", desc: "Zarządzanie wydarzeniami i harmonogramem — widoki tygodniowy / miesięczny, powiadomienia.", stack: ["Laravel", "Vite", "jQuery"], image: calendarImg },
];

export const TESTIMONIALS = [
  {
    quote: "Roman świetnie zrozumiał nasze wymagania i dostarczył sklep PrestaShop szybciej niż zakładaliśmy. Komunikacja na bieżąco, zero niespodzianek.",
    name: "Marek K.",
    role: "Właściciel sklepu, Warszawa",
  },
  {
    quote: "Potrzebowaliśmy niestandardowego systemu leadów na Laravel. Roman zaproponował eleganckie rozwiązanie. Efekt przeszedł nasze oczekiwania.",
    name: "Anna W.",
    role: "Manager, Agencja marketingowa",
  },
  {
    quote: "Przejął projekt po poprzednim developerze i sprawnie odnalazł się w cudzym kodzie. Zoptymalizował WordPress, ładuje się 3× szybciej.",
    name: "Piotr T.",
    role: "CEO, Firma usługowa, Kraków",
  },
];

export const PROCESS = [
  { n: "01", title: "Analiza potrzeb", desc: "Rozmawiamy o celach, funkcjach, budżecie i harmonogramie. Pytam o szczegóły, żeby nic nie umknęło." },
  { n: "02", title: "Propozycja i wycena", desc: "Konkretna propozycja techniczna z wyceną i planem pracy. Bez ukrytych kosztów ani niespodzianek." },
  { n: "03", title: "Realizacja", desc: "Pracuję iteracyjnie i regularnie informuję o postępach. Telegram, e-mail lub komunikator — jak wolisz." },
  { n: "04", title: "Testy i wdrożenie", desc: "Testuję wszystkie funkcje i scenariusze. Wdrażam na serwer i dbam o płynne uruchomienie produkcji." },
  { n: "05", title: "Wsparcie po starcie", desc: "Poprawki, optymalizacja i dalszy rozwój — możemy współpracować długoterminowo." },
];

export const BLOG = [
  { tag: "Współpraca · Freelance", title: "Dlaczego polskie firmy zatrudniają ukraińskich programistów?", date: "22 mar 2026", read: "7 min", featured: true },
  { tag: "E-commerce", title: "PrestaShop czy WooCommerce — co wybrać w 2026?", date: "15 sie 2025", read: "8 min" },
  { tag: "E-commerce · Ceny", title: "Ile kosztuje sklep PrestaShop w 2026?", date: "10 paź 2025", read: "7 min" },
  { tag: "Migracja", title: "Migracja sklepu bez przestojów — jak to zrobić?", date: "3 lut 2026", read: "10 min" },
  { tag: "Bezpieczeństwo", title: "Bezpieczeństwo WordPress — 10 rzeczy, które zrobisz dziś", date: "15 sty 2026", read: "9 min" },
  { tag: "Backend", title: "Laravel vs WordPress — co wybrać dla firmy?", date: "8 gru 2025", read: "7 min" },
  { tag: "Integracje", title: "REST API — co to jest i dlaczego sklep go potrzebuje?", date: "20 lut 2026", read: "7 min" },
  { tag: "CRM · Biznes", title: "CRM na zamówienie vs gotowe rozwiązanie", date: "7 mar 2026", read: "8 min" },
];

export const FAQ = [
  { q: "Ile kosztuje typowy projekt i jak wygląda wycena?", a: "Wycena zależy od zakresu: strona WordPress 2 000–6 000 zł, sklep PrestaShop 6 000–20 000 zł, aplikacja Laravel od 8 000 zł. Po krótkim opisie projektu przygotowuję bezpłatną wycenę w ciągu 24 godzin." },
  { q: "Jak długo trwa realizacja projektu?", a: "Strona firmowa: 1–2 tygodnie. Sklep e-commerce z integracjami: 4–10 tygodni. Aplikacja Laravel: 6–16 tygodni w zależności od złożoności. Czas ustalamy przed startem i trzymam się harmonogramu." },
  { q: "Czy komunikacja po polsku jest możliwa?", a: "Tak — prowadzę projekty po polsku, angielsku i ukraińsku. Mój polski wystarczy do codziennej komunikacji projektowej. Skomplikowane tematy techniczne możemy obsłużyć po angielsku lub pisemnie." },
  { q: "Co się dzieje z projektem po wdrożeniu?", a: "Oferuję stałe wsparcie techniczne — poprawki, aktualizacje, nowe funkcje. Abonament miesięczny lub zlecenia ad hoc. Kod i wszystkie dostępy są Twoje od pierwszego dnia." },
  { q: "Jak wygląda płatność — czy wymagasz 100% z góry?", a: "Standardowo 30–50% zaliczki na start, reszta po odbiorze lub w transzach przy dłuższych projektach. Wystawiam faktury. Akceptuję przelewy bankowe i PayPal." },
  { q: "Czy mogę przejrzeć Twoje wcześniejsze projekty?", a: "Tak — sekcja Portfolio powyżej oraz GitHub. Przy projektach pod NDA opisuję zakres i technologie bez ujawniania danych klienta. Na prośbę podam też kontakt do poprzedniego klienta jako referencję." },
  { q: "Czy pracujesz z klientami spoza Polski?", a: "Tak — pracuję zdalnie z klientami z Polski, Niemiec, Holandii, Czech, Słowacji i innych krajów europejskich. Komunikacja online — Telegram, e-mail, Trello, Asana." },
  { q: "Czy mogę zlecić tylko część projektu — np. tylko backend?", a: "Oczywiście. Często współpracuję z agencjami, które potrzebują konkretnej kompetencji — backendu Laravel, integracji API, modułu PrestaShop lub optymalizacji istniejącego kodu." },
];
