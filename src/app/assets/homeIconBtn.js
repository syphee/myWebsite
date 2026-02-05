"use client";
import Link from "next/link";
import { Bars3Icon, HomeIcon } from "@heroicons/react/20/solid";
import "../assets/home.css";

export default function homeIconBtn() {
  return (
    <div className="fixed ">
    <div className="flex justify-between">
      <Link href="/home">
        <HomeIcon className=" w-6 h-6 m-5 hover:text-sky-400 duration-500 " />
      </Link>
      <nav className="w-6 h-6 m-5 hover:text-sky-400 duration-500 ">
        <Link href="#">
          <Bars3Icon />
        </Link>
      </nav>
    </div>
    </div>
  );
}
