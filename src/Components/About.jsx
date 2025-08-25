
import React from "react";
import user_img from "../assets/user-kola1.jpg";
import code_icon from "../assets/code-icon.png";
import code_icon_dark from "../assets/code-icon-dark.png";
import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";
import vscode from "../assets/vscode.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import Canva from "../assets/Canva.jpeg";
import Adobe from "../assets/Adobe.png";
import react from "../assets/react.png"
import { motion } from "framer-motion";


React

const About = () => {
  return (
    <motion.div 
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} id="about" className="w-full flex justify-center px-4 sm:px-8 md:px-[8%] lg:px-[12%] py-8 sm:py-10 scroll-mt-20">
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 sm:p-10 relative z-10">
        <h4 className="mb-2 font-serif text-lg text-center">Introduction</h4>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center">About me</h2>

        <div className="flex flex-col items-center w-full gap-10 sm:gap-16 lg:gap-20 my-10 sm:my-16 lg:my-20 lg:flex-row">
          <div className="relative mx-auto max-w-max">
            <img
              src={user_img}
              alt=""
              className="w-40 sm:w-56 md:w-64 lg:w-80 rounded-3xl max-w-none lg:mt-[80px]"
            />

            
          </div>
          <div className="flex-1">
            <p className="max-w-2xl mb-10 font-serif text-base sm:text-lg">
               Hi! I am a frontend developer with experience of more than 3 years . I have studied Frontend Development which provided me with some outstanding and technical skills. I consider myself equipped with most of web development skills, but i know i still need to learn a lot more. I am highly trainable and can easily learn tasks.if i dont have experience with software or skill, i am doing research to study it . I believe in hard work and honesty, i can make your job in time with high quality
            </p>

            <ul className="grid max-w-2xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                  "
              >
                <img src={code_icon} alt="" className="mt-3 w-7 dark:hidden" />
                <img
                  src={code_icon_dark}
                  alt=""
                  className="hidden mt-3 w-7 dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Languages
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  HTML, Figma, CSS, Typescript, javascript , Tailwind{" "} , React js
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={edu_icon} alt="" className="mt-3 w-7 dark:hidden" />
                <img
                  src={edu_icon_dark}
                  alt=""
                  className="hidden mt-3 w-7 dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Education
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  Bachelors Degree in Chemical Engineering{" "}
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={project_icon} alt="" className="mt-3 w-7 dark:hidden" />
                <img
                  src={project_icon_dark}
                  alt=""
                  className="hidden mt-3 w-7 dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Projects
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  Built 10+ projects{" "}
                </p>
              </li>
            </ul>
            <h4 className="my-6 font-serif text-gray-700 dark:text-white/80">
              Tools i use
            </h4>

            <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
             
              <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                <img src={vscode} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                <img src={git} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                <img src={figma} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                <img src={Canva} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1">
                <img src={Adobe} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1 ">
                <img src={react} alt="" className="w-5 sm:w-7" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About