'use client'

import Header from "../assets/header"
import Footer from "../assets/footer"
import "../assets/home.css"
import { ChevronDoubleRightIcon, HomeIcon, ArrowLongDownIcon } from "@heroicons/react/20/solid"
import { Component, useState, useReducer, useEffect } from "react"
import HomeBtn from "../assets/homeIconBtn"
import NavDrawer from "../assets/navDrawer"
import TimeLine from "../assets/timelineSelector"
import Aspirations from "./text/aspirations.js"
import AboutMe from "./text/aboutme"
import Optimistic from "./text/optimistic"
import OpenMinded from "./text/open-minded"

import aboutMePic from "./assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg"
import aboutMePic2 from "./assets/images/swapnil-bapat-sJ7pYyJFyuA-unsplash.jpg"
import optimisticPic from "./assets/images/katrina-wright-yMg_SMqfoRU-unsplash.jpg"


import LeftRightContent from "./components/LeftRightContent"
import IdleComponent from "../assets/idleComponent"



export default function LandingPage() {

    //To change background of sections of page
    const contentInfo = {
        introduction: {
            leftPic: aboutMePic2.src,
            rightPic: aboutMePic.src,
            contentHeader: "Hello!",
            contentSubHeader: "My name is James.",
            leftHeader: "My Aspirations",
            leftContent: Aspirations(), // to put in text.js file ,  or maybe a component instead
            rightHeader: "About Me",
            rightContent: AboutMe() // same goes here
        },
        myvalues: {
            leftPic: optimisticPic.src,
            rightPic: aboutMePic2.src,
            contentHeader: "My values",
            contentSubHeader: "",
            leftHeader: "Optimistic",
            leftContent: Optimistic(), // to put in text.js file ,  or maybe a component instead
            rightHeader: "Open-Minded",
            rightContent: OpenMinded() // same goes here
        }
    }

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

                <div id="A" className="pageContent">
                    <NavDrawer miniTitle={"About"} title={"Me"} />
                </div>

                <TimeLine returnHeight={setWindowHeight} />
                {

                    Object.keys(contentInfo).map((item, index) => {
                        console.log("Item: " + item)
                        for (let key in contentInfo) {
                            if (contentInfo.hasOwnProperty(item)) {
                                // Accessing the inner objects using the keys
                                const innerObject = contentInfo[item];
                                console.log(`Object Key: ${item}`);
                                console.log(innerObject);
                                return (
                                    <div id={`:${index}`} key={index} className="h-full w-full m-auto pageContent opacity-30 hover:opacity-100 duration-1000" style={{ backgroundImage: `url("${state[item]}")`, height: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                        <LeftRightContent changeBackground={changeBackground} contentType={item} contentHeader={contentInfo[item].contentHeader} contentSubHeader={contentInfo[item].contentSubHeader} leftHeader={contentInfo[item].leftHeader} leftContent={contentInfo[item].leftContent} rightHeader={contentInfo[item].rightHeader} rightContent={contentInfo[item].rightContent} />
                                    </div>
                                )

                            }
                        }

                    })




                }


                <Footer />





            </main>
            {
            /*
            <main className={`${visible ?  " hidden ": " block "}h-full w-full hover:opacity-100 hover:visible duration-500 ease-in-out`} onMouseEnter={() => { showScreen()}}>
            
                <IdleComponent  />
            </main>

*/}

        </>
    )

}