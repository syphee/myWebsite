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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <section className="relative flex min-h-screen mb-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
              typingContent={["Ocularia", "BiteCoin"]}
            />
          </div>
        </div>

        <LightRays />
      </section>

      {/* Work Experiences */}

      <section className=" flex-wrap flex-col w-full ">
        <div className="max-w-3xl mx-auto px-4  md:flex-row  gap-10">
          {/* header */}
          <div>
            <h1 className="font-bold text-2xl ">
              My
              <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
                Projects
              </span>
            </h1>
          </div>

          <div className="w-full ">
            <Tabs defaultValue="web_app" className="max-w-7xl">
              <TabsList>
                <TabsTrigger value="web_app">Web App</TabsTrigger>
                <TabsTrigger value="tools" disabled>Tools</TabsTrigger>
                <TabsTrigger value="music_production" disabled>
                  Music Production
                </TabsTrigger>
              </TabsList>
              {/* 1. Change container to grid for 2 columns of cards */}
              <TabsContent
                value="web_app"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl"
              >
                {myProjectData.map((btn) => (
                  <div key={btn.id} className="w-full">
                    {/* 2. Ensure Card is a flex container for the Image + Content */}
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
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="tools">b</TabsContent>
              <TabsContent value="music_production">c</TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
