import React from "react";
import { useEffect, useState } from "react";
import SkillCard from "../../UI/skillCard";
import { motion, useInView } from "framer-motion";

function Skills() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        skilltitle: "Soft Skills",

        skillset: [
          "Teamwork",
          "Leadership",
          "Communication",
          "Flexibility",
          "Passionate",
          "Time Management",
          "Problem Solving",
          "Creativity",
          "Collaboration",
        ],
      },
      {
        id: 2,
        skilltitle: "Technical Skills",

        skillset: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Vite",
          "Angular",
          "Node.js",
          "Express",
          "MongoDB",
          "Git",
          "Tailwind CSS",
          "Bootstrap",
          "Wordpress",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe lightroom",
          "Davinci Resolve",
        ],
      },
      {
        id: 3,
        skilltitle: "Area of Expertise",

        skillset: [
          "UI/UX Design",
          "Web Development",
          "Web Design",
          "Search Engine Optimization",
          "Performance Optimization",
          "Graphic Designing",
          "Digital Arts",
          "Visual Arts",
        ],
      },
    ]);
  }, []);
  return (
    <section className="flex flex-col lg:!flex-row min-h-screen pt-10">
      {/* left panel stays stuck in place */}
      <motion.div className="w-full lg:!w-2/4 xl:!w-2/4 lg:!sticky top-0 lg:h-screen bg-gray-200 flex flex-col items-start justify-start p-4 xl:p-16= xl:pt-32 z-10 ">
        <motion.h1
          className="text-5xl md:text-7xl xl:text-9xl font-light tracking-wider uppercase"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills and Expertise
        </motion.h1>
      </motion.div>

      {/* right panel is tall so it scrolls naturally */}
      <div className="w-full  lg!w-4/5  xl:!w-3/5 flex flex-col gap-5 xl:!gap-20 ">
        {items.map((item) => (
          <SkillCard
            key={item.id}
            skilltitle={item.skilltitle}
            skillset={item.skillset}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
