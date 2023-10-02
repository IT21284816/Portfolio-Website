"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
            <div style={{ textAlign: "left" }}>
                
                <h3 
                  className="font-semibold capitalize"
                    style={{
                              display: "inline-block",
                              marginBottom: "0.5rem", // Add some vertical spacing
                              fontSize: "1.2rem", // Adjust the font size for mobile
                          }}
                  >
                      {item.title}
                </h3>

                  <p
                    className="font-normal !mt-0"
                      style={{
                                 display: "inline-block",
                                 
                                  marginBottom: "0.5rem", // Add some vertical spacing
                                 fontSize: "1rem", // Adjust the font size for mobile
                              }}
                    >
                              {item.location}
                      </p>
                    
                    <p className="" style={{display: "inline-block", marginRight: "20rem",}}></p>
            </div>


             
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
