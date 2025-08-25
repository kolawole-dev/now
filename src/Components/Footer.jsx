import React from 'react'

import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'
import logo11 from '../assets/logo11.png'



React
const Footer = () => {
  const date = new Date().getFullYear() 
  return (
    <div className="mt-2">
    <div className="text-center">
        <img src={logo11} alt="" className="mx-auto mb-2 w-36 dark:hidden"/>
        <img src={logo11} alt="" className="hidden mx-auto mb-2 w-36 dark:block"/>


        <div className="flex items-center gap-2 mx-auto w-max">
            <img src={mail_icon} alt="" className="w-6 dark:hidden"/>
            <img src={mail_icon_dark} alt="" className="hidden w-6 dark:block"/>
            <a href="mailto:timothy617712@gmail.com">
            timothy617712@gmail.com
            </a>
            
        </div>
    </div>
    <div className="text-center flex flex-col sm:flex-row items-center justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-8 sm:mt-12 py-4 sm:py-6 gap-4 sm:gap-0">
    <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm sm:text-base">
  © {date}
  <div
    className="flex flex-col items-center p-2 bg-gray-800 border border-gray-300 rounded-lg shadow-lg badge-base LI-profile-badge"
    data-locale="en_US"
    data-size="medium"
    data-theme="dark"
    data-type="VERTICAL"
    data-vanity="timothy"
    data-version="v1"
  >
    <a
      className="text-sm font-semibold text-white badge-base__link LI-simple-link hover:text-blue-400"
      href="http://linkedin.com/in/kolawole-omoyeni-06797136"
    >
      Omoyeni Kolawole 
    </a>
  </div>
   All rights reserved.
</p>

        <ul className="flex items-center justify-center gap-6 sm:gap-10 mt-4 sm:mt-0 text-sm sm:text-base">
            <li><a target='_blank' href="https://github.com/kolawole-dev?tab=repositories">GitHub</a></li>
            <li><a href="http://linkedin.com/in/kolawole-omoyeni-067971362">linkedin</a></li>
           
            <li><a target='_blank' href="https://x.com/timothy617712">Twitter</a></li>
            <li><a target='_blank' href="https://wa.me/+2348140759922">WhatsApp</a></li>
        </ul>
    </div>
 </div>
  )
}

export default Footer