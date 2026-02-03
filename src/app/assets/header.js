import Link from "next/link"

import { Bars3Icon,HomeIcon } from "@heroicons/react/20/solid"

export default function header({visible}) {

    const headerBtns = [{
        title: "About Me",
        link: "/about"
    }, {
        title: "My Achievements",
        link: "/myachievements"
    }, {
        title: "My Interests",
        link: "/myinterests"
    }, {
        title: "Contact Me",
        link: "/contactme"
    },{
        title:"My Projects",
        link:"/projects"
    }
]

    return (
        <>

        
            <header className=" flex flex-row m-2 rounded round-5">
            {/* <HomeIcon className="w-6 h-6"/> */}
                <div className={!visible && `invisible duration-500 ease-in-out`}>


                <nav className=" hidden sm:max-lg:block lg:block">
                    <table className="table-auto border-spacing-5 border-separate">
                        <tbody>
                            <tr className="">
                                {headerBtns.map((item,key) => {
                                    return (
                                        <td key={key} className="text-white-400 text-xl">
                                            <Link href={item.link} className="opacity-30 hover:opacity-100 hover:text-sky-400 hover:animate-pulse duration-500 ease-in-out">{item.title}</Link>
                                        </td>
                                    )
                                })
                                }
                            </tr>
                        </tbody>
                    </table>


                </nav>
                <nav className="flex justify-start max-sm:block h-6 w-6">
                    <Link href="#">
                        <Bars3Icon />
                    </Link>
                </nav>
                </div>


            </header>
            </>
    )
}