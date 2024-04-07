import { useState } from "react";
import CopyIcon from "../../Icons/CopyIcon";
import EmailIcon from "../../Icons/EmailIcon";
import { Tooltip } from "react-tooltip";
import PhoneIcon from "../../Icons/PhoneIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";

export default function Footer() {
  const [tooltipMessage, setTooltipMessage] = useState("");

  const email = "yurdiansyah143@gmail.com";
  const phone = 6287809884953;

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTooltipMessage("Copied!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        setTooltipMessage("Failed to copy!");
      });

    // Reset the tooltip message after a short delay
    setTimeout(() => {
      setTooltipMessage("");
    }, 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard
      .writeText(phone)
      .then(() => {
        setTooltipMessage("Copied!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        setTooltipMessage("Failed to copy!");
      });

    // Reset the tooltip message after a short delay
    setTimeout(() => {
      setTooltipMessage("");
    }, 2000);
  };

  return (
    <div className="py-16 dark:bg-gray-950 bg-gray-100">
      <div className="w-11/12 sm:w-10/12 mx-auto flex justify-center items-center flex-col">
        <h2 className="dark:text-white bg-gray-400 dark:bg-gray-600 py-2 text-center my-auto px-6 rounded-xl text-sm font-medium">
          get In touch
        </h2>
        <p className="dark:text-gray-300 text-center text-xl mt-4">
          {`If you have any questions or want to discuss a project, feel free to reach out to me.`}
        </p>
        <div className="my-6 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-4">
            <EmailIcon className="dark:text-gray-300" />{" "}
            <span className="text-lg font-semibold dark:text-gray-300">
              yurdiansyah143@gmail.com
            </span>
            <button
              data-tooltip-id="copy-email-tooltip"
              onClick={copyEmailToClipboard}
            >
              <CopyIcon className="dark:text-gray-300" />
              <Tooltip id="copy-email-tooltip" place="top" effect="solid">
                {tooltipMessage}
              </Tooltip>
            </button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <PhoneIcon className="dark:text-gray-300" />{" "}
            <span className="text-lg font-semibold dark:text-gray-300">
              +62 8780 9884 953
            </span>
            <button
              data-tooltip-id="copy-email-tooltip"
              onClick={copyPhoneToClipboard}
            >
              <CopyIcon className="dark:text-gray-300" />
              <Tooltip id="copy-email-tooltip" place="top" effect="solid">
                {tooltipMessage}
              </Tooltip>
            </button>
          </div>
        </div>
        <p className="dark:text-gray-300 text-center text-xl">
          You may also find me on these platforms!
        </p>
        <div className="mt-2 flex gap-1">
          <a
            href="http://github.com/yurdigrfnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="dark:text-gray-300 " />
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
  );
}
