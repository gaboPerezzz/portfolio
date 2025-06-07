import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Button, { SocialButton } from "../../UI/button";
import dp from "../../../assets/profile.jpg";

function Header() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 15 });

  return (
    <motion.div
      className="bg-gray-200 w-full h-auto md:!h-auto flex xl:!h-screen flex-col md:!flex-row justify-center items-center p-4 gap-5 xl:gap-10 xl:!p-10 2xl:!p-50"
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full xl:!w-1/2 aspect-square rounded-3xl xl:!order-last shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-10px_-7px_12px_-5px_rgba(255,255,255,0.6),0_10px_15px_5px_rgba(0,0,0,0.1)]"
        style={{ opacity, scale: smoothScale }}
      >
        <div
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-10 right-5 cursor-pointer"
        >
          <Button buttonText={"Let's Talk"} />
        </div>
        <img
          src={dp}
          className="w-full h-full object-cover rounded-3xl aspect-square"
          loading="lazy"
          alt="Profile Picture"
        />
      </motion.div>
      {/* left */}
      <motion.div
        className="bg-gray-200 w-full xl:!w-1/2 aspect-square rounded-3xl md:order-first flex flex-col  justify-between items-start p-5 xl:!p-15 gap-10 shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_5px_6px_3px_rgba(0,0,0,0.1)] xl:!shadow-[-10px_-7px_12px_-5px_rgba(255,255,255,0.6),0_10px_15px_5px_rgba(0,0,0,0.1)]"
        style={{ opacity, scale: smoothScale }}
      >
        <div className="w-full">
          <h1 className="text-4xl md:!text-7xl  w-full mb-10 font-light">
            JOHN GABRIEL PEREZ
          </h1>
          <h2 className="text-xl xl:!text-2xl text-right font-light">
            DESIGNER AND DEVELOPER
          </h2>
        </div>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="grid grid-cols-2  p-7 gap-5 md:!p-8 lg:p-9 2xl:!p-14 2xl:!gap-10 rounded-3xl bg-gray-200 shadow-[-6px_-5px_7px_-5px_rgba(255,255,255,0.6),0_3px_6px_1px_rgba(0,0,0,0.1)] xl:!shadow-[-8px_-7px_8px_-7px_rgba(255,255,255,0.6),-0.5px_3px_6px_2px_rgba(0,0,0,0.1)]">
            {/* linked in */}

            <SocialButton
              buttonText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.84v2.1h.06c.54-1.02 1.84-2.1 3.78-2.1C20.92 8.5 22 11.34 22 15v9h-4v-8.28c0-1.97-.04-4.5-2.74-4.5-2.74 0-3.16 2.14-3.16 4.36V24h-4V8.5z" />
                </svg>
              }
              hreflink={
                "https://www.linkedin.com/in/john-gabriel-perez-2234a8349/"
              }
            />

            {/* email */}

            <SocialButton
              buttonText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                </svg>
              }
              hreflink={"mailto:johngabrieltperez@gmail.com"}
            />

            {/* ig */}

            <SocialButton
              buttonText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 1.5h8.5c2.17 0 3.75 1.58 3.75 3.75v8.5c0 2.17-1.58 3.75-3.75 3.75h-8.5C5.58 19.5 4 17.92 4 15.75v-8.5C4 5.08 5.58 3.5 7.75 3.5zm8.13 2.25a.88.88 0 100 1.75.88.88 0 000-1.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                </svg>
              }
              hreflink={"https://www.instagram.com/perezjgs_/"}
            />

            <SocialButton
              buttonText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.4.96.11-.76.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.2a11.04 11.04 0 015.83 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.65.24 2.87.12 3.17.75.81 1.2 1.85 1.2 3.1 0 4.42-2.7 5.41-5.26 5.69.42.36.79 1.08.79 2.19v3.24c0 .31.21.68.8.56A10.99 10.99 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
                </svg>
              }
              hreflink={"https://github.com/gaboPerezzz"}
            />
          </div>
          <div>
            <a href="/Resume_JohnGabrielPerez.pdf" download>
              <Button buttonText={"Download Resume"} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
