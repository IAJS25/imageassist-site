import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#114b79] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" aria-label="ImageAssist Home" className="flex items-center gap-3 mb-4">
              <img
                src="/ImageAssist Logo White.png"
                alt="ImageAssist Logo"
                className="h-9 w-auto"
              />
              <span className="text-lg font-semibold">ImageAssist</span>
            </Link>
            <p className="text-sm text-slate-200">
              The new standard in clinical photography—HIPAA-compliant, simple, and built for medical teams.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:underline">Features</Link></li>
              <li><Link href="/specialties/plastic-surgery" className="hover:underline">Pricing</Link></li>
              <li><Link href="/pricing" className="hover:underline">Blog</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/blog" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><a href="mailto:hello@imageassist.com" className="hover:underline">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
              Connect
            </h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/imageassist" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="h-6 w-6 hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-11 19H5V9h3v10zM6.5 7.7C5.6 7.7 5 7 5 6.2c0-.8.6-1.5 1.5-1.5S8 5.4 8 6.2c0 .8-.6 1.5-1.5 1.5zm13.5 11.3h-3v-5.6c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.7h-3V9h2.9v1.4h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.5 1.9 3.5 4.3v5.8z"/>
                </svg>
              </a>
              <a href="https://x.com/imageassist" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="h-6 w-6 hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.49 8.49 0 01-2.71 1.03 4.26 4.26 0 00-7.37 3.89A12.09 12.09 0 013 4.8a4.26 4.26 0 001.32 5.68c-.64-.02-1.25-.2-1.78-.49v.05a4.26 4.26 0 003.42 4.18c-.54.15-1.1.18-1.65.07a4.27 4.27 0 003.98 2.95A8.55 8.55 0 012 19.54 12.06 12.06 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0022.46 6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-slate-200">
          © {new Date().getFullYear()} ImageAssist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}