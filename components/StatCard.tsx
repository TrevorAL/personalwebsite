interface StatCardProps {
  label: string;
  value: string;
  footnote?: string;
  dark?: boolean;
}

export default function StatCard({
  label,
  value,
  footnote,
  dark = false,
}: StatCardProps) {
  const base = dark
    ? "bg-white/5 border-white/10 text-white"
    : "bg-slate-50 border-slate-200 text-slate-900";

  const muted = dark ? "text-slate-300" : "text-slate-600";

  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md ${base}`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${muted}`}>
        {label}
      </p>
      <p className="text-2xl font-semibold leading-tight mt-1">{value}</p>
      {footnote ? <p className={`text-sm mt-1 ${muted}`}>{footnote}</p> : null}
    </div>
  );
}
