"use client";
import Link from "next/link";
import { Bars3Icon, HomeIcon } from "@heroicons/react/20/solid";
import "../assets/home.css";

export default function homeIconBtn() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex "> 
        {/* Use Next.js Link instead of <a> for better performance */}
        <Link href="/home">
          <HomeIcon className="cursor-pointer w-6 h-6 m-5 text-white hover:text-sky-400 transition-colors duration-500" />
        </Link>
        
        <nav className="w-6 h-6 m-5 text-white hover:text-sky-400 transition-colors duration-500">
          <Link href="#">
            <Bars3Icon />
          </Link>
        </nav>
      </div>
    </div>
  );
}
