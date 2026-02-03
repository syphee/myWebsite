'use client'
import { useState, useReducer } from "react"


export default function MyValues({changeBackground}) {

    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [state, dispatch] = useReducer(LeftOrRight, { direction: null, showLeft: null, showRight: null,backgroundImg:null })

    

    function LeftOrRight(state, action) {
        console.log(action.type)

        switch (action.type) {
            case 'left': {


                setVisibleLeft(!visibleLeft)
                console.log(visibleLeft)
                if (state.direction == '-translate-x-1/2') {
                    changeBackground({type:'myvalues'});
                    return { direction: state.direction = ``, showRight: true, showLeft: false }
                } else {
                    changeBackground({type:'myvalues',direction:'left'});
                    return { direction: state.direction = "-translate-x-1/2", showRight: true, showLeft: false }
                }
            }
            case 'right': {
                setVisibleRight(!visibleRight)
                console.log(visibleRight)
                if (state.direction == 'translate-x-1/2') {
                    changeBackground({type:'myvalues'});
                    return { direction: state.direction = ``, showRight: false, showLeft: true }
                } else {
                    changeBackground({type:'myvalues',direction:'right'});
                    return { direction: state.direction = "translate-x-1/2", showRight: false, showLeft: false }
                }
            }
            default: {
                return { direction: state.direction = ``, showRight: null, showLeft: null }
            }
        }
    }



    return (
        <section className={`flex h-screen ${state.direction} duration-500 `}>
            <div className="h-150 m-auto flex flex-row transition-translation duration-1000 ">
                {
                    visibleRight && (
                        <>
                            <div className={`transition-opacity opacity-100 duration-500 ease-in-out text-right px-5 `}>
                                <div>
                                    <h1 className=" mt-5 text-7xl mx-10 " onClick={() => dispatch({ type: 'right' })}   >
                                        Optimistic

                                    </h1>
                                    <section className=" flex flex-col ">
                                        <h3 className="mt-5 text-md flex flex-wrap mx-10" >
                                        I Believe in the mindset, "Failure leads to success".<br/>
                                        <br/>
                                        I Believe that there will always be a solution to any problems we face,as long as we look
                                        at the bright side of things and take it as a challenge to build yourself as a person.
                                        </h3>


                                    </section>


                                </div>







                            </div>


                        </>
                    )
                }
                <div className="ease-in-out mx-5 hover:text-sky-400 duration-500 opacity-30 hover:opacity-100">

                    <button>
                        <h1 className=" mt-5 text-7xl " onClick={() => dispatch({ type: 'right' })} >
                            Optimistic

                        </h1>
                    </button>


                </div>

                <div className="ease-in-out mx-5 ">

                    <h1 className="mt-5 text-7xl " >
                        My Values

                    </h1>
                    <span></span>
                </div>
                <div className="ease-in-out mx-5 hover:text-sky-400 duration-500 opacity-30 hover:opacity-100">

                    <button>
                        <h1 className=" mt-5 text-7xl " onClick={() => dispatch({ type: 'left' })} >
                            Open-minded

                        </h1>

                    </button>


                </div>
                {
                    visibleLeft && (
                        <>
                            <div className={`transition-opacity opacity-100 duration-500 ease-in-out text-left px-5 `}>
                                <div>
                                    <h1 className=" mt-5 text-7xl  " onClick={() => dispatch({ type: 'left' })}   >
                                        Open-minded

                                    </h1>
                                    <section className=" flex flex-row ">
                                        <h3 className="mt-5 text-md flex flex-wrap" >
                                        I believe that having an open mind to things is an important value to have when working as a team,
                                        as we all have to be flexible with our different ideas, and decide what is best for the overall growth<br/>
                                        a group.

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