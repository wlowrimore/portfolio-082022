import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer</p>

          <p className="py-2 text-gray-600">I come from the banks of the 
          Mississippi, where I was born and raised...Memphis, TN to be exact.
          I come from a family of musicians, artists, and (yes indeed) software 
          'techies'. I, myself, chose the path of music at a young age, and ran
          with it. Most of my professional years have been spent on the road and 
          in recording studios. I toured, recorded and taught music. Music was my life!
          But...something was missing. I needed a change, a new start. So I
          picked up and moved on (a new city, a new life).</p>

          <p className="py-2 text-gray-600">I enrolled in
          Vanderbilt University's Full Stack Coding Bootcamp. I felt like I
          would be a perfect candidate to take on this challenge, express my
          love for problem solving, and to flex my creative muscles. I've
          enjoyed every second of it, and hope to make a very fruitful career of
          it.</p>

          <p className="py-2 text-gray-600">I am always learning, and always 
          thirsty for knowledge. Finding this avenue is beyond exciting for me! 
          I began this journey with only basic computer skills, and some graphic 
          design experience, and now...well...let's just say, "I've come a long 
          way!" With that said, please review my portfolio. You might find that 
          I am willing and able to team up, learn new skills, and adapt to new 
          environments.</p>

          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-[65%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-6 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
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
