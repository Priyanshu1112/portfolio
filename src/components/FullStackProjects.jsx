import { Card, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { useHover } from "../utils/HoverState";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const FullStackProjects = ({ projects }) => {
  const { setIsHovered } = useHover();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useGSAP(() => {
    document.querySelectorAll(".fullStackCards").forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        x: "0px",
        y: "0px",
        scrollTrigger: {
          trigger: card,
          scroller: document.getElementById("containerElement"),
          scrub: 2,
          // markers: true,
          start: "top 70%",
          end: "top 50%",
        },
      });
    });
  }, []);

  useEffect(() => {
    console.log({ isVideoLoaded });
  }, [isVideoLoaded]);

  return (
    <div
      className="flex flex-col gap-5 w-[90%] mx-auto mt-5 
    bg-inherit "
    >
      {projects.map((project, index) => {
        return (
          <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={index}
            className={`fullStackCards p-5 dark:shadow-white dark:shadow dark:bg-inherit 
            dark:text-inherit
             hover:bg-slate-100 dark:hover:bg-slate-800 transition-all 
            duration-1000 opacity-0 ${
              index % 2 == 0
                ? "md:translate-x-[200px]"
                : "md:-translate-x-[200px]"
            } translate-y-[100px] md:translate-y-0`}
          >
            <h3 className="text-center text-lg underline mb-5">
              {project.title}
            </h3>
            <div className={`flex flex-col lg:flex-row justify-between gap-5`}>
              <div className="h-[30vh] flex-[.4] mx-auto">
                {!isVideoLoaded && (
                  <Skeleton variant="rectangular" height={200} width={300} />
                )}
                <video
                  className={`h-full min-w-[90%] lg:w-[27vw] border 
                    shadow-md shadow-black rounded-md object-fill
                    dark:shadow-white ${
                      isVideoLoaded ? "inline-block" : "hidden"
                    }`}
                  src={project.video}
                  key={index}
                  autoPlay
                  loop
                  muted
                  onCanPlay={() => {
                    setIsVideoLoaded(true);
                  }}
                ></video>
              </div>
              <div className="flex-[.6] flex flex-col">
                <p>
                  <u>Features</u>
                </p>
                <ul className="list-disc list-outside">
                  {project.features.map((feature, index) => {
                    return (
                      <li key={index} className="text-sm">
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-3">
                  <u>Technologies</u>
                </p>
                <ul className="list-disc list-outside grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-x-3 ">
                  {Object.entries(project.technologies).map(
                    ([key, value], ind) => {
                      return (
                        <li className="capitalize text-sm" key={index + ind}>
                          {key} - {value}
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="flex justify-between mt-4 text-xs  flex-1 items-end">
                  <Link
                    target="_blank"
                    to={project.link}
                    className="hover:text-red-500 transition-all duration-300 underline"
                  >
                    Visit Project
                  </Link>
                  <Link
                    target="_blank"
                    to={project.github}
                    className="hover:text-red-500 transition-all duration-300 underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default FullStackProjects;
