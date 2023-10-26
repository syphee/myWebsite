'use client'
import Header from "../assets/header"
import Footer from "../assets/footer"
import "../assets/home.css"
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import { useState,useReducer,useEffect } from "react"
import HomeBtn from "../assets/homeIconBtn"
import NavDrawer from "../assets/navDrawer"
import TimeLine from "../assets/timelineSelector"
import ProduceMusic from "./produceMusic"
import LeftRightContent from "../about/components/LeftRightContent"

import IdleComponent from "../assets/idleComponent"
import picturesPic from "./images/sebastien-gabriel-O0zLR_lVt8I-unsplash.jpg"
import joggingPic from "./images/gervyn-louis-mQxCgQvwBMY-unsplash.jpg"



export default function LandingPage() {

    const contentInfo = {
        introduction: {
            leftPic: joggingPic.src,
            rightPic: picturesPic.src,
            contentHeader: "",
            contentSubHeader: "",
            leftHeader: "Taking Pictures",
            leftContent: "Taking photos also help me to express my feelings. I believe that any photo tells a beautiful story behind it; be it a photo of the sunset, or even a photo of a busy street.", // to put in text.js file ,  or maybe a component instead
            rightHeader: "Jogging",
            rightContent: "Jogging helps me disconnect from reality happening around me - I believe it is important to take a breather from our busy schedules and just take a small portion of our day to disconnect" // same goes here
        },
        
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
        
<main className={`${visible ? " block ": " hidden "} h-screen w-screen duration-500 ease-in-out`} onMouseLeave={() => { hideScreen()}}>

            <div className="flex justify-center">
                <HomeBtn />
            </div>
            <div id="A" className="pageContent">
                <NavDrawer miniTitle={"My"} title={"Interests"} />
            </div>
            <TimeLine 
returnHeight={setWindowHeight} />

            <div id="B" className="h-screen m-auto pageContent  duration-500 ">
                <ProduceMusic />
            </div>

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
                                <div id={`:${index}`} className="h-full w-full m-auto pageContent opacity-0 hover:opacity-100 duration-1000" style={{ backgroundImage: `url("${state[item]}")`, height: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <LeftRightContent changeBackground={changeBackground} contentType={item} contentHeader={contentInfo[item].contentHeader} contentSubHeader={contentInfo[item].contentSubHeader} leftHeader={contentInfo[item].leftHeader} leftContent={contentInfo[item].leftContent} rightHeader={contentInfo[item].rightHeader} rightContent={contentInfo[item].rightContent} />
                                </div>
                            )

                        }
                    }

                })




            }

            <Footer />

        </main>
        <main className={`${visible ?  " hidden ": " block "}h-full w-full hover:opacity-100 hover:visible duration-500 ease-in-out`} onMouseEnter={() => { showScreen()}}>
            
                <IdleComponent  />
            </main>

        </>
    )

}