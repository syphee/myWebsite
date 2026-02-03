'use client'
import Header from "../assets/header"
import Link from "next/link"
import "../assets/home.css"

import { useState,useEffect,useMemo,useRef, useLayoutEffect } from "react"


export default function TimeLineSelector({images,returnHeight}) {
    
    
    // remember to put .pageContent for every section of the page you make content with
    // make sure the id is unique for each element
    const [ids,setIds] = useState([])
    var arrInput = []
    
    
    useEffect(()=>{

        const pageContent = document.querySelectorAll('.pageContent')
        console.log("Page contents :" + pageContent.length)

        // Iterate over the elements and push their IDs into the array

        pageContent.forEach(element => {
            // Push the ID of the current element into the 'ids' array
            arrInput.push(element.id);
            console.log(ids);
        });
        setIds(arrInput)
        


    },[])

    
    
    
    

    

    // Now the 'ids' array contains the IDs of all elements with the class name 'pageContent'
    

    // calculate scroll height, then determine which dot is coloured
    // update scroll height everytime user moves
    const [currentHeight, setCurrentHeight] = useState(0);
    const [circleIndex,setCircleIndex] = useState(0);
    

    // unoptimized recursive loop
    // useEffect(()=>{
    //     // to measure current height
    //     const calculate = setTimeout(() => {
    //         const height = window.scrollY
    //         setCurrentHeight(height);
    //         setLooper(!looper)
    //     }, 200);
    //     console.log(currentHeight)
    //     return () => clearTimeout(calculate);

       
    // },[looper])

    // calculate which dot should be highlighted red
    
   
    //updated loop
    useEffect(() => {
    // set update every 1 second to prevent throttling
    const timer = setTimeout(()=>{
        // calculate which dot should be highlighted red

        

        const handleScroll = () => {

            // get current user scrolled height
            const height = window.scrollY;
            setCurrentHeight(height);
            console.log(height);

            

            // get the index of selected dot
            var selectedDot = Math.trunc(height/window.innerHeight)

            console.log("Max height of window : " + window.innerHeight)

            console.log("Scrolled on content number : #" + selectedDot)
            setCircleIndex(selectedDot)
            returnHeight(height)
            
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },500)
return timer
    
    
}, []);
    // remember to remove strictmode on react so this does not render twice
    return (
        <div className="fixed top-96 right-10 p-25  w-6 h-10 m-auto flex h-screen justify-center z-50">
            <div className=" w-0.5 flex-col items-center">
                {ids.map((item,index) => {

                    return (
                        <Link key={index} href={`#` + item}>
                            <div id={index} className={`rounded-full w-2 h-2  my-5 hover:w-3 hover:h-3 duration-500 ease-in-out ${index == circleIndex ? 'bg-sky-400 w-5 h-5 animate-pulse' : 'bg-white'}` }>

                            </div>
                        </Link>
                    )
                })
                }


            </div>
        </div>
    )

}