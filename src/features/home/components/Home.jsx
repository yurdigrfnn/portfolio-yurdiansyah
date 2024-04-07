import GitIcon from "../../../components/Icons/GitIcon";
import GithubIcon from "../../../components/Icons/GithubIcon";
import JavaScriptIcon from "../../../components/Icons/JavaScriptIcon";
import LaravelIcon from "../../../components/Icons/LaravelIcon";
import LinkedInIcon from "../../../components/Icons/LinkedInIcon";
import MysqlIcon from "../../../components/Icons/MysqlIcon";
import NextJsIcon from "../../../components/Icons/NextJsIcon";
import NodeIcon from "../../../components/Icons/NodeIcon";
import PhpIcon from "../../../components/Icons/PhpIcon";
import PinIcon from "../../../components/Icons/PinIcon";
import ReactIcon from "../../../components/Icons/ReactIcon";
import ReduxIcon from "../../../components/Icons/ReduxIcon";
import TailwindCSSIcon from "../../../components/Icons/TailwindCSSIcon";
import VueIcon from "../../../components/Icons/VueIcon";
import {} from "react";
import MotionBottom from "./MotionBottom";
import MotionLeft from "./MotionLeft";
import MotionRight from "./MotionRight";

export const Home = () => {
  return (
    <div>
      {/* Home page */}
      <div id="home">
        <div className="mx-auto w-11/12 sm:w-10/12 mt-24 dark:text-gray-300">
          <span>
            <MotionRight className="w-max">
              <h1 className="font-bold sm:text-6xl text-4xl">
                Hi,Im Yurdiansyah
              </h1>
            </MotionRight>
          </span>
          <MotionRight>
            <p className="mt-5">
              {`I'm a Frontend Developer passionate about creating engaging and
        user-friendly websites. Through my work, I aim to blend design and
        functionality seamlessly to deliver exceptional digital experiences, crafting responsive layouts and
        enhancing user interactions to make the web more accessible and
        enjoyable for everyone`}
            </p>
          </MotionRight>
          <div className="my-10 flex flex-col gap-4">
            <span className="flex gap-3">
              <MotionRight>
                <PinIcon className="my-auto" />
              </MotionRight>
              <MotionRight>
                <span>Bogor, indonesia</span>
              </MotionRight>
            </span>
            <MotionRight className="w-max">
              <span className="flex gap-3">
                <span className="ml-1  w-3 h-3 rounded-full bg-green-600 my-auto relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                </span>
                <span className="ml-1 ">Avaiable For fulltime job</span>
              </span>
            </MotionRight>
          </div>
          <div className="mb-5 flex gap-1">
            <a
              href="http://github.com/yurdigrfnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="dark:text-gray-300 my-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/yurdigrfnn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="dark:text-gray-300 my-auto " />
            </a>
          </div>
        </div>
      </div>
      {/* skils */}
      <div id="skills" className="dark:bg-gray-900 bg-gray-50">
        <div className="mx-auto w-11/12 sm:w-10/12 py-16 sm:py-24 mt-24 dark:text-gray-300">
          <div className="flex flex-col gap-4 ">
            <span className="flex justify-center">
              {" "}
              <MotionLeft>
                <h2 className="dark:text-white bg-gray-400 dark:bg-gray-600 py-2 text-center my-auto px-6 rounded-xl text-sm font-medium">
                  Skills
                </h2>{" "}
              </MotionLeft>
            </span>
            <span className="flex justify-center">
              <MotionLeft>
                <p className="text-xl text-center">
                  The skills, tools and technologies I am really good at:
                </p>
              </MotionLeft>
            </span>
          </div>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-5">
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <JavaScriptIcon />
                <p>JavaScript</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <ReactIcon />
                <p>React Js</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <TailwindCSSIcon />
                <p>Tailwind CSS</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <NodeIcon />
                <p>Node JS</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <ReduxIcon />
                <p>Redux</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <PhpIcon />
                <p>Php</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <MysqlIcon />
                <p>MySql</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <LaravelIcon />
                <p>Laravel</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <VueIcon />
                <p>Vue</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <NextJsIcon />
                <p>Next JS</p>
              </div>
            </MotionLeft>
            <MotionLeft>
              <div className="flex flex-col gap-2 items-center justify-center rounded-md">
                <GitIcon />
                <p>Git</p>
              </div>
            </MotionLeft>
          </div>
        </div>
      </div>
      {/* Experience */}
      <div id="experience">
        <div className="mx-auto w-11/12 sm:w-10/12 py-16 dark:text-gray-300">
          <div className="flex flex-col gap-4 ">
            <span className="flex justify-center">
              <MotionBottom>
                <h2 className="dark:text-white bg-gray-400 dark:bg-gray-600 py-2 text-center my-auto px-6 rounded-xl text-sm font-medium">
                  Experience
                </h2>
              </MotionBottom>
            </span>

            <span className="flex justify-center">
              {" "}
              <MotionBottom>
                <p className="text-xl text-center">Recent experiences:</p>
              </MotionBottom>
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <MotionBottom>
              <div className="w-full dark:bg-gray-600 sm:flex-row justify-between shadow-lg flex gap-4 sm:gap-12 flex-col px-8 sm:px-12 py-8 bg-gray-100 rounded-lg">
                <h1 className="text-2xl font-semibold">ART by Code</h1>
                <p className="my-auto sm:hidden">Nov 2022 - Present</p>
                <div>
                  <h3>Front End Developer</h3>
                  <ul className="list-disc ml-6 mt-4 ">
                    <li>Developing CMS</li>
                    <li>Crafting captivating and responsive websites</li>
                    <li>Building dashboards</li>
                  </ul>
                </div>
                <p className="my-auto sm: mt-0 hidden sm:inline-block">
                  Nov 2022 - Present
                </p>
              </div>
            </MotionBottom>
          </div>
        </div>
      </div>
    </div>
  );
};
