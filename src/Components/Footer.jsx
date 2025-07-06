// src/components/Footer.jsx
import React from 'react';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full relative flex flex-col items-center font-light text-[#dad4e4] border-t border-[#635189] overflow-hidden leading-tight">
      <img
        src={Background_pic}
        className="w-full h-full object-cover absolute inset-0 z-[-10] bg-black"
        alt="Background"
      />

      <div className="w-full flex flex-col space-y-16 items-center pt-20 pb-8 px-6 md:px-20">
        {/* Call to Action Section */}
        <div className="w-full border-b border-gray-400/50 pb-12 text-3xl md:text-[3.2rem]">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Left: Title & Description */}
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2>Let's work with us</h2>
              <p className="text-sm md:text-base font-light mt-4 text-gray-300">
                Hyperpara is a growing tech company providing cutting-edge services in Web Development, POS + CRM systems, and custom software solutions tailored for medical and service-based businesses.
              </p>
            </div>

            {/* Right: Button */}
            <button className="flex items-center space-x-3 bg-white text-black px-6 py-2 rounded-full text-sm md:text-base">
              <span>Know more</span>
              <BsArrowUpRightCircle size="1rem" />
            </button>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="w-full flex flex-col md:flex-row gap-12">
          {/* Left: Logo and Description */}
          <div className="flex-1">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="/src/assets/Logo/logo-removebg-preview.png"
                alt="Logo"
                className="w-24 md:w-28 mb-4"
              />
              <p className="text-sm text-gray-400 max-w-sm">
                Hyperpara delivers fast, secure, and scalable POS + CRM solutions designed specifically for medical businesses. We streamline sales, inventory, and patient engagement through a unified platform.
              </p>
            </div>
          </div>

          {/* Middle: Services */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Right: Resources */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400 gap-4">
          <div>© 2025 All rights reserved.</div>
          <div>
            <a href="#" className="hover:text-white">Terms and Policy</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#"><FaInstagram size="1.1rem" /></a>
            <a href="#"><FaFacebook size="1.1rem" /></a>
            <a href="#"><FaLinkedin size="1.1rem" /></a>
            <a href="#"><FaTwitter size="1.1rem" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;