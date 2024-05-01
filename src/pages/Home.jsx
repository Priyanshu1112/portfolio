import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useHover } from "../utils/HoverState";
import { useElementRef } from "../utils/RefProvider";
// import CheckPage from "../utils/CheckPage";
import { Element, Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "@mui/icons-material";

function Home() {
  const { homeRef } = useElementRef();
  const { setIsHovered } = useHover();
  const [isTouch, setIsTouch] = useState(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

    timeline
      .to(document.querySelectorAll(".text"), {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        y: "0px",
        delay: 0.5,
      })
      .to(document.querySelectorAll(".button"), {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        x: "0px",
      }).to(document.getElementById('resume-button'),{
        opacity: 1,
        y: '0px',
        duration: 1
      });

    timeline.play();
  }, []);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <Element name="home">
      {/* <CheckPage sectionRef={homeRef} path="" /> */}
      <div
        ref={homeRef}
        id="home"
        className="flex w-screen overflow-hidden  overflow-y-auto h-screen cursor-none"
      >
        {/* tablet and above */}
        <div className="w-[50vw]  flex-col justify-center items-center dark:text-white gap-4 hidden md:flex">
          <span
            className={`text font-bold dark:text-white sm:text-lg md:text-5xl`}
          >
            Welcome
          </span>
          <TypeAnimation
            className="text-sm text text-center md:text-base"
            sequence={[
              "I like to code.",
              1000,
              "I enjoy creating websites.",
              1000,
              "I develop sleek and professional designs.",
              1000,
              "My passion is crafting innovative digital experiences.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <span className="block text w-[90%] md:w-[70%] text-sm text-center md:text-base">
            My name is Priyanshu Singh Raghuwanshi, I&apos;m a proficient MERN
            stack developer, excelling in crafting websites with versatility
            across various frameworks and libraries. With expertise in HTML,
            CSS, and JavaScript, I bring dynamic and engaging digital
            experiences to life.
          </span>
          <div className="flex gap-10 mt-5">
            <div className="group/button button relative">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                role="button"
                className=" text-white bg-black dark:bg-white dark:text-black relative z-20"
              >
                <ScrollLink
                  containerId="containerElement"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  // onSetActive={handleSetActive}
                  // onClick={handleProjectClick}
                  className="w-full h-full block px-7 py-2"
                >
                  My Projects
                </ScrollLink>
              </div>
              {!isTouch && (
                <>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-black  dark:bg-white opacity-0 group-hover/button:top-[-20%] group-hover/button:left-[-5%] group-hover/button:opacity-100 hover:none:hidden"></div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-black dark:bg-white opacity-0 group-hover/button:top-[20%] group-hover/button:left-[5%] group-hover/button:opacity-100 hover:none:hidden"></div>
                </>
              )}
            </div>
            <div className="group/button button relative">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                role="button"
                className={`dark:bg-inherit relative z-20 border-2 dark:border-white border-black ${
                  !isTouch &&
                  "dark:group-hover/button:border-black group-hover/button:border-white"
                } transition-all duration-1000`}
              >
                {!isTouch && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-[100%] z-30 bg-white dark:bg-black transition-all duration-1000 opacity-0 group-hover/button:h-[0%] group-hover/button:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[0%] z-30 bg-black dark:bg-white transition-all duration-1000 opacity-0 group-hover/button:h-[100%] group-hover/button:opacity-100"></div>
                  </>
                )}
                <div
                  className={` dark:text-white relative z-40  ${
                    !isTouch &&
                    "dark:group-hover/button:text-black group-hover/button:text-white"
                  } transition-all duration-500`}
                >
                  <ScrollLink
                    containerId="containerElement"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    // onSetActive={handleSetActive}
                    // onClick={handleProjectClick}
                    className="px-7 py-2 block w-full h-full"
                  >
                    About Me
                  </ScrollLink>
                </div>
              </div>
              {!isTouch && (
                <>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-black  dark:bg-white opacity-0 group-hover/button:top-[-20%] group-hover/button:left-[-5%] group-hover/button:opacity-100"></div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-black dark:bg-white opacity-0 group-hover/button:top-[20%] group-hover/button:left-[5%] group-hover/button:opacity-100"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=" w-[80%] mx-auto md:w-[50vw] p-[1vmin] h-full relative">
          <img
            src="https://images.unsplash.com/photo-1514790193030-c89d266d5a9d"
            alt="img"
            className="h-full w-full rounded-md sm:rounded-none border-b md:border-none"
          />
          {/* tablet and below */}
          <div
            className="w-[95%]  top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 absolute flex-col justify-center 
          items-center text-white gap-4 flex md:hidden"
          >
            <span
              className={`font-bold bg-[rgba(0,0,0,.5)] p-1 text dark:text-white text-5xl`}
            >
              Welcome
            </span>
            <TypeAnimation
              className="text bg-[rgba(0,0,0,.5)] text-sm"
              sequence={[
                "I like to code.",
                1000,
                "I enjoy creating websites.",
                1000,
                "I develop sleek and professional designs.",
                1000,
                "My passion is crafting innovative websites.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="block bg-[rgba(0,0,0,.5)]  text w-[70%] text-center text-base">
              I&apos;m a proficient MERN stack developer, excelling in crafting
              websites with versatility across various frameworks and libraries.
              With expertise in HTML, CSS, and JavaScript, I bring dynamic and
              engaging digital experiences to life.
            </span>
            <div className="flex flex-col gap-10 mt-5 text-base">
              <div className="group/button button -translate-x-[100px] relative">
                <div
                  role="button"
                  className="px-5 py-1 border-2  bg-white text-black relative z-20"
                >
                  <ScrollLink
                    containerId="containerElement"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    My Projects
                  </ScrollLink>
                </div>
              </div>
              <div className="group/button button translate-x-[100px] relative">
                <div
                  role="button"
                  className="dark:bg-inherit relative z-20 border-2 border-border-2 dark:group-hover/button:border-black"
                >
                  <div className="px-5 py-1 dark:text-white relative z-40 ">
                    <ScrollLink
                      containerId="containerElement"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                      role="button"
                    >
                      About Me
                    </ScrollLink>
                  </div>
                </div>
              </div>
              <div id="resume-button" className="group/button opacity-0 translate-y-[100px] relative">
                <a
                  href="/PriyanshuResume.pdf"
                  role="link"
                  download="Priyanshu_Resume.pdf"
                  className="dark:bg-inherit relative px-5 py-1 z-20 border-2 border-border-2 dark:group-hover/button:border-black"
                >
                  Resume <Download />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="w-full  bottom-[10vh] left-0 absolute flex-col justify-center items-center text-white gap-4 flex md:hidden">
            <span
              className={`font-bold text dark:text-white sm:text-lg md:text-5xl`}
            >
              Welcome
            </span>
            <TypeAnimation
              className="text-sm text text-center md:text-md"
              sequence={[
                "I like to code.",
                1000,
                "I enjoy creating websites.",
                1000,
                "I develop sleek and professional designs.",
                1000,
                "My passion is crafting innovative digital experiences.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="block text w-[70%] text-xs sm:text-sm text-center md:text-md">
              I&apos;m a proficient MERN stack developer, excelling in crafting
              websites with versatility across various frameworks and libraries.
              With expertise in HTML, CSS, and JavaScript, I bring dynamic and
              engaging digital experiences to life.
            </span>
            <div className="flex gap-10 mt-5 text-xs">
              <div className="group/button button relative">
                <div
                  role="button"
                  className="px-5 py-1 border-2  bg-white text-black relative z-20"
                >
                  <ScrollLink
                    containerId="containerElement"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    My Projects
                  </ScrollLink>
                </div>
              </div>
              <div className="group/button button relative">
                <div
                  role="button"
                  className="dark:bg-inherit relative z-20 border-2 border-border-2 dark:group-hover/button:border-black"
                >
                  <div className="px-5 py-1 dark:text-white relative z-40 ">
                    <ScrollLink
                      containerId="containerElement"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                      role="button"
                    >
                      About Me
                    </ScrollLink>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Element>
  );
}

export default Home;
