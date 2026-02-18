"use client";
import { useParams } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BlurFade } from "@/registry/magicui/blur-fade";

import { BorderBeam } from "@/registry/magicui/border-beam";
import { Skeleton } from "@/components/ui/skeleton";

import PortraitPic_sm from "../images/6316674175816372309.png";
import PortraitPic_lg from "../images/6316674175816372311.png";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";
import Image from "next/image";
import Header from "../../assets/header";
import Footer from "../../assets/footer";

import HomeBtn from "../../assets/homeIconBtn";
import "../../assets/home.css";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import NavDrawer from "../../assets/navDrawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

import { LightRays } from "@/registry/magicui/light-rays";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        setMyProjectData(fetchProjects);
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
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden rounded-lg">
          {/* Content Layer */}
          <div className="z-10 h-auto m-auto w-full max-w-6xl">
            <div className="flex flex-wrap flex-rows flex-spacing-5">
              <NavDrawer
                className=""
                miniTitle={""}
                pretext={"> "}
                title={""}
                typingContent={[JSON.stringify(params)]}
                visible={false}
              />
            </div>
          </div>
        </section>
      </BlurFade>

      {/* My projects */}
      <BlurFade delay={0.25} inView>
          <div className="relative min-h-screen  text-white overflow-hidden ">
      
      {/* 1. Ethereal Background Glows (The "Light" behind the glass) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />


   <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />


   
      <div className="relative z-10 pb-20">
        {/* 2. HERO SECTION - Glass Card Header */}
        <section className="pt-32 pb-12 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-purple-300">
             Project Case Study
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            {myProjectData.project_name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            {myProjectData.project_description}
          </p>

          {/* Metadata Row - Glass Pill */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="text-center px-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">Platform</p>
              <div className="flex gap-2 justify-center">
                test
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center px-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">Stack</p>
              <div className="flex gap-2 justify-center">
                test
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center px-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">Status</p>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-md">
                {myProjectData.project_live_status}
              </Badge>
            </div>
          </div>
        </section>

        {/* 3. FLOATING IMAGE - Border Glow Effect */}
        <section className="max-w-6xl mx-auto px-6 mb-32 group">
          <div className="relative rounded-[2rem] p-2 bg-gradient-to-b from-white/20 to-transparent">
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 shadow-2xl">
              <img
                src={myProjectData.project_cover_img}
                alt="Cover"
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* 4. CONTENT CARDS - High Blur Glass */}
        <article className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-inner">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 text-purple-400 text-lg">01</div>
              Problem Statement
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-inner">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400 text-lg">02</div>
              Challenges & Solutions
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          {/* 5. CTA - The "Final Glow" Button */}
          <section className="pt-20 text-center">
            <div className="inline-flex gap-4 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Button size="xl" asChild variant="ghost" className="rounded-full px-10 hover:bg-white/10">
                <a href={myProjectData.project_source_code}>View Source</a>
              </Button>
              <Button size="xl" asChild className="rounded-full px-10 bg-white text-black hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <a href={myProjectData.project_url}>Live Project</a>
              </Button>
            </div>
          </section>

        </article>
      </div>
    </div>
      </BlurFade>

      <Footer />
    </main>
  );
}
