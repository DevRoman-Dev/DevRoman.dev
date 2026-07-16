export interface CityData {
  slug: string;
  name: string;
  nameGen: string; // dopełniacz: kogo? czego? (np. "Warszawy")
  nameLoc: string; // miejscownik: o kim? o czym? (np. "w Warszawie")
  population: string;
  distance: string;
  intro: string;
  faqLocal: { q: string; a: string }[];
}

export const CITIES: CityData[] = [
  {
    slug: "warszawa",
    name: "Warszawa",
    nameGen: "Warszawy",
    nameLoc: "w Warszawie",
    population: "3.1M",
    distance: "dostępność online",
    intro: "Działam zdalnie z Lwowa i obsługuję klientów z całej Polski — ale Warszawa to rynek, który znam szczególnie dobrze. Pracowałem przy projektach dla warszawskich agencji i startupów, oferując szybki czas reakcji i bezproblemową komunikację online. Jeśli szukasz kogoś, kto działa jak wewnętrzny pracownik, ale bez kosztów biura w centrum stolicy — dobrze trafiłeś.",
    faqLocal: [
      {
        q: "Czy możemy spotkać się na żywo w Warszawie?",
        a: "Na co dzień pracuję zdalnie z mojego biura we Lwowie, co pozwala mi zaoferować bardzo konkurencyjne stawki w stosunku do warszawskiego rynku IT. Niemniej jednak, przy większych projektach i wdrożeniach (np. dedykowane systemy CRM), przyjazd do Warszawy na warsztaty projektowe nie stanowi problemu."
      },
      {
        q: "Jak wygląda rozliczenie za projekt dla warszawskiej firmy?",
        a: "Rozliczamy się w oparciu o przejrzystą wycenę projektową lub stawkę godzinową. Wystawiam normalne faktury. Cała współpraca opiera się na umowie, która chroni interesy Twojej firmy."
      }
    ]
  },
  {
    slug: "krakow",
    name: "Kraków",
    nameGen: "Krakowa",
    nameLoc: "w Krakowie",
    population: "1.0M",
    distance: "ok. 4h drogi",
    intro: "Kraków to miasto startupów, agencji cyfrowych i prężnie rozwijających się firm e-commerce. Właśnie z tego rejonu trafia do mnie dużo zapytań o systemy dedykowane, aplikacje Laravel i zaawansowane sklepy internetowe. Z racji niewielkiej odległości od Lwowa, współpraca z krakowskimi firmami przebiega u mnie wyjątkowo sprawnie.",
    faqLocal: [
      {
        q: "Czy tworzysz sklepy internetowe dostosowane do krakowskiego rynku?",
        a: "Tak, niezależnie czy celujesz tylko w rynek krakowski (lokalne usługi, gastronomia) czy sprzedajesz na całą Polskę. Wdrażam integracje z InPost, DPD i lokalnymi dostawcami, co świetnie sprawdza się w biznesach działających w Krakowie i Małopolsce."
      },
      {
        q: "Czy współpracujesz jako podwykonawca dla krakowskich agencji reklamowych?",
        a: "Tak, bardzo chętnie. Pełnię rolę zdalnego dewelopera (white-label) dla agencji marketingowych i software house'ów z Krakowa, wspierając je w momentach, gdy brakuje rąk do pracy przy kodowaniu."
      }
    ]
  },
  {
    slug: "wroclaw",
    name: "Wrocław",
    nameGen: "Wrocławia",
    nameLoc: "we Wrocławiu",
    population: "0.9M",
    distance: "dostępność online",
    intro: "Wrocławski rynek technologiczny rośnie w ogromnym tempie. Obsługuję zdalnie firmy z Dolnego Śląska, budując dla nich skalowalne aplikacje webowe w technologii Laravel i Vue.js oraz platformy e-commerce (PrestaShop). Niezależnie czy prowadzisz biznes w okolicach wrocławskiego Rynku czy w jednej z pobliskich stref ekonomicznych — pomogę zdigitalizować Twoje procesy.",
    faqLocal: [
      {
        q: "Szukam firmy z Wrocławia do opieki nad starym systemem. Pomożesz?",
        a: "Choć nie jestem firmą zlokalizowaną we Wrocławiu, na co dzień przejmuję i utrzymuję systemy napisane przez innych programistów (tzw. kod legacy). Robię to całkowicie zdalnie: robię audyt, zabezpieczam dane i wdrażam potrzebne poprawki."
      },
      {
        q: "Jak dbasz o bezpieczeństwo danych w aplikacjach, które tworzysz?",
        a: "Każdy projekt oparty m.in. o Laravel jest zabezpieczany zgodnie ze standardami OWASP. Wdrażam odpowiednie uwierzytelnianie, zabezpieczenia przed atakami SQL Injection, CSRF oraz konfiguruję bezpieczne środowiska serwerowe, co jest kluczowe np. dla wrocławskiego sektora FinTech czy e-commerce."
      }
    ]
  },
  {
    slug: "poznan",
    name: "Poznań",
    nameGen: "Poznania",
    nameLoc: "w Poznaniu",
    population: "0.7M",
    distance: "dostępność online",
    intro: "Poznań słynie z przedsiębiorczości. Współpracując z wielkopolskimi biznesami, stawiam na konkrety: szybkość ładowania, bezpieczeństwo danych i architekturę, która pozwoli Twojej firmie rosnąć bez technologicznych ograniczeń. Buduję strony firmowe i portale, które realnie wspierają sprzedaż na konkurencyjnym, poznańskim rynku.",
    faqLocal: [
      {
        q: "Czy zajmujesz się pozycjonowaniem (SEO) stron na rynku poznańskim?",
        a: "Nie jestem agencją SEO, ale jako deweloper wdrażam techniczną optymalizację SEO (Technical SEO) na najwyższym poziomie. Zapewniam szybkość ładowania, poprawną architekturę linków, semantyczny kod i dane strukturalne (Schema.org), dzięki czemu strona jest idealnie przygotowana pod kątem zdobywania wysokich pozycji w Google na frazy związane z Poznaniem."
      },
      {
        q: "Ile czasu zajmuje stworzenie nowej strony internetowej?",
        a: "W zależności od stopnia skomplikowania projektu, standardowa strona firmowa oparta o WordPress lub Headless CMS powstaje w około 2-4 tygodnie od momentu dostarczenia materiałów i akceptacji designu."
      }
    ]
  },
  {
    slug: "gdansk",
    name: "Gdańsk",
    nameGen: "Gdańska",
    nameLoc: "w Gdańsku i Trójmieście",
    population: "0.8M",
    distance: "dostępność online",
    intro: "Trójmiasto posiada jeden z najsilniejszych rynków e-commerce w Polsce. Wspieram zdalnie firmy z Gdańska, Gdyni i Sopotu w rozwoju ich sklepów internetowych na silnikach PrestaShop i WooCommerce. Oferuję migracje bez przestojów, integracje z systemami ERP oraz moduły dedykowane.",
    faqLocal: [
      {
        q: "Czy obsługujesz migracje sklepów z platform SaaS na PrestaShop?",
        a: "Zdecydowanie tak. Wielu moich klientów (m.in. z sektora handlowego w Trójmieście) decyduje się na ucieczkę z abonamentowych platform (SaaS) na własny system (Open Source), taki jak PrestaShop. Przenoszę produkty, bazę klientów i zamówienia z zachowaniem struktury URL dla SEO."
      },
      {
        q: "Mam sklep internetowy, który strasznie wolno działa. Co można zrobić?",
        a: "Zbyt wolny sklep traci klientów. Wykonuję audyty wydajności (profilowanie bazy danych, optymalizacja zapytań SQL, wdrażanie cache'owania typu Redis), aby przyspieszyć działanie sklepów na PrestaShop i WooCommerce. Pierwsze rezultaty widoczne są często już po kilku dniach prac."
      }
    ]
  },
  {
    slug: "lodz",
    name: "Łódź",
    nameGen: "Łodzi",
    nameLoc: "w Łodzi",
    population: "0.6M",
    distance: "dostępność online",
    intro: "Łódzki rynek produkcyjny i handlowy dynamicznie przenosi się do sieci. Buduję zaawansowane platformy B2B i dedykowane systemy zarządzania, które automatyzują pracę łódzkich firm z sektora MŚP. Rozwiązania szyte na miarę (Laravel, API) pomagają w optymalizacji procesów logistycznych i sprzedażowych.",
    faqLocal: [
      {
        q: "Potrzebujemy dedykowanego systemu CRM. Czy zajmujesz się takimi projektami?",
        a: "Tak. Tworzę od zera dedykowane aplikacje webowe oparte o framework Laravel. Dzięki temu system idealnie odzwierciedla realne procesy w Twojej łódzkiej firmie, zamiast zmuszać Cię do dostosowywania się do ograniczeń gotowych, pudełkowych CRM-ów."
      },
      {
        q: "Czy zajmujesz się też integracją gotowego oprogramowania przez API?",
        a: "Oczywiście. Z powodzeniem łączę np. zewnętrzne systemy ERP, hurtownie, programy księgowe czy systemy kurierskie ze sklepami i portalami internetowymi, by zautomatyzować wymianę danych między różnymi usługami."
      }
    ]
  },
  {
    slug: "katowice",
    name: "Katowice",
    nameGen: "Katowic",
    nameLoc: "w Katowicach i na Śląsku",
    population: "0.8M",
    distance: "dostępność online",
    intro: "Aglomeracja śląska to potężny ośrodek biznesowy. Obsługuję śląskie firmy logistyczne, produkcyjne i usługowe, wdrażając dedykowane aplikacje wspierające ich cyfrową transformację. Sprawnie integruję nowoczesne rozwiązania webowe z istniejącymi, tradycyjnymi systemami IT.",
    faqLocal: [
      {
        q: "Szukamy kogoś do stałego utrzymania naszego systemu IT. Zgadzasz się na to?",
        a: "Tak, oferuję pakiety utrzymaniowe (SLA), w ramach których gwarantuję określoną pulę godzin na rozwój, aktualizację oprogramowania, kopie zapasowe i priorytetowe wsparcie w przypadku nagłych awarii Twoich kluczowych systemów biznesowych."
      },
      {
        q: "Czym się kierujesz dobierając technologię do projektu?",
        a: "Stawiam na nowoczesne, ale dojrzałe i stabilne rozwiązania, z ogromną bazą społeczności i wsparciem na lata. Głównie operuję w ekosystemie PHP (szczególnie Laravel) oraz na frontendzie wykorzystując React lub Vue.js. Dzięki temu śląskie firmy nie muszą się martwić o dług technologiczny w przyszłości."
      }
    ]
  },
  {
    slug: "lublin",
    name: "Lublin",
    nameGen: "Lublina",
    nameLoc: "w Lublinie",
    population: "0.3M",
    distance: "ok. 3.5h drogi",
    intro: "Ze względu na bliskie położenie geograficzne z moim rodzinnym Lwowem, obsługa projektów dla firm z Lubelszczyzny jest wyjątkowo bliska mojemu sercu. Buduję nowoczesne, szybkie strony www dla lokalnych firm oraz większe systemy dla uczelni i startupów technologicznych rozwijających się na Wschodzie Polski.",
    faqLocal: [
      {
        q: "Prowadzisz szkolenia z zakresu programowania lub konsultacje dla firm IT z Lublina?",
        a: "Oferuję wsparcie doradcze (konsulting technologiczny) oraz code review dla młodszych programistów (juniorów) pracujących w lokalnych zespołach. Z chęcią doradzam w kwestii architektury backendu przy nowych projektach."
      },
      {
        q: "Dlaczego mam wybrać programistę ze Lwowa, a nie agencję z Lublina?",
        a: "Zyskujesz bezpośredni kontakt z seniorem, który realnie pisze kod, bez ukrytych marż dla account managerów. Dzięki doświadczeniu przy projektach z całej Europy zapewniam jakość premium, przy zachowaniu bardzo atrakcyjnych stawek dla lokalnego biznesu na Lubelszczyźnie."
      }
    ]
  }
];
