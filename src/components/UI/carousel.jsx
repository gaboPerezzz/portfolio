import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./carouselCard";
import { projectItems } from "../data/projectsData";
import ProjModal from "./projModal";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

function Carousel({ filter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleMenu = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const settings_slide = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerPadding: "500px",
    centerMode: true,
    initialSlide: 1,
    className: "center",
    responsive: [
      { breakpoint: 600, settings: { centerPadding: "10px", initialSlide: 1 } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerPadding: "20px" },
      },
      {
        breakpoint: 820,
        settings: { slidesToShow: 1, centerPadding: "180px" },
      },
      { breakpoint: 1024, settings: { centerPadding: "270px" } },
      { breakpoint: 1280, settings: { centerPadding: "310px" } },
      { breakpoint: 1366, settings: { centerPadding: "290px" } },
      { breakpoint: 1536, settings: { centerPadding: "370px" } },
      { breakpoint: 1600, settings: { centerPadding: "490px" } },
    ],
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(projectItems);
  }, []);

  return (
    <div className="w-full xl:!w-5/6 h-auto mx-auto pt-5 xl:!pt-20 ">
      {/* <Navbar hideNavbar={isOpen} /> */}
      <div className={`${isOpen ? "pointer-events-none" : ""}`}>
        <Slider {...settings_slide}>
          {items
            .filter((item) => filter === "all" || item.type === filter)
            .map((item) => (
              <CarouselCard
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                alt={item.alt}
                projDesc={item.projDesc}
                type={item.type}
                link={item.link}
                category={item.category}
                toggleMenu={() => toggleMenu(item)}
              />
            ))}
        </Slider>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/60 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className=" text-black  rounded-xl p-6 relative my-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ProjModal
                closemenu={() => setIsOpen(false)}
                selectedItem={selectedItem}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
