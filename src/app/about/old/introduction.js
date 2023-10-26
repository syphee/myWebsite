'use client'
import { useState, useReducer, useEffect } from "react"

export default function Introduction({changeBackground}) {

    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [state, dispatch] = useReducer(LeftOrRight, { direction: null, showLeft: null, showRight: null,backgroundImg:null })

    

    function LeftOrRight(state, action) {
        
        console.log(action.type)
        

        switch (action.type) {
            case 'left': {

                
                setVisibleLeft(!visibleLeft)
                console.log(visibleLeft)

                // to close
                if (state.direction == '-translate-x-1/2') {
                    changeBackground({type:'introduction',direction:''});
                    return { direction: state.direction = "", showRight: true, showLeft: false }
                // to open
                } else {
                    changeBackground({type:'introduction',direction:'left'});
                    return { direction: state.direction = "-translate-x-1/2", showRight: true, showLeft: false }
                }
            }
            case 'right': {
                
                setVisibleRight(!visibleRight)
                
                console.log(visibleRight)
                // to close
                if (state.direction == 'translate-x-1/2') {
                    changeBackground({type:'introduction',direction:''});
                    return { direction: state.direction = "", showRight: false, showLeft: true }
                // to open
                } else {
                    changeBackground({type:'introduction',direction:'right'});
                    return { direction: state.direction = "translate-x-1/2", showRight: false, showLeft: false }
                }
            }
            default: {
                changeBackground({type:'',direction:''});
                return { direction: state.direction = "", showRight: null, showLeft: null }
            }
        }
    }



    return (
        
        // <section className={`flex m-auto h-screen w-screen ${state.direction} duration-500 `} style={{backgroundImage:`url("${state.backgroundImg}")`,height:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <section className={`flex m-auto h-screen w-screen ${state.direction} duration-500 `} >
            <div className="h-150 m-auto flex flex-row transition-translation duration-1000 backdrop-blur-md ">
                {
                    visibleRight && (
                        <>
                            <div className={`transition-opacity opacity-100 duration-500 ease-in-out text-right px-5 `}>
                                <div>
                                    <h1 className=" mt-5 text-7xl mx-10 " onClick={() => dispatch({ type: 'right' })}   >
                                        My Aspirations

                                    </h1>
                                    <section className=" flex flex-col ">
                                        <h3 className="mt-5 text-md flex flex-wrap mx-10" >
                                            Seeing the world evolve with technology, <br />I am inspired to be part of the evolution and dream to further challenge how far technology can go,and this is why I wanted to pursue a course in IT; to make the impossible - possible.


                                        </h3>


                                    </section>


                                </div>







                            </div>


                        </>
                    )
                }
                <div className="ease-in-out mx-5  opacity-30 hover:opacity-100 hover:text-sky-400 duration-500">

                    <button>
                        <h1 className=" mt-5 text-7xl " onClick={() => dispatch({ type: 'right' })} >
                            My Aspirations

                        </h1>
                    </button>


                </div>

                <div className="ease-in-out mx-5 ">

                    <h1 className="mt-5 text-7xl " >
                        Hello!

                    </h1>
                    <span>My name is James.</span>
                </div>
                <div className="ease-in-out mx-5 opacity-30 hover:opacity-100 hover:text-sky-400 duration-500">

                    <button>
                        <h1 className=" mt-5 text-7xl " onClick={() => dispatch({ type: 'left' })} >
                            About Me

                        </h1>

                    </button>


                </div>
                {
                    visibleLeft && (
                        <>
                            <div className={`transition-opacity opacity-100 duration-500 ease-in-out text-left px-5 `}>
                                <div>
                                    <h1 className=" mt-5 text-7xl  " onClick={() => dispatch({ type: 'left' })}   >
                                        About Me

                                    </h1>
                                    <section className=" flex flex-row ">
                                        <h3 className="mt-5 text-md flex flex-wrap" >
                                            I am from the Philippines, <br />however I lived in Singapore ever since I was a year old.<br /> I often confuse whether I consider myself being a real Filipino when I have stayed in Singapore longer than my home country.<br />

                                            Outside school, I play as a keyboardist for a church every 3rd sunday of the month as service. We occasionaly have perfomances throughout the year too.



                                        </h3>
                                        <div>
                                            test
                                        </div>


                                    </section>


                                </div>







                            </div>


                        </>
                    )
                }


            </div>
        </section>
    )
}