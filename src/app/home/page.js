"use client";
import Header from "../assets/header";
import Footer from "../assets/footer";
import HomeBtn from "../assets/homeIconBtn";
import "../assets/home.css";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import NavDrawer from "../assets/navDrawer";

export default function LandingPage() {
  function hideNav() {
    setVisible(false);
  }
  function showNav() {
    setVisible(true);
  }

  const [visible, setVisible] = useState(false);

  return (
    <main className="h-screen">
      <div className="flex justify-center">
        <HomeBtn />
      </div>
      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}
      <section className="flex">
        <div className="h-70 m-auto">
          <NavDrawer miniTitle={"I am,"} title={"James Landicho"} />
        </div>
      </section>

      <section className="flex h-70">
        <div className="h-70 m-auto">
          <div class="group relative max-w-sm rounded-xl border border-white/10 bg-white/70 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/60">
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 transition group-hover:opacity-100"></div>

            <h3 class="relative text-lg font-semibold text-slate-900 dark:text-white">
              Glass Card
            </h3>

            <p class="relative mt-2 text-sm text-slate-600 dark:text-slate-300">
              Subtle gradient, smooth hover, modern feel.
            </p>
          </div>

          <div class="group relative max-w-sm rounded-xl border border-white/10 bg-white/70 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/60">
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 transition group-hover:opacity-100"></div>

            <h3 class="relative text-lg font-semibold text-slate-900 dark:text-white">
              Glass Card
            </h3>

            <p class="relative mt-2 text-sm text-slate-600 dark:text-slate-300">
              Subtle gradient, smooth hover, modern feel.
            </p>
          </div>

          <div class="group relative max-w-sm rounded-xl border border-white/10 bg-white/70 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/60">
            <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 transition group-hover:opacity-100"></div>

            <h3 class="relative text-lg font-semibold text-slate-900 dark:text-white">
              Glass Card
            </h3>

            <p class="relative mt-2 text-sm text-slate-600 dark:text-slate-300">
              Subtle gradient, smooth hover, modern feel.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
