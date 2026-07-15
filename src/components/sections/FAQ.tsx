import { useState } from "react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { FAQ as FAQ_ITEMS } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-24 md:py-32 bg-surface/30 border-y border-hairline">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Najczęstsze pytania</SectionLabel>
        <h2 className="mt-4 mb-16 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
          FAQ
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border border-hairline rounded-2xl bg-background overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-6 hover:bg-surface transition-colors"
                >
                  <span className="font-display text-lg md:text-xl font-bold tracking-tight">{f.q}</span>
                  <span className={`text-accent text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-foreground/70 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
