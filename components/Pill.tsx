type PillTone = "slate" | "cyan" | "amber";

interface PillProps {
  children: React.ReactNode;
  tone?: PillTone;
}

const toneStyles: Record<PillTone, string> = {
  slate:
    "bg-slate-900/60 text-slate-100 border border-slate-700/60 shadow-inner shadow-slate-900/40",
  cyan:
    "bg-cyan-100 text-cyan-900 border border-cyan-200 shadow-sm shadow-cyan-200/70",
  amber:
    "bg-amber-100 text-amber-900 border border-amber-200 shadow-sm shadow-amber-200/70",
};

export default function Pill({ children, tone = "slate" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
