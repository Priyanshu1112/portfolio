import { Card, Skeleton } from "@mui/material";
import { useHover } from "../utils/HoverState";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useDeviceSize from "../utils/DeviceSize";

const ProjectCards = ({ projects }) => {
  const { setIsHovered } = useHover();
  const [isTouch, setIsTouch] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const cardContainer = useRef(null);
  const videoRef = useRef(null);

  const { isMobile, isTablet } = useDeviceSize();

  useGSAP(() => {
    gsap.to(cardContainer.current.children, {
      opacity: 1,
      y: "0px",
      stagger: 0.5, // Adjust the stagger value as needed
      scrollTrigger: {
        trigger: cardContainer.current,
        scroller: document.getElementById("containerElement"),
        scrub: 3,
        start: "top 80%", // Adjust the start position as needed
        end: isMobile ? "top 10%" : isTablet ? "top 10%" : "top 30%", // Adjust the end position as needed
        // markers: true,
      },
    });
  }, [isMobile, isTablet]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <div
      ref={cardContainer}
      className="flex flex-wrap w-full gap-3 items justify-center px-4  lg:gap-5 flex-col sm:flex-row mt-5 items-center lg:px-8"
    >
      {projects.map((project, index) => {
        return (
          <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={index}
            className="p-3 translate-y-[100px] opacity-0 flex flex-col 
            justify-between dark:bg-slate-950 bg-inherit 
            lg:w-[30%] sm:w-[45%] dark:text-white dark:shadow-white 
            dark:shadow rounded-lg relative group/card "
          >
            <h3 className="mb-3 text-center lg:text-start">{project.name}</h3>
            <div className="flex flex-col justify-between flex-1 items-center gap-3">
              {!isVideoLoaded && (
                <Skeleton variant="rectangular" height={200} width={300} />
              )}
              <video
                ref={videoRef}
                src={project.video}
                loop
                autoPlay
                muted
                className={`${
                  isVideoLoaded ? "block" : "hidden"
                } h-[30vmin] w-[30vw] mx-auto lg:w-[25vmax] border 
                shadow-md shadow-black rounded-md object-fill`}
                onLoadedData={() => {
                  setIsVideoLoaded(true);
                }}
              />

              {isTouch && (
                <span className="block p-1 pt-2 md:text-sm text-xs text-inherit text-center w-full ">
                  <div>{project.description}</div>
                  <div className="flex justify-between text-xs mt-2 stroke-red-500 ">
                    <Link
                      className="hover:text-red-500 transition-all duration-300 underline"
                      to={project.link}
                      target="_blank"
                    >
                      Visit Project
                    </Link>
                    <Link
                      className="hover:text-red-500 transition-all duration-300 underline"
                      to={project.Github}
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </div>
                </span>
              )}
              {!isTouch && (
                <span className="block w-full p-1 pt-2 text-sm max-h-1/5 absolute bottom-0 transition-all duration-300 bg-[rgba(0,0,0,.7)] text-white dark:bg-[rgba(9,9,9,.7)] translate-y-full left-0 group-hover/card:translate-y-0">
                  <div>{project.description}</div>
                  <div className="flex justify-between text-xs mt-2 stroke-red-500 ">
                    <Link
                      className="hover:text-red-500 transition-all duration-300 underline"
                      to={project.link}
                      target="_blank"
                    >
                      Visit Project
                    </Link>
                    <Link
                      className="hover:text-red-500 transition-all duration-300 underline"
                      to={project.Github}
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </div>
                </span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectCards;
