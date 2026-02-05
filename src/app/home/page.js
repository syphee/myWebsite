"use client";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
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
      <HomeBtn />

      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}
      <section className="flex">
        <div className="h-auto m-auto">
          <div className="flex flex-wrap flex-rows flex-spacing-5">
            <img
              className="bg-blue-500 m-auto mr-5 p-auto hidden md:block lg:block"
              alt="My portrait photo-sm"
            />
            <NavDrawer
              className="p-5"
              miniTitle={"I am,"}
              title={"James Landicho"}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-spacing-5 h-50 m-10 p-auto justify-center">
        <img
              className="col bg-blue-500 block mb-10"
              alt="My portrait photo-lg"
            />
        <h1>
          I am James, an aspiring
          <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
            Full-Stack Software Engineer 
          </span>
          from the Philippines.
        </h1>
        <br/>
        <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book!
        </span>

        <div className="flex flex-rows justify-left">
          <button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full p-1">
  <button class="flex w-full bg-gray-900 text-white rounded-full p-2">
  My resume
     </button>
</button>
<button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
  <span class="flex w-full bg-gray-900 text-white rounded p-2">
  Gradient border
     </span>
</button>


          
          <button className="rounded-full p-2 m-1 border-2 border-indigo-500 mt-5">Education </button>
          <button className="rounded-full p-2 m-1 border-2 border-indigo-500 mt-5">Interests</button>
        </div>
      </section>

      <section className="flex h-70">
        <div className="h-70 m-auto">
          <div className="group relative max-w-sm rounded-xl border border-white/10 bg-white/70 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/60">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 transition group-hover:opacity-100"></div>

            <h3 className="relative text-lg font-semibold text-slate-900 dark:text-white">
              Glass Card
            </h3>

            <p className="relative mt-2 text-sm text-slate-600 dark:text-slate-300">
              Subtle gradient, smooth hover, modern feel.
            </p>
          </div>

          <div className="group relative max-w-sm rounded-xl border border-white/10 bg-white/70 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/60">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 transition group-hover:opacity-100"></div>

            <h3 className="relative text-lg font-semibold text-slate-900 dark:text-white">
              Glass Card
            </h3>

            <p className="relative mt-2 text-sm text-slate-600 dark:text-slate-300">
              Subtle gradient, smooth hover, modern feel.
            </p>
          </div>

          <div className="group relative max-w-sm rounded-xl border border-white/10 bg-white/70 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/60">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 transition group-hover:opacity-100"></div>

            <h3 className="relative text-lg font-semibold text-slate-900 dark:text-white">
              Glass Card
            </h3>

            <p className="relative mt-2 text-sm text-slate-600 dark:text-slate-300">
              Subtle gradient, smooth hover, modern feel.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
