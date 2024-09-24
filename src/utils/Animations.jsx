import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useDeviceSize from "../utils/DeviceSize";

const Animations = () => {
  const { isMobile, isTablet } = useDeviceSize();

  useGSAP(() => {
    //experience
    gsap.to(document.getElementById("title-experience"), {
      width: isTablet ? "70%" : "50%",
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("experience"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 60%",
        end: "top 50%",
      },
    });


    //projects
    gsap.to(document.getElementById("title-project"), {
      width: isTablet ? "70%" : "50%",
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("projects"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 60%",
        end: "top 50%",
      },
    });

    document.querySelectorAll(".sub-title-project").forEach((elem) => {
      gsap.to(elem, {
        width: isMobile ? "50%" : isTablet ? "40%" : "20%",
        opacity: 1,
        scrollTrigger: {
          trigger: elem,
          scroller: document.getElementById("containerElement"),
          // markers: true,
          scrub: 2,
          start: "top 70%",
          end: "top 75%",
        },
      });
    });

    //About
    gsap.to(document.getElementById("title-about"), {
      width: isTablet ? "70%" : "50%",
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("about"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 60%",
        end: "top 50%",
      },
    });

    document.querySelectorAll(".left-about").forEach((element) =>
      gsap.to(element, {
        x: "0px",
        y: "0px",
        opacity: 1,
        scrollTrigger: {
          trigger: element.parentElement,
          scroller: document.getElementById("containerElement"),
          // markers: true,
          scrub: 3,
          start: "top 80%",
          end: "top 50%",
        },
      })
    );
    document.querySelectorAll(".right-about").forEach((element) =>
      gsap.to(element, {
        x: "0px",
        y: "0px",
        opacity: 1,
        scrollTrigger: {
          trigger: element.parentElement,
          scroller: document.getElementById("containerElement"),
          // markers: true,
          scrub: 3,
          start: "top 80%",
          end: "top 50%",
        },
      })
    );
    gsap.to(document.querySelectorAll(".about"), {
      x: "0px",
      y: "0px",
      stagger: 0.2,
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("about-container"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 70%",
        end: "top 40%",
      },
    });
    gsap.to(document.querySelectorAll(".education"), {
      x: "0px",
      y: "0px",
      stagger: 0.2,
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("education-container"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 70%",
        end: "top 40%",
      },
    });
    gsap.to(document.querySelectorAll(".skills"), {
      x: "0px",
      y: "0px",
      stagger: 0.1,
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("skills-container"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 1,
        start: "top 70%",
        end: "top 40%",
      },
    });

    //Contact
    gsap.to(document.getElementById("title-contact"), {
      width: isTablet ? "70%" : "50%",
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("contact"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 60%",
        end: "top 50%",
      },
    });
    gsap.to(document.querySelectorAll(".contact-text"), {
      x: "0px",
      y: "0px",
      stagger: 0.2,
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("contact-text-container"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 2,
        start: "top 70%",
        end: "top 40%",
      },
    });
    gsap.to(document.querySelectorAll(".contact-form"), {
      x: "0px",
      y: "0px",
      stagger: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: document.getElementById("contact-form-container"),
        scroller: document.getElementById("containerElement"),
        // markers: true,
        scrub: 1,
        start: "top 70%",
        end: "top 60%",
      },
    });
  }, [isMobile, isTablet]);

  return null;
};

export default Animations;
