import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl text-start tracking-widest text-[#5651e5]">
          Resume
        </p>
        <h2 className="py-4">William Lowrimore</h2>
        <p className="pb-6 text-gray-600">Software Developer</p>

        <div>
          <h3 className="text-bold uppercase underline pb-4">Objective</h3>
          <p>
            I am a graduate of Vanderbilt University's Full Stack Coding
            Bootcamp, where I earned my full stack developer ceritification. The
            MERN stack was the main focus of my overall studies. As I have
            become well-versed in numerous programming languages from front-end
            to back-end development, I do find front-end functionality and
            design to be where my skills take flight. I am currently employed as 
            a Junior Software Developer with Coroutine. I am continually learning 
            and developing new skills while, also stregnthening the skills I already possess.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
