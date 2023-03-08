import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  threejs,
  istar,
  angular,
  python,
  django,
  github,
  linkdedin,
  imageGenerator,
  fiverr,
  mybranx,
  socialMedia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Model Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Istar Danismanlik",
    icon: istar,
    iconBg: "#383E56",
    date: "Jan 2022 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Intern",
    company_name: "MyBranz",
    icon: mybranx,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Deliver UI, functionality and bug fixes",
      "Create prototypes and experiment with new features as assigned",
      "development of applications and their integration with back-end services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "DALL'E like AI image generator that allows users to generate image using openai api,providing possibilities  to share your image with others in the community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
    ],
    image: imageGenerator,
    source_code_link: "https://github.com/yyassire/image-generator-f",
    live_link: "https://playful-flan-dda679.netlify.app",
  },
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Fiverr Clone",
    description:
      "It's a Fiverr Clone,a freelancers platform that connect freelancers to clients.It allow freelancers to create and post their gigs for sell.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: fiverr,
    source_code_link: "https://github.com/yyassire/fiverr-f",
    live_link: "https://jazzy-tiramisu-755b36.netlify.app/",
  },
  {
    name: "Social Media",
    description:
      "It is a simple social media app that allows users to post interesting events that happened in their lives with their friends or family",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: socialMedia,
    source_code_link: "https://github.com/yyassire/social-media-client",
    live_link: "https://superb-donut-999161.netlify.app/login",
  },
];

const socialLinks = [
  {
    link: "https://www.linkedin.com/in/yassire-yaguibou-435983223/",

    icon: linkdedin,
  },
  {
    link: "https://github.com/yyassire",
    icon: github,
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialLinks,
};
