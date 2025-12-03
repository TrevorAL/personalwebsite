interface FeatureItemProps {
  title: string;
  description: string;
  accent?: "cyan" | "indigo" | "amber";
}

const accentStyles: Record<NonNullable<FeatureItemProps["accent"]>, string> = {
  cyan: "from-cyan-400/80 to-teal-300/60",
  indigo: "from-indigo-400/80 to-purple-300/60",
  amber: "from-amber-400/90 to-orange-300/60",
};

export default function FeatureItem({
  title,
  description,
  accent = "cyan",
}: FeatureItemProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div
        className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${accentStyles[accent]} shadow-lg shadow-black/20`}
      />
      <div className="space-y-1">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-sm text-slate-200">{description}</p>
      </div>
    </div>
  );
}
