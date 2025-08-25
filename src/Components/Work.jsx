import React from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";

React
const Work = () => {
  return (
    <div id="work" className="w-full flex justify-center px-4 sm:px-8 md:px-[8%] lg:px-[12%] py-8 sm:py-10 scroll-mt-20">
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 sm:p-10">
        <h4 className="mb-2 font-serif text-lg text-center">My portfolio</h4>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center">My latest work</h2>
        <p className="max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-12 font-serif text-center text-base sm:text-lg">
          Welcome to my portfolio! Explore a collection of projects showcasing my expertise in frontend development.
        </p>

        <div className="grid gap-4 sm:gap-5 my-8 sm:my-10 grid-cols-1 md:grid-cols-3 dark:text-black">
          <div className="aspect-square bg-[url('./assets/clone.png')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
            <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Learning Management Service project</h2>
                <p className="text-sm text-gray-700">Web Design</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href="https://kolawol.netlify.app" target="_blank">
                       <img src={send_icon} alt="send icon" className="w-5" />
                        </a>

              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./assets/spot.png')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
            <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Spotify clone</h2>
                <p className="text-sm text-gray-700">Web Design</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href="https://kolaify.netlify.app/" target="_blank">
                       <img src={send_icon} alt="send icon" className="w-5" />
                        </a>

              </div>
            </div>
          </div>
          <div className="aspect-square bg-[url('./assets/estate.png')] bg-no-repeat bg-center bg-cover p-10 rounded-lg relative cursor-pointer group">
            <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Real Estate Project  </h2>
                <p className="text-sm text-gray-700">Web Design</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href="https://zippy-creponne-5133bf.netlify.app/" target="_blank"><img src={send_icon} alt="" className="w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#y"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2.5 px-6 sm:py-3 sm:px-10 mx-auto my-10 sm:my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover text-sm sm:text-base"
        >
          Show more
          <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
          <img
            src={right_arrow_blod_dark}
            alt=""
            className="hidden w-4 dark:block"
          />
        </a>
      </div>
    </div>
  );
};

export default Work;