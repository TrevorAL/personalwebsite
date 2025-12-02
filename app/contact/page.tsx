export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Contact</h1>

      <p className="text-lg text-gray-700">
        Feel free to reach out anytime — whether it’s about software, projects
        or collaboration.
      </p>

      <div className="space-y-2">
        <p className="text-lg">
          📧{" "}
          <a href="mailto:tlachman4@gmail.com" className="underline">
            trevorlachman@gmail.com
          </a>
        </p>

        <p className="text-lg">
          💼{" "}
          <a
            href="https://www.linkedin.com/in/trevor-lachman/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </p>

        <p className="text-lg">
          🧑‍💻{" "}
          <a
            href="https://github.com/TrevorAL"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
