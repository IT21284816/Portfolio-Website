import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuPenSquare } from "react-icons/lu";
import AndroidImg from "@/public/Android.jpg";
import ITPImg from "@/public/ITP.png";
import iwtImg from "@/public/iwt.png";
import flutterImg from "@/public/flutter.png"
import portfolioImg from "@/public/portfolio.png"
import springBootImg from "@/public/springboot.png"
import MernLoginImg from "@/public/mernLogin.png"

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
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
      "Create a automated car parking system. Enables ticket reservation and personalized parking slot allocation for efficient vehicle management.",
    tags: ["PHP", "HTML", "CSS", "javascript"],
    imageUrl: iwtImg,
  },
  {
    title: "Flutter Project",
    description:
      "A simple Calculator App.",
    tags: ["Flutter","C++", "Dart", "HTML", "Swift", "CMake"],
    imageUrl: flutterImg,
  },
  {
    title: "Portfolio-Website",
    description:
      "Crafting my debut portfolio website to showcase my skills, work, and passion. A digital canvas reflecting my journey and creativity.",
    tags: ["Next.js","TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "CSS"],
    imageUrl: portfolioImg,
  },
  {
    title: "Spring Boot Project",
    description:
      "Employee Management System using Spring boot backend and html frontend with CRUD operations.",
    tags: ["Java","HTML", "Java Script", "CSS", "Spring Boot"],
    imageUrl: springBootImg,
  },
  {
    title: "Mern Login",
    description:
      "Register And Login with MongoDB.",
    tags: ["MERN","MongoDB", "Java Script", "CSS", "HTML"],
    imageUrl: MernLoginImg,
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
  "Dart",
  "Swift",
  "Bootstrap",
  "Tailwind CSS",
  "Typescript",
  "Spring Boot"



] as const;
