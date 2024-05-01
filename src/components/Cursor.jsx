import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHover } from "../utils/HoverState";

export function Cursor({ position, touch }) {
  const { isHovered } = useHover();
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setPosition2(position), 100);
  }, [position]);

  return (
    <div className={`${touch && "hidden"}`}>
      <motion.div
        className={`cursor bg-red-500 `}
        style={{
          top: position.y,
          left: position.x,
          zIndex: "9999",
        }}
      />
      <motion.div
        className="cursor bg-black dark:bg-gray-200 "
        style={{
          top: position2.y,
          left: position2.x,
          zIndex: "9998",
          transition: "opacity 0.2s, transform 0.2s",
          transform: isHovered
            ? "scale(5) translate(0%, 0%)"
            : "scale(1) translate(-50%, -50%)",
          opacity: isHovered ? 0.3 : 1,
        }}
      />
    </div>
  );
}

export default Cursor;
