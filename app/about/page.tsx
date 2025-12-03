import CTAButton from "@/components/CTAButton";
import Pill from "@/components/Pill";
import StatCard from "@/components/StatCard";

const highlights = [
  {
    title: "Full-stack & platform",
    detail: "From React/Next front-ends to GCP services with strong contracts.",
  },
  {
    title: "Systems that ship",
    detail: "Short feedback loops, observability, and safe deploy paths.",
  },
  {
    title: "Product polish",
    detail: "Interfaces that feel intentional, accessible, and responsive.",
  },
];

const journey = [
  {
    title: "Pricing platform @ The Home Depot",
    summary:
      "Building resilient pricing systems that stay fast at scale. Focused on clarity of APIs, rollout safety, and empowering teams to move quickly.",
    placeholder: "Pricing services, dashboards, observability",
  },
  {
    title: "Side projects & experiments",
    summary:
      "Recipe apps, custom languages, and DX tooling — I like exploring new abstractions and narrowing the gap between idea and iteration.",
    placeholder: "Recipe apps, CLIs, experimental UIs",
  },
  {
    title: "Foundations",
    summary:
      "CS background from Lehigh University. I lean on fundamentals — data structures, distributed systems, and readable code — to keep teams aligned.",
    placeholder: "Team photos, campus, or conference shots",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14 text-slate-100">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-3">
          <Pill tone="cyan">About</Pill>
          <h1 className="text-4xl font-bold text-white">
            Hi, I&apos;m Trevor.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
            I build resilient systems and intentional product experiences. I
            enjoy the mix of platform engineering, DX, and front-end craft —
            making sure teams can ship fast without sacrificing reliability or
            polish.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            dark
            label="Current"
            value="The Home Depot"
            footnote="Pricing platform & developer tooling"
          />
          <StatCard
            dark
            label="Toolkit"
            value="TS · Next.js · GCP · Rust"
            footnote="Pragmatic where it counts"
          />
          <StatCard
            dark
            label="Location"
            value="Brookline, MA"
            footnote="Remote-friendly"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <CTAButton href="/projects">View projects</CTAButton>
          <CTAButton href="/contact" variant="ghost">
            Get in touch
          </CTAButton>
        </div>
      </section>

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">What I focus on</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                {item.title}
              </p>
              <p className="mt-2 text-slate-200">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey with alternating imagery */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Journey
          </p>
          <h2 className="text-2xl font-semibold text-white">How I got here</h2>
          <p className="max-w-3xl text-slate-200">
            A few snapshots — swap in real photos or project visuals later. The
            layout alternates imagery to keep things visual as you scroll.
          </p>
        </div>

        <div className="space-y-12">
          {journey.map((item, idx) => {
            const imageFirst = idx % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div className={imageFirst ? "lg:order-2" : ""}>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-200">{item.summary}</p>
                </div>

                <div
                  className={`relative h-72 rounded-3xl border border-dashed border-white/20 bg-white/5 shadow-lg shadow-black/30 backdrop-blur ${
                    imageFirst ? "lg:order-1" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl" />
                  <div className="absolute inset-3 rounded-2xl border border-white/20 bg-slate-900/40" />
                  <div className="relative flex h-full items-center justify-center rounded-2xl text-center text-slate-300">
                    <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                      Image placeholder — {item.placeholder}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Personal notes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Beyond work</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Learning new languages (Rust lately) and exploring compilers.",
            "Designing calm interfaces with purposeful motion and typography.",
            "Running, coffee walks, and tinkering with small hardware projects.",
          ].map((note) => (
            <div
              key={note}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 shadow-md shadow-black/30 backdrop-blur"
            >
              {note}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
