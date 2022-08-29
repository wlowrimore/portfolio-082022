import React from "react";
import Image from "next/image";
import Link from "next/link";

import { RiRadioButtonFill } from "react-icons/ri";

import techBlogImg from "../public/assets/projects/techBlog.jpg";

const techBlog = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={techBlogImg}
          alt="/"
        />
        <div className="text-white absolute top-[70%] max-w-[1240] w-full left-[50%] right=[50%] translate-x-[-50%] translate-y-[-50%] pl-4 z-10">
          <h2 className="py-2">Tech Blog</h2>
          <h3>MVC</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a full-stack Model View Controller (MVC) application that
            was created in the form of a blog. Once the user is logged in, they
            will experience the joy of Creating, Reading, Updating, and Deleting
            posts. If the user is new to the blog, and doesn't have login
            credentials, they can easily sign up. Their newly created username,
            email, and password will be saved, and they will be free to
            participate. However, the user had best keep moving! The session is
            timed, and after 2 minutes of idle time, the user is automatically
            signed out and must sign back in to continue. Each post can receive
            comments from other users, and displays the posts' username and
            timestamp of the date the post was created.
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
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Handlebars
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Connect-Session
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MySQL | MySQL2
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sequelize
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

export default techBlog;
