import CTAButton from "@/components/CTAButton";
import FeatureItem from "@/components/FeatureItem";
import Pill from "@/components/Pill";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      <section className="relative px-6 py-14 text-white md:px-12">
        <div className="pointer-events-none absolute -left-36 -top-10 h-64 w-64 rounded-full bg-cyan-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-24 h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="relative grid items-start gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <Pill>Software Engineer</Pill>
              <Pill tone="cyan">Pricing &amp; Platforms</Pill>
              <Pill tone="amber">Builder</Pill>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                Atlanta · Remote-friendly
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Trevor Lachman
                </span>
                . I build reliable systems and fast, intentional products.
              </h1>
              <p className="max-w-2xl text-base text-slate-200 md:text-lg">
                Software Engineer at The Home Depot working on pricing systems,
                developer tooling, and experiences that stay resilient when they
                scale — from cloud services to front-end interactions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CTAButton href="/projects">View projects</CTAButton>
              <CTAButton href="/about" variant="ghost">
                About me
              </CTAButton>
              <CTAButton href="/contact" variant="ghost">
                Get in touch
              </CTAButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard
                dark
                label="Platform engineering"
                value="Pricing @ THD"
                footnote="Owns reliability & velocity"
              />
              <StatCard
                dark
                label="End-to-end shipping"
                value="Frontend → infra"
                footnote="TypeScript, Rust, GCP"
              />
              <StatCard
                dark
                label="Years building"
                value="8+"
                footnote="Products, tools, experiments"
              />
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Current focus
              </p>
              <Pill tone="cyan">2025</Pill>
            </div>

            <div className="space-y-3">
              <FeatureItem
                accent="cyan"
                title="Pricing Platform"
                description="High-throughput services with clean contracts, observability, and fast rollback paths."
              />
              <FeatureItem
                accent="indigo"
                title="Developer Experience"
                description="Tools and workflows that keep feedback loops short — build systems, linting, CI."
              />
              <FeatureItem
                accent="amber"
                title="Product polish"
                description="Interfaces that feel intentional, performant, and approachable across devices."
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Toolkit
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill tone="cyan">Next.js</Pill>
                <Pill>TypeScript</Pill>
                <Pill>GCP</Pill>
                <Pill>Rust</Pill>
                <Pill>Python</Pill>
                <Pill>Postgres</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-slate-100">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Projects &amp; experiments
          </p>
          <h2 className="text-3xl font-semibold text-white">Things I&apos;ve built</h2>
          <p className="max-w-2xl text-slate-200">
            A sample of products, tools, and experiments. See more detail on the projects
            page.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="CodeCooks"
            description="A recipe sharing and meal planning web app with collaborative lists, saved cookbooks, and fast search."
            link="https://github.com/"
          />
          <ProjectCard
            title="Mech Programming Language"
            description="Custom language + compiler in Rust with an interpreter, standard library, and test suite."
            link="https://github.com/"
          />
          <ProjectCard
            title="Autonomous Car Capstone"
            description="Miniature driverless car using ROS2, EKF localization, and real-time motion planning."
            link="https://github.com/"
          />
          <ProjectCard
            title="Developer Tooling"
            description="CI/CD templates, linting pipelines, and deployment tooling to make shipping safer and faster."
            link="https://github.com/"
          />
        </div>
      </section>

      <section className="space-y-6 text-slate-100">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            How I work
          </p>
          <h2 className="text-3xl font-semibold text-white">Principles</h2>
          <p className="max-w-2xl text-slate-200">
            A few themes that guide how I design, build, and ship systems and interfaces.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            label="Reliability first"
            value="Design for failure"
            footnote="Observability, safe deploys, rapid rollback."
            dark
          />
          <StatCard
            label="Fast feedback"
            value="Short loops"
            footnote="Great DX makes teams ship calm, not just fast."
            dark
          />
          <StatCard
            label="Shape the UX"
            value="Polish the edges"
            footnote="Clear flows, purposeful motion, accessible defaults."
            dark
          />
        </div>
      </section>
    </div>
  );
}
