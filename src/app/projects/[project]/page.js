"use client";
import { useParams } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BlurFade } from "@/registry/magicui/blur-fade";

import { BorderBeam } from "@/registry/magicui/border-beam";
import { Skeleton } from "@/components/ui/skeleton";

import PortraitPic_sm from "../images/6316674175816372309.png";
import PortraitPic_lg from "../images/6316674175816372311.png";
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

            <div className="h-full min-w-0 break-all">
  {JSON.stringify(myProjectData)}
</div>

          </div>
        </section>
      </BlurFade>

      <Footer />
    </main>
  );
}
