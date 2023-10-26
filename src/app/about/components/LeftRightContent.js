'use client'
import { useState, useReducer } from "react"


export default function LeftRightContent({changeBackground,contentType,contentHeader,contentSubHeader,leftHeader,leftContent,rightHeader,rightContent}) {

    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [state, dispatch] = useReducer(LeftOrRight, { direction: null, showLeft: null, showRight: null })

    

    function LeftOrRight(state, action) {
        console.log(action.type)

        switch (action.type) {
            case 'left': {


                setVisibleLeft(!visibleLeft)
                console.log(visibleLeft)
                if (state.direction == '-translate-x-1/2') {
                    changeBackground({type:contentType});
                    return { direction: state.direction = "", showRight: true, showLeft: false }
                } else {
                    changeBackground({type:contentType,direction:'left'});
                    return { direction: state.direction = "-translate-x-1/2", showRight: true, showLeft: false }
                }
            }
            case 'right': {
                setVisibleRight(!visibleRight)
                console.log(visibleRight)
                if (state.direction == 'translate-x-1/2') {
                    changeBackground({type:contentType});
                    return { direction: state.direction = "", showRight: false, showLeft: true }
                } else {
                    changeBackground({type:contentType,direction:'right'});
                    return { direction: state.direction = "translate-x-1/2", showRight: false, showLeft: false }
                }
            }
            default: {
                return { direction: state.direction = "", showRight: null, showLeft: null }
            }
        }
    }



    return (
        <section className={`flex h-screen ${state.direction} duration-500  ` } id={`:${contentType}`}>
            <div className="h-150 m-auto flex flex-row transition-translation duration-1000 " >
                {
                    visibleRight && (
                        <>
                            <div className={`transition-opacity opacity-100 duration-500 ease-in-out text-right px-5 -translate-x-1/2 backdrop-blur-lg bg-black rounded-lg bg-opacity-70  p-5`}>
                                <div>
                                    <a>
                                    <h1 className=" mt-5 text-7xl mx-10 hover:text-sky-400 duration-500 opacity-30 hover:opacity-100" onClick={() => dispatch({ type: 'right' })}   >
                                        {leftHeader}

                                    </h1>
                                    </a>
                                    <section className=" flex flex-col ">
                                        <h3 className="mt-5 text-md flex flex-wrap mx-10" >
                                        {leftContent}
                                        </h3>


                                    </section>


                                </div>







                            </div>


                        </>
                    )
                }
                <div className="ease-in-out mx-5 hover:text-sky-400 duration-500 opacity-30 hover:opacity-100">

                    <a href={`#:${contentType}`}>
                        <h1 className=" mt-5 text-7xl " onClick={() => dispatch({ type: 'right' })} >
                            {leftHeader}

                        </h1>
                    </a>


                </div>

                <div className="ease-in-out mx-5 ">

                    <h1 className="mt-5 text-7xl " >
                        {contentHeader}

                    </h1>
                    <span>{contentSubHeader}</span>
                </div>
                <div className="ease-in-out mx-5 hover:text-sky-400 duration-500 opacity-30 hover:opacity-100">

                    <a href={`#:${contentType}`}>
                        <h1 className=" mt-5 text-7xl " onClick={() => dispatch({ type: 'left' })} >
                            {rightHeader}

                        </h1>

                    </a>


                </div>
                {
                    visibleLeft && (
                        <>
                            <div className={`transition-opacity opacity-100 duration-500 ease-in-out text-left px-5 translate-x-1/2 backdrop-blur-lg bg-opacity-70 bg-black rounded-lg p-5`} id={`L${rightHeader}`}>
                                <div>
                                    <a>
                                    <h1 className=" mt-5 text-7xl  hover:text-sky-400 duration-500 opacity-30 hover:opacity-100" onClick={() => dispatch({ type: 'left' })}   >
                                        {rightHeader}

                                    </h1>
                                    </a>
                                    <section className=" flex flex-row ">
                                        <h3 className="mt-5 text-md flex flex-wrap" >
                                        {rightContent}

                                        </h3>


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