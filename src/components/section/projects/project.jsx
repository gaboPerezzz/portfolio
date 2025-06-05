import React from "react";
import Carousel from "../../UI/carousel";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

function Project() {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <div className="w-full min-h-screen bg-gray-200 p-10 xl:!p-5 xl:!pb-20">
        <motion.h1
          className="text-5xl md:text-7xl xl:!text-9xl uppercase font-thin"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>

        <div className="flex rounded-2xl justify-end xl:!mr-48 mt-10">
          <MotionConfig>
            <motion.select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-2xl bg-gray-200 text-black xl:!text-xl appearance-none border-0 font-thin"
              style={{ boxShadow: "inset 3px 2px 4px rgba(0,0,0,0.3)" }}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ boxShadow: "inset 6px 4px 6px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <option value="all" className="font-thin">
                All
              </option>
              <option value="webProjects" className="font-thin">
                Web Projects
              </option>
              <option value="graphicDesign" className="font-thin">
                Graphic Design
              </option>
            </motion.select>
          </MotionConfig>
        </div>

        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel filter={filter} />
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
