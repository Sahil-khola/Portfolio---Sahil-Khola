// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cloudinary from "./assets/tech_logo/Cloudinary.png";
import Api from "./assets/tech_logo/RestApi.png";
import Thunder from "./assets/tech_logo/OIP.jpg";
import Mongoose from "./assets/tech_logo/mongoose.jpg";
import MongodbCompass from "./assets/tech_logo/mongodb.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_Logo.webp";

// Project Section Logo's
import ShopNest from "./assets/work_logo/ShopNest.png";
import Bookit from "./assets/work_logo/Bookit.png";
import Gym from "./assets/work_logo/Gym.png";
import npmLogo from "./assets/work_logo/npm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import PhonePay from "./assets/work_logo/PhonePay.png";
import Voting from "./assets/work_logo/votingApp.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Rest Api", logo: Api },
      { name: "MongoDB Compass", logo: MongodbCompass },
      { name: "Mongoose", logo: Mongoose },


    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Figma", logo: figmaLogo },
      {name: "Cloudinary ", logo: cloudinary},
      {name: "Thunder Client ", logo: Thunder},
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Ducat Institute, Gurugram",
    date: "Sept 2023 - July 2024",
    desc: "I have completed my MERN Stack course at Ducat Institute, Gurugram. Throughout the course, I learned the MERN Stack, which includes MongoDB, Express, React, and Node.js., and I was able to develop full-stack web applications using these technologies. I also gained experience in working with Git and GitHub, which allowed me to collaborate with other developers and manage projects effectively.",
    degree: "MERN Stack",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "World College of Technology and Management, Gurugram",
    date: "Sept 2022 - Aug 2026",
    desc: "I pursued my Bachelor's degree in Computer Science from World College of Technology and Management, Gurugram. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring the fundamentals of Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at World College of Technology and Management allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology in Computer Science",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "R R S SR School, Gurugram",
    date: "Apr 2021 - March 2022",
    desc: "I completed my class 12 education from R R S SR School, Gurugram, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "R R S SR SEC SCHOOL, Gurugram",
    date: "Apr 2019 - March 2020",
    desc: "I completed my class 10 education from R R S SR SEC SCHOOL, Gurugram, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "ShopNest - E-Commerce",
    description:
      "A full-stack MERN e-commerce platform with secure authentication, product management, Razorpay payments, Cloudinary uploads, and NodeMailer notifications.",
    image: ShopNest,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NodeMailer",
      "Razorpay",
      "JSON Web Token",
      "Cloudinary",
    ],
    github: "https://github.com/Sahil-khola/ShopNest",
    webapp: "https://shop-nest-7u01.onrender.com/",
  },
  {
    id: 1,
    title: "Event Booking App",
    description:
      "A MERN-based event booking application with TailwindCSS and Cloudinary integration, enabling users to browse, book, and manage events easily.",
    image: Bookit,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwindcss", "Cloudinary"],
    github: "https://github.com/Sahil-khola/BookIt",
    webapp: "https://bookit-cmdf.onrender.com",
  },
  {
    id: 2,
    title: "Voting App",
    description:"A MERN-based voting application with TailwindCSS and Cloudinary integration, enabling users to browse, vote, and manage events easily.",
    image: Voting,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwindcss",
      "NodeMailer",
    ],
    github: "https://github.com/Sahil-khola/Voting-App",
    webapp: "https://livepoll-realtime-mern.onrender.com",
  },
  {
    id: 5,
    title: "GYM WEBSITE",
    description:
      "Full-stack MERN gym platform with TailwindCSS, secure booking, membership management, and NodeMailer integration for automated email notifications.",
    image: Gym,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwindcss",
      "NodeMailer",
    ],
    github: "https://github.com/Sahil-khola/GYM-APPLICATION",
    webapp: "https://gym-application-ew3l.onrender.com",
  },
  {
    id: 3,
    title: "Image Search App",
    description:
      "A React.js image search app using external APIs to deliver high-quality, downloadable images across diverse queries with a clean UI.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/Sahil-khola/Image-Search-Application",
    webapp: "https://github.com/Sahil-khola/Image-Search-Application",
  },
  {
    id: 4,
    title: "Pay Nest",
    description:
      "A React.js background remover app with API integration, allowing users to upload images, remove backgrounds, and download transparent versions.",
    image: PhonePay,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/Sahil-khola/Pay-Nest-Backend",
    webapp: "https://github.com/Sahil-khola/Pay-Nest-Backend",
  },
];

