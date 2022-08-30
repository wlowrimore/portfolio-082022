import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="w-full h-auto p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl text-start tracking-widest text-[#5651e5]">
          Resume
        </p>
        <h2 className="py-4">William Lowrimore</h2>
        <p className="pb-6 text-gray-600">Software Developer</p>

        <div>
          <h3 className="text-bold uppercase underline">Objective</h3>
          <p className="py-4 pb-8 tracking-wide">
            I am a graduate of Vanderbilt University's Full Stack Coding
            Bootcamp, where I earned my full stack developer ceritification. The
            MERN stack was the main focus of my overall studies. As I have
            become well-versed in numerous programming languages from front-end
            to back-end development, I do find front-end functionality and
            design to be where my skills take flight. I am currently employed as
            a Junior Software Developer with Coroutine. I am continually
            learning and developing new skills while, also stregnthening the
            skills I already possess.
          </p>
        </div>
        <div>
          <h3 className="uppercase underline pb-4">Education</h3>
          <h5>Vanderbilt University Full-Stack Coding Bootcamp</h5>
          <p className="pb-2 text-gray-600 italic">Nashville, TN 2021-2022</p>
          <div>
            <ul className="ml-6 list-disc tracking-wide">
              <li className="py-1">Full-Stack Coding Certificate</li>
              <li className="py-1">3.8 GPA</li>
              <li className="py-1">
                Completed quarterly team projects with focus on MVC, RESTful and
                Third-Party APIs, Databases and Servers, ORM, OOP, TDD, JWT,
                Authentication, various Structured Query Language (SQL), and
                overall MERN Stack best practices.
              </li>
            </ul>
          </div>

          <h5 className="pt-6">Hernando High School</h5>
          <p className="pb-2 text-gray-600 italic">Hernando, MS 1991-1995</p>
          <div>
            <ul className="ml-6 list-disc tracking-wide">
              <li className="py-1">Diploma</li>
              <li className="py-1">
                Accelarated in Mathematics, Sciences, and Music.
              </li>
              <li className="py-1">
                Received numerous awards in music, including the coveted "John
                Philips Sousa Award".
              </li>
              <li className="py-1">
                Recognized by "Who's Who of America" for Science.
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-6">
          <p className="pt-6 pb-6 italic underline">Relevant Coursework</p>
          <div>
            <ul className="grid grid-cols-2 gap-6 ml-6 list-disc tracking-wide">
              <li className="py-1">HTML</li>
              <li className="py-1">CSS</li>
              <li className="py-1">Bootstrap</li>
              <li className="py-1">JavaScript</li>
              <li className="py-1">jQuery</li>
              <li className="py-1">React JS</li>
              <li className="py-1">Structured Query Language (SQL)</li>
              <li className="py-1">Progressive Web Application (PWA)</li>
              <li className="py-1">Model | View | Controller (MVC)</li>
              <li className="py-1">Object Oriented Programming (OOP)</li>
              <li className="py-1">Test Driven Data (TDD)</li>
              <li className="py-1">Express JS</li>
              <li className="py-1">RESTful | Third-Party APIs</li>
              <li className="py-1">Node JS</li>
              <li className="py-1">MongoDB</li>
              <li className="py-1">Apollo Server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
