'use client'
import Link from "next/link"

import "../assets/home.css"
import {HomeIcon} from "@heroicons/react/20/solid"


export default function homeIconBtn(){
    return(
         <Link href="/home">
             <HomeIcon className="fixed z-50 top-0 w-6 h-6 mt-5 hover:text-sky-400 duration-500 "/>
         </Link>
       
    )
}