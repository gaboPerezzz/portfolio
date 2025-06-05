import React from "react";
import ContactForm from "../../UI/contactForm";
import { motion, useInView } from "framer-motion";

function Contact() {
  return (
    <div>
      <div className="w-full min-h-screen md:!h-auto xl:!min-h-screen md:!p-10 bg-gray-200 flex flex-col lg:!flex-row p-5 2xl:!p-30 2xl:!px-50 items-center justify-center gap-10">
        {/* left */}
        <motion.div
          className="w-full aspect-square bg-gray-200 rounded-3xl flex flex-col justify-center items-center p-5 2xl:!p-1 shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_2px_6px_2px_rgba(0,0,0,0.1)] xl:!shadow-[-10px_-7px_12px_-5px_rgba(255,255,255,0.6),0_5px_10px_2px_rgba(0,0,0,0.1)]"
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl mb-10 font-light ">
            GET IN TOUCH
          </h1>
          <div className="bg-gray-200 w-full 2xl:!w-3/4 p-4 rounded-3xl flex-col flex gap-10 shadow-md 2xl:!shadow-xl">
            <h2 className="text-3xl 2xl:!text-5xl font-light">FIND ME HERE</h2>

            {/* contact details */}
            <div
              className="w-full 2xl:!p-6 flex flex-col rounded-3xl "
              style={{ boxShadow: "inset 3px 2px 4px rgba(0,0,0,0.3)" }}
            >
              {" "}
              {/* phone details */}
              <div className="flex w-full gap-5 p-3 2xl:!pl-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="break-words text-sm md:text-lg">
                    0928-954-9612
                  </p>
                </div>
              </div>
              {/* email */}
              <div className="flex w-full  gap-5 p-3 2xl:!pl-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                  </svg>
                </div>
                <div>
                  <p className="break-words text-sm md:text-lg">
                    johngabrieltperez@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </motion.div>
        <motion.div
          className="w-full aspect-square bg-gray-200 rounded-3xl  2xl:p-20 pb-20 xl:!pb-0"
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
