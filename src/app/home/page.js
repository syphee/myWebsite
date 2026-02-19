/* eslint-disable @next/next/no-img-element */
"use client";
import { BlurFade } from "@/registry/magicui/blur-fade";
import { Skeleton } from "@/components/ui/skeleton";
import { BorderBeam } from "@/registry/magicui/border-beam";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

import Footer from "../assets/footer";

import HomeBtn from "../assets/homeIconBtn";
import "../assets/home.css";

import { useState, useEffect } from "react";
import NavDrawer from "../assets/navDrawer";

import PortraitPic_sm from "./images/6316674175816372309.png";
import PortraitPic_lg from "./images/6316674175816372311.png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

import { LightRays } from "@/registry/magicui/light-rays";
import { useRouter } from "next/navigation";

import {
  Card,
  CardAction,
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

import {
  getProjectsRows,
  getWorkExperienceRows,
  getTechStacksRows,
} from "../controller/notion";
import { type } from "os";

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

  const [myWorkExperienceData, setMyWorkExperienceData] = useState([]);
  const [myProjectData, setMyProjectData] = useState([]);
  const [myTechStacks, setMyTechStacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchWorkExperience = await getWorkExperienceRows();
        const fetchProjects = await getProjectsRows({limit_size:4});
        const fetchTechStacks = await getTechStacksRows();

        const payload = [fetchWorkExperience, fetchProjects, fetchTechStacks];
        Promise.all(payload).then((result) => {
          console.log(result[1]);
          setMyWorkExperienceData(result[0]);
          setMyProjectData(result[1]);

          setMyTechStacks(result[2]);
        });
      } catch (error) {
        console.error("Failed to fetch Notion data:", error);
      }
    };

    fetchData();
  }, []);

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

  // const myWorkExperienceData = [
  //   { id: 1, label: "My resume", from: "from-blue-500", to: "to-purple-500" },
  //   {
  //     id: 2,
  //     label: "My Interests",
  //     from: "from-blue-500",
  //     to: "to-purple-500",
  //   },
  //   { id: 3, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 4, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 5, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 6, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 7, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 8, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 9, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  //   { id: 10, label: "Education", from: "from-blue-500", to: "to-purple-500" },
  // ];
  const router = useRouter();

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
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        <LightRays className="h-screen" />
      </div>

      <HomeBtn />

      {/* https://www.framer.com/motion/examples/ */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      {/* https://threejs.org/ */}
      {/* <NavDrawer miniTitle={"I am,"} title={"James Landicho"} /> */}

      {/* Landing */}
      <BlurFade delay={0.25} inView>
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          {/* Content Layer */}
          <div className="z-10 h-auto m-auto">
            <div className="flex flex-wrap flex-col flex-spacing-5 items-center">
           
              <NavDrawer
                className=""
                miniTitle={"I am,"}
                pretext={"> "}
                title={"James Landicho"}
                typingContent={["Developer", "Designer", "Creator"]}
              />
            </div>
          </div>
        </section>
      </BlurFade>

      {/* About me short */}
      <BlurFade delay={0.25} inView>
        <section className="relative h-screen flex justify-center w-full">
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book!
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
      </BlurFade>

      {/* My projects */}
      <BlurFade delay={0.25} inView>
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
              <Carousel className="h-full" setApi={setApi}>
                <CarouselContent className="p-5 mb-5">
                  
                  {myProjectData.length > 0 ? (
                    <>

                  
                      {myProjectData.map((res,index) => (
                        
                        <CarouselItem
                          key={res.id}
                          className="basis-2/3 sm:basis-1/2 md:basis-1/3 "
                        >
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
                        </CarouselItem>
                      ))}
                      <CarouselItem className="sm:basis-1/2 md:basis-1/3">
                        <Card className="relative m-5 mx-auto h-full flex flex-col items-center justify-center pt-0 overflow-hidden shadow-md">
                          <a
                            className="cursor-pointer"
                            onClick={() => {
                              router.push(`/projects/`);
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500/20 to-pink-500/20">
                              <span className=" text-slate-900 dark:text-white">
                                View Projects overview
                              </span>
                            </div>
                          </a>
                        </Card>
                      </CarouselItem>
                    </>
                  ) : (
                    <Skeleton className="h-[600px] w-[600px]" />
                  )}
                </CarouselContent>
                <div className="hidden lg:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>

                {/* <div className="text-muted-foreground py-2 text-center text-sm">
                  {current} of {myProjectData.length}
                </div> */}
              </Carousel>
            </div>
          </div>
        </section>
      </BlurFade>


      <BlurFade delay={0.25} inView>
        <section className="w-full my-10">
          <div className="max-w-6xl mx-auto ">
            <h1 className="font-bold text-2xl text-center mb-10">
              My Tech Stacks
            </h1>

            <div className="flex md:flex-row flex-col">
              {[
                { label: "Front-end", type: "front-end" },
                { label: "Back-end", type: "back-end" },
                { label: "Databases", type: "database" },
                { label: "Services", type: "services" },
                { label: "Tools", type: "tools" },
              ].map((category, index) => (
                <div key={index}>
                  <div
                    key={category.type}
                    className="flex flex-col items-center p-2"
                  >
                    <h1 className="font-bold text-lg mb-3 w-full text-center">
                      {category.label}
                    </h1>

                    <div className="flex flex-row flex-wrap justify-center">
                      {myTechStacks.length > 0 ? (
                        myTechStacks
                          .filter((btn) => btn.type.includes(category.type))
                          .map((btn) => (
                            <HoverCard key={btn.id}>
                              <HoverCardTrigger asChild>
                                {/* 1. Added 'relative' and 'overflow-hidden' */}
                                <div className="relative  font-semibold cursor-pointer rounded-lg mt-5 mr-5 bg-white/2">
                                  <Image
                                    src={btn.logo}
                                    width={70}
                                    height={70}
                                    /* 2. Removed 'mt-5 mr-5' from Image (moved to parent) so beam wraps the whole box */
                                    className="p-2 transition-all hover:opacity-90 active:scale-95 object-contain"
                                    style={{ height: "60px", width: "70px" }} // Forces height, auto-adjusts width
                                    alt={`tech-logo-${btn.id}`}
                                  />

                                  <BorderBeam
                                    duration={6}
                                    className="from-transparent via-purple-500 to-transparent"
                                  />
                                  <BorderBeam
                                    duration={6}
                                    delay={5}
                                    borderWidth={2}
                                    className="from-transparent via-blue-500 to-transparent"
                                  />
                                </div>
                              </HoverCardTrigger>

                              <HoverCardContent className="bg-black/80  text-white">
                                {btn.id}
                              </HoverCardContent>
                            </HoverCard>
                          ))
                      ) : (
                        <Skeleton className="h-4 w-[150px]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BlurFade>

      {/* Work Experiences */}
      <BlurFade delay={0.25} inView>
        <section className=" flex-wrap flex-col w-full ">
          <div className="max-w-3xl mx-auto px-4  md:flex-row  gap-10">
            <div>
              <h1 className="font-bold text-2xl">
                My
                <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent m-1">
                  Work Experience
                </span>
              </h1>
            </div>

            <div className="w-full ">
              {myWorkExperienceData.length > 0 ? (
                myWorkExperienceData.map((res) => (
                  <div key={res.id} className="flex">
                    <Card className="m-5 mx-auto  pt-0 h-full w-full flex-row items-center bg-white/2">
                      <Image
                        src={res.job_logo}
                        width={50}
                        height={50}
                        className=""
                        alt="My portrait photo-lg"
                      />
                      <div className="w-full">
                        <CardTitle className="text-lg my-3">
                          {res.job_name}
                        </CardTitle>

                        <span className="opacity-50">{res.job_company}</span>
                        <CardDescription className="line-clamp-4 mt-3">
                          {res.job_description}
                        </CardDescription>

                        <div className="flex flex-wrap max-w-100 gap-2 mt-5">
                          {res.job_skills.map((data) => (
                            <span key={data.name} className="   font-semibold">
                              <div className="bg-gradient-to-r from-blue-500 to-purple-500  p-[1px] rounded-lg">
                                <Badge variant="secondary">{data.name}</Badge>
                              </div>
                            </span>
                          ))}
                        </div>

                        <CardAction className="mx-2  mt-5 mr-5 p-[1px] transition-all ">
                          {res.employment_date}
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
                ))
              ) : (
                <Skeleton className="h-4 w-[150px]" />
              )}
            </div>
          </div>
        </section>
      </BlurFade>

      <Footer />
    </main>
  );
}
