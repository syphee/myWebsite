import Link from "next/link";

import { Bars3Icon, HomeIcon } from "@heroicons/react/20/solid";

export default function header({ visible }) {
  const headerBtns = [
    // {
    //   title: "About Me",
    //   link: "/about",
    //   external: false,
    // },
    // {
    //   title: "My Achievements",
    //   link: "/myachievements",
    //   external: false,
    // },
    // {
    //   title: "My Interests",
    //   link: "/myinterests",
    //   external: false,
    // },
    // {
    //   title: "Contact Me",
    //   link: "/contactme",
    //   external: false,
    // },
    // {
    //   title: "My Projects",
    //   link: "/projects",
    //   external: false,
    // },
    {
      title: "My Linkedin",
      link: "https://www.linkedin.com/feed/",
      external: true,
    },
    {
        title:"Let's connect!",
        link:"mailto:jameslandicho5@gmail.com?subject=Subject&body=Hi!%20Let%27s%20connect!",
        external: true,
    }
  ];

  return (
    <>
      <header className=" flex flex-row m-2 rounded round-5">
        {/* <HomeIcon className="w-6 h-6"/> */}
        <div
          className={
            !visible ? `invisible duration-500 ease-in-out` : undefined
          }
        >
          <nav className=" sm:max-lg:block lg:block">
            <table className="table-auto border-spacing-5 border-separate">
              <tbody>
                <tr className="">
                  {headerBtns.map((item, key) => {
                    return (
                      <td key={key} className="text-white-400 text-xl">
                        {item.external ? (
                          <Link
                            href={item.link}
                            className="opacity-30 hover:opacity-100 hover:text-sky-400 hover:animate-pulse duration-500 ease-in-out"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <a
                            href={item.link}
                            className="opacity-30 hover:opacity-100 hover:text-sky-400 hover:animate-pulse duration-500 ease-in-out"
                          >
                            {item.title}
                          </a>
                        )}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </nav>
        </div>
      </header>
    </>
  );
}
