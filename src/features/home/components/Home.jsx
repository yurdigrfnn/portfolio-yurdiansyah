import GithubIcon from "../../../components/Icons/GithubIcon";
import PinIcon from "../../../components/Icons/PinIcon";

export const Home = () => {
  return (
    <div className="mx-auto w-11/12 sm:w-10/12 mt-24 dark:text-gray-300">
      <h1 className="font-bold sm:text-6xl text-4xl">Hi,Im Yurdiansyah</h1>
      <p className="mt-5">
        {`I'm a Frontend Developer passionate about creating engaging and
        user-friendly websites. Through my work, I aim to blend design and
        functionality seamlessly to deliver exceptional digital experiences. In
        this portfolio, you'll find a collection of projects where I've applied
        my skills in frontend development, crafting responsive layouts and
        enhancing user interactions to make the web more accessible and
        enjoyable for everyone. Thank you for taking the time to explore my
        portfolio; I look forward to discussing how we can collaborate to
        achieve your digital goals. Let's build something amazing together!`}
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
  );
};
