"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  // Teams plan calculator
  const minSeats = 2;
  const [seats, setSeats] = useState<number>(minSeats);
  const seatPrice = 27; // $27/seat → $54 for 2 seats (matches your screenshot)
  const monthlyTotal = seats * seatPrice;

  return (
    <section id="pricing" className="bg-[#114b79] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold">
          Simple, Scalable Pricing for Every Practice
        </h2>
        <p className="mt-3 text-center text-slate-100">
          ✨ Try ImageAssist Free for 14 Days • No long-term commitment, cancel anytime
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Individual */}
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <h3 className="text-white/90 font-semibold">Individual</h3>
            <p className="mt-2 text-3xl font-bold">${36} <span className="text-base font-medium">/ month</span></p>

            <div className="mt-5">
              <a
                href="https://app.imageassist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-white text-[#114b79] font-semibold py-3 hover:opacity-90 transition"
              >
                Start 14-Day Free Trial
              </a>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-100">
              {[
                "iOS app—works on iPhone, iPad, and Web",
                "Capture point-of-care clinical photos and videos with SmartGuides",
                "Automatic background removal",
                "Import photos from your photo roll or desktop to stay organized",
                "Search & manage patient photos by name, date, or procedure",
                "Export securely with auto file naming",
                "HIPAA-compliant unlimited cloud storage",
                "Webviewer platform for easy photo management",
                "EMR integration included",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white/70"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams (Best Value) */}
          <div className="rounded-2xl bg-white p-6 text-slate-900 ring-1 ring-slate-200 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Teams</h3>
              <span className="text-xs font-semibold rounded-full bg-[#f4f1ec] px-2 py-1 text-[#114b79]">
                Best Value
              </span>
            </div>

            <p className="mt-2 text-3xl font-extrabold">
              ${monthlyTotal} <span className="text-base font-medium text-slate-500">/ month</span>
            </p>

            {/* Seat selector */}
            <div className="mt-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <span className="text-slate-600">Total Seats:</span>
                <div className="inline-flex items-center gap-2">
                  <button
                    aria-label="decrease seats"
                    onClick={() => setSeats((s) => Math.max(minSeats, s - 1))}
                    className="h-8 w-8 rounded-md border border-slate-300 hover:bg-slate-50"
                  >
                    –
                  </button>
                  <span className="w-8 text-center font-semibold">{seats}</span>
                  <button
                    aria-label="increase seats"
                    onClick={() => setSeats((s) => s + 1)}
                    className="h-8 w-8 rounded-md border border-slate-300 hover:bg-slate-50"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-1 text-xs text-slate-500">(${seatPrice}/seat)</div>
            </div>

            <div className="mt-5">
              <a
                href="https://app.imageassist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-[#114b79] text-white font-semibold py-3 hover:opacity-90 transition"
              >
                Start 14-Day Free Trial
              </a>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                "Centralized team photo management",
                "Admin tools to manage users and permissions",
                "Shared HIPAA-compliant cloud storage for your practice",
                "Easy EMR integrations, including 4D EMR",
                "Volume pricing available and flexible team scaling—add/remove users anytime",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#114b79]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <h3 className="text-white/90 font-semibold">Enterprise</h3>
            <p className="mt-2 text-3xl font-bold">Contact Sales</p>

            <div className="mt-5">
              <Link
                href="/contact"
                className="block w-full text-center rounded-full bg-white text-[#114b79] font-semibold py-3 hover:opacity-90 transition"
              >
                Get in Touch
              </Link>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-100">
              {[
                "Dedicated enterprise onboarding",
                "Custom API and EMR integrations",
                "Enterprise-grade security & compliance support",
                "Admin & reporting dashboards",
                "Priority customer support",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white/70"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-sm text-slate-200">
          Currently a trainee or working outside the US?{" "}
          <Link href="/contact" className="underline font-medium">
            Contact Sales
          </Link>{" "}
          for special pricing!
        </p>
      </div>
    </section>
  );
}
