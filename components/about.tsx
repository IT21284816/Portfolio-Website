"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      My name is duhun , I’m currently pursuing my Undergraduate degree in information technology.
      </p>

      <p>
      During my time at sliit I have a strong foundation in various programming languages and web technologies such as 
        <span className="font-medium">c, c++, java, python, kotlin, mern stack ,java script, html, CSS, and php etc.</span>.
        I have also worked on database system like MySQL , mongo dB, firebase and experience with android studio and version control using git.
        </p>
        <p>
        I am quick learner and ready to take new challenges required to perform better and  I am willing to take any kind of  opportunity in your company that will allow my skills to grow.
      </p>
    </motion.section>
  );
}
