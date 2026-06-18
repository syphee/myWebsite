/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams } from "next/navigation";
import { Safari } from "@/registry/magicui/safari";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Iphone } from "@/registry/magicui/iphone";

import { BlurFade } from "@/registry/magicui/blur-fade";
import { Skeleton } from "@/components/ui/skeleton";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

import Header from "../../assets/header";
import Footer from "../../assets/footer";
import TimeLineSelector from "../../assets/timelineSelector";

import HomeBtn from "../../assets/homeIconBtn";
import "../../assets/home.css";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useState, useEffect, useRef } from "react";
import NavDrawer from "../../assets/navDrawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

import { LightRays } from "@/registry/magicui/light-rays";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Spinner } from "@/components/ui/spinner";

import {
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  getProjectsRows,
  getWorkExperienceRows,
  getTechStacksRows,
  getProjectInfoRows,
} from "../../controller/notion";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const params = useParams();
  const router = useRouter();

  const [myProjectData, setMyProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchProjects = await getProjectInfoRows({ params });

        // If fetchProjects is null, undefined, or an empty array
        if (
          !fetchProjects ||
          (Array.isArray(fetchProjects) && fetchProjects.length === 0)
        ) {
          router.push("/projects"); // Reroute to the list page
          return;
        }

        console.log(fetchProjects);
        setMyProjectData(fetchProjects[0]);
      } catch (error) {
        console.error("Failed to fetch Notion data:", error);
        router.push("/projects"); // Fallback on error
      }
    };

    fetchData();
  }, [params, router]);

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

  const statusStyles = {
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <main className="h-screen pb-16">
      <TimeLineSelector />
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        { /*<LightRays className="h-screen" />*/}
      </div>

      <HomeBtn />

      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}

      {/* Landing */}
      <BlurFade delay={0.25} inView>
        <section id="hero" className="pageContent relative flex min-h-screen w-full flex-col overflow-hidden rounded-lg">
          {/* Content Layer */}
          <div className="z-10  m-auto w-full max-w-2xl ">
            <div className="flex flex-wrap flex-rows flex-spacing-5">
              <div className="absolute inset-0 -z-10 bg-black-500/50 blur-[80px] rounded-full scale-50" />

              <NavDrawer
                className="relative" // Ensure parent is relative
                miniTitle={""}
                pretext={"> "}
                title={
                  myProjectData.project_video_cover ? (
                    <>
                      <iframe
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "100vw",
                          height: "56.25vw", // 16:9 height relative to viewport width
                          minHeight: "100vh",
                          minWidth: "177.77vh", // 16:9 width relative to viewport height
                          transform: "translate(-50%, -50%)",
                          pointerEvents: "none",
                        }}
                        className="bg-purple-600/30  absolute inset-0 -z-0 h-screen w-screen object-cover my-0 opacity-5 absolute shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                        src={`https://www.youtube.com/embed/${myProjectData.project_video_cover}?autoplay=1&mute=1&loop=1&playlist=${myProjectData.project_video_cover}&controls=0&modestbranding=1&rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </>
                  ) : myProjectData.project_cover_img ? (
                    <img
                      src={myProjectData.project_cover_img}
                      className="absolute inset-0 -z-0 h-screen w-screen object-cover opacity-20 absolute"
                      alt="background"
                    />
                  ) : (
                    <></>
                  )
                }
                typingContent={[JSON.stringify(params)]}
                visible={false}
                isLooping={false}
              />

              <div className="flex flex-row items-center justify-center gap-8 w-full py-10">
                {myProjectData?.project_type?.length ? (
                  myProjectData.project_type.map((type, index) => {
                    if (type.name === "Mobile") {
                      return (
                        /* shrink-0 ensures the iPhone keeps its shape */
                        <div
                          key={`mobile-${index}`}
                          className="shrink-0 w-[280px] md:w-[320px]"
                        >
                          <Iphone src={`${myProjectData.project_cover_img}`} />
                        </div>
                      );
                    }
                    if (type.name === "Web") {
                      return (
                        /* flex-1 allows Safari to take available space, but max-w keeps it from getting too huge */
                        <div
                          key={`web-${index}`}
                          className="flex-1 max-w-[700px] min-w-[300px]"
                        >
                          <Safari
                            className="w-full"
                            url={myProjectData.project_name}
                            imageSrc={`${myProjectData.project_cover_img}`}
                          />
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <div className="w-full flex justify-center">
                    <Skeleton className="h-[500px] w-full max-w-4xl" />
                  </div>
                )}
              </div>

              {/* {myProjectData.project_type == "web" ? (
                      <Safari
                      className="absolute"
                        url={`${myProjectData.project_name}`}
                        imageSrc="https://placehold.co/1200x750?text=Hello+World"
                      />
                    ) :
                    
                    
                    (
                      <Skeleton className="h-[600px] w-[600px]" />
                    )} */}
            </div>
          </div>
        </section>
      </BlurFade>

      {/* My projects */}
      <BlurFade delay={0.25} inView>
        <div className="relative min-h-screen  text-white overflow-hidden ">
          {/* 1. Ethereal Background Glows (The "Light" behind the glass) */}

          <div className="relative z-10 pb-20">
            {/* 2. HERO SECTION - Glass Card Header */}
            <section id="overview" className="pageContent pt-32 pb-12 px-6 max-w-5xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                {myProjectData.project_name}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                {myProjectData.project_description}
              </p>
              <section className="pt-20 text-center">
                <div className="inline-flex gap-4 p-2 ">
                  <Button
                    size="xl"
                    asChild
                    variant="ghost"
                    className="rounded-full px-10 hover:bg-white/10 border px-10 rounded-full py-2 w-full bg-slate-600 hover:bg-green-700 text-white"
                  >
                    <a href={myProjectData.project_source_code}>View Source</a>
                  </Button>
                  <Button
                    size="xl"
                    asChild
                    variant="ghost"
                    className="rounded-full px-10 hover:bg-white/10 w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href={myProjectData.project_url}>Live Project</a>
                  </Button>
                </div>
              </section>

              {/* Metadata Row - Glass Pill */}
              <div className="flex flex-wrap justify-center gap-8 mt-16 p-8 rounded-3xl  backdrop-blur-xl shadow-2xl">
                <div className="text-center px-4">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                    Platform
                  </p>
                  <div className="flex gap-2 justify-center">
                    {myProjectData?.project_type?.length > 0 ? (
                      myProjectData.project_type.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-md border-none text-white"
                        >
                          {skill.name}
                        </Badge>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block" />
                <div className="text-center px-4">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                    Stack
                  </p>
                  <div className="flex gap-2 justify-center">
                    {myProjectData?.project_type?.length > 0 ? (
                      myProjectData.project_stack.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-md border-none text-white"
                        >
                          {skill.name}
                        </Badge>
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block" />
                <div className="text-center px-4">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                    Status
                  </p>
                  {myProjectData?.project_live_status ? (
                    <Badge
                      className={`${statusStyles[myProjectData.project_live_status_colour.toLowerCase()] || statusStyles.blue} backdrop-blur-md`}
                    >
                      {myProjectData.project_live_status}
                    </Badge>
                  ) : (
                    <Spinner />
                  )}
                </div>
              </div>
            </section>

            {/* 3. FLOATING IMAGE - Border Glow Effect */}

            {/* 4. CONTENT CARDS - High Blur Glass */}
            <article className="max-w-4xl mx-auto px-6 space-y-12">

              {/*proj prob statement*/}
              {myProjectData?.project_problem_statement && (
      <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-inner">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 text-purple-400 text-lg">
            01
          </div>
          Problem Statement
        </h2>
        <p className="text-lg leading-relaxed text-zinc-400">
          {myProjectData?.project_problem_statement?.length != 0 ? (
            myProjectData.project_problem_statement
          ) : (
            <Spinner />
          )}
        </p>
      </div>
              )}
             
              {/*project_challenges */}
              {myProjectData?.project_challenges && (
                <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-inner">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400 text-lg">
                      02
                    </div>
                    Project Challenges
                  </h2>
                  <p className="text-lg leading-relaxed text-zinc-400">
                    {myProjectData?.project_challenges?.length != 0 ? (
                      myProjectData.project_challenges
                    ) : (
                      <Spinner />
                    )}
                  </p>
                </div>
                        )}
            </article>

            {/* 2. HERO SECTION - Glass Card Header */}
            {myProjectData?.project_media != null &&(
        <section id="snippets" className="pageContent pt-32 pb-12 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-5xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Project Snippets
          </h1>
          {/* <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            {myProjectData.project_description}
          </p> */}

          {/* Metadata Row - Glass Pill */}
          <div className="flex items-center flex-col justify-center gap-8 mt-16 p-8 rounded-3xl  backdrop-blur-xl shadow-2xl">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-[10rem] sm:max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {myProjectData?.project_media?.length > 0 ? (
                  myProjectData.project_media.map((res, index) => (
                    /* Use basis-full to show 1 slide at a time, or basis-1/2 for two */
                    <CarouselItem key={index} className="basis-full">
                      <div className="p-1">
                        <Dialog>
                          {/* 1. Trigger: Clicking the card opens the dialog */}
                          <DialogTrigger asChild>
                            <Card className="overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                              <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                                <img
                                  src={res.file.url}
                                  alt="Project preview"
                                  className="h-full w-full object-cover"
                                />
                              </CardContent>
                            </Card>
                          </DialogTrigger>

                          {/* 2. Content: The full-size image modal */}
                          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent">
                            <DialogHeader className="sr-only">
                              <DialogTitle>Image Preview</DialogTitle>
                            </DialogHeader>
                            <div className="relative flex items-center justify-center w-full h-full">
                              <img
                                src={res.file.url}
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
          </div>
        </section>
            )}
            
          </div>
        </div>
      </BlurFade>

      <Footer />
    </main>
  );
}
