export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-900/60 py-6 text-center text-slate-300 backdrop-blur">
      <p>
        © {new Date().getFullYear()} Trevor Lachman. All rights reserved.
      </p>
    </footer>
  );
}
