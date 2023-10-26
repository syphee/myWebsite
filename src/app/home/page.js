'use client'
import Header from "../assets/header"
import Footer from "../assets/footer"
import HomeBtn from "../assets/homeIconBtn"
import "../assets/home.css"
import {ChevronDoubleRightIcon,HomeIcon} from "@heroicons/react/20/solid"
import { useState } from "react"
import NavDrawer from "../assets/navDrawer"

export default function LandingPage() {

    function hideNav (){
        setVisible(false);
    }
    function showNav(){
        setVisible(true)
    }

    const [visible,setVisible] = useState(false);

    

    return (
        <main className="h-screen">
            <div className="flex justify-center">

                <HomeBtn/>
            </div>
            <NavDrawer miniTitle={"I am,"} title={"James Landicho"}/>
            <Footer />

        </main>
    )

}