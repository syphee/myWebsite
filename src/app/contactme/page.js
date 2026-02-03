'use client'
import Link from "next/link"
import Header from "../assets/header"
import Footer from "../assets/footer"
import "../assets/home.css"
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import { useState, useReducer,useEffect } from "react"
import HomeBtn from "../assets/homeIconBtn"
import NavDrawer from "../assets/navDrawer"
import TimeLine from "../assets/timelineSelector"

import LeftRightContent from "../about/components/LeftRightContent"
import ContactMe from "./formspree/contactme"

import IdleComponent from "../assets/idleComponent"


export default function LandingPage() {

    

    function contentBackgroundSwitcher(state, action) {
        // let < key > in <value>
        for (let elementName in contentInfo) {
            if (action.type == elementName) {
                return {
                    ...state,
                    [elementName]: action.direction === 'left' ? contentInfo[elementName].leftPic : (action.direction === 'right' ? contentInfo[elementName].rightPic : '')
                };
            }
        }

        // If the action type does not match any elementName, return the original state
        return state;
    }

    const [state, dispatch] = useReducer(contentBackgroundSwitcher, { introduction: "", myvalues: "" })
    const [MsgBox,toggleMsgBox] = useState(false)

    function changeBackground(type) {
        //contentBackgroundSwitcher();
        dispatch(type)

        //setBackground(img)
        console.log("Changed background.")


    }




    // to put sections of page targetting each ID for timeline selector



    const [visible, setVisible] = useState(false);

    function hideScreen() {
        console.log("Screen is hidden")
        setVisible(false);
    }
    function showScreen() {
        console.log("Screen is visible")
        setVisible(true)
    }

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
        <main className={`h-screen w-screen duration-500 ease-in-out`} >

            <div className="flex justify-center">
                <HomeBtn />
            </div>
            <div className="flex h-screen space-between">
                <div id="A" className="pageContent flex justify-start p-5">
                    <NavDrawer miniTitle={"Questions?"} title={"Leave me a message."} />
                    
                    
                </div>
                <div className="h-150 m-auto">


                
                

                <div className="flex flex-row align-top">
                    <div className="mx-2">
                        <button className="opacity-30 hover:opacity-100 hover:text-sky-400 hover:animate-pulse duration-500 ease-in-out text-4xl" onClick={()=>{window.open("https://github.com/syphee","_blank")}}>Github</button>
                    </div>
                    <div  className="mx-2">
                        <button className="opacity-30 hover:opacity-100 hover:text-sky-400 hover:animate-pulse duration-500 ease-in-out  text-4xl" onClick={()=>{window.open("https://www.linkedin.com/in/james-landicho-8b24b0293","_blank")}}>LinkedIn</button>
                    </div>
                    <div  className="mx-2">
                        <button className="opacity-30 hover:opacity-100 hover:text-sky-400 hover:animate-pulse duration-500 ease-in-out  text-4xl" onClick={()=>{toggleMsgBox(!MsgBox)}}>Send Mail</button>
                    </div>
                    

                </div>
                {MsgBox && <ContactMe /> }   

                
                
                </div>

            </div>
            
            <TimeLine returnHeight={setWindowHeight} />




            


            <Footer />

        </main>

        
<main className={`${visible ?  " hidden ": " block "}h-full w-full hover:opacity-100 hover:visible duration-500 ease-in-out`} onMouseEnter={() => { showScreen()}}>
            
            <IdleComponent  />
        </main>
        </>
    )

}