import Link from "next/link";

type ButtonVariant = "solid" | "ghost";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    "bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/30",
  ghost:
    "border border-white/30 bg-white/10 text-white hover:bg-white/15 hover:border-white/50",
};

export default function CTAButton({
  href,
  children,
  variant = "solid",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variantStyles[variant]}`}
    >
      {children}
    </Link>
  );
}
