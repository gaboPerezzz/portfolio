import React from "react";
import { motion, useInView } from "framer-motion";

function About() {
  // Heading block: animate from top to center

  return (
    <div>
      <div className="w-full !h-auto  xl:!h-[80vh] flex-col flex xl:!flex-row justify-center items-center xl:items-start p-4 xl:p-20 gap-7">
        <motion.div
          className="w-full xl:!w-2/6 xl:!aspect-square"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl xl:text-9xl mx-auto hidden xl:block font-light">
            MEET
            <br /> GAB.
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider">
            MEET GAB.
          </h1>
        </motion.div>

        <motion.div
          className="w-full md:!w-5/6 xl:!w-3/6 2xl:!w-2/6 xl:!aspect-square rounded-3xl p-10 flex justify-center items-center leading-8 break-words shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_1px_3px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-7px_-5px_19px_-4px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)]"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I’m an artist, designer, and developer specializing in creating
            visually compelling and user-focused experiences. With expertise in
            digital art, UI/UX design, and front-end development, I bring ideas
            to life through clean, modern, and functional design solutions. My
            skill set includes visual storytelling, brand identity, and
            interactive design, ensuring that every project is both
            aesthetically striking and purpose-driven. I thrive on
            collaboration, adaptability, and problem-solving, making me a
            valuable asset in creative and tech-driven industries. Whether it’s
            crafting intuitive user interfaces, designing engaging visuals, or
            building seamless web experiences, I’m always focused on delivering
            high-quality work that leaves a lasting impact. Let’s create
            something great together!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
