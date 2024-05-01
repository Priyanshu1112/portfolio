import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useHover } from "../utils/HoverState";

const Social = () => {
  const { setIsHovered } = useHover();

  return (
    <div
      className=" dark:text-white text-black fixed top-[55%] 
    md:top-[70%] translate-y-full left-1 text-xs md:text-sm origin-top-left -rotate-90 flex  items-center z-50"
    >
      <span>Follow Me</span>
      <div className="h-[.4vmin] w-[3.5vmax] bg-black dark:bg-white mx-5"></div>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        className="md:text-xl text-base"
        to={
          "https://www.linkedin.com/in/priyanshu-singh-raghuwanshi-043060244/"
        }
      >
        <LinkedIn className="rotate-90 mr-3 " fontSize="inherit" />
      </Link>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        className="md:text-xl text-base"
        to={"https://twitter.com/_priyanshu_1112"}
      >
        <Twitter className="rotate-90 mr-3" fontSize="inherit" />
      </Link>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        className="md:text-xl text-base"
        to={"https://github.com/Priyanshu1112"}
      >
        <GitHub className="rotate-90 mr-" fontSize="inherit" />
      </Link>
    </div>
  );
};

export default Social;
