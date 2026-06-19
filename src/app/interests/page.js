/* eslint-disable @next/next/no-img-element */
"use client";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import Header from "../assets/header";
import Footer from "../assets/footer";
import TimeLineSelector from "../assets/timelineSelector";
import { BlurFade } from "@/registry/magicui/blur-fade";

import HomeBtn from "../assets/homeIconBtn";
import "../assets/home.css";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import NavDrawer from "../assets/navDrawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GridPattern } from "@/registry/magicui/grid-pattern";

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
import { getInterestsRows } from "../controller/notion";

export default function LandingPage() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }));

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

  const introSectionButtons = [
    {
      id: 1,
      label: "My resume",
      from: "from-blue-500",
      to: "to-purple-500",
      href: "https://drive.google.com/drive/folders/1mUwdn1UGCajcVTWETFUx0VYpG2D2teDv",
    },
    {
      id: 2,
      label: "My Interests",
      from: "from-blue-500",
      to: "to-purple-500",
      href: "/interests",
    },
    /*
    {
      id: 3,
      label: "Education",
      from: "from-blue-500",
      to: "to-purple-500",
      href: "https://www.google.com",
    },
    */
  ];

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

  const [myInterestData, setMyInterestData] = useState([]);
  const [typingContent, setTypingContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchInterests = await getInterestsRows();

        const payload = [fetchInterests];
        Promise.all(payload).then((result) => {
          setMyInterestData(result[0]);
          setTypingContent(result[0].map((res) => res.interest_name));
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

  const InterestCarousel = ({media=null}) => {
    const autoplay = useRef(
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      })
    );
    console.log(media)
    return (
      <Carousel
        plugins={[autoplay.current]}
        className="w-full"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent>
          {media?.interest_media?.length > 0 ? (
            media.interest_media.map((res, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                        <div className="flex aspect-video items-center justify-center p-0 relative">
                          <img
                            src={res}
                            alt="Project preview"
                            className="object-cover object-center h-[300px] w-[300px]"
                          />
                        </div>
                      </div>
                    </DialogTrigger>

                    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent">
                      <DialogHeader className="sr-only">
                        <DialogTitle>{res}</DialogTitle>
                      </DialogHeader>
                      <div className="relative flex items-center justify-center w-full h-full">
                        <img
                          src={res}
                          alt="Full view"
                          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-40">
              <Skeleton className="h-full w-full" />
            </div>
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  return (
    <main className="h-screen pb-16">
      <TimeLineSelector />
      <HomeBtn />
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        {/*<LightRays className="h-screen" >*/}
      </div>

      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}

      {/* Landing */}
      <BlurFade delay={0.25} inView>
      <section id="hero" className="pageContent relative flex min-h-screen mb-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        {/* Content Layer */}
        <div className="z-10 h-auto m-auto">
          <div className="flex flex-wrap flex-rows flex-spacing-5 items-center">
            <NavDrawer
              key={typingContent.join(",")}
              className=""
              miniTitle={"My"}
              pretext={"> "}
              title={"Interests"}
              typingContent={typingContent.length > 0 ? typingContent : ["..."]}
            />
          </div>
        </div>
      </section>
      </BlurFade>
      {/* Interests */}

      <BlurFade delay={0.25} inView>
      <section id="interests" className="pageContent flex-wrap flex-col w-full">
        <div className="max-w-3xl mx-auto px-4  md:flex-row  gap-10">
          {/* header */}
          <div>
            <h1 className="font-bold text-2xl ">
              My
              <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
                Interests
              </span>
            </h1>
          </div>
        </div>
      </section>
      </BlurFade>

      {/*content*/}

      <BlurFade delay={0.25} inView>
        <section className=" flex-wrap flex-col w-full ">
          <div className="max-w-3xl mx-auto px-4 gap-10">
            <div className="">
              <div className="grid grid-cols-1 gap-4 max-w-7xl">
                {myInterestData?.length > 0 ? (
                  <>
                    {myInterestData.map((res, index) => (
                    <BlurFade key={res.id} delay={0.25} inView>
                      <div key={res.id} className="">
                        {/* 2. Ensure Card is a flex container for the Image + Content */}
                        <div className="m-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                          {/* Description — left on even, right on odd */}
                          <div className={`flex flex-col justify-center order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <div className="text-xl font-bold">
                              {res.interest_name}
                            </div>
                            <div className=" mt-2">
                              {res.interest_description}
                            </div>


                            {res?.interest_url && (<><div className=" text-white rounded-[7px] px-6 py-2 mt-5
                              ">
                              <a href={`${res.interest_url}`} target="_blank" rel="noreferrer" className="rounded-[7px] px-1 py-3 font-semibold ">
                                View
                              </a>
                            </div></>) }
                            
                            
                          </div>

                          {/* Carousel — right on even, left on odd */}
                          <div className={`relative w-full overflow-hidden order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
                            <a className="cursor-pointer">
                              <InterestCarousel media={res}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </BlurFade>
                    ))}
                  </>
                ) : (
                  <Skeleton className="h-[600px] w-[600px]" />
                )}
              </div>
            </div>
          </div>
        </section>
      </BlurFade>

      <Footer />
    </main>
  );
}
