// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-12 md:px-12 md:py-16 shadow-xl">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT: Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
              Software Engineer · Builder · Tinkerer
            </span>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Trevor Lachman
                </span>
                .
              </h1>

              <p className="text-slate-200 text-base md:text-lg max-w-xl">
                Software Engineer at The Home Depot focused on pricing systems,
                developer tooling, and reliable, high-performance applications —
                from cloud services to front-end experiences.
              </p>
            </div>

            {/* Highlights / Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 border border-slate-700">
                Next.js &amp; TypeScript
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 border border-slate-700">
                GCP &amp; Distributed Systems
              </span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 border border-slate-700">
                Rust, Python &amp; Dev Tools
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-cyan-300 transition"
              >
                View Projects
              </a>

              <a
                // href="/TrevorLachmanResume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800/80 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT: “Profile” / Highlights card */}
          <div className="md:justify-self-end">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-700/70 shadow-lg p-5 flex flex-col gap-4">
              {/* Temp photo block — replace with your own later */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500 flex items-center justify-center">
                {/* Replace this with a real image later */}
                {/* <Image
                  src="/trevor-headshot.jpg"
                  alt="Trevor Lachman"
                  fill
                  className="object-cover"
                /> */}
                <span className="text-sm font-medium text-slate-100/90">
                  [ Temp placeholder — add a photo here ]
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-white">
                  Building systems that actually ship
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I work across the stack — from React front-ends to cloud
                  infrastructure — with a focus on clean abstractions, fast
                  feedback loops, and reliable deployments.
                </p>
              </div>

              {/* Little stats row */}
              <div className="grid grid-cols-3 gap-3 text-xs text-slate-200">
                <div className="rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2">
                  <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Experience
                  </p>
                  <p className="font-semibold">Home Depot</p>
                </div>
                <div className="rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2">
                  <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Focus
                  </p>
                  <p className="font-semibold">Pricing &amp; Platform</p>
                </div>
                <div className="rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2">
                  <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
                    Stack
                  </p>
                  <p className="font-semibold">React · GCP · Rust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
