import React from "react";
import { Link } from "react-router-dom";
import Background_pic from "../assets/Homepage/HeroSection/Background_pic.png";
import scroll_text from "../assets/Homepage/HeroSection/scroll_text.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BiMouse } from "react-icons/bi";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
            <Link 
              to="https://www.instagram.com/hyperpara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram
                color="white"
                size="1rem"
                className="md:size-[1.1rem]"
              />
            </Link>
            <Link 
              to="https://www.facebook.com/hyperpara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebook
                color="white"
                size="1rem"
                className="md:size-[1.1rem]"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/company/hyperpara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin
                color="white"
                size="1rem"
                className="md:size-[1.1rem]"
              />
            </Link>
            <Link 
              to="https://twitter.com/hyperpara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter
                color="white"
                size="1rem"
                className="md:size-[1.1rem]"
              />
            </Link>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-[2.5rem] md:text-[3.9rem] font-light text-center text-green-400 leading-tight">
              Hyperpara
            </h1>
            <h2 className="text-[1.5rem] md:text-[2rem] font-light text-center leading-tight">
              Engineered for Speed. Designed for Scale.
            </h2>
          </div>

          <p className="text-[0.9rem] md:text-[1rem] font-light text-center text-[#ffffffcc] max-w-4xl">
            A hybrid software company built for the next generation of digital
            growth. We deliver lightning-fast software development services,
            build powerful SaaS products, and create intelligent AI-driven
            solutions that solve real-world problems.
          </p>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link 
              to="/contact"
              className="text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] md:px-[1.2rem] py-[0.6rem] md:py-[0.7rem] bg-brand-accent text-brand-bg rounded-full hover:bg-opacity-90 transition-colors duration-300 group"
            >
              <span>Get Started</span>
              <BsArrowUpRightCircle size="1rem" />
            </Link>
                        <Link 
              to="https://www.linkedin.com/company/hyperpara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] md:px-[1.2rem] py-[0.6rem] md:py-[0.7rem] border border-white text-white rounded-full hover:bg-white hover:text-brand-bg transition-colors duration-300 group"
            >
              <span className="group-hover:text-brand-bg">Know More</span>
              <BsArrowUpRightCircle
                size="1rem"
                className="group-hover:text-black"
              />
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-[0.8rem] md:text-[0.9rem] text-[#dad4e4]">
            <Link 
              to="mailto:info@hyperpara.co"
              className="flex items-center space-x-2 hover:text-brand-accent transition-colors duration-300"
            >
              <FaEnvelope className="text-brand-accent" />
              <span>info@hyperpara.co</span>
            </Link>
            <Link 
              to="tel:+33123456789"
              className="flex items-center space-x-2 hover:text-brand-accent transition-colors duration-300"
            >
              <FaPhone className="text-brand-accent" />
              <span>+33 1 23 45 67 89</span>
            </Link>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-brand-accent" />
              <span>Paris, France</span>
            </div>
          </div>
        </div>

        <button className="w-full h-fit flex items-center justify-center py-[1.5rem] md:py-[2rem] relative">
          <img
            src={scroll_text}
            className="absolute w-[5rem] md:w-[7rem] animate-spin-slow"
            alt="Scroll text"
          />
          <BiMouse
            size="1.2rem"
            md:size="1.5rem"
            color="white"
            className="animate-bounce-slow"
          />
        </button>
      </div>
    </div>
  );
}

export default Herosection;
