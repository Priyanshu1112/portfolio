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
    <div className="bg-slate-950 text-white h-screen w-screen flex items-center justify-center text-2xl">
      <span className="grid grid-cols-2 items-center gap-3  w-full justify-center">
        <img src="/logo.png" className="h-[6vmax] ml-auto" />
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </span>
    </div>
  );
};

export default Loading;
