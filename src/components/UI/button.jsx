import React from "react";
import { motion, MotionConfig } from "framer-motion";

export default function Button({ buttonText }) {
  return (
    <div>
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="min-w-3.5 p-3 px-5 bg-gray-200 rounded-3xl text-sm xl:!text-lg font-light shadow-[-5px_-5px_7px_-5px_rgba(255,255,255,0.6),0_2px_5px_1px_rgba(0,0,0,0.1)] xl:!shadow-[-5px_-6px_7px_-7px_rgba(255,255,255,0.9),0_2px_7px_1px_rgba(0,0,0,0.1)] cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
        >
          {buttonText}
        </motion.button>
      </MotionConfig>
    </div>
  );
}

export function SocialButton({ buttonText, hreflink }) {
  return (
    <div>
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <a href={hreflink} target="_blank">
          <motion.button
            className="min-w-3.5 p-3 px-5 bg-gray-200 rounded-3xl  shadow-[-5px_-5px_7px_-5px_rgba(255,255,255,0.6),0_2px_5px_1px_rgba(0,0,0,0.1)] xl:!shadow-[-5px_-6px_7px_-7px_rgba(255,255,255,0.9),0_2px_7px_1px_rgba(0,0,0,0.1)] cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-sm md:!text-lg font-light">{buttonText}</span>
          </motion.button>
        </a>
      </MotionConfig>
    </div>
  );
}
