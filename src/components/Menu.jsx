import { motion } from "framer-motion";
import { useHover } from "../utils/HoverState";
import { Link as ScrollLink } from "react-scroll";

function Menu({ open, setOpen }) {
  const { setIsHovered } = useHover();
  const menuItems = {
    home: "home",
    projects: "projects",
    about: "about",
    contact: "contact",
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center gap-[7vmin] text-4xl md:text-6xl  bg-white text-gray-800 dark:bg-gray-950 dark:text-white fixed z-[9] top-0 left-0"
      style={{
        transform: open ? "translateY(0%)" : "translateY(-100%)",
        transition: ".5s all",
      }}
    >
      {Object.entries(menuItems).map(([menu, path], ind) => (
        <motion.div key={ind} whileHover={{ scale: 1.1 }}>
          <ScrollLink
            containerId="containerElement"
            onClick={() => setOpen(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            to={path}
            className="capitalize hover:text-red-500 "
            style={{ transition: "1s all" }}
          >
            {menu}
          </ScrollLink>
        </motion.div>
      ))}
    </div>
  );
}

export default Menu;
