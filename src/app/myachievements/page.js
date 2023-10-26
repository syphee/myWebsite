'use client'
import Header from "../assets/header"
import Footer from "../assets/footer"
import "../assets/home.css"
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import { useState,useEffect} from "react"
import HomeBtn from "../assets/homeIconBtn"
import NavDrawer from "../assets/navDrawer"
import TimeLine from "../assets/timelineSelector"
import IdleComponent from "../assets/idleComponent"


export default function LandingPage() {

    function hideScreen() {
        console.log("Screen is hidden")
        setVisible(false);
    }
    function showScreen() {
        console.log("Screen is visible")
        setVisible(true)
    }

    const [visible, setVisible] = useState(false);


    const [currentScrolledPx,setPx] = useState(0);

    function setWindowHeight(val){
        if(val == 0){
        console.log("nope")
        }else{
            console.log("Setting window height.." + val)
            setPx(val)
        }
        
    }

    useEffect(()=>{
        if(visible == true){
            console.log("Returned to screen! Scrolling to height : " + currentScrolledPx)
            window.scrollTo(0,currentScrolledPx)
        


        }else if(visible == false){
            console.log("Screen hidden")
        }

    },[visible])

    return (
        <>
        
<main className={`${visible ? " block ": " hidden "} h-screen w-screen duration-500 ease-in-out`} onMouseLeave={() => { hideScreen()}}>

            <div className="flex justify-center">
                <HomeBtn />
            </div>
            <div id="A" className="pageContent">
                <NavDrawer miniTitle={"My"} title={"Achievements"} />
            </div>

            <TimeLine returnHeight={setWindowHeight} />
            <div id="B" className="h-screen m-auto pageContent">
                test
                test
                test
                test
                test
                test
                test
            </div>
            <div id="C" className="h-screen m-auto pageContent">
                test
                test
                test
                test
                test
                test
                test
            </div>
            <div id="D" className="h-screen m-auto pageContent">
                test
                test
                test
                test
                test
                test
                test
            </div>
            <Footer />

        </main>
        <main className={`${visible ?  " hidden ": " block "}h-full w-full hover:opacity-100 hover:visible duration-500 ease-in-out`} onMouseEnter={() => { showScreen()}}>
            
        <IdleComponent  />
    </main>
    </>
    )

}