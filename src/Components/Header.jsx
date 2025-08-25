import React from "react";
import user_im from "../assets/user-kola1.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import hand_icon from "../assets/hand_icon.png";
import myResume from '../assets/myResume.pdf'
import { motion } from "framer-motion";

React
const Header = () => {
  return (
    <motion.div 
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} className="flex flex-col items-center justify-center w-11/12 min-h-screen max-w-3xl gap-4 mx-auto text-center px-4 sm:px-8 " id='top'>
      <img
        src={user_im}
        alt="Profile"
        className="object-cover w-28 h-28 sm:w-32 sm:h-32 rounded-full  mb-2 border-4 border-white shadow-lg md:mt-20 sm:mt-2"
      />
      <h3 className="flex items-end gap-2 mb-3 font-serif text-xl md:text-2xl">
       <button>Hi! I am Omoyeni kolawole{" "}</button> 
        <img src={hand_icon} alt="hand_icon" className="w-6" />
      </h3>
      <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-[66px] font-serif">
        Frontend Developer  based in the Nigeria.
      </h1>
      <p className="max-w-2xl mx-auto font-serif text-base sm:text-lg">
        I am a Frontend developer and a freelancer from Lagos, Nigeria with more than 3 years work experience , and will be willing to work with you
      </p>

      <div className="flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:flex-row">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href={myResume}
          download
          className="flex items-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black"
        >
          my resume <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default Header

