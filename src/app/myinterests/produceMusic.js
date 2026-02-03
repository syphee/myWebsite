'use client'
import {useState,useReducer} from "react"
import Link from "next/link"
export default function ProduceMusic(){

    const [visible,setVisible] = useState(false); 

    function toggleVideo(state,action){
        switch(action.type){
            case 'soundcloud':{
                return ({url : state.url = (
                    <>
                    <iframe width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1630080108&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                   
                    </>
                )
                });

            }
            case 'spotify':{
                return({
                    url: state.url = ( 
                    <iframe style={{"border-radius":"12px"}} src="https://open.spotify.com/embed/track/5O5PhqSBsgUayD99hcKAqt?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    )
                })
            }
            case 'youtube':{
                return({
                    url: state.url = (
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/e6yibSZU_QU?si=-CUZKfc-ecSQR1PL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    )
                })
            }

            default:{
                //return ({url:state.url = null})
                return state
            }
        }
            
        
    }

    const [state,dispatch] = useReducer(toggleVideo,{url:""})


    return(
        <section className="flex h-screen">
                    <div className="h-150 m-auto flex flex-row transition-translation"  >
                        <div className="ease-in-out mx-5 " >
                        {!visible && (
                            <>
                            <span>I,</span>
                            <h1 className="mt-5 text-5xl " >
                                Produce Music
                                 <button className="text-sm mx-4 opacity-30"  onClick={()=>setVisible(true)} >Check out my projects</button>
                               
                            </h1>
                            </>
                        )
                        }
                            <span>{!visible && (`Making music is my go-to thing to do whenever I have time to burn. Making music also helps me express my feelings in a way that people can relate to too.`)}</span> 
                        </div>
                        {
                            visible && (
                                <>
                                 {/* onMouseLeave={()=>setVisible(false)+ dispatch({type:null})} */}
                                 <div  onMouseLeave={()=>setVisible(false)+ dispatch({type:null})} className="flex flex-row">
                                <div className="  transition-opacity duration-500 ease-in-out">
                                    <div>
                                        <section className="">
                                            <span>Check out my</span>
                                            <h1 className="mt-5 text-5xl " >
                                                Projects
                                                <div className="flex flex-row">
                                                    <div>
                                                    <nav className="flex flex-col text-5xl">
                                                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 hover:translate-x-10 duration-500">
                                                            <Link href={"https://soundcloud.com/syphe-798092283"}  onMouseOver={()=>dispatch({type:"soundcloud"})} >SoundCloud</Link>
                                                            
                                                        </div>
                                                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 hover:translate-x-10 duration-500">
                                                            <Link href={"https://open.spotify.com/artist/4KkpIjkatPSeSvowWByP1x?si=-oNrTpsCQ3aZS_zsodnjkQ"}  onMouseOver={()=>dispatch({type:"spotify"})} >Spotify</Link>
                                                            
                                                        </div>
                                                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 hover:translate-x-10 duration-500">
                                                            <Link href={"https://www.youtube.com/channel/UCS2Qz9AqmjrZzAXF2kH3dYw"}  onMouseOver={()=>dispatch({type:"youtube"})} >Youtube</Link>
                                                            
                                                        </div>
                                                    
                                                    </nav>

                                                    </div>
                                                    
                                                    
                                                

                                                </div>
                                                
                                                

                                            </h1>
                                            
                                            
                                        </section>
                                       

                                    </div>
                                    
                                    
                                    
                                    
                                    

                                    
                                </div>
                                {/* video container */}
                                <div>
                                    {state.url}
                                </div>
                                </div>
                                
                                </>
                            ) 
                        }

                    </div>
                </section>
    )
}