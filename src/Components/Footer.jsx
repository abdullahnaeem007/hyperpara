// src/components/Footer.jsx
import React from 'react';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="w-full h-fit relative flex flex-col  items-center font-light text-[#dad4e4] border-t border-[#635189] leading-tight  overflow-hidden">
          <img 
          src={Background_pic} 
          className='w-full h-full object-cover absolute z-[-10] bg-black' 
          alt="Background" 
        />
        <div class='w-full flex flex-col space-y-[4rem] items-center pt-[5rem] pb-[2rem] '>
        <div className='w-full flex flex-col px-[1.5rem] md:px-[5rem] pb-[3rem] md:pb-[4rem] text-[2rem] md:text-[3.2rem] border-b border-gray-400/50'>
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                {/* Container for the title and description */}
                <div className='flex flex-col w-full md:w-3/4 text-left'>
                <h2 className='text-center md:text-left'>Let's work with us</h2>
                <p className='text-[0.8rem] md:text-[0.9rem] font-light mt-[1rem] md:text-left text-center'>
                Skilled in both front-end and back-end development, with a strong focus on innovation and collaboration.
                </p>
                </div>

                {/* Button on the right side */}
                <Link to="/contact">
                    <button className='flex w-fit space-x-[0.8rem] md:space-x-[1rem] bg-white px-[1.5rem] md:px-[2.2rem] py-[0.5rem] md:py-[0.6rem] rounded-full text-[0.9rem] md:text-[1rem] text-black mt-[1rem] md:mt-0 md:w-auto md:ml-[2rem]'>
                    <span>Know more</span>
                    <BsArrowUpRightCircle size='1rem' />
                    </button>
                </Link>
               
            </div>
        </div>


            
            {/* Upper Section */}
            <div className="container mx-auto px-[5rem] flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-[3rem]">
                {/* First Div - Logo and Description */}
                <div className="flex-1 md:w-[60%]">
                <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center">
            <h1 className="text-white text-[1rem] font-medium">AN</h1>
                </div>    
                    <p className="text-sm text-gray-400">Lets collaborate to have a betterr future innovated with AI.</p>
                </div>
                </div>

                {/* Third Div - Resources */}

                <div className="flex-1 md:w-[20%]">
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                    <li>
                    <Link to="/blog" className="text-gray-400 hover:text-white">
                        Blog
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="text-gray-400 hover:text-white">
                        About
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="text-gray-400 hover:text-white">
                        Contact Us
                    </Link>
                    </li>
                </ul>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="container px-[5rem] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0  pt-4">
                <div className="text-gray-400">© 2024 All rights reserved.</div>
                <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white">Terms and Policy</button>
                </div>
                <div class='w-fit flex items-center justify-center space-x-[1.1rem]'>
                <button onClick={() => window.open("https://www.instagram.com/abdullxh_naeem/", "_blank")}>
                    <FaInstagram color="white" size="1.3rem" />
                </button>
                <button onClick={() => window.open("https://www.linkedin.com/in/abdullah-naeem-802518201/", "_blank")}>
                    <FaLinkedin color="white" size="1.3rem" />
                </button>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
