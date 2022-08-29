import React from "react";
import Image from "next/image";
import Link from "next/link";

import { RiRadioButtonFill } from "react-icons/ri";

import schedulerImg from "../public/assets/projects/planner_project.jpg";

const scheduler = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={schedulerImg}
          alt="/"
        />
        <div className="text-white absolute top-[70%] max-w-[1240] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] pl-4 z-10">
          <h2 className="py-2">Work Day Scheduler</h2>
          <h3>JavaScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This challenge was built using HTML, CSS and JavaScript. The use of
            third-party APIs (such as) moment.js, font awesome, bootsrap, etc.
            not only resulted in a much more interactive site, but also,
            provided a much more visual appeal. I relied, heavily, on previous
            class modules, my tutor's input, and the (very important) use of
            "google-foo". jQuery is a key element in the base code of the
            javaScript, providing a library of cool "shortcuts" which kept the
            code neat, clean, and minimal. In the first 13 lines of the index.js
            file, you will find the original expectations provided to the class.
            I used these comments as my psuedo-code. I then broke each line down
            and created it's own psuedo-code (listed throughout the main
            index.js file). The style.css file was slightly adjusted, changing
            the white text to black text. The end result is a fully functioning
            hourly planner that recognizes time slots, and tracks the current
            time of day to assign a reference of past, present and future. Each
            pretense is assigned a color code. These color codes change
            according to real time. All tasks are stored in local storage so
            they can be accesssed, even after the page has been closed and
            reopened, or simply refreshed. The date at the head of the document
            is also displayed in real time, so the date will change in real
            time, as well.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                jQuery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MomentJS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default scheduler;
