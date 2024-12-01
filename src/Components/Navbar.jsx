import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-[999] bg-transparent">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Company Name on Left */}
          <div className="flex items-center">
            <h1 className="text-white text-[1rem] font-medium">AN</h1>
          </div>

          {/* Middle: Navigation Links (for larger screens) */}
          <div className="hidden sm:flex sm:flex-1 items-center justify-center">
            <div className="flex space-x-1">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Right End: Get in Touch button (for larger screens) */}
          <div className="hidden sm:flex">
            <button
              onClick={() => {
                window.location.replace('/contact');
              }}
              className="text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] py-[0.6rem] bg-transparent border-[#480090] border-[1px] text-white rounded-full"
            >
              <span>Contact Us</span>
              <BsArrowUpRightCircle size="1rem" />
            </button>
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
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-black`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
        </div>

        {/* Separate Get in Touch Button in Mobile View */}
        <div className="px-2 pt-4 pb-3">
          <Link
            to="/contact"
            className="text-white hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium bg-black hover:bg-gray-700 border-white border-[2px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
