import React from 'react';
import Background_pic from '../assets/Homepage/HeroSection/Background_pic.png';
import scroll_text from '../assets/Homepage/HeroSection/scroll_text.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BiMouse } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Herosection() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-between">
      <img
        src={Background_pic}
        className="w-full h-full object-cover -z-10 absolute"
        alt="Background"
      />
      <div className="w-full min-h-screen flex flex-col items-center justify-between py-[2rem]">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-[4vh] md:space-y-[6vh] px-[1rem] md:px-[5rem]">
          <div className="w-full flex items-center justify-center space-x-[0.8rem] md:space-x-[1.1rem]">
            <button className="hover:text-brand-accent transition-colors duration-300">
              <FaInstagram color="white" size="1rem" className="md:size-[1.1rem]" />
            </button>
            <button className="hover:text-brand-accent transition-colors duration-300">
              <FaFacebook color="white" size="1rem" className="md:size-[1.1rem]" />
            </button>
            <button className="hover:text-brand-accent transition-colors duration-300">
              <FaLinkedin color="white" size="1rem" className="md:size-[1.1rem]" />
            </button>
            <button className="hover:text-brand-accent transition-colors duration-300">
              <FaTwitter color="white" size="1rem" className="md:size-[1.1rem]" />
            </button>
          </div>
          <h1 className="text-[2.5rem] md:text-[3.9rem] font-light text-center text-[#dad4e4] leading-tight">
            Redefining Excellence with AI-Powered Performance
          </h1>
          <p className="text-[0.8rem] md:text-[0.9rem] font-light text-center text-[#ffffffcc]">
            Specializing in crafting AI solutions that drive automation and boost efficiency
            for companies of all sizes
          </p>
          <button className="text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] md:px-[1.2rem] py-[0.6rem] md:py-[0.7rem] bg-brand-accent text-brand-bg rounded-full hover:bg-opacity-90 transition-colors duration-300">
            <span>Get started</span>
            <BsArrowUpRightCircle size="1rem" />
          </button>
        </div>
        <button className="w-full h-fit flex items-center justify-center py-[1.5rem] md:py-[2rem] relative">
          <img
            src={scroll_text}
            className="absolute w-[5rem] md:w-[7rem] animate-spin-slow"
            alt="Scroll text"
          />
          <BiMouse size="1.2rem" md:size="1.5rem" color="white" className="animate-bounce-slow" />
        </button>
      </div>
    </div>
  );
}

export default Herosection;
