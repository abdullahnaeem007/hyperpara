import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="absolute w-full z-[999] bg-transparent">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Company Logo on Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/trans-logo.png" 
                alt="Hyperpara Logo" 
                className="h-10 wauto object-contain"
              />
            </Link>
          </div>

          {/* Middle: Navigation Links (for larger screens) */}
          <div className="hidden sm:flex sm:flex-1 items-center justify-center">
            <div className="flex space-x-1">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/' 
                    ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/services' 
                    ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/portfolio' 
                    ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/blog' 
                    ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/about' 
                    ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Right End: Get in Touch button (for larger screens) */}
          <div className="hidden sm:flex">
            <Link
              to="/contact"
              className="text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] py-[0.6rem] bg-transparent border-brand-accent border-[1px] text-white rounded-full hover:bg-brand-accent hover:text-brand-bg transition-colors duration-300"
            >
              <span>Contact Us</span>
              <BsArrowUpRightCircle size="1rem" className="text-brand-accent" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-brand-bg`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              location.pathname === '/' 
                ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              location.pathname === '/services' 
                ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              location.pathname === '/portfolio' 
                ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              location.pathname === '/blog' 
                ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              location.pathname === '/about' 
                ? 'text-brand-accent bg-brand-accent/10 border border-brand-accent/20' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            About
          </Link>
        </div>

        {/* Separate Get in Touch Button in Mobile View */}
        <div className="px-2 pt-4 pb-3">
          <Link
            to="/contact"
            className="text-white hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium bg-brand-bg hover:bg-gray-700 border-brand-accent border-[2px] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
