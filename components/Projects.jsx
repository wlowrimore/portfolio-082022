import Image from "next/image";
import Link from "next/link";
import React from "react";
import sayreImg from "../public/assets/projects/sayre_project.jpg";
import weatherImg from "../public/assets/projects/weather_project.jpg";
import budgetImg from "../public/assets/projects/budget_project.jpg";
import quizImg from "../public/assets/projects/quiz_project.jpg";
import plannerImg from "../public/assets/projects/planner_project.jpg";
import techBlogImg from "../public/assets/projects/techBlog.jpg";
import bountyImg from "../public/assets/projects/bountyBook.jpg";
import portfolioImg from "../public/assets/projects/classPortfolio.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sayre Joan Photography"
            subTitle="SEO"
            backgroundImg={sayreImg}
            projectUrl="/sayre"
          />
          <ProjectItem
            title="Weather Dashboard"
            subTitle="Utilizes Third-Party API"
            backgroundImg={weatherImg}
            projectUrl="/weather"
          />
          <ProjectItem
            title="Budget Tracker"
            subTitle="PWA"
            backgroundImg={budgetImg}
            projectUrl="/budget"
          />
          <ProjectItem
            title="Code Quiz"
            subTitle="Timed Quiz"
            backgroundImg={quizImg}
            projectUrl="/quiz"
          />
          <ProjectItem
            title="Work Day Scheduler"
            subTitle="Utilizes Third-Party APIs"
            backgroundImg={plannerImg}
            projectUrl="/planner"
          />
          <ProjectItem
            title="Tech Blog"
            subTitle="MVC"
            backgroundImg={techBlogImg}
            projectUrl="/techBlog"
          />
          <ProjectItem
            title="Bounty Book"
            subTitle="MERN Stack"
            backgroundImg={bountyImg}
            projectUrl="/bounty"
          />
          <ProjectItem
            title="Portfolio (Class Project)"
            subTitle="React JS"
            backgroundImg={portfolioImg}
            projectUrl="/classPortfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
