/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { XCloseIcon } from "../../Icons";
import { Link } from "react-scroll";
import { redirectToExternalUrl } from "../../../utils";
import ThemeSwitcher from "../ThemeSwitcher";

export const NavbarMobile = ({ sidebarOpen, setSidebarOpen }) => {
  const cvUrl =
    "https://drive.google.com/file/d/15XiXMJlkLfXVUfAOM-hVnE6XHQvjxyUu/view?usp=sharing";

  return (
    <Transition.Root show={sidebarOpen} as={React.Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-40 flex sm:hidden"
        open={sidebarOpen}
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-400 dark:bg-gray-500" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex w-full flex-1 flex-col bg-white dark:bg-gray-900 ">
            <Transition.Child
              as={React.Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XCloseIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child>
            <div className="mt-4 flex flex-col gap-5">
              <div className="flex justify-between px-4">
                <div className="flex shrink-0 items-center ">
                  <h1 className="text-3xl inline-block bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-teal-600 to-blue-600">
                    {"{ ./y}"}
                  </h1>
                </div>
              </div>
              <div className="border-t dark:border-gray-600 border-gray-300 ">
                <nav
                  className="flex-1 space-y-1 px-4 py-4"
                  aria-label="Sidebar"
                >
                  <div className="flex flex-col gap-4">
                    <Link
                      onClick={() => {
                        setSidebarOpen(false);
                      }}
                      activeClass="!text-blue-500"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      className="text-lg text-gray-600 dark:text-white font-medium hover:cursor-pointer"
                    >
                      About
                    </Link>
                    <Link
                      onClick={() => {
                        setSidebarOpen(false);
                      }}
                      activeClass="!text-blue-500"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      className="text-lg text-gray-600 dark:text-white font-medium hover:cursor-pointer"
                    >
                      Skills
                    </Link>
                    <Link
                      onClick={() => {
                        setSidebarOpen(false);
                      }}
                      activeClass="!text-blue-500"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      className="text-lg text-gray-600 dark:text-white font-medium hover:cursor-pointer"
                    >
                      Experience
                    </Link>
                    {/* <span className="text-lg text-gray-600 dark:text-white font-medium">
                      Personal Project
                    </span> */}
                  </div>
                </nav>
                <div className="w-full px-4 flex pt-4 gap-4 flex-col border-t dark:border-gray-600 border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-lg text-gray-600 dark:text-white font-medium">
                      Switch Theme
                    </span>
                    <ThemeSwitcher />
                  </div>
                  <Link to="#" onClick={() => redirectToExternalUrl(cvUrl)}>
                    <button className="w-full bg-black dark:bg-white dark:text-black rounded-md text-gray-50 text-sm py-1 font-medium">
                      Download CV
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
        <div className="w-14 shrink-0" aria-hidden="true"></div>
      </Dialog>
    </Transition.Root>
  );
};
