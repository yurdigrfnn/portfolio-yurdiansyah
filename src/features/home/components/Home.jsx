import GitIcon from "../../../components/Icons/GitIcon";
import GithubIcon from "../../../components/Icons/GithubIcon";
import JavaScriptIcon from "../../../components/Icons/JavaScriptIcon";
import LaravelIcon from "../../../components/Icons/LaravelIcon";
import MysqlIcon from "../../../components/Icons/MysqlIcon";
import NextJsIcon from "../../../components/Icons/NextJsIcon";
import NodeIcon from "../../../components/Icons/NodeIcon";
import PhpIcon from "../../../components/Icons/PhpIcon";
import PinIcon from "../../../components/Icons/PinIcon";
import ReactIcon from "../../../components/Icons/ReactIcon";
import ReduxIcon from "../../../components/Icons/ReduxIcon";
import TailwindCSSIcon from "../../../components/Icons/TailwindCSSIcon";
import VueIcon from "../../../components/Icons/VueIcon";

export const Home = () => {
  return (
    <div>
      {/* Home page */}
      <div>
        <div className="mx-auto w-11/12 sm:w-10/12 mt-24 dark:text-gray-300">
          <h1 className="font-bold sm:text-6xl text-4xl">Hi,Im Yurdiansyah</h1>
          <p className="mt-5">
            {`I'm a Frontend Developer passionate about creating engaging and
        user-friendly websites. Through my work, I aim to blend design and
        functionality seamlessly to deliver exceptional digital experiences. In
        this portfolio, you'll find a collection of projects where I've applied
        my skills in frontend development, crafting responsive layouts and
        enhancing user interactions to make the web more accessible and
        enjoyable for everyone`}
          </p>
          <div className="my-10 flex flex-col gap-4">
            <span className="flex gap-3">
              <PinIcon className="my-auto" />
              <span>Bogor, indonesia</span>
            </span>
            <span className="flex gap-3 ">
              <span className="ml-1  w-3 h-3 rounded-full bg-green-600 my-auto relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              </span>
              <span className="ml-1 ">Avaiable For fulltime job</span>
            </span>
          </div>
          <div className="mb-5">
            <a
              href="http://github.com/yurdigrfnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="dark:text-gray-300 " />
            </a>
          </div>
        </div>
      </div>

      {/* skils */}
      <div className="dark:bg-gray-900 bg-gray-50">
        <div className="mx-auto w-11/12 sm:w-10/12 py-16 sm:py-24 mt-24 dark:text-gray-300">
          <div className="flex flex-col gap-4 ">
            <span className="flex justify-center">
              <h2 className="dark:text-white bg-gray-400 dark:bg-gray-600 py-2 text-center my-auto px-6 rounded-xl text-sm font-medium">
                Skills
              </h2>
            </span>
            <span className="flex justify-center">
              <p className="text-xl text-center">
                The skills, tools and technologies I am really good at:
              </p>
            </span>
          </div>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-5">
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <JavaScriptIcon />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <ReactIcon />
              <p>React Js</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <TailwindCSSIcon />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <NodeIcon />
              <p>Node JS</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <ReduxIcon />
              <p>Redux</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <PhpIcon />
              <p>Php</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <MysqlIcon />
              <p>MySql</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <LaravelIcon />
              <p>Laravel</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <VueIcon />
              <p>Vue</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <NextJsIcon />
              <p>Next JS</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center rounded-md">
              <GitIcon />
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
