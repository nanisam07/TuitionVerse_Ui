"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Find Tutors", href: "/tutors" },
  { name: "Become a Tutor", href: "/join" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-[100] w-full px-4 py-6">
      <nav 
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled 
          ? "rounded-full border border-white/40 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl px-6 py-2" 
          : "rounded-3xl border border-transparent bg-transparent px-4 py-2"
        }`}
      >
        {/* LEFT: LOGO & TRUST BADGE */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20 transition-transform group-hover:rotate-6">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Tuition<span className="text-indigo-600">verse</span>
            </span>
          </Link>

          {/* Premium Trust Badge - Hidden on small mobile */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Trusted by 2,000+ Parents
          </div>
        </div>

        {/* CENTER: NAV LINKS */}
        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900 md:block"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute inset-x-4 top-24 z-50 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-slate-900"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Link
                  href="/login"
                  className="flex h-14 items-center justify-center rounded-2xl bg-slate-100 font-bold text-slate-900"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="flex h-14 items-center justify-center rounded-2xl bg-indigo-600 font-bold text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}