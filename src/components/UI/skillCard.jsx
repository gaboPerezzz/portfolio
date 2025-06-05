import React from "react";
import { motion, useInView } from "framer-motion";

function skillCard({ skilltitle, skillset }) {
  return (
    <div>
      <div className="h-auto bg-gray-200 flex items-center justify-center text-black text-4xl p-5 gap- ">
        <motion.div
          className="w-full h-auto p-3 xl:!w-4/5 lg:!h-auto rounded-3xl flex flex-col justify-center items-center shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_2px_10px_2px_rgba(0,0,0,0.1)] xl:!shadow-[-10px_-7px_12px_-5px_rgba(255,255,255,0.6),0_10px_15px_5px_rgba(0,0,0,0.1)]"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-1/4  lg:!p-5">
            <h2 className="text-4xl xl:!text-6xl font-light uppercase tracking-wide">
              {skilltitle}
            </h2>
          </div>

          <motion.div className="w-full h-auto bg-gray-200 grid grid-cols-2 lg:!grid-cols-3 place-items-center gap-10 p-5 ">
            {skillset.map((skill, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <h3
                  className=" p-4 px-8 rounded-4xl text-sm md:!text-lg text-center font-light "
                  style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)" }}
                >
                  {skill}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default skillCard;
