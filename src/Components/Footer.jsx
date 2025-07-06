// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-fit relative flex flex-col  items-center font-light text-[#dad4e4] border-t border-brand-accent leading-tight  overflow-hidden">
          <img 
          src={Background_pic} 
          className='w-full h-full object-cover absolute z-[-10] bg-brand-bg' 
          alt="Background" 
        />
        <div className='w-full flex flex-col space-y-[4rem] items-center pt-[5rem] pb-[2rem] '>
        <div className='w-full flex flex-col px-[1.5rem] md:px-[5rem] pb-[3rem] md:pb-[4rem] text-[2rem] md:text-[3.2rem] border-b border-gray-400/50'>
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                {/* Container for the title and description */}
                <div className='flex flex-col w-full md:w-3/4 text-left'>
                <h2 className='text-center md:text-left text-green-400'>Let's work with us</h2>
                <p className='text-[0.8rem] md:text-[0.9rem] font-light mt-[1rem] md:text-left text-center'>
                    Hyperpara is a hybrid software company built for the next generation of digital growth. We deliver lightning-fast software development services, build powerful SaaS products, and create intelligent AI-driven solutions.
                </p>
                </div>

                {/* Button on the right side */}
                <Link 
                  to="https://www.linkedin.com/company/hyperpara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex w-fit space-x-[0.8rem] md:space-x-[1rem] bg-brand-accent px-[1.5rem] md:px-[2.2rem] py-[0.5rem] md:py-[0.6rem] rounded-full text-[0.9rem] md:text-[1rem] text-brand-bg mt-[1rem] md:mt-0 md:w-auto md:ml-[2rem] hover:bg-opacity-90 transition-colors duration-300'
                >
                <span>Know more</span>
                <BsArrowUpRightCircle size='1rem' />
                </Link>
            </div>
        </div>


            
            {/* Upper Section */}
            <div className="container mx-auto px-[5rem] flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-[3rem]">
                {/* First Div - Logo and Description */}
                <div className="flex-1 md:w-[60%]">
                <div className="flex flex-col items-center md:items-start">
                    <img 
                      src="/trans-logo.png" 
                      alt="Hyperpara Logo" 
                      className="h-10 w-auto object-contain"
                    />
                    <p className="text-sm text-gray-400 mt-4">A hybrid software company built for the next generation of digital growth. We deliver lightning-fast software development services, build powerful SaaS products, and create intelligent AI-driven solutions.</p>
                    
                    {/* Contact Information */}
                    <div className="flex flex-col space-y-2 mt-4 text-sm text-gray-400">
                      <Link 
                        to="mailto:info@hyperpara.co"
                        className="flex items-center space-x-2 hover:text-brand-accent transition-colors duration-300"
                      >
                        <FaEnvelope className="text-brand-accent" />
                        <span>info@hyperpara.co</span>
                      </Link>
                      <Link 
                        to="tel:+923025414924"
                        className="flex items-center space-x-2 hover:text-brand-accent transition-colors duration-300"
                      >
                        <FaPhone className="text-brand-accent" />
                        <span>+92 302 5414924</span>
                      </Link>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-brand-accent" />
                        <span>Paris, France</span>
                      </div>
                    </div>
                </div>
                </div>

                {/* Second Div - Services */}
                <div className="flex-1 md:w-[20%]">
                <h3 className="font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                    <li><Link to="/services" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Web Development</Link></li>
                    <li><Link to="/services" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Mobile Apps</Link></li>
                    <li><Link to="/services" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">AI Solutions</Link></li>
                    <li><Link to="/services" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">SaaS Products</Link></li>
                </ul>
                </div>

                {/* Third Div - Resources */}
                <div className="flex-1 md:w-[20%]">
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                    <li><Link to="/blog" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Blog</Link></li>
                    <li><Link to="/contact" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Help Center</Link></li>
                    <li><Link to="/about" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Privacy Policy</Link></li>
                    <li><Link to="/about" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Terms of Service</Link></li>
                </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container px-[5rem] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0  pt-4">
                <div className="text-gray-400">© 2025 Hyperpara. All rights reserved.</div>
                <div className="flex space-x-4">
                <Link to="/about" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Terms and Policy</Link>
                </div>
                <div className='w-full flex items-center justify-center space-x-[1.1rem]'>
                    <Link 
                      to="https://www.instagram.com/hyperpara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-accent transition-colors duration-300"
                    >
                        <FaInstagram color='white' size='1.1rem'/>
                    </Link>
                    <Link 
                      to="https://www.facebook.com/hyperpara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-accent transition-colors duration-300"
                    >
                        <FaFacebook color='white' size='1.1rem'/>
                    </Link>
                    <Link 
                      to="https://www.linkedin.com/company/hyperpara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-accent transition-colors duration-300"
                    >
                        <FaLinkedin color='white' size='1.1rem'/>
                    </Link>
                    <Link 
                      to="https://twitter.com/hyperpara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-accent transition-colors duration-300"
                    >
                        <FaTwitter color='white' size='1.1rem'/>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
