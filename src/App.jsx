import { useEffect, useRef, useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Container from "./pages/Container";
import { useNavigate } from "react-router-dom";
// import { useElementRef } from "./utils/RefProvider";
import { Events, scrollSpy } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./pages/Loading";

const App = () => {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [loading, setLoading] = useState(true);

  // const { homeRef, projectRef, aboutRef, contactRef } = useElementRef();
  // const { search } = useLocation();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = containerRef.current.scrollTop;

      if (currentScroll < prevScroll) {
        // Scrolled down
        setShowNav(false);
      } else {
        // Scrolled up
        setShowNav(true);
      }
      setPrevScroll(currentScroll); // Update prevScroll
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef, prevScroll]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // window.addEventListener("load", () => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    // });

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // useEffect(() => {
  //   const scrollToElement = (element) => {
  //     let scrollPos;

  //     if (element == "projects") {
  //       scrollPos = projectRef.current.offsetTop;
  //     } else if (element == "about") {
  //       scrollPos = aboutRef.current.offsetTop;
  //     } else if (element == "contact") {
  //       scrollPos = contactRef.current.offsetTop;
  //     } else scrollPos = homeRef.current.offsetTop;

  //     // console.log("Scrolling to:", element);
  //     // console.log("Scroll position:", scrollPos);

  //     // console.log({ container: containerRef.current });

  //     const scrollTo = scrollPos - containerRef.current.scrollTop;
  //     const scrollStep = scrollTo / (500 / 20);

  //     if (containerRef.current) {
  //       if (scrollStep != 0) {
  //         const scrollInterval = setInterval(() => {
  //           // console.log("scrolling");
  //           containerRef.current.scrollTop += scrollStep;
  //           if (scrollStep > 0) {
  //             if (containerRef.current.scrollTop >= scrollPos) {
  //               // console.log("stop scrolling");
  //               clearInterval(scrollInterval);
  //             }
  //           } else {
  //             if (containerRef.current.scrollTop <= scrollPos) {
  //               // console.log("stop scrolling");
  //               clearInterval(scrollInterval);
  //             }
  //           }
  //         }, 20);
  //       }
  //     }
  //   };

  //   scrollToElement(search.split("?")[1] ?? "home");
  // }, [search]);

  useEffect(() => {
    const moveCursor = (e) => {
      let { clientX, clientY } = e;
      if (!clientX && !clientY) {
        clientX = 0;
        clientY = 0;
      }

      // const scrollY = document.getElementById("containerElement").scrollTop;
      // Adjust the cursor position by subtracting the scroll offset
      // clientY += scrollY;
      setCursorPosition({ x: clientX, y: clientY });
    };

    // document
    //   .getElementById("containerElement")
    containerRef.current?.addEventListener("mousemove", moveCursor);

    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    navigate("/");

    return () => {
      // document
      //   .getElementById("containerElement")
      containerRef.current?.removeEventListener("mousemove", moveCursor);
    };
  }, [containerRef, loading]);

  if (loading) return <Loading />;

  return (
    <div
      id="main"
      className={` ${localStorage.getItem("isDark") ? "dark" : ""} `}
    >
      <div
        ref={containerRef}
        id="containerElement"
        style={{ scrollBehavior: "smooth" }}
        className="dark:bg-gray-950 text-gray-950 dark:text-white overflow-hidden scroll-smooth overflow-y-scroll h-screen"
      >
        <Social />
        {/* CURSORS */}
        <Cursor position={cursorPosition} touch={isTouch} />
        {/* NAVBAR */}
        <Navbar show={showNav} />
        <Container />
      </div>
    </div>
  );
};

export default App;
