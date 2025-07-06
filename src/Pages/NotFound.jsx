import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsHouse } from 'react-icons/bs';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';

function NotFound() {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center bg-brand-bg">
      <img
        src={Background_pic}
        className="w-full h-full object-cover absolute opacity-20"
        alt="Background"
      />
      
      <div className="relative z-10 text-center mt-[6rem] px-[1rem] md:px-[5rem] max-w-4xl">
        {/* 404 Number */}
        <div className="mb-4">
          <h1 className="text-[8rem] md:text-[10rem] font-bold text-green-400/20 leading-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-6">
          <h2 className="text-[2rem] md:text-[3rem] font-light text-green-400">
            Page Not Found
          </h2>
          <p className="text-[1rem] md:text-[1.2rem] font-light text-[#dad4e4] max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to building something amazing.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 px-8 py-4 bg-brand-accent text-brand-bg rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium"
          >
            <BsHouse size="1.2rem" />
            <span>Go Home</span>
          </Link>
          
          <Link
            to="/contact"
            className="flex items-center space-x-2 px-8 py-4 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-brand-bg transition-all duration-300 font-medium"
          >
            <BsArrowLeft size="1.2rem" />
            <span>Get Help</span>
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-[0.9rem] text-[#dad4e4] mb-4">
            Or explore our other pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="text-green-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="text-green-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-green-400 hover:text-white transition-colors duration-300 text-sm"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-green-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound; 