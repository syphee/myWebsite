/* eslint-disable @next/next/no-img-element */
"use client";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import Header from "../assets/header";
import Footer from "../assets/footer";

import HomeBtn from "../assets/homeIconBtn";
import "../assets/home.css";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import NavDrawer from "../assets/navDrawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import PortraitPic_sm from "./images/6316674175816372309.png";
import PortraitPic_lg from "./images/6316674175816372311.png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LandingPage() {
  function hideNav() {
    setVisible(false);
  }
  function showNav() {
    setVisible(true);
  }

  const [visible, setVisible] = useState(false);

  const introSectionButtons = [
    { id: 1, label: "My resume", from: "from-blue-500", to: "to-purple-500" },
    {
      id: 2,
      label: "My Interests",
      from: "from-blue-500",
      to: "to-purple-500",
    },
    { id: 3, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  ];

  const myProjectData = [
    { id: 1, label: "My resume", from: "from-blue-500", to: "to-purple-500" },
    {
      id: 2,
      label: "My Interests",
      from: "from-blue-500",
      to: "to-purple-500",
    },
    { id: 3, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 4, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 5, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 6, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 7, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 8, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 9, label: "Education", from: "from-blue-500", to: "to-purple-500" },
    { id: 10, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  ];

  return (
    <main className="h-screen">
      <HomeBtn />

      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}

      {/* Landing */}
      <section className="flex ">
        <div className="h-auto m-auto ">
          <div className="flex flex-wrap flex-rows flex-spacing-5  items-center">
            <Image
              src={PortraitPic_sm}
              width={400}
              height={400}
              className="bg-blue-500 m-auto mr-5 p-auto hidden lg:block lg:block"
              alt="My portrait photo-sm"
            />
            <NavDrawer
              className=""
              miniTitle={"I am,"}
              title={"James Landicho"}
            />
          </div>
        </div>
      </section>

      {/* About me short */}
      <section className="h-screen flex justify-center w-full">
        <div className="max-w-7xl mx-auto px-4  md:flex-row items-center gap-10">
          <div className="">
            <Image
              src={PortraitPic_lg}
              width={500}
              height={500}
              className="bg-blue-500 block mb-10"
              alt="My portrait photo-lg"
            />
            <h1 className="font-bold text-2xl">
              I am James, an aspiring
              <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
                Full-Stack Software Engineer
              </span>
              from the Philippines.
            </h1>
          </div>

          <br />
          <div className="mt-5  ">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book!
            </span>
          </div>

          <div className="">
            <div className="">
              {introSectionButtons.map((btn) => (
                <button
                  key={btn.id}
                  className={`bg-gradient-to-r ${btn.from} ${btn.to} mt-5 mr-5 p-[1px] rounded-lg transition-all hover:opacity-90 active:scale-95`}
                >
                  <span className="flex w-full bg-gray-900 text-white rounded-[7px] px-6 py-2 font-semibold">
                    {btn.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My projects */}
      <section className="h-screen flex-wrap flex-col w-full ">
        <div className="max-w-7xl mx-auto px-4  md:flex-row  gap-10">
          {/* header */}
          <div>
            <h1 className="font-bold text-2xl">
              My
              <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
                Projects
              </span>
            </h1>
          </div>

          <div className="w-full">
            <Carousel className="">
              <CarouselContent>
                {myProjectData.map((btn) => (
                  <CarouselItem
                    key={btn.id}
                    className=" basis-2/3 sm:basis-1/2 md:basis-3/7"
                  >
                    <Card className="m-5 mx-auto  pt-0 h-full flex flex-col">
                      <div className="absolute aspect-video bg-black/35" />
                      <img
                        src={PortraitPic_sm}
                        width={800}
                        height={800}
                        alt="Event cover"
                        className="relative z-20 w-100 aspect-video object-cover brightness-60 grayscale dark:brightness-40"
                      />
                      <CardAction className="mx-2">
                        <Badge variant="secondary" className="">
                          Web
                        </Badge>
                      </CardAction>
                      <CardHeader>
                        <CardTitle>Design systems meetup</CardTitle>

                        <CardDescription className="line-clamp-4">
                          A practical talk on component APIs, accessibility, and
                          shipping faster.
                        </CardDescription>
                      </CardHeader>
                      <CardAction className="mx-2 bg-gradient-to-r from-blue-500 to-purple-500 mt-5 mr-5 p-[1px] rounded-lg transition-all ">
                        <Badge variant="secondary">React</Badge>
                      </CardAction>
                      <CardFooter className="flex space-x-4">
                        <Button className="w-full bg-green-500 text-white">
                          Live
                        </Button>
                        <Button className="w-full bg-transparent text-white border">Source Code</Button>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}

                <CarouselItem className="sm:basis-1/2 md:basis-1/3">
                  <Card className="relative m-5 mx-auto h-full flex flex-col items-center justify-center pt-0 overflow-hidden shadow-md">
                    {/* Static Gradient & Centered Text - No hover triggers */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500/20 to-pink-500/20">
                      <span className=" text-slate-900 dark:text-white">
                        <a>View Projects overview</a>
                      </span>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="hidden lg:block">
                        <CarouselPrevious  />
              <CarouselNext />
              </div>
      
            </Carousel>
            {/* <ScrollArea
              className="h-max w-[400px] rounded-md p-4"
             orientation="horizontal"
            >
                 <div className="flex w-max space-x-4"> 
                {myProjectData.map((btn) => (
                  <div key={btn.id}>
                    <Card className="m-5 mx-auto  pt-0">
                      <div className="absolute aspect-video bg-black/35" />
                      <img
                        src={PortraitPic_sm}
                        width={800}
                        height={800}
                        alt="Event cover"
                        className="relative z-20 w-100 aspect-video object-cover brightness-60 grayscale dark:brightness-40"
                      />
                      <CardHeader>
                        <CardAction>
                          <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>Design systems meetup</CardTitle>
                        <CardDescription>
                          A practical talk on component APIs, accessibility, and
                          shipping faster.
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full">View Event</Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
                </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea> */}
          </div>
        </div>
      </section>

      <section className="flex h-70">
        {/* <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://avatar.vercel.sh/shadcn1"
            width={500}
            height={500}
            alt="Event cover"
            className="relative z-20 w-100 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>
            <CardTitle>Design systems meetup</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card> */}

        {/* <div className="h-70 m-auto">
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
        </div> */}
      </section>

      <Footer />
    </main>
  );
}
