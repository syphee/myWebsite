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
import { useState, useEffect } from "react";
import NavDrawer from "../assets/navDrawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GridPattern } from "@/registry/magicui/grid-pattern";

import PortraitPic_sm from "./images/6316674175816372309.png";
import PortraitPic_lg from "./images/6316674175816372311.png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/registry/magicui/magic-card";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/registry/magicui/dot-pattern";
import { LightRays } from "@/registry/magicui/light-rays";

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
  const { theme } = useTheme();
  function hideNav() {
    setVisible(false);
  }
  function showNav() {
    setVisible(true);
  }

  const [api, setApi] = useState();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

  const myTechStacks = [
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
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        {/* Content Layer */}
        <div className="z-10 h-auto m-auto">
          <div className="flex flex-wrap flex-rows flex-spacing-5 items-center">
            <Image
              src={PortraitPic_sm}
              width={400}
              height={400}
              className="bg-blue-500 m-auto mr-5 p-auto hidden lg:block"
              alt="My portrait photo-sm"
            />
            <NavDrawer
              className=""
              miniTitle={"My"}
              pretext={"> "}
              title={"Projects"}
              typingContent={["Ocularia","BiteCoin"]}
            />
          </div>
        </div>

        <LightRays />
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
      <section className=" flex-wrap flex-col w-full ">
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
            <Carousel className="" setApi={setApi}>
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
                        <Button className="w-full bg-transparent text-white border">
                          Source Code
                        </Button>
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
                <CarouselPrevious />
                <CarouselNext />
              </div>

              <div className="text-muted-foreground py-2 text-center text-sm">
                {current} of {count}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="flex-wrap flex-col w-full my-5">
        <div className="max-w-3xl mx-auto px-4  md:flex-row  gap-10">
          {/* header */}
          <div>
            <h1 className="font-bold text-2xl text-center">Tech Stacks</h1>
          </div>

          <div className="my-5">
            <h1 className="font-bold text-lg">Front-end</h1>
            <div className="flex-row">
              {myTechStacks.map((btn) => (
                <span
                  key={btn.id}
                  className="  rounded-[7px] px-2 py-2 font-semibold"
                >
                  <Badge>{btn.label}</Badge>
                </span>
              ))}
            </div>
          </div>

          <div className="my-5">
            <h1 className="font-bold text-lg">Back-end</h1>
            <div className="flex-row">
              {myTechStacks.map((btn) => (
                <span
                  key={btn.id}
                  className="  rounded-[7px] px-2 py-2 font-semibold"
                >
                  <Badge>{btn.label}</Badge>
                </span>
              ))}
            </div>
          </div>

          <div className="my-5">
            <h1 className="font-bold text-lg">Databases</h1>
            <div className="flex-row">
              {myTechStacks.map((btn) => (
                <span
                  key={btn.id}
                  className="  rounded-[7px] px-2 py-2 font-semibold"
                >
                  <Badge>{btn.label}</Badge>
                </span>
              ))}
            </div>
          </div>

          <div className="my-5">
            <h1 className="font-bold text-lg">Services</h1>
            <div className="flex-row">
              {myTechStacks.map((btn) => (
                <span
                  key={btn.id}
                  className="  rounded-[7px] px-2 py-2 font-semibold"
                >
                  <Badge>{btn.label}</Badge>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experiences */}

      <section className=" flex-wrap flex-col w-full ">
        <div className="max-w-3xl mx-auto px-4  md:flex-row  gap-10">
          {/* header */}
          <div>
            <h1 className="font-bold text-2xl">
              My
              <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
                Work Experience
              </span>
            </h1>
          </div>

          <div className="w-full ">
            {myProjectData.map((btn) => (
              <div key={btn.id} className="flex">
                <Card className="m-5 mx-auto  pt-0 h-full w-full flex-row items-center">
                  <Image
                    src={PortraitPic_lg}
                    width={50}
                    height={50}
                    className="bg-blue-500 "
                    alt="My portrait photo-lg"
                  />
                  <div className="w-full">
                    <CardTitle className="text-lg my-3">
                      Full Stack Software Developer
                    </CardTitle>

                    <span className="opacity-50">
                      Monetary Authority of Singapore
                    </span>
                    <CardDescription className="line-clamp-4 mt-3">
                      A practical talk on component APIs, accessibility, and
                      shipping faster.A practical talk on component APIs,
                      accessibility, and shipping faster.A practical talk on
                      component APIs, accessibility, and shipping faster.
                    </CardDescription>

                    <div className="flex flex-wrap max-w-100 gap-2 mt-5">
                      {/* 2. Add w-fit to the gradient wrapper */}
                      {myTechStacks.map((btn) => (
                        <span
                          key={btn.id}
                          className="  rounded-[7px]  font-semibold"
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500  p-[1px] rounded-lg">
                            <Badge variant="secondary">React</Badge>
                          </div>
                        </span>
                      ))}
                    </div>

                    <CardAction className="mx-2  mt-5 mr-5 p-[1px] rounded-lg transition-all ">
                      Mar 2024 - January 2025
                    </CardAction>
                  </div>

                  {/* <CardFooter className="flex space-x-4">
                    <Button className="w-full bg-green-500 text-white">
                      Live
                    </Button>
                    <Button className="w-full bg-transparent text-white border">
                      Source Code
                    </Button>
                  </CardFooter> */}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
