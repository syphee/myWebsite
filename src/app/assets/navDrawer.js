"use client";
import Header from "../assets/header";

import "../assets/home.css";

import { useState } from "react";

export default function NavDrawer({ miniTitle, title }) {
    function hideNav() {
        setVisible(false);
export default function NavDrawer({miniTitle,title}){

    function hideNav (){
        setVisible(true);
    }
    function showNav() {
        setVisible(true);
    }

    const [visible, setVisible] = useState(true);
    const [visible,setVisible] = useState(true);

    return (
        <section className="flex h-screen">
            <div className="h-150 m-auto">
                <div>
                    <span>{miniTitle}</span>
                    <h1 className="mt-5 text-7xl">
                        {title}
                        <div className="  ">
                            <Header visible={visible} />
                        </div>
                    </h1>
                </div>
            </div>
                <div className="h-150 m-auto">
                    <div>
                        <span>{miniTitle}</span>
                        <h1 className="mt-5 text-7xl hover:translate-x-6 duration-500 ease-in-out" onMouseOver={() => showNav()} onMouseOut={ () => hideNav()}>
                            {title}
                            <div className="  transition-opacity opacity-50 hover:opacity-100">
                                
                                <Header visible={visible} />
                            </div>
                        </h1>
                    </div>

                </div>
        </section>
    );
}
