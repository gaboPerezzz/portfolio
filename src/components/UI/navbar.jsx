import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function Navbar({ hideNavbar }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((e) => !e);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (hideNavbar) return null;

  return (
    <>
      {/* Hamburger button */}
      <motion.div
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 
                   bg-gray-200 w-2/6 h-12 flex justify-center items-center 
                   rounded-3xl cursor-pointer z-20 xl:!hidden shadow-[-3px_-3px_10px_-3px_rgba(255,255,255,0.6),0_2px_4px_2px_rgba(0,0,0,0.1)] "
        transition={{ duration: 0.2 }}
        animate={{
          scale: isOpen ? 0.95 : 1,
          width: isOpen ? "20%" : "33.3333%",
        }}
        onClick={toggleMenu}
      >
        <div className="relative w-6 h-5">
          {/* Top line */}
          <motion.span
            className="absolute left-0 top-0 h-0.5 w-full bg-black"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Middle line */}
          <motion.span
            className="absolute left-0 top-2 h-0.5 w-full bg-black"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom line */}
          <motion.span
            className="absolute left-0 bottom-0 h-0.5 w-full bg-black"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-200 bg-opacity-90 
                       flex flex-col justify-center items-center space-y-6 
                       text-black text-xl z-10"
            initial={{
              y: 100,
              opacity: 0,
              borderTopLeftRadius: "200px",
              borderTopRightRadius: "200px",
            }}
            animate={{
              y: 0,
              opacity: 1,
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
            exit={{
              y: 100,
              opacity: 0,
              borderTopLeftRadius: "100px",
              borderTopRightRadius: "100px",
            }}
            transition={{ duration: 0.2 }}
          >
            {["profile", "about", "skills", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:underline"
              >
                {id.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop navbar */}
      <MotionConfig>
        <motion.div
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 
                     bg-gray-200 w-1/2 2xl:!w-1/3 h-14 hidden xl:!flex justify-center items-center 
                     rounded-2xl shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-6px_-6px_5px_-5px_rgba(255,255,255,0.6),0_5px_8px_3px_rgba(0,0,0,0.1)] z-20"
          whileHover={{
            y: -6,
            boxShadow: "10px 10px 10px lightgray",
          }}
          whileTap={{ y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {["profile", "about", "skills", "projects", "contact"].map(
            (id, index) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`h-full w-full  text-center cursor-pointer ${
                  index === 0
                    ? "rounded-l-2xl pl-5"
                    : index === 4
                    ? "rounded-r-2xl pr-5"
                    : ""
                }`}
                whileHover={{ backgroundColor: "#222222", color: "white" }}
                transition={{ duration: 0.1 }}
              >
                {id.toUpperCase()}
              </motion.button>
            )
          )}
        </motion.div>
      </MotionConfig>
    </>
  );
}

export default Navbar;
