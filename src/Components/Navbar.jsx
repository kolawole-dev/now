import React, { useEffect, useState, useRef } from "react";


// import header_bg_color from "../assets/header-bg-color.png";

import moon_icon from "../assets/moon_icon.png";
import sun_icon from "../assets/sun_icon.png";
import arrow_icon from "../assets/arrow-icon.png";
import arrow_icon_dark from "../assets/arrow-icon-dark.png";
import menu_black from "../assets/menu-black.png";
import menu_white from "../assets/menu-white.png";
import close_black from "../assets/close-black.png";
import close_white from "../assets/close-white.png";
import logo11 from '../assets/logo11.png'
React

const Navbar = () => {
  const navRef = useRef();
  const navLinkRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      }
    });

    // -------- light mode and dark mode -----------

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="w-full fixed px-3 sm:px-5 md:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 text-black dark:text-white"
      >
        <div id="top" className="flex items-center">
          <img 
            src={logo11}
            alt="Logo"
            className="cursor-pointer w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-cover rounded-xl border-2 border-blue-200 dark:border-gray-700 shadow-md mr-2 dark:hidden"
          />
          <img
            src={logo11}
            alt="Logo"
            className="hidden cursor-pointer w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-cover rounded-xl border-2 border-blue-200 dark:border-gray-700 shadow-md mr-2 dark:block"
          />
        </div>

        <ul
          ref={navLinkRef}
          className="items-center hidden gap-3 sm:gap-6 px-4 sm:px-8 md:px-12 py-2 sm:py-3 font-serif bg-white bg-opacity-50 rounded-full shadow-sm md:flex lg:gap-8 dark:border dark:border-white/50 dark:bg-transparent dark:text-white"
        >
          <li className="dark:text-white">
            <a href="#top" className="dark:text-white">Home</a>
          </li>
          <li className="dark:text-white">
            <a href="#about" className="dark:text-white">About me</a>
          </li>
          <li className="dark:text-white">
            <a href="#services" className="dark:text-white">Services</a>
          </li>
          <li className="dark:text-white">
            <a href="#work" className="dark:text-white">My Work</a>
          </li>
          <li className="dark:text-white">
            <a href="#contact" className="dark:text-white">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4 dark:text-white">
          <button onClick={toggleTheme} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-darkHover/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 dark:focus:ring-yellow-400 dark:text-white">
            <img src={moon_icon} alt="" className="w-4 sm:w-5 dark:hidden drop-shadow-[0_0_8px_white] ring-2 ring-white ring-offset-2" />
            <img src={sun_icon} alt="" className="hidden w-4 sm:w-5 dark:block drop-shadow-[0_0_8px_#facc15] ring-2 ring-yellow-400 ring-offset-2" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full ml-2 font-serif dark:border-white/50 text-sm lg:text-base"
          >
            Contact
            <img src={arrow_icon} alt="" className="w-3 dark:hidden" />
            <img
              src={arrow_icon_dark}
              alt=""
              className="hidden w-3 dark:block"
            />
          </a>

          <button className="block ml-3 md:hidden dark:text-white" onClick={() => setMenuOpen(true)}>
            <img src={menu_black} alt="" className="w-6 dark:hidden" />
            <img src={menu_white} alt="" className="hidden w-6 dark:block" />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          className={`fixed top-0 bottom-0 z-50 flex flex-col w-4/5 max-w-xs h-screen px-6 py-16 font-serif transition-transform duration-500 md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md dark:text-white right-0 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="absolute right-6 top-6" onClick={() => setMenuOpen(false)}>
            <img
              src={close_black}
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />

            <img
              src={close_white}
              alt=""
              className="hidden w-5 cursor-pointer dark:block"
            />
          </div>

          <li className="dark:text-white border-b border-gray-200 dark:border-gray-700/60 last:border-b-0">
            <a href="#top" className="dark:text-white" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="dark:text-white border-b border-gray-200 dark:border-gray-700/60 last:border-b-0">
            <a href="#about" className="dark:text-white" onClick={() => setMenuOpen(false)}>
              About me
            </a>
          </li>
          <li className="dark:text-white border-b border-gray-200 dark:border-gray-700/60 last:border-b-0">
            <a href="#services" className="dark:text-white" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li className="dark:text-white border-b border-gray-200 dark:border-gray-700/60 last:border-b-0">
            <a href="#work" className="dark:text-white" onClick={() => setMenuOpen(false)}>
              My Work
            </a>
          </li>
          <li className="dark:text-white border-b border-gray-200 dark:border-gray-700/60 last:border-b-0">
            <a href="#contact" className="dark:text-white" onClick={() => setMenuOpen(false)}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;