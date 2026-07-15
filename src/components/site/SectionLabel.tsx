export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </div>
  );
}
