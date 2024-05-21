export const fullstack = [
  {
    title: "Car-Dealership",
    video: "/fullstack/car-dealership.mp4",

    features: [
      "Secure Messaging: Enables negotiation and chat with dealers.",
      "Comprehensive Car Viewing: Browse, manage watchlists, explore car details.",
      "Smooth Payments: Facilitates seamless transactions.",
      "Secure Authentication: Ensures user safety with JSON Web Tokens.",
    ],
    technologies: {
      frontend: "React, Formik, React-Toastify",
      backend: "Node, Express",
      authentication: "JWT (Access and Refresh Tokens)",
      database: "MongoDb",
      stateManagement: "Redux",
      others: "Material UI, SocketIo, Razorpay, ImageKit, Tailwind CSS",
    },
    link: "https://car-dealership-frontend.vercel.app/",
    github: "https://github.com/Priyanshu1112/Car-dealership-frontend",
  },
  {
    title: "Note-Hub",
    video: "/fullstack/notion.mp4",

    features: [
      "Real-Time Collaboration: Instant updates for seamless teamwork.",
      "User-Friendly Editor: Intuitive editing for productivity.",
      "Effortless Content Management: Easy organization with soft delete.",
      "Publish and Share: Shareable notes for wider access.",
    ],
    technologies: {
      frontend: "Next, Blocknote",
      backend: "Convex, Edgestore",
      authentication: "Clerk",
      database: "Convex",
      stateManagement: "Zustand",
      others: "Shadcn UI, Radix UI, Tailwind CSS",
    },
    link: "https://next13-notion-clone-peach.vercel.app/",
    github: "https://github.com/Priyanshu1112/next13-notion-clone",
  },
  {
    title: "Stay-Finder",
    video: "/fullstack/airbnb.mp4",

    features: [
      "Seamless User Experience: Effortlessly list properties, book, manage, and view trips.",
      "Robust Search Functionality: Discover properties by country, room count, guests, and bathrooms.",
      "Simplified Onboarding: Easy and secure access with Google and GitHub logins via Next Auth.",
    ],
    technologies: {
      frontend: "Next, React-Hook-Form",
      backend: "Prisma, Next-Cloudinary, ",
      authentication: "NextAuth",
      database: "Prisma",
      stateManagement: "Zustand",
      others: "Tailwind CSS,Date-fns, Leaflet",
    },
    link: "https://next-js-airbnb-project.vercel.app/",
    github: "https://github.com/Priyanshu1112/Next.Js_Airbnb_Project",
  },
  {
    title: "Chat-App",
    video: "/fullstack/chat-app-mern.mp4",

    features: [
      "Enables instant communication with message delivery, typing indicators, and read receipts.",
      "Supports private conversations and group discussions with flexible chat settings.",
      "Ensures user privacy and data protection through robust authentication mechanisms and encryption.",
    ],
    technologies: {
      frontend: "React",
      backend: "Node, Express",
      authentication: "JWT",
      database: "MongoDB",
      stateManagement: "Context API",
      others: "SocketIo, Bcrypt, React-Router-Dom",
    },
    link: "https://chat-app-mern-jade.vercel.app/",
    github: "https://github.com/Priyanshu1112/chat-app-mern",
  },
];

export const frontend = [
  {
    name: "Parallax-Scrolling",
    video: "/frontend/parallax-scroll.mp4",
    description:
      "A captivating parallax website crafted with a fusion of cutting-edge technologies and classic web development prowess.",
    link: "https://priyanshu1112.github.io/mountains/",
    Github: "https://github.com/Priyanshu1112/mountains",
  },
  {
    name: "Nft Website",
    video: "/frontend/nft.mp4",
    description:
      "A captivating website for NFTs, creatively built using cutting-edge animations using HTML, CSS, and GSAP with ScrollTrigger.",
    link: "https://priyanshu1112.github.io/skyDog/",
    Github: "https://github.com/Priyanshu1112/skyDog",
  },
  {
    name: "Minimal-Goods",
    video: "/frontend/minimal-goods.mp4",
    description:
      "A captivating website featuring cutting-edge animations, expertly crafted with HTML, CSS, and GSAP alongside ScrollTrigger.",
    link: "https://priyanshu1112.github.io/minimalGoods/",
    Github: "https://github.com/Priyanshu1112/minimalGoods",
  },
];

export const aboutMySelf = `🖥️ Web Development Focus: My primary goal is crafting responsive, user-friendly web pages that meet client and user needs.
🧠 Passionate Learner: With a lifelong passion for computer science, I've dedicated over 4 years to honing my skills.
🛠️ Diverse Project Portfolio: I've tackled a variety of projects, from building clones to handling complex web applications.
🔍 Problem-Solving Skills: I excel at breaking down complex problems into manageable tasks, ensuring robust and maintainable code delivery on large-scale projects.
🌟 Thrives on Challenges: I thrive on challenges and continuously seek opportunities to enhance my skills.
🚀 Self-Directed Learning: Through self-directed learning, I've developed the agility to quickly grasp and adapt to new technologies autonomously.`;
// "As a web developer, my primary focus is to design and develop responsive, user-friendly web pages that meet the requirements of clients and users alike. With a passion for computer science since a young age, I've spent over 4 years refining my skills through a diverse range of projects. From building clones to tackling complex web applications, I excel in breaking down intricate problems into manageable tasks, ensuring the delivery of robust and maintainable code on large-scale projects. I thrive on challenges and constantly seek opportunities to enhance my abilities. Through self-directed learning, I've acquired the agility to swiftly grasp and adapt to new technologies with autonomy.";

const skillsBaseUrl = (name) => "/skills/" + name + ".png";
export const skills = {
  HTML: skillsBaseUrl("html"),
  CSS: skillsBaseUrl("css2"),
  JavaScript: skillsBaseUrl("javascript"),
  // JavaScript: skillsBaseUrl("html_css_js"),
  Typescript: skillsBaseUrl("typescript"),
  ReactJs: skillsBaseUrl("react"),
  NextJs: skillsBaseUrl("next"),
  ReduxJs: skillsBaseUrl("redux"),
  NodeJs: skillsBaseUrl("node"),
  ExpressJs: skillsBaseUrl("express"),
  MongoDb: skillsBaseUrl("mongo"),
  Tailwind: skillsBaseUrl("tailwind"),
  Git: skillsBaseUrl("git"),
};

export const education = [
  {
    institute: "Sagar Institute of Research And Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    score: "7.86 CGPA",
  },
  {
    institute: "Lions Public School",
    degree: "12th",
    field: "Math Science",
    score: "81%",
  },
  {
    institute: "De Nobili School",
    degree: "10th",
    score: "92%",
  },
];
