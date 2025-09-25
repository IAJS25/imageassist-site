"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dropdowns
  const [specOpen, setSpecOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Refs for closing on outside click
  const specBtnRef = useRef<HTMLButtonElement>(null);
  const specMenuRef = useRef<HTMLDivElement>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;

      // Specialties
      if (
        specOpen &&
        specMenuRef.current &&
        specBtnRef.current &&
        !specMenuRef.current.contains(target) &&
        !specBtnRef.current.contains(target)
      ) {
        setSpecOpen(false);
      }

      // Resources
      if (
        resourcesOpen &&
        resourcesMenuRef.current &&
        resourcesBtnRef.current &&
        !resourcesMenuRef.current.contains(target) &&
        !resourcesBtnRef.current.contains(target)
      ) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [specOpen, resourcesOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" aria-label="ImageAssist Home" className="flex items-center gap-3">
            <img src="/ImageAssist-logo-a.png" alt="ImageAssist Logo" className="h-9 w-auto" />
            <span className="hidden sm:inline text-lg font-semibold" style={{ color: "#114b79" }}>
              ImageAssist
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/features" className="hover:text-[#114b79]">
              Features
            </Link>

            {/* Specialties dropdown */}
            <div className="relative">
              <button
                ref={specBtnRef}
                onClick={() => setSpecOpen((v) => !v)}
                className="inline-flex items-center gap-1 hover:text-[#114b79]"
                aria-haspopup="true"
                aria-expanded={specOpen}
              >
                Specialties
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                ref={specMenuRef}
                className={`absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl ring-1 ring-slate-200 p-2 transition ${
                  specOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                role="menu"
              >
                <Link href="/specialties/plastic-surgery" className="block rounded-lg px-3 py-2 hover:bg-slate-50">
                  Plastic Surgery
                </Link>
                <Link href="/specialties/medspas" className="block rounded-lg px-3 py-2 hover:bg-slate-50">
                  MedSpas
                </Link>
                <Link href="/specialties/hospitals" className="block rounded-lg px-3 py-2 hover:bg-slate-50">
                  Hospitals
                </Link>
              </div>
            </div>

            <Link href="/pricing" className="hover:text-[#114b79]">
              Pricing
            </Link>

            <Link href="/faqs" className="hover:text-[#114b79]">
              FAQs
            </Link>

            {/* Resources dropdown (Blog, Guides) */}
            <div className="relative">
              <button
                ref={resourcesBtnRef}
                onClick={() => setResourcesOpen((v) => !v)}
                className="inline-flex items-center gap-1 hover:text-[#114b79]"
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
              >
                Resources
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                ref={resourcesMenuRef}
                className={`absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl ring-1 ring-slate-200 p-2 transition ${
                  resourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                role="menu"
              >
                <Link href="/blog" className="block rounded-lg px-3 py-2 hover:bg-slate-50">
                  Blog
                </Link>
                <Link href="/guides" className="block rounded-lg px-3 py-2 hover:bg-slate-50">
                  Guides
                </Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-[#114b79]">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs — Log In → Get Started → Book a Demo */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.imageassist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
            >
              Log In
            </a>

            <a
              href="https://app.imageassist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
              style={{ background: "#114b79" }}
            >
              Get Started
            </a>

            <Link
              href="https://calendly.com/sadlowe-imageassist/imageassist-demo-clone?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white border hover:opacity-90 transition"
              style={{ background: "#4fafd1" }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-slate-300"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2 text-sm">
            <Link href="/features" className="block py-2">
              Features
            </Link>

            {/* Specialties (mobile) */}
            <details className="group">
              <summary className="cursor-pointer py-2 flex items-center justify-between">
                <span>Specialties</span>
                <span className="group-open:rotate-180 transition">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="pl-3 mt-1 space-y-1">
                <Link href="/specialties/plastic-surgery" className="block py-1.5">
                  Plastic Surgery
                </Link>
                <Link href="/specialties/medspas" className="block py-1.5">
                  MedSpas
                </Link>
                <Link href="/specialties/hospitals" className="block py-1.5">
                  Hospitals
                </Link>
              </div>
            </details>

            <Link href="/pricing" className="block py-2">
              Pricing
            </Link>

            <Link href="/faqs" className="block py-2">
              FAQs
            </Link>

            {/* Resources (mobile) */}
            <details className="group">
              <summary className="cursor-pointer py-2 flex items-center justify-between">
                <span>Resources</span>
                <span className="group-open:rotate-180 transition">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="pl-3 mt-1 space-y-1">
                <Link href="/blog" className="block py-1.5">
                  Blog
                </Link>
                <Link href="/guides" className="block py-1.5">
                  Guides
                </Link>
              </div>
            </details>

            <Link href="/contact" className="block py-2">
              Contact
            </Link>

            {/* Mobile CTAs — Log In → Get Started → Book a Demo */}
            <div className="pt-2 flex gap-2">
              <a
                href="https://app.imageassist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2"
              >
                Log In
              </a>

              <a
                href="https://app.imageassist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-lg px-4 py-2 text-white font-semibold"
                style={{ background: "#114b79" }}
              >
                Get Started
              </a>

              <Link
                href="https://calendly.com/sadlowe-imageassist/imageassist-demo-clone?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-lg px-4 py-2 text-white font-semibold"
                style={{ background: "#4fafd1" }}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
