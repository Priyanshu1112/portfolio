import { Close, DarkMode, Download, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useEffect, useState } from "react";
import useDeviceSize from "../utils/DeviceSize";
import Menu from "./Menu";
import { useHover } from "../utils/HoverState";

import { Link as ScrollLink } from "react-scroll";

function Navbar({ show }) {
  const { isMobile, isTablet } = useDeviceSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const iconSize = isMobile ? "small" : isTablet ? "medium" : "large";

  const { setIsHovered } = useHover();

  const [isDark, setIsDark] = useState(null);

  const [main, setMain] = useState(null);

  useEffect(() => {
    setMain(window.document.getElementById("main"));
    setIsDark(localStorage.getItem("isDark") === "true" || false);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);

    if (main)
      if (isDark) {
        main.classList?.add("dark");
      } else main.classList?.remove("dark");
  }, [isDark, main]);

  // Function to handle the activation of a link.
  // const handleSetActive = (to) => {
  //   console.log(to);
  // };

  // ${
  //   !menuOpen && "shadow-md"
  // }
  return (
    <div className="relative z-[9997]">
      <nav
        className={`w-full  ${
          !menuOpen && "shadow-md dark:shadow dark:shadow-white"
        } bg-white dark:bg-slate-950 z-[9997]  md:z-10  fixed 
        transition-all duration-500 
      top-0 left-0 flex justify-between cursor-none  ${
        show ? "-translate-y-full" : "translate-y-0"
      }`}
      >
        {/* <Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to="/"
          className={`font-bold dark:text-white hover:cursor-pointer text-md sm:text-lg md:text-2xl `}
        >
          Priyanshu
        </Link> */}
        <ScrollLink
          containerId="containerElement"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // onSetActive={handleSetActive}
          className={`font-bold  dark:text-white hover:cursor-pointer text-lg md:text-2xl 
          py-2 px-3  dark:bg-inherit`}
        >
          Priyanshu
        </ScrollLink>
        <span
          className={` p-2 flex gap-3 dark:bg-inherit 
          `}
        >
          {!menuOpen && (
            <div>
              <IconButton
                size={iconSize}
                className="dark:text-white "
                onClick={() => {
                  // main.classList.toggle("dark");
                  setIsDark(!isDark);
                }}
              >
                {isDark ? (
                  <LightMode fontSize="medium" />
                ) : (
                  <DarkMode fontSize="medium" />
                )}
              </IconButton>
              <a
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/PriyanshuResume.pdf"
                download="Priyanshu_Resume.pdf"
                className="text-xs md:text-sm lg:text-base hidden md:inline ml-3 bg-gray-300 dark:bg-inherit border  px-2 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                Resume <Download />
              </a>
            </div>
          )}
          {/* <Switcher /> */}

          <IconButton
            className="dark:text-white"
            size={iconSize}
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {menuOpen ? (
              <Close fontSize="medium" />
            ) : (
              <DragHandleIcon fontSize="medium" />
            )}
          </IconButton>
        </span>
      </nav>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </div>
  );
}

export default Navbar;
