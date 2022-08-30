import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">William</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a Graduate of Vanderbilt University's Full-Stack Coding Bootcamp. I'm 
            currently employeed as a Junior Software Developer where I focus on front-end 
            web development. I also continue to study full-stack best practices, as I further
            my knowledge and skills in the latest software development technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <a href="https://linkedin.com/in/william-lowrimore-21778310" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>                
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <a href="https://github.com/wlowrimore" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="/#contact"><AiOutlineMail /></Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="/#resume"><BsFillPersonLinesFill /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
