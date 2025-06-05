import React from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import Button from "./button";

function CarouselCard({
  thumbnail,
  projDesc,
  alt,
  toggleMenu,
  title,
  category,
}) {
  return (
    <div>
      {" "}
      <div className="px-5 h-auto xl:!h-[650px] p-10 pb-20 2xl:!p-10 2xl:!pb-16">
        {/* title */}
        <div className="bg-gray-200 text-center w-full h-full flex flex-col justify-center items-center rounded-3xl p-5 gap-5 shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_2px_6px_1px_rgba(0,0,0,0.1)] xl:!shadow-[-10px_-7px_12px_-5px_rgba(255,255,255,0.6),0_10px_15px_5px_rgba(0,0,0,0.1)]">
          <h1 className="text-2xl lg:!text-4xl uppercase font-light">
            {title}
          </h1>
          <MotionConfig
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* image/thumbnail */}
            <motion.div
              className="w-4/5 aspect-square lg:!w-9/10 lg:!h-3/6 relative overflow-hidden rounded-[50px] xl:!rounded-[50px] shadow-md "
              whileHover={{ scale: 1 }}
            >
              <motion.img
                src={thumbnail}
                alt={alt}
                className="w-full h-full rounded-[50px] xl:!rounded-[50px] shadow-lg object-cover shadow-xl"
                whileHover={{ scale: 1.1 }}
                loading="lazy"
              />
            </motion.div>
          </MotionConfig>

          <div>
            <h3 className="font-light text-base">{category}</h3>
          </div>
          {/* description */}
          <div
            className="w-full h-auto bg-gray-200 flex items-center justify-center rounded-4xl shadow-lg p-5 px-10"
            style={{ boxShadow: "inset 3px 2px 4px rgba(0,0,0,0.3)" }}
          >
            <p className="text-justify text-sm font-light">{projDesc}</p>
          </div>
          {/* button */}
          <motion.div
            onClick={toggleMenu}
            transition={{ duration: 0.2 }}
            animate={{
              scale: 1,
            }}
          >
            <Button buttonText={"view more"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
