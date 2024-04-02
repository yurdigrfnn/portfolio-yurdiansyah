/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { XCloseIcon } from "../../Icons";

export const NavbarMobile = ({ sidebarOpen, setSidebarOpen }) => {
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
          <Dialog.Overlay className="fixed inset-0 bg-gray-400" />
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
          <div className="relative flex w-full flex-1 flex-col bg-white py-4">
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
            <div className="flex shrink-0 items-center px-4">
              <h1 className="text-3xl inline-block bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 py-1">
                {"{ ./y}"}
              </h1>
            </div>
            <div className="mt-4">
              <nav
                className="flex-1 space-y-1 bg-white px-4 py-2"
                aria-label="Sidebar"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-lg text-gray-600 font-medium">
                    About
                  </span>
                  <span className="text-lg text-gray-600 font-medium">
                    Skills
                  </span>
                  <span className="text-lg text-gray-600 font-medium">
                    Experience
                  </span>
                  <span className="text-lg text-gray-600 font-medium">
                    Personal Project
                  </span>
                </div>
              </nav>
              <div className="w-full px-4 mt-3">
                <button className="w-full bg-black rounded-md text-gray-50 text-sm py-1 font-medium">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </Transition.Child>
        <div className="w-14 shrink-0" aria-hidden="true"></div>
      </Dialog>
    </Transition.Root>
  );
};
