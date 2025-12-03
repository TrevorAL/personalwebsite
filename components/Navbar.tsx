"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-white">
        <Link href="/" className="text-xl font-semibold hover:text-cyan-200">
          Trevor Lachman
        </Link>

        <div className="hidden gap-6 md:flex">
          <Link className="hover:text-cyan-200" href="/about">
            About
          </Link>
          <Link className="hover:text-cyan-200" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-cyan-200" href="/contact">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl hover:text-cyan-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="space-y-2 border-t border-white/10 bg-slate-900/80 px-4 pb-4 text-white md:hidden">
          <Link className="block hover:text-cyan-200" href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link className="block hover:text-cyan-200" href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link className="block hover:text-cyan-200" href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
