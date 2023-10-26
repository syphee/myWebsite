'use client'
import Header from "../assets/header"

import "../assets/home.css"

import { useState } from "react"


export default function NavDrawer({miniTitle,title}){

    function hideNav (){
        setVisible(false);
    }
    function showNav(){
        setVisible(true)
    }

    const [visible,setVisible] = useState(false);

    return(
        <section className="flex h-screen">
                <div className="h-150 m-auto">
                    <div>
                        <span>{miniTitle}</span>
                        <h1 className="mt-5 text-7xl hover:translate-x-6 duration-500 ease-in-out" onMouseOver={() => showNav()} onMouseOut={ () => hideNav()}>
                            {title}
                            <div className="  transition-opacity opacity-0 hover:opacity-100">
                                
                                <Header visible={visible} />
                            </div>
                        </h1>
                    </div>

                </div>
        </section>
    )
    
}