import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./carousel";
import Button, { SocialButton } from "../UI/button";

function ProjModal({ closemenu, selectedItem }) {
  function buttonName() {
    if (selectedItem && selectedItem.type === "graphicDesign") {
      return (
        <SocialButton
          buttonText={"view output"}
          hreflink={selectedItem && selectedItem.link}
        />
      );
    } else {
      return (
        <SocialButton
          buttonText={"view demo"}
          hreflink={selectedItem && selectedItem.link}
        />
      );
    }
  }
  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-gray-200 bg-opacity-90 
                 flex flex-col justify-start items-center xl!justify-center xl!items-center w-[85%] xl:!w-3/4 2xl:!w-1/2 my-6 mx-auto rounded-4xl z-[999] p-4 gap-4 overflow-auto"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="flex justify-between items-end w-full px-1 md:!px-5 "
            onClick={closemenu}
          >
            <h1 className="text-2xl md:!text-4xl  xl:!text-6xl uppercase font-light">
              {" "}
              {selectedItem && selectedItem.title}
            </h1>
            <Button buttonText={"Close"} />
          </div>
          <div className="w-full flex justify-start items-center pl-2 md:!pl-5 font-light">
            <h2 className="md:!text-xl ">
              {selectedItem && selectedItem.category}
            </h2>
          </div>
          {/* image */}
          <div className="w-full lg:!w-auto lg:!h-2/5 mt-5 ">
            {selectedItem && (
              <img
                src={selectedItem.thumbnail}
                alt={selectedItem.alt}
                className="object-cover w-full h-full rounded-[50px] xl:!rounded-[80px] shadow-lg"
                loading="lazy"
              />
            )}
          </div>

          <div className="flex flex-col lg:!flex-row xl:!justify-center xl:!items-start md:!w-5/6 xl:!w-full h-auto gap-5 xl:!gap-10 lg:!mt-5">
            <div className="w-full h-full flex flex-col gap-5 bg-gray-200 rounded-3xl p-8 shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-12px_-10px_12px_-5px_rgba(255,255,255,0.6),0_10px_15px_5px_rgba(0,0,0,0.1)]">
              {/* description */}
              <div
                className="bg-gray-200 h-auto rounded-2xl p-5 font-light"
                style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)" }}
              >
                <p className="text-sm md:!text-base">
                  {selectedItem && selectedItem.projDesc}
                </p>
              </div>
              {/* view demo button */}
              <div className="bg-gray-200 h-1/4">{buttonName()}</div>
            </div>

            <div className="flex flex-col w-full justify-center items-start p-3 lg:!p-8 gap-5 rounded-2xl shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-12px_-10px_12px_-5px_rgba(255,255,255,0.6),0_10px_15px_5px_rgba(0,0,0,0.1)]">
              <h1 className=" text-2xl md:!text-3xl uppercase font-light">
                Created Using:
              </h1>
              <div className="w-full min-h-[3rem] grid grid-cols-2 2xl:!grid-cols-3 p-5 rounded-2xl gap-5 place-items-center bg-gray-200 shadow-[-3px_-2px_3px_-5px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-8px_-6px_7px_-7px_rgba(255,255,255,0.6),0_5px_7px_2px_rgba(0,0,0,0.1)]">
                {selectedItem?.tech?.map((item, index) => (
                  <div
                    key={index}
                    className="text-sm  px-4 p-2 rounded-2xl "
                    style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    <p class="font-light text-sm md:!text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProjModal;
