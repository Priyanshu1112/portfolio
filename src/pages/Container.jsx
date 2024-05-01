import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

const Container = () => {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Contact />
      <div className="bg-black text-white h-[12vh] sm:h-[10vh] pt-4 border-t border-white text-center">
        Made by Priyanshu
      </div>
    </div>
  );
};

export default Container;
