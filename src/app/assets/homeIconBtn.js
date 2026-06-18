"use client";
import Link from "next/link";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

const navLinks = [
  { title: "Home",           href: "/home",      external: false },
  { title: "Projects",       href: "/projects",  external: false },
  { title: "Interests",      href: "/interests", external: false },
  { title: "LinkedIn",       href: "https://www.linkedin.com/feed/", external: true },
  { title: "Let's connect!", href: "mailto:jameslandicho5@gmail.com?subject=Subject&body=Hi!%20Let%27s%20connect!", external: true },
];

export default function HomeBtn() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
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

      {/* Full-screen glass overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Glass background — click outside links to close */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Close menu"
        >
          <XMarkIcon className="w-7 h-7" />
        </button>

        {/* Centred nav links */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white text-3xl md:text-5xl font-light tracking-widest transition-colors duration-200"
              >
                {link.title}
              </a>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white text-3xl md:text-5xl font-light tracking-widest transition-colors duration-200"
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        {/* Bottom name tag */}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-xs tracking-widest uppercase">
          James Landicho
        </p>
      </div>
    </>
  );
}
