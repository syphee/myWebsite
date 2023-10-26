export default function Idle({toggle}){
    return(
        <section className="flex h-screen w-screen  opacity-0 visible hover:invisible hover:opacity-100 animate-pulse" onClick={()=>{toggle()}}>
                <div className="h-150 m-auto">
                    <div>
                        <span>:)</span>
                        <h1 className="mt-5 text-7xl hover:translate-x-6 duration-500 ease-in-out" >
                            Please hover over the window.

                        </h1>
                    </div>

                </div>
        </section>

    )
}

