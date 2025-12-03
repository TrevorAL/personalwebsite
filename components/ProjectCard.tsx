import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="transition rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md shadow-black/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg">
      <h2 className="mb-2 text-2xl font-semibold text-white">{title}</h2>
      <p className="mb-4 text-slate-200">{description}</p>
      <Link
        href={link}
        target="_blank"
        className="text-sm font-semibold text-cyan-200 hover:text-cyan-100"
      >
        View Project →
      </Link>
    </div>
  );
}
