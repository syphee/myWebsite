"use client";
import Link from "next/link";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

const navLinks = [
  { title: "Home",      href: "/home",      external: false },
  { title: "Projects",  href: "/projects",  external: false },
  { title: "Interests", href: "/interests", external: false },
  { title: "LinkedIn",  href: "https://www.linkedin.com/feed/", external: true },
  { title: "Let's connect!", href: "mailto:jameslandicho5@gmail.com?subject=Subject&body=Hi!%20Let%27s%20connect!", external: true },
];

export default function HomeBtn() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex">
          <Link href="/home">
            <HomeIcon className="cursor-pointer w-6 h-6 m-5 text-white hover:text-sky-400 transition-colors duration-500" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="w-6 h-6 m-5 text-white hover:text-sky-400 transition-colors duration-500"
            aria-label="Open menu"
          >
            <Bars3Icon />
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Glass panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-[110] flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-2xl flex flex-col p-8">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-white/70 hover:text-white transition-colors duration-200 mb-10"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Nav links */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white text-lg font-light tracking-wide transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white text-lg font-light tracking-wide transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.title}
                </Link>
              )
            )}
          </nav>

          {/* Bottom accent */}
          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs tracking-widest uppercase">James Landicho</p>
          </div>
        </div>
      </div>
    </>
  );
}
