import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile";
import { MenuBarIcon } from "../../Icons";
import { redirectToExternalUrl } from "../../../utils";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cvUrl =
    "https://drive.google.com/file/d/15XiXMJlkLfXVUfAOM-hVnE6XHQvjxyUu/view?usp=sharing";

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto flex justify-between pt-3">
      <div className="w-1/3 my-auto">
        <h1 className="text-3xl inline-block bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 py-1">
          {"{ ./y}"}
        </h1>
      </div>
      <div className="hidden sm:flex justify-end gap-5 w-2/3 mx-auto my-auto">
        <nav className="flex justify-between gap-6 my-auto">
          <span className="text-lg text-gray-600 dark:text-white font-medium">
            About
          </span>
          <span className="text-lg text-gray-600 dark:text-white font-medium">
            Skills
          </span>
          <span className="text-lg text-gray-600 dark:text-white font-medium">
            Experience
          </span>
          <span className="text-lg text-gray-600 dark:text-white font-medium">
            Personal Project
          </span>
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
        <button type="button" className="" onClick={() => setSidebarOpen(true)}>
          <MenuBarIcon className="text-black dark:text-white h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
