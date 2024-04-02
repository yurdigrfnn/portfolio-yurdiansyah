import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile";
import { MenuBarIcon } from "../../Icons";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto flex justify-between">
      <div className="w-1/3">
        <h1 className="text-3xl inline-block bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 py-1">
          {"{ ./y}"}
        </h1>
      </div>
      <div className="hidden sm:flex justify-end gap-3 w-2/3 mx-auto my-auto">
        <nav className="flex justify-between gap-6 my-auto">
          <span className="text-lg text-gray-600 font-medium">About</span>
          <span className="text-lg text-gray-600 font-medium">Skills</span>
          <span className="text-lg text-gray-600 font-medium">Experience</span>
          <span className="text-lg text-gray-600 font-medium">Project</span>
        </nav>
        <div className="my-auto">
          <button className="bg-black rounded-md px-3 text-gray-50 text-sm py-1 font-medium">
            CV
          </button>
        </div>
        <div className="my-auto">
          <button className="bg-black rounded-md px-3 text-gray-50 text-sm py-1 font-medium">
            Download CV
          </button>
        </div>
      </div>
      <div className="sm:hidden relative my-auto">
        <NavbarMobile
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <button type="button" className="" onClick={() => setSidebarOpen(true)}>
          <MenuBarIcon className="text-black h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
