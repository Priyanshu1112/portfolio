import { Element } from "react-scroll";
import Animations from "../utils/Animations";
import { useRef } from "react";
import FreelanceProjects from "../components/FreelanceProjects";
import { freelance } from "../utils/constants";

const Experience = () => {
  const experienceRef = useRef(null);
  return (
    <Element name="experience">
      <Animations />
      <div
        id="experience"
        ref={experienceRef}
        className="w-screen md:pl-8  dark:bg-inherit bg-white dark:text-white text-inherit pt-10"
      >
        <span
          id="title-experience"
          className="lg:text-6xl md:text-4xl text-center 
          md:text-start pb-3 text-3xl mx-auto md:mx-0 md:pb-5 
          border-b dark:border-b-2 border-black dark:border-inherit 
          block w-[0%] overflow-hidden opacity-0 pt-5 md:pt-10 lg:pt-20"
          // w-[70%] md:w-[50%]
        >
          Experience
        </span>

        <div className="w-full mt-5 text-inherit">
          <div className="mb-10">
            <FreelanceProjects projects={freelance} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
