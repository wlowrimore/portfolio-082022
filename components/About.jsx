import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer</p>

          <p className="py-2 text-gray-600">Bio goes here 1st paragraph</p>

          <p className="py-2 text-gray-600">Bio goes here 2nd paragraph</p>

          <p className="py-2 text-gray-600">Bio goes here 3rd paragraph</p>

          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div>
          <Image
            src="/../public/assets/profilePic.jpg"
            alt="/"
            width="200"
            height="310"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
