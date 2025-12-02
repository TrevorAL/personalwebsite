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
    <div className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link} target="_blank" className="text-blue-600 underline">
        View Project →
      </Link>
    </div>
  );
}
