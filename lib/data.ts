import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";
import AndroidImg from "@/public/Android.jpg";
import ITPImg from "@/public/ITP.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import flutter from "@/public/flutter.png"
import portfolioImg from "@/public/portfolio.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "G.C.E ORDINARY LEVEL",
    location: "Sri Devananda College",
    description:
      "",
    icon: React.createElement(LuPenSquare),
    date: "2017",
  },
  {
    title: "G.C.E ADVANCED LEVEL",
    location: "Sri Devananda College",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "BSC(HONS) INFORMATION TECHNOLOGY",
    location: "Sri Lanka Institute Of Information Technology ",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Mobile Application Project",
    description:
      "Online payment management android app with crud operations, search, toast notifications, validations and firebase database.",
    tags: ["Kotlin", "Firebase", "Android Studio"],
    imageUrl: AndroidImg,
  },
  {
    title: "Payment System",
    description:
      "LMS Payment management system using MERN. System also have CRUD operations, Search, Report Generate, Database connection.",
    tags: ["MERN Stack", "Java Script", "HTML", "CSS", "Mongo DB","Stripe payment getway"],
    imageUrl: ITPImg,
  },
  {
    title: "IWT Project",
    description:
      "Create a automated car parking system. Enables ticket reservation and personalized parking slot allocation for efficient vehicle management",
    tags: ["PHP", "HTML", "CSS", "javascript"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Flutter Project",
    description:
      "A simple Calculator App.",
    tags: ["Flutter","C++", "Dart", "HTML", "Swift", "CMake"],
    imageUrl: flutter,
  },
  {
    title: "Portfolio-Website",
    description:
      "Crafting my debut portfolio website to showcase my skills, work, and passion. A digital canvas reflecting my journey and creativity.",
    tags: ["Next.js","TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "CSS"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Mysql",
  "Firebase",
  "Express",
  "Python",
  "Java",
  "Kotlin",
  "C",
  "C++",
  " Stripe & Razorpay payment gateway",
  "Android Studio",
  "Flutter",
  "Bootstrap",
  "Tailwind CSS",
  "Typescript",



] as const;
