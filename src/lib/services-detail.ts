export interface ServiceDetail {
  slug: string;
  n: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  price: string;
  timeline: string;
  desc: string;
  forWho: string[];
  includes: string[];
  technologies: string[];
  process: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "strony-internetowe",
    n: "01",
    title: "Strony internetowe dla firm",
    h1: "Strony internetowe dla firm — WordPress i landing page",
    metaTitle: "Strony internetowe dla firm — WordPress, landing page · DevRoman.pl",
    metaDesc:
      "Tworzę szybkie i responsywne strony firmowe, landing page i blogi na WordPress. Optymalizacja SEO, panel CMS, wycena w 24h. Od 1 200 zł.",
    intro:
      "Projektuję i buduję strony internetowe, które sprzedają — nie tylko wyglądają. WordPress, statyczne landing page, portale i blogi z pełną optymalizacją pod Google.",
    price: "od 1 200 zł",
    timeline: "1–2 tygodnie",
    desc: "Strona firmowa to pierwszy kontakt klienta z Twoim biznesem. Musi ładować się szybko, działać na telefonie i przekonywać do kontaktu. Dostajesz stronę, którą sam edytujesz — bez konieczności programisty do zmiany tekstu.",
    forWho: [
      "Firmy usługowe (kancelarie, gabinety, salony, warsztaty)",
      "Freelancerzy i konsultanci szukający profesjonalnego portfolio",
      "Startupy potrzebujące landing page dla nowego produktu",
      "Restauracje, hotele i lokalne biznesy",
    ],
    includes: [
      "Indywidualny projekt UI dopasowany do Twojej marki",
      "Pełna responsywność (mobile / tablet / desktop)",
      "Podstawowe SEO — meta tagi, Open Graph, sitemap.xml, robots.txt",
      "Integracja z Google Analytics i Google Search Console",
      "Formularz kontaktowy z powiadomieniami e-mail",
      "Panel CMS (WordPress) do samodzielnej edycji treści",
      "Certyfikat SSL i konfiguracja serwera",
      "Szkolenie z obsługi + dokumentacja",
    ],
    technologies: ["WordPress", "ACF", "Elementor", "Twig", "TailwindCSS", "PHP 8+", "MySQL"],
    process: [
      { title: "Rozmowa i briefing", desc: "Poznaję Twój biznes, cele strony i grupę docelową." },
      { title: "Projekt makiety", desc: "Pokazuję układ sekcji i strukturę, zbieramy uwagi." },
      { title: "Kodowanie", desc: "Buduję stronę, testuję na różnych urządzeniach." },
      { title: "Wdrożenie", desc: "Publikacja na serwerze, konfiguracja domeny i SSL." },
    ],
    faq: [
      {
        q: "Czy mogę sam edytować treści po wdrożeniu?",
        a: "Tak — dostajesz panel WordPress, w którym samodzielnie zmienisz teksty, zdjęcia i sekcje. Pokazuję jak to robić.",
      },
      {
        q: "Ile stron obejmuje pakiet za 1 200 zł?",
        a: "Landing page (jedna strona z sekcjami) lub prosta strona 3–5 podstron. Rozbudowane portale wyceniam indywidualnie.",
      },
      {
        q: "Czy w cenie jest hosting i domena?",
        a: "Nie — hosting i domena to koszt 200–400 zł/rok. Pomagam wybrać i skonfigurować, ale kupujesz na własne dane.",
      },
    ],
  },
  {
    slug: "sklepy-prestashop-woocommerce",
    n: "02",
    title: "Sklepy PrestaShop / WooCommerce",
    h1: "Sklepy internetowe PrestaShop i WooCommerce",
    metaTitle: "Sklep internetowy PrestaShop, WooCommerce — wdrożenie i moduły · DevRoman.pl",
    metaDesc:
      "Wdrożenia sklepów PrestaShop i WooCommerce od zera, migracje, moduły płatności, integracje kurierów. 7+ lat doświadczenia. Od 3 500 zł.",
    intro:
      "Buduję sklepy internetowe, które sprzedają od pierwszego dnia. Pełne wdrożenie PrestaShop lub WooCommerce z płatnościami, kurierami, integracjami z ERP i marketingiem.",
    price: "od 3 500 zł",
    timeline: "4–10 tygodni",
    desc: "Sklep internetowy to Twoja druga siedziba. Musi być szybki, bezpieczny i łatwy w obsłudze — zarówno dla klienta, jak i dla Ciebie. Robię wdrożenia od zera, migracje ze starych platform oraz własne moduły na zamówienie.",
    forWho: [
      "Właściciele sklepów stacjonarnych wchodzący do e-commerce",
      "Firmy migrujące ze Shoper, IdoSell, Shopify na własne rozwiązanie",
      "Marki B2B potrzebujące katalogu z cennikami dla klientów",
      "Sklepy z rozbudowanym asortymentem (500+ produktów)",
    ],
    includes: [
      "Szablon dopasowany do marki i optymalizacja checkoutu",
      "Płatności: Stripe, PayU, Przelewy24, BLIK, Tpay",
      "Integracje kurierskie: InPost, DPD, DHL, GLS, Poczta Polska",
      "Import produktów z Excel / migracja z innego sklepu",
      "Konfiguracja podatków VAT, faktur, e-mail marketingu",
      "Integracja z systemami magazynowymi (Subiekt, Baselinker, ERP)",
      "Panel admina + szkolenie zespołu obsługi",
      "SEO produktów, meta tagi, sitemap dla sklepu",
    ],
    technologies: ["PrestaShop", "WooCommerce", "Thirty Bees", "OpenCart", "PHP 8+", "Smarty", "Twig", "MySQL"],
    process: [
      { title: "Audyt i plan", desc: "Analiza asortymentu, integracji, przepływów zamówień." },
      { title: "Wdrożenie sklepu", desc: "Instalacja, konfiguracja, szablon, moduły, produkty." },
      { title: "Integracje", desc: "Płatności, kurierzy, ERP, e-mail marketing." },
      { title: "Testy i szkolenie", desc: "Testy zakupów, faktur, przesyłek. Szkolenie zespołu." },
      { title: "Uruchomienie", desc: "Publikacja produkcji, przekierowania SEO, monitoring." },
    ],
    faq: [
      {
        q: "PrestaShop czy WooCommerce — co wybrać?",
        a: "PrestaShop jest lepszy dla sklepów z 200+ produktami i rozbudowaną logiką. WooCommerce dla mniejszych sklepów lub gdy masz już stronę na WordPress. Doradzę po rozmowie o Twoim biznesie.",
      },
      {
        q: "Czy przeprowadzasz migracje z innych platform?",
        a: "Tak — Shoper, IdoSell, Shopify, Magento, PrestaShop starsze wersje. Migruję produkty, klientów, zamówienia i przekierowania SEO, żeby nie stracić pozycji w Google.",
      },
      {
        q: "Ile trwa uruchomienie sklepu?",
        a: "Standardowe wdrożenie 4–6 tygodni. Sklep z rozbudowanymi integracjami (ERP, B2B, wiele języków) 8–12 tygodni.",
      },
      {
        q: "Czy pisze własne moduły PrestaShop?",
        a: "Tak — regularnie tworzę moduły na zamówienie: integracje z API, kalkulatory cen, systemy lojalnościowe, konfiguratory produktów.",
      },
    ],
  },
  {
    slug: "aplikacje-laravel",
    n: "03",
    title: "Aplikacje webowe na Laravel",
    h1: "Aplikacje webowe i systemy dedykowane na Laravel",
    metaTitle: "Aplikacje webowe Laravel — CRM, ERP, REST API · DevRoman.pl",
    metaDesc:
      "Dedykowane systemy CRM, ERP, panele klienta i REST API na Laravel. Skalowalne aplikacje webowe dla biznesu. Od 5 000 zł. Wycena w 24h.",
    intro:
      "Tworzę dedykowane aplikacje webowe na Laravel — od małych narzędzi wewnętrznych po pełne systemy CRM i ERP obsługujące tysiące użytkowników.",
    price: "od 5 000 zł",
    timeline: "6–16 tygodni",
    desc: "Gotowe rozwiązania rzadko pasują do specyfiki Twojej firmy. Buduję aplikacje szyte na miarę procesów biznesowych — takich, które oszczędzają godziny pracy każdego dnia i skalują się razem z firmą.",
    forWho: [
      "Firmy z powtarzalnymi procesami do zautomatyzowania",
      "Agencje potrzebujące własnego panelu klienta",
      "Startupy budujące MVP produktu SaaS",
      "Sklepy potrzebujące systemu obsługi zamówień B2B",
    ],
    includes: [
      "Analiza wymagań biznesowych i architektura systemu",
      "Backend Laravel + zaprojektowana baza danych",
      "Panel admina (Filament, Livewire lub Vue.js)",
      "REST API + dokumentacja Swagger / OpenAPI",
      "Autoryzacja, role, uprawnienia (Spatie Permissions)",
      "Integracje z zewnętrznymi API (płatności, e-mail, CRM)",
      "Wdrożenie produkcyjne + monitoring (Sentry, logs)",
      "Dokumentacja techniczna dla przyszłego rozwoju",
    ],
    technologies: ["Laravel 11", "Livewire", "Filament", "Vue.js 3", "TypeScript", "MySQL", "Redis", "Docker", "REST API"],
    process: [
      { title: "Warsztat wymagań", desc: "Analizujemy procesy, role użytkowników, kluczowe funkcje." },
      { title: "Architektura", desc: "Projekt bazy danych, API, technologii, harmonogramu." },
      { title: "Iteracyjny development", desc: "Pracuję sprintami, pokazuję postępy co 1–2 tygodnie." },
      { title: "Testy i UAT", desc: "Testy automatyczne + testy akceptacyjne z Twoim zespołem." },
      { title: "Wdrożenie i wsparcie", desc: "Uruchomienie, monitoring, poprawki, dalszy rozwój." },
    ],
    faq: [
      {
        q: "Czy budujesz MVP dla startupów?",
        a: "Tak — mam kilka MVP na koncie. Sugeruję zaczynać od minimalnej wersji (6–10 tygodni), która potwierdzi model biznesowy, zanim inwestujemy w pełny system.",
      },
      {
        q: "Czy kod źródłowy jest mój?",
        a: "Tak — cały kod jest Twój od pierwszego commit. Przekazuję repozytorium Git, dostępy do serwera i dokumentację. Nie ma vendor lock-in.",
      },
      {
        q: "Kto może rozwijać aplikację dalej?",
        a: "Piszę czysty, udokumentowany kod Laravel — każdy doświadczony deweloper Laravel to przejmie. Możemy też kontynuować współpracę na abonament.",
      },
    ],
  },
  {
    slug: "utrzymanie-projektow",
    n: "04",
    title: "Utrzymanie i rozwój projektów",
    h1: "Utrzymanie i rozwój istniejących projektów",
    metaTitle: "Utrzymanie stron i sklepów, opieka techniczna · DevRoman.pl",
    metaDesc:
      "Przejmę istniejący projekt WordPress, PrestaShop lub Laravel — poprawki, optymalizacja, nowe funkcje, bezpieczeństwo. Abonament od 100 zł/h.",
    intro:
      "Przejmuję projekty po innych deweloperach lub agencjach. Poprawki, optymalizacja wydajności, aktualizacje bezpieczeństwa i systematyczny rozwój funkcjonalności.",
    price: "od 100 zł / h",
    timeline: "Umowa miesięczna lub ad hoc",
    desc: "Twój poprzedni deweloper zniknął? Sklep zwalnia lub sypie błędami? Potrzebujesz nowej funkcji, ale nikt nie zna kodu? Zajmuję się właśnie takimi sytuacjami — czytam cudzy kod bez narzekania i doprowadzam projekty do porządku.",
    forWho: [
      "Firmy, których deweloper zakończył współpracę",
      "Sklepy z narastającymi błędami i spowolnieniem",
      "Projekty wymagające regularnych aktualizacji bezpieczeństwa",
      "Klienci potrzebujący nowych funkcji w istniejącym systemie",
    ],
    includes: [
      "Audyt istniejącego kodu i infrastruktury",
      "Poprawki błędów i optymalizacja wydajności",
      "Aktualizacje wersji (WordPress, PrestaShop, Laravel)",
      "Aktualizacje bezpieczeństwa i patche krytyczne",
      "Backup i monitoring dostępności",
      "Rozwój nowych funkcjonalności",
      "Wsparcie techniczne przez Telegram / e-mail",
      "Raporty miesięczne z wykonanych prac",
    ],
    technologies: ["WordPress", "PrestaShop", "WooCommerce", "Laravel", "PHP", "MySQL", "Docker", "Git"],
    process: [
      { title: "Audyt wstępny", desc: "Przeglądam kod, serwer, dokumentację, oceniam stan projektu." },
      { title: "Plan działań", desc: "Priorytety: co pilne, co poczeka, jaki abonament pasuje." },
      { title: "Praca ciągła", desc: "Poprawki, monitoring, comiesięczne raporty i faktury." },
    ],
    faq: [
      {
        q: "Ile godzin mieści się w abonamencie?",
        a: "Standardowe pakiety: 5h, 10h lub 20h miesięcznie. Godzina w abonamencie taniej niż zlecenie ad hoc.",
      },
      {
        q: "Czy podejmiesz projekt w słabym stanie?",
        a: "Tak — regularnie przejmuję projekty z długiem technologicznym. Zaczynamy od audytu i planu naprawy krok po kroku.",
      },
      {
        q: "Co jeśli nie wykorzystam godzin w miesiącu?",
        a: "Niewykorzystane godziny przechodzą na kolejny miesiąc (do 50% pakietu). Elastycznie ustalamy warunki.",
      },
    ],
  },
  {
    slug: "integracje-api",
    n: "05",
    title: "Integracje z zewnętrznymi API",
    h1: "Integracje z zewnętrznymi API — płatności, kurierzy, CRM",
    metaTitle: "Integracje API — Stripe, PayU, kurierzy, CRM, ERP · DevRoman.pl",
    metaDesc:
      "Integracje z zewnętrznymi API: Stripe, PayU, Przelewy24, InPost, DPD, systemy CRM, ERP, mailingi, SMS. Od 400 zł. Wycena w 24h.",
    intro:
      "Łączę Twój system z dowolnym API zewnętrznym — bramki płatności, systemy kurierskie, CRM, ERP, e-mail marketing, SMS, hurtownie danych.",
    price: "od 400 zł",
    timeline: "1–4 tygodnie",
    desc: "Ręczne kopiowanie danych między systemami to strata czasu i źródło błędów. Robię integracje dwustronne, które synchronizują dane w tle i pozwalają Twojemu zespołowi skupić się na tym, co ważne.",
    forWho: [
      "Sklepy potrzebujące synchronizacji z magazynem / ERP",
      "Firmy łączące CRM z systemem księgowym",
      "Startupy integrujące płatności i wysyłki",
      "Serwisy wymagające automatyzacji e-mail lub SMS",
    ],
    includes: [
      "Analiza dokumentacji API i planowanie integracji",
      "Implementacja z obsługą błędów i ponawianiem",
      "Webhooki, kolejki (Redis, Laravel Queue)",
      "Monitoring i logi dla łatwego debugowania",
      "Dokumentacja techniczna integracji",
      "Testy i uruchomienie produkcyjne",
    ],
    technologies: ["Laravel", "PHP", "REST API", "GraphQL", "Webhooks", "Redis", "Guzzle", "Stripe", "PayU"],
    process: [
      { title: "Analiza API", desc: "Studiuję dokumentację, testuję endpointy, planuję integrację." },
      { title: "Implementacja", desc: "Kod z obsługą błędów, retry, logowaniem." },
      { title: "Testy i wdrożenie", desc: "Testy sandbox, produkcja, monitoring." },
    ],
    faq: [
      {
        q: "Z jakimi API najczęściej integrujesz?",
        a: "Stripe, PayU, Przelewy24, InPost, DPD, Baselinker, Subiekt, MailerLite, MailChimp, Twilio, Salesforce, HubSpot, GetResponse — i wiele innych. Nowe API to standard u mnie.",
      },
      {
        q: "Czy integrujesz z zamkniętymi / lokalnymi systemami?",
        a: "Tak — jeśli system ma jakikolwiek interfejs (SOAP, REST, plik CSV, XML, baza danych), da się to zintegrować.",
      },
    ],
  },
  {
    slug: "wsparcie-konsultacje",
    n: "06",
    title: "Wsparcie i konsultacje",
    h1: "Wsparcie techniczne i konsultacje developerskie",
    metaTitle: "Konsultacje techniczne, audyt kodu, code review · DevRoman.pl",
    metaDesc:
      "Konsultacje techniczne, audyt kodu, code review, dobór technologii. Wsparcie dla zespołów developerskich i właścicieli biznesów. Od 120 zł/h.",
    intro:
      "Doradzam w decyzjach technicznych — dobór technologii, architektura, code review, audyt bezpieczeństwa i wydajności. Wsparcie dla właścicieli firm i zespołów IT.",
    price: "od 120 zł / h",
    timeline: "Elastycznie — 1h lub cały projekt",
    desc: "Zanim wydasz duże pieniądze na projekt, sprawdź, czy planujesz go dobrze. Konsultacja techniczna oszczędza tysiące złotych i miesiące błędnych decyzji. Możemy porozmawiać godzinę online — dostaniesz konkretne odpowiedzi, bez pustych obietnic.",
    forWho: [
      "Właściciele firm przed zleceniem projektu",
      "Zespoły potrzebujące zewnętrznego code review",
      "Startupy wybierające stack technologiczny",
      "Klienci potrzebujący drugiej opinii",
    ],
    includes: [
      "Audyt kodu — jakość, bezpieczeństwo, wydajność",
      "Code review pull requestów",
      "Doradztwo w wyborze technologii i architektury",
      "Analiza projektów przed zakupem",
      "Wsparcie w rekrutacji deweloperów (testy techniczne)",
      "Raport z rekomendacjami na piśmie",
    ],
    technologies: ["Laravel", "WordPress", "PrestaShop", "Vue.js", "PHP", "MySQL", "Docker"],
    process: [
      { title: "Kontakt i opis", desc: "Opisujesz sytuację, przesyłasz kod / dokumentację." },
      { title: "Analiza", desc: "Studiuję materiały, przygotowuję rekomendacje." },
      { title: "Konsultacja", desc: "Rozmowa online lub raport pisemny — jak wolisz." },
    ],
    faq: [
      {
        q: "Ile trwa typowa konsultacja?",
        a: "1–2 godziny online wystarcza na 80% pytań. Pełny audyt kodu 8–20h w zależności od wielkości projektu.",
      },
      {
        q: "Czy dostanę raport na piśmie?",
        a: "Tak — po każdej konsultacji lub audycie wysyłam podsumowanie z konkretnymi rekomendacjami.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
