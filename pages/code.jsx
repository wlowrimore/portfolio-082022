import React from "react";
import Image from "next/image";
import Link from "next/link";

import { RiRadioButtonFill } from "react-icons/ri";

import codeImg from "../public/assets/projects/quiz_project.jpg";

const code = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={codeImg}
          alt="/"
        />
        <div className="text-white absolute top-[70%] max-w-[1240] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] pl-4 z-10">
          <h2 className="py-2">Code Quiz</h2>
          <h3>JavaScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a timed coding quiz with multiple choice questions. This app
            runs in the browser, and features dynamically updated HTML and CSS
            powered by JavaScript code. It features a clean, polished and
            responsive user interface (UI). With each incorrect answer, 10
            seconds are deducted from your timer and overall score. When the
            timer reaches 0, the quiz is over. You are then presented with your
            final score and given the opportunity to enter your initials. Your
            initials and score are stored in your computers local storage. A
            link is provided to reveal the high scores that are located in your
            local storage. When you are ready to clear the high score list, just
            click the "Clear Highscores" button, and the stored data will be
            removed. Take the quiz as many times as you would like by using the
            "Go Back" button.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 sm:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-4">
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
                JavaScript
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

export default code;
