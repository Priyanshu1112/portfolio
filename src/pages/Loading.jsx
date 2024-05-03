import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Priyanshu", "Frontend Developer", "Mern Developer"];

const Loading = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="bg-slate-950 text-white h-screen w-screen flex items-center justify-center text-sm md:text-lg lg:text-2xl">
      <div className="flex flex-col items-center justify-center ">
        {/* <img src="/logo.png" className="h-[3vmax] md:h-[4vmax] lg:h-[6vmax]" /> */}
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>
    </div>
  );
};

export default Loading;
