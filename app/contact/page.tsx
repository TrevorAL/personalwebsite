import CTAButton from "@/components/CTAButton";
import Pill from "@/components/Pill";
import StatCard from "@/components/StatCard";

export default function ContactPage() {
  const methods = [
    {
      label: "Email",
      href: "mailto:tlachman4@gmail.com",
      detail: "tlachman4@gmail.com",
      description: "Fastest way to reach me for projects or questions.",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/trevor-lachman/",
      detail: "@trevor-lachman",
      description: "Connect for work, collaboration, or referrals.",
    },
    {
      label: "GitHub",
      href: "https://github.com/TrevorAL",
      detail: "github.com/TrevorAL",
      description: "Open-source, experiments, and tooling.",
    },
    {
      label: "Calendar",
      href: "mailto:tlachman4@gmail.com?subject=Coffee%20chat%20with%20Trevor",
      detail: "Request a quick chat",
      description: "Suggest a time, topic, and we’ll lock it in.",
    },
  ];

  return (
    <div className="space-y-10 text-slate-100">
      <div className="space-y-3">
        <Pill tone="cyan">Let&apos;s talk</Pill>
        <h1 className="text-4xl font-bold text-white">Contact</h1>

        <p className="text-lg text-slate-200 max-w-2xl">
          Whether it’s about building reliable systems, refining a product, or
          collaborating on something new, I’m always open to chat.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 backdrop-blur">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              Best ways to reach me
            </h2>
            <p className="text-slate-200">
              I generally respond within a day. Drop a note and include any
              context that helps me prep.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <CTAButton href="mailto:tlachman4@gmail.com">Email me</CTAButton>
            <CTAButton
              href="https://www.linkedin.com/in/trevor-lachman/"
              variant="ghost"
            >
              Say hi on LinkedIn
            </CTAButton>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <StatCard
              dark
              label="Timezone"
              value="US/Eastern"
              footnote="Available mornings & early afternoons"
            />
            <StatCard
              dark
              label="Response"
              value="~24 hours"
              footnote="Faster for collaborators"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick links</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {methods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                className="group block rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  {method.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {method.detail}
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  {method.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
