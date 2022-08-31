import React from "react";
import Image from "next/image";
import Link from "next/link";

import { RiRadioButtonFill } from "react-icons/ri";

import sayreImg from "../public/assets/projects/sayre_project.jpg";

const sayre = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={sayreImg}
          alt="/"
        />
        <div className="text-white absolute top-[70%] max-w-[1240] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] pl-4 z-10">
          <h2 className="py-2">Sayre Joan Phogotraphy</h2>
          <h3>SEO</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a mock website for a client and friend of mine. I built it
            as a SEO using only HTML, Vanilla CSS, and Vanilla JavaScript. I
            implemented a little jQuery so the site would appear to be a one
            page application. The code is clean and uses best practices (with
            the exception of the image files being in strict jpeg format). It
            scored a SEO 100 when I ran a Lighthouse audit, and the UI is
            polished and mobile responsive. I wanted to get as close to
            'React.js' functionality as possible, and feel very good about the
            outcome.
          </p>
          <a
            href="https://wlowrimore.github.io/berman_photo_6_22/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>

          <a
            href="https://github.com/wlowrimore/berman_photo_6_22"
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
                jQuery
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

export default sayre;
