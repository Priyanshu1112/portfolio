import { Element } from "react-scroll";
import { useElementRef } from "../utils/RefProvider";
import { Link } from "react-router-dom";
import { useHover } from "../utils/HoverState";
import { useEffect, useState } from "react";
import Animations from "../utils/Animations";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

function Contact() {
  const { contactRef } = useElementRef();
  const { setIsHovered } = useHover();
  const [isTouch, setIsTouch] = useState(false);

  const [message, setMessage] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });
  const [error, setError] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [mailAcknowledge, setMailAcknowledge] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const checkData = () => {
    let isError = false;
    const newError = { ...error };

    // Check for empty from_name
    if (!message.from_name.trim()) {
      newError.from_name = "Please enter your name.";
      isError = true;
    } else {
      newError.from_name = "";
    }

    // Check for valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!message.email_id.trim() || !emailPattern.test(message.email_id)) {
      newError.email_id = "Please enter a valid email address.";
      isError = true;
    } else {
      newError.email_id = "";
    }

    // Check for empty message
    if (!message.message.trim()) {
      newError.message = "Please enter your message.";
      isError = true;
    } else {
      newError.message = "";
    }

    // Update state with error messages
    setError(newError);

    return !isError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const sendMessage = () => {
    console.log("send-message");

    if (!checkData()) return;

    setSendingMessage(true);
    setMailAcknowledge("Sending Message...");

    emailjs
      .send("service_d959geu", "template_jhe9inb", message, {
        publicKey: "tIuL4fzsRX3P4RCwN",
      })
      .then((res) => {
        setOpen(true);
        if (res.status == 200) setMailAcknowledge("Message sent successfully!");
        else
          setMailAcknowledge(
            res.text ?? res.error ?? res.message ?? "Error sending mail!"
          );
      })
      .finally(() => {
        setSendingMessage(false);
      });
  };

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <Element name="contact">
      <Animations />
      <div
        id="contact"
        ref={contactRef}
        className="w-screen min-h-screen px-16 dark:bg-inherit bg-white dark:text-white text-inherit pt-10"
      >
        <span
          id="title-contact"
          className="lg:text-6xl w-[0%] opacity-0 overflow-hidden 
          whitespace-nowrap md:text-4xl text-center md:text-start pb-3 text-3xl 
          mx-auto md:mx-0 md:pb-5 border-b dark:border-b-2 border-black 
          dark:border-inherit block
           pt-5 md:pt-10 lg:pt-20"
        >
          Let&apos;s Connects
        </span>
        <div
          className="md:px-8 flex flex-col items-center md:items-start 
          md:flex-row gap-10 md:gap-5  py-5 md:mt-8"
        >
          <div
            id="contact-text-container"
            className="flex-1 flex flex-col gap-3 text-center md:text-start"
          >
            <p
              className="text-2xl contact-text translate-y-[100px] 
            sm:-translate-x-[100px] opacity-0 lg:text-3xl mb-2"
            >
              Connect or Feedback
            </p>
            <span>
              <Link
                className="contact-text translate-y-[100px] sm:-translate-x-[100px] 
              opacity-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                to="mailto:raghuwanshi.priyanshu1112@gmail.com"
              >
                Email : <u>raghuwanshi.priyanshu1112@gmail.com</u>
              </Link>
            </span>
            <span>
              <Link
                className="contact-text translate-y-[100px] sm:-translate-x-[100px] 
              opacity-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                to="tel:+918102596476"
              >
                Phone : <u>+91 8102-596-476</u>
              </Link>
            </span>
            <p
              className="contact-text translate-y-[100px] sm:-translate-x-[100px] 
            opacity-0"
            >
              Your feedback is invaluable to me, and I welcome any insights you
              may have. Should you wish to engage in discussions regarding
              technology or projects, please don&apos;t hesitate to reach out. I
              am enthusiastic about collaborating on freelancing opportunities
              and am eager to explore potential projects together.
            </p>
          </div>
          {/* FORM */}
          <div id="contact-form-container" className="flex-1 w-full">
            <div className="flex gap-3 flex-col sm:flex-row mb-5 lg:mb-10">
              <span className="w-full block">
                <input
                  name="from_name"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="text"
                  className={`contact-form w-full translate-y-[100px] ${
                    error.from_name
                      ? "border-red-400 "
                      : "border-black text-inherit"
                  }
                sm:translate-x-[100px] opacity-0 flex-1 cursor-none outline-none border border-black p-3 shadow-md
                 focus:shadow-sky-300 transition-all duration-300 dark:bg-inherit dark:border-white`}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <p className="text-sm pt-1 text-red-500 pb-3">
                  {error.from_name}
                </p>
              </span>
              <span className="w-full block">
                <input
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="email"
                  className={`contact-form w-full translate-y-[100px] ${
                    error.email_id
                      ? "border-red-400 "
                      : "border-black text-inherit"
                  }
                  sm:translate-x-[100px] opacity-0 flex-1 cursor-none 
                  outline-none border p-3 shadow-md focus:shadow-sky-300 
                  transition-all duration-300 
                  dark:bg-inherit dark:border-white`}
                  placeholder="Email"
                  name="email_id"
                  onChange={handleChange}
                  id=""
                />
                <p className="text-sm pt-1 text-red-500 pb-3">
                  {error.email_id}
                </p>
              </span>
            </div>
            <span>
              <textarea
                name="message"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                placeholder="Message"
                className={`contact-form translate-y-[100px] ${
                  error.message
                    ? "border-red-400 "
                    : "border-black text-inherit"
                }
              sm:translate-x-[100px] opacity-0 outline-none cursor-none w-full border border-black p-3 shadow-md focus:shadow-sky-300 transition-all
               duration-300 dark:bg-inherit dark:border-white `}
                onChange={handleChange}
                id=""
                rows={8}
              ></textarea>
              <p className="text-sm pt-1 text-red-500 pb-3">{error.message}</p>
            </span>
            {/* BUTTON */}
            <span className="group/button relative">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={sendMessage}
                role="button"
                disabled={sendingMessage}
                className={`dark:bg-inherit relative z-20 border-2 contact-form translate-y-[100px] 
                 sm:translate-x-[100px] opacity-0 dark:border-white border-black ${
                   !isTouch &&
                   "dark:group-hover/button:border-black group-hover/button:border-white"
                 } transition-all duration-1000 `}
              >
                {!isTouch && (
                  <>
                    <span className="absolute top-0 left-0 w-full h-[100%] z-30 bg-white dark:bg-black transition-all duration-1000 opacity-0 group-hover/button:h-[0%] group-hover/button:opacity-100"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[0%] z-30 bg-black dark:bg-white transition-all duration-1000 opacity-0 group-hover/button:h-[100%] group-hover/button:opacity-100"></span>
                  </>
                )}
                <span
                  className={` dark:text-white relative z-40  ${
                    !isTouch &&
                    "dark:group-hover/button:text-black group-hover/button:text-white"
                  } transition-all px-7 py-2  duration-500`}
                >
                  {sendingMessage ? "Sending..." : "Send"}
                </span>
              </button>
              {!isTouch && (
                <>
                  <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-black  dark:bg-white opacity-0 group-hover/button:top-[-50%] group-hover/button:left-[-10%] group-hover/button:opacity-100"></span>
                  <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-black dark:bg-white opacity-0 group-hover/button:top-[50%] group-hover/button:left-[10%] group-hover/button:opacity-100"></span>
                </>
              )}
            </span>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={mailAcknowledge}
            />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
