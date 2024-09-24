import { Card } from "@mui/material";
import { useHover } from "../utils/HoverState";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FreelanceProjects = ({ projects }) => {
  const { setIsHovered } = useHover();

  useGSAP(() => {
    document.querySelectorAll(".freelanceCards").forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        scale: 1,
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

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%] mx-auto mt-5 items-center justify-center
bg-inherit "
    >
      {projects.map((project, index) => {
        return (
          <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            key={index}
            className={`freelanceCards p-5 dark:shadow-white dark:shadow dark:bg-inherit
            dark:text-inherit
             hover:bg-slate-100 dark:hover:bg-slate-800 transition-all   opacity-0 scale-75   
                  
             `}
          >
            <h3 className="text-center text-lg underline mb-5">
              {project.title} (Freelance)
            </h3>
            <div className={`flex flex-col justify-between gap-5`}>
              <div className="h-[30vh] flex-[.4] mx-auto">
                <img
                  className={`h-full min-w-[90%] lg:w-[27vw] border 
                    shadow-md shadow-black rounded-md object-fill
                    dark:shadow-white `}
                  src={project.image}
                  key={index}
                />
              </div>
              <div className="flex-[.6] flex flex-col">
                <p>
                  <u>Responsibilities</u>
                </p>
                <ul className="list-disc list-outside">
                  {project.responsibilities.map((feature, index) => {
                    return (
                      <li key={index} className="text-sm">
                        {feature}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex justify-between mt-4 text-xs  flex-1 items-end">
                  <span>{project.duration}</span>
                  <Link
                    target="_blank"
                    to={project.link}
                    className="hover:text-red-500 transition-all duration-300 underline"
                  >
                    Visit Project
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

export default FreelanceProjects;
