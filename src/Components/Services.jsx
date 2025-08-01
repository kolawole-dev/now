import React from "react";

import right_arrow from "../assets/right-arrow.png";
import web from "../assets/web.png";
import mobile from "../assets/moble.png";
import { motion } from "framer-motion";
React
const Services = () => {
  return (
    <motion.div 
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}  id="services" className="w-full flex justify-center px-4 sm:px-8 md:px-[8%] lg:px-[12%] py-8 sm:py-10 scroll-mt-20">
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 sm:p-10 relative z-10">
        <h4 className="mb-2 text-lg text-center font-Ovo">What i offer</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-Ovo">My services</h2>
        <p className="max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 text-center font-Ovo text-base sm:text-lg">
          I am a Frontend Developer | Web developer from Lagos, Nigeria .
        </p>

        <div className="grid justify-center grid-cols-1 gap-5 sm:gap-6 my-8 sm:my-10 md:grid-cols-2">
          <div
            className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={web} alt="" className="w-10 mx-auto" />
            <h3 className="my-4 text-lg text-center text-gray-700 dark:text-white">
              Web design
            </h3>
            <p className="text-sm leading-5 text-center text-gray-600 dark:text-white/80">
              Web development is the process of building,programming,testing...
            </p>
            <a
              href=""
              className="flex items-center justify-center gap-2 mt-5 text-sm"
            >
              Read more <img src={right_arrow} alt="" className="w-4" />
            </a>
          </div>

          <div
            className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={mobile} alt="" className="w-10 mx-auto" />
            <h3 className="my-4 text-lg text-center text-gray-700 dark:text-white">
              Mobile app
            </h3>
            <p className="text-sm leading-5 text-center text-gray-600 dark:text-white/80">
              The art of creating visual content to communicate messages through
              typography, imagery, color, and layout...
            </p>
            <a
              href=""
              className="flex items-center justify-center gap-2 mt-5 text-sm"
            >
              Read more <img src={right_arrow} alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;