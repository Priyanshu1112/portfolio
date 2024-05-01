import { frontend, fullstack } from "../utils/constants";

import { useElementRef } from "../utils/RefProvider";
import ProjectCards from "../components/ProjectCards";
import { Element } from "react-scroll";
import Animations from "../utils/Animations";
import FullStackProjects from "../components/FullStackProjects";

const Projects = () => {
  const { projectRef } = useElementRef();

  return (
    <Element name="projects">
      <Animations />
      <div
        id="projects"
        ref={projectRef}
        className="w-screen min-h-screen px-16 dark:bg-inherit bg-white dark:text-white text-inherit pt-10"
      >
        <span
          id="title-project"
          className="lg:text-6xl md:text-4xl text-center 
          md:text-start pb-3 text-3xl mx-auto md:mx-0 md:pb-5 
          border-b dark:border-b-2 border-black dark:border-inherit 
          block w-[0%] overflow-hidden opacity-0 pt-5 md:pt-10 lg:pt-20"
          // w-[70%] md:w-[50%]
        >
          Projects
        </span>

        <div className="w-full mt-5 text-inherit">
          {/* Fullstack PROJECTS */}
          <div className="mb-10">
            <span
              className="sub-title-project lg:text-2xl md:text-lg text-base pb-1 md:pb-2 
            border-b text-center md:text-start mx-auto md:mx-0 
            dark:border-b-2 border-black dark:border-inherit 
            block w-[0%] opacity-0 whitespace-nowrap overflow-hidden"
              // w-1/2 md:w-[40%] lg:w-1/5"
            >
              Fullstack Projects
            </span>
            <FullStackProjects projects={fullstack} />
          </div>
          {/* FRONTEND PROJECTS */}
          <div>
            <span
              // id="sub-title-project"
              className=" sub-title-project lg:text-2xl md:text-lg text-base pb-1 md:pb-2 
            border-b text-center md:text-start mx-auto md:mx-0 
            dark:border-b-2 border-black dark:border-inherit 
            block w-[0%] opacity-0 whitespace-nowrap overflow-hidden"
              // w-1/2 md:w-[40%] lg:w-1/5"
            >
              FrontEnd Projects
            </span>
            <ProjectCards projects={frontend} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
