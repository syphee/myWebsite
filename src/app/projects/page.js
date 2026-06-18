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
import { Skeleton } from "@/components/ui/skeleton";
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
import { useRouter } from "next/navigation";

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
import { getProjectsRows } from "../controller/notion";

export default function LandingPage() {
  const { theme } = useTheme();
  function hideNav() {
    setVisible(false);
  }
  function showNav() {
    setVisible(true);
  }
  const router = useRouter();

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

  const [myProjectData, setMyProjectData] = useState([]);
  const [typingContent, setTypingContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchProjects = await getProjectsRows();

        const payload = [fetchProjects];
        Promise.all(payload).then((result) => {
          setMyProjectData(result[0]);
          setTypingContent(result[0].map((p) => p.project_name));
        });
      } catch (error) {
        console.error("Failed to fetch Notion data:", error);
      }
    };

    fetchData();
  }, []);

  const LiveStatusDot = ({ status = "" }) => {
    const statusClasses = {
      LIVE: "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]",
      DOWN: "bg-red-500",
      WIP: "bg-yellow-500",
      default: "bg-gray-900",
    };

    return (
      <span className="relative flex h-2 w-2 mr-1">
        {status === "online" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${statusClasses[status]}`}
        ></span>
      </span>
    );
  };

  return (
    <main className="h-screen">
      <HomeBtn />
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        <LightRays className="h-screen" />
      </div>

      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}

      {/* Landing */}
      <section className="relative flex min-h-screen mb-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        {/* Content Layer */}
        <div className="z-10 h-auto m-auto">
          <div className="flex flex-wrap flex-rows flex-spacing-5 items-center">
           
            <NavDrawer
              key={typingContent.join(",")}
              className=""
              miniTitle={"My"}
              pretext={"> "}
              title={"Projects"}
              typingContent={typingContent.length > 0 ? typingContent : ["..."]}
            />
          </div>
        </div>

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
                <TabsTrigger
                  value="web_app"
                  disabled={
                    myProjectData.filter((res, index) =>
                      res.project_type.some((type) =>
                        type.name.toLowerCase().includes(["web"]),
                      ),
                    ).length == 0
                  }
                >
                  Web App
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  disabled={
                    myProjectData.filter((res, index) =>
                      res.project_type.some((type) =>
                        type.name.toLowerCase().includes(["tools"]),
                      ),
                    ).length == 0
                  }
                >
                  Tools
                </TabsTrigger>
                <TabsTrigger
                  value="music_production"
                  disabled={
                    myProjectData.filter((res, index) =>
                      res.project_type.some((type) =>
                        type.name.toLowerCase().includes(["music"]),
                      ),
                    ).length == 0
                  }
                >
                  Music Production
                </TabsTrigger>
              </TabsList>
              {/* 1. Change container to grid for 2 columns of cards */}
              <TabsContent
                value="web_app"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl"
              >
                {myProjectData.length > 0 ? (
                  <>
                    {myProjectData
                      .filter((res, index) =>
                        res.project_type.some((type) =>
                          type.name.toLowerCase().includes(["web"]),
                        ),
                      )
                      .map((res) => (
                        <div key={res.id} className="w-full">
                          {res.project_type.name}
                          {/* 2. Ensure Card is a flex container for the Image + Content */}
                          <Card className="m-5 mx-auto pt-0 h-full flex flex-col overflow-hidden relative">
                            <div className="relative w-full aspect-video overflow-hidden">
                              <div className="absolute top-3 left-3 z-30">
                                <div className="p-[1px] rounded-lg transition-all shadow-lg">
                                  <Badge
                                    variant="secondary"
                                    className="rounded-md"
                                  >
                                    <LiveStatusDot
                                      status={res.project_live_status}
                                    />
                                    {res.project_live_status}
                                  </Badge>
                                </div>
                              </div>

                              <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
                              <a
                                className="cursor-pointer"
                                onClick={() => {
                                  router.push(`/projects/${res.project_name}`);
                                }}
                              >
                                <img
                                  src={res.project_cover_img}
                                  alt={res.project_name}
                                  className="w-full h-full object-cover brightness-60 grayscale dark:brightness-40 z-0 transition-transform duration-300 hover:scale-105"
                                />
                              </a>

                              <div className="absolute bottom-3 left-3 z-20 flex gap-1">
                                {res.project_type.map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="bg-white/20 backdrop-blur-md border-none text-white"
                                  >
                                    {skill.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <CardHeader className="flex-grow">
                              <CardTitle className="text-xl font-bold">
                                {res.project_name}
                              </CardTitle>
                              <CardDescription className="line-clamp-4 mt-2">
                                {res.project_description}
                              </CardDescription>
                            </CardHeader>

                            {/* Project Tech Stack */}
                            <div className="px-4 pb-4 flex flex-wrap gap-1">
                              {res.project_stack.map((skill, i) => (
                                <div key={i} className=" p-[1px] rounded-full">
                                  <Badge
                                    variant="outline"
                                    className="bg-background  border-none"
                                  >
                                    {skill.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>

                            <CardFooter className="flex space-x-4 mt-auto">
                              <Button
                                asChild
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                              >
                                <a
                                  href={res.project_url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Live
                                </a>
                              </Button>
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-white/20"
                              >
                                <a
                                  href={res.project_source_code}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Source Code
                                </a>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      ))}
                  </>
                ) : (
                  <Skeleton className="h-[600px] w-[600px]" />
                )}
              </TabsContent>

              <TabsContent value="tools"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl">
                {myProjectData.length > 0 ? (
                  <>
                    {myProjectData
                      .filter((res, index) =>
                        res.project_type.some((type) =>
                          type.name.toLowerCase().includes(["tools"]),
                        ),
                      )
                      .map((res) => (
                        <div key={res.id} className="w-full">
                          {res.project_type.name}
                          {/* 2. Ensure Card is a flex container for the Image + Content */}
                          <Card className="m-5 mx-auto pt-0 h-full flex flex-col overflow-hidden relative">
                            <div className="relative w-full aspect-video overflow-hidden">
                              <div className="absolute top-3 left-3 z-30">
                                <div className="p-[1px] rounded-lg transition-all shadow-lg">
                                  <Badge
                                    variant="secondary"
                                    className="rounded-md"
                                  >
                                    <LiveStatusDot
                                      status={res.project_live_status}
                                    />
                                    {res.project_live_status}
                                  </Badge>
                                </div>
                              </div>

                              <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
                              <a
                                className="cursor-pointer"
                                onClick={() => {
                                  router.push(`/projects/${res.project_name}`);
                                }}
                              >
                                <img
                                  src={res.project_cover_img}
                                  alt={res.project_name}
                                  className="w-full h-full object-cover brightness-60 grayscale dark:brightness-40 z-0 transition-transform duration-300 hover:scale-105"
                                />
                              </a>

                              <div className="absolute bottom-3 left-3 z-20 flex gap-1">
                                {res.project_type.map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="bg-white/20 backdrop-blur-md border-none text-white"
                                  >
                                    {skill.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <CardHeader className="flex-grow">
                              <CardTitle className="text-xl font-bold">
                                {res.project_name}
                              </CardTitle>
                              <CardDescription className="line-clamp-4 mt-2">
                                {res.project_description}
                              </CardDescription>
                            </CardHeader>

                            {/* Project Tech Stack */}
                            <div className="px-4 pb-4 flex flex-wrap gap-1">
                              {res.project_stack.map((skill, i) => (
                                <div key={i} className=" p-[1px] rounded-full">
                                  <Badge
                                    variant="outline"
                                    className="bg-background  border-none"
                                  >
                                    {skill.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>

                            <CardFooter className="flex space-x-4 mt-auto">
                              <Button
                                asChild
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                              >
                                <a
                                  href={res.project_url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Live
                                </a>
                              </Button>
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-white/20"
                              >
                                <a
                                  href={res.project_source_code}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Source Code
                                </a>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      ))}
                  </>
                ) : (
                  <Skeleton className="h-[600px] w-[600px]" />
                )}
              </TabsContent>
              <TabsContent value="music_production"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl">
                {myProjectData.length > 0 ? (
                  <>
                    {myProjectData
                      .filter((res, index) =>
                        res.project_type.some((type) =>
                          type.name.toLowerCase().includes(["music"]),
                        ),
                      )
                      .map((res) => (
                        <div key={res.id} className="w-full">
                          {res.project_type.name}
                          {/* 2. Ensure Card is a flex container for the Image + Content */}
                          <Card className="m-5 mx-auto pt-0 h-full flex flex-col overflow-hidden relative">
                            <div className="relative w-full aspect-video overflow-hidden">
                              <div className="absolute top-3 left-3 z-30">
                                <div className="p-[1px] rounded-lg transition-all shadow-lg">
                                  <Badge
                                    variant="secondary"
                                    className="rounded-md"
                                  >
                                    <LiveStatusDot
                                      status={res.project_live_status}
                                    />
                                    {res.project_live_status}
                                  </Badge>
                                </div>
                              </div>

                              <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
                              <a
                                className="cursor-pointer"
                                onClick={() => {
                                  router.push(`/projects/${res.project_name}`);
                                }}
                              >
                                <img
                                  src={res.project_cover_img}
                                  alt={res.project_name}
                                  className="w-full h-full object-cover brightness-60 grayscale dark:brightness-40 z-0 transition-transform duration-300 hover:scale-105"
                                />
                              </a>

                              <div className="absolute bottom-3 left-3 z-20 flex gap-1">
                                {res.project_type.map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="secondary"
                                    className="bg-white/20 backdrop-blur-md border-none text-white"
                                  >
                                    {skill.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <CardHeader className="flex-grow">
                              <CardTitle className="text-xl font-bold">
                                {res.project_name}
                              </CardTitle>
                              <CardDescription className="line-clamp-4 mt-2">
                                {res.project_description}
                              </CardDescription>
                            </CardHeader>

                            {/* Project Tech Stack */}
                            <div className="px-4 pb-4 flex flex-wrap gap-1">
                              {res.project_stack.map((skill, i) => (
                                <div key={i} className=" p-[1px] rounded-full">
                                  <Badge
                                    variant="outline"
                                    className="bg-background  border-none"
                                  >
                                    {skill.name}
                                  </Badge>
                                </div>
                              ))}
                            </div>

                            <CardFooter className="flex space-x-4 mt-auto">
                              <Button
                                asChild
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                              >
                                <a
                                  href={res.project_url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Live
                                </a>
                              </Button>
                              <Button
                                asChild
                                variant="outline"
                                className="w-full border-white/20"
                              >
                                <a
                                  href={res.project_source_code}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Source Code
                                </a>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      ))}
                  </>
                ) : (
                  <Skeleton className="h-[600px] w-[600px]" />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
