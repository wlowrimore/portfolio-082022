import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { RiRadioButtonFill } from "react-icons/ri";

import portfolioImg from "../public/assets/projects/classPortfolio.jpg";

const classPortfolio = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className="text-white absolute top-[70%] max-w-[1240] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] pl-4 z-10">
          <h2 className="py-2">React Portfolio</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            As an assignment in bootcamp, I was challenged to build a single page
            portfolio using ReactJS. This was my original portfolio used on my
            social media pages. I decided to include it on my main portfolio to shadow
            my diversity in programming. It features the same projects you'll find
            on this NextJS portfolio, because I continued to use it after graduating
            from Vanderbilt.
          </p>
          <a
            href="https://lowrimore-william-portfolio-2022-f68bmees4-wlowrimore.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>

          <a
            href="https://github.com/wlowrimore/Lowrimore_William_portfolio-2022"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
              </p>
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JSX | ES6
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                EmailJS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default classPortfolio