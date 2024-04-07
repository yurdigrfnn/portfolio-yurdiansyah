import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile";
import { MenuBarIcon } from "../../Icons";
import { redirectToExternalUrl } from "../../../utils";
import { Link, Events, scrollSpy } from "react-scroll";
import ThemeSwitcher from "../ThemeSwitcher";
import { useEffect } from "react";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cvUrl =
    "https://drive.google.com/file/d/15XiXMJlkLfXVUfAOM-hVnE6XHQvjxyUu/view?usp=sharing";

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.

    // scrool event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        isScrolled ? "sm:shadow-md" : ""
      } dark:bg-black bg-white z-20 `}
    >
      <div className="w-11/12 sm:w-10/12  mx-auto flex justify-between py-3">
        <div className="w-1/3 my-auto">
          <h1 className="text-3xl inline-block bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 py-1">
            {"{ ./y}"}
          </h1>
        </div>
        <div className="hidden sm:flex justify-end gap-5 w-2/3 mx-auto my-auto">
          <nav className="flex justify-between gap-6 my-auto">
            <Link
              activeClass="!text-blue-500"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg text-gray-600 dark:text-white font-medium hover:cursor-pointer"
            >
              {" "}
              About
            </Link>
            <Link
              activeClass="!text-blue-500"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg text-gray-600 dark:text-white font-medium hover:cursor-pointer"
            >
              {" "}
              Skills
            </Link>
            <Link
              activeClass="!text-blue-500"
              to="experience"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="text-lg text-gray-600 dark:text-white font-medium hover:cursor-pointer"
            >
              {" "}
              experience
            </Link>
            {/* <span className="text-lg text-gray-600 dark:text-white font-medium">
              Personal Project
            </span> */}
          </nav>
          <div className="my-auto">
            <ThemeSwitcher />
          </div>
          <div className="my-auto">
            <Link to="#" onClick={() => redirectToExternalUrl(cvUrl)}>
              <button className="bg-black dark:bg-white dark:text-black rounded-md px-3 text-gray-50 text-sm py-1 font-medium">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:hidden relative my-auto">
          <NavbarMobile
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <button
            type="button"
            className=""
            onClick={() => setSidebarOpen(true)}
          >
            <MenuBarIcon className="text-black dark:text-white h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
