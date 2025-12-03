import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-10 text-slate-100">
      <h1 className="text-4xl font-bold text-white">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="CodeCooks"
          description="A recipe sharing and meal planning web app built with Next.js, Tailwind, and PostgreSQL."
          link="https://github.com/"
        />

        <ProjectCard
          title="Mech Programming Language"
          description="A custom language and compiler built in Rust, with a working interpreter and test suite."
          link="https://github.com/"
        />

        <ProjectCard
          title="Autonomous Car Capstone"
          description="Miniature driverless car using ROS2, EKF localization, and real-time motion planning."
          link="https://github.com/"
        />
      </div>
    </div>
  );
}
