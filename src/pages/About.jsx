import { Element } from "react-scroll";
import { useElementRef } from "../utils/RefProvider";
import Animations from "../utils/Animations";
import { aboutMySelf, education, skills } from "../utils/constants";

function About() {
  const { aboutRef } = useElementRef();

  return (
    <Element name="about">
      <Animations />
      <div
        id="about"
        ref={aboutRef}
        className="w-screen min-h-screen px-4 dark:bg-inherit bg-white dark:text-white text-inherit md:pl-8 pt-10"
      >
        <span
          id="title-about"
          className="lg:text-6xl md:text-4xl text-center
         md:text-start pb-3 text-3xl mx-auto md:mx-0 md:pb-5 border-b 
         dark:border-b-2 border-black dark:border-inherit block 
          pt-5 md:pt-10 lg:pt-20 w-[0%] opacity-0 overflow-hidden whitespace-nowrap"
          // w-[70%] md:w-[50%]
        >
          About Me
        </span>

        {/* ABOUT MYSELF */}
        <div className=" flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-8 sm:mb-12 lg:mb-16  pt-8 sm:pt-12 lg:pt-16 w-[90%] mx-auto ">
          <span
            className="left-about flex-[.45] text-2xl hidden sm:block
          opacity-0 translate-y-[100px] sm:translate-y-0 sm:-translate-x-[100px]  font-semibold"
          >
            About My self
          </span>
          <span
            id="about-container"
            className=" flex-[.55] text-base
          text-center sm:text-start "
          >
            <ul>
              {aboutMySelf.split(".").map((data, index) => {
                const values = data.split(":");
                if (index > 5) return;
                return (
                  <li
                    className="about opacity-0 translate-y-[100px] sm:translate-y-[0px] text-sm md:text-base  sm:translate-x-[100px] mb-2"
                    key={index}
                  >
                    <span className="font-semibold">{values[0]}</span> :{" "}
                    <span>{values[1]}</span>
                  </li>
                );
              })}
            </ul>
          </span>
        </div>
        {/* SKILLS */}
        <div
          className=" flex flex-col items-center sm:items-start border-t-2 sm:flex-row mb-8 
        sm:mb-12 lg:mb-16 gap-5 pt-8 sm:pt-12 lg:pt-16 w-[90%] mx-auto "
        >
          <span
            className="left-about flex-[.45]   text-2xl
          opacity-0 translate-y-[100px] sm:translate-y-[0px] sm:-translate-x-[100px]  font-semibold"
          >
            Skills
          </span>
          <span
            id="skills-container"
            className=" flex-[.55]  text-base 
           "
          >
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-5 ">
              {Object.entries(skills).map(([key, url], index) => (
                <li
                  key={index}
                  className="skills opacity-0 rounded-md translate-y-[100px] sm:translate-y-[0px]  sm:translate-x-[100px] text-center 
                  shadow  group/skill transition-all duration-300 sm:text-start relative"
                >
                  <div className="w-20 p-1 rounded-t-sm mx-auto bg-inherit dark:bg-slate-100">
                    <img
                      src={url}
                      alt=""
                      className="h-[4vmax] mx-auto md:h-[3vmax] lg:h-[4vmax] mb-1  object-fill"
                      // className="bottom-[100%] left-[10%] h-0 group-hover/skill:h-[2vmax] transition-all duration-300 absolute"
                    />
                  </div>
                  <span
                    className="bg-slate-300 text-xs dark:bg-slate-700 dark:text-white block 
                  rounded-md p-2 text-center"
                  >
                    {key}
                  </span>
                </li>
              ))}
            </ul>
            {/* <ul className="grid grid-cols-3 gap-y-8 gap-x-5 lg:grid-cols-4 lg:gap-5 ">
              {Object.entries(skills).map(([key, url], index) => (
                <li
                  key={index}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="text-center group/skill hover:text-red-500 transition-all duration-300 sm:text-start relative"
                >
                  {isTouch ? (
                    <img
                      src={url}
                      alt=""
                      className="h-[2vmax] mx-auto sm:mx-0 mb-1"
                    />
                  ) : (
                    <img
                      src={url}
                      alt=""
                      className="bottom-[100%] left-[10%] h-0 group-hover/skill:h-[2vmax] transition-all duration-300 absolute"
                    />
                  )}
                  <span>{key}</span>
                </li>
              ))}
            </ul> */}
          </span>
        </div>
        {/* EDUCATION */}
        <div className=" flex flex-col items-center sm:items-start sm:flex-row border-t-2 gap-2 pt-8 sm:pt-12 lg:pt-16 w-[90%] mx-auto ">
          <span
            className="left-about flex-[.45]  text-2xl 
          opacity-0 translate-y-[100px] sm:-translate-x-[100px] sm:translate-y-[0px] font-semibold"
          >
            Education
          </span>
          <span
            id="education-container"
            className="flex-[.55]  text-sm md:text-base
          "
          >
            {education.map((data, index) => (
              <div
                key={index}
                className="education opacity-0 translate-y-[100px] sm:translate-y-[0px]  sm:translate-x-[100px]
                 mb-5 text-center sm:text-start"
              >
                <p className="font-semibold">{data.institute}</p>
                <p className="pl-2">- {data.degree}</p>
                {data.field ? <p>- {data.field}</p> : null}
                <p className="pl-2">- {data.score}</p>
              </div>
            ))}
          </span>
        </div>
      </div>
    </Element>
  );
}

export default About;
