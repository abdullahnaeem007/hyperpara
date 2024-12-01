import React from 'react'; 
import Background_pic from '../assets/Homepage/HeroSection/Background_pic.png'; 
import { BsArrowUpRightCircle } from "react-icons/bs"; 
import { BiMouse } from "react-icons/bi"; 
import { FaInstagram, FaLinkedin } from "react-icons/fa"; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-scroll'; // Import Link from react-scroll

function Herosection() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <img
        src={Background_pic}
        className="w-full h-full object-cover absolute inset-0 -z-10"
        alt="Background"
      />
      <div className="w-full h-full flex flex-col items-center justify-center px-6 py-16 md:py-24">
        {/* Social Icons */}
        <motion.div
          className="flex space-x-6 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button onClick={() => window.open("https://www.instagram.com/abdullxh_naeem/", "_blank")}>
            <FaInstagram color="white" size="1.5rem" />
          </button>
          <button onClick={() => window.open("https://www.linkedin.com/in/abdullah-naeem-802518201/", "_blank")}>
            <FaLinkedin color="white" size="1.5rem" />
          </button>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Abdullah Naeem
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-[#dad4e4] mt-2">
            Software Engineer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm md:text-lg text-center text-[#ffffffcc] max-w-4xl mb-8 md:mb-12"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Solution-driven Full Stack Developer with a proven track record of designing and implementing scalable, consumer-focused products. Skilled in both front-end and back-end development, with a strong focus on innovation and collaboration.
        </motion.p>

        {/* CTA Button */}
        <Link
          to="nextSection" // The target section id (you can change it to your target section's id)
          smooth={true}
          duration={500}
        >
          <motion.button
            className="bg-[#504CFF] text-white text-sm md:text-base font-medium rounded-full px-8 py-3 mb-8"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Get Started
            <BsArrowUpRightCircle size="1.2rem" className="inline-block ml-2" />
          </motion.button>
        </Link>

        {/* Scroll Indicator */}
        <Link
          to="nextSection" // The target section id (same as above)
          smooth={true}
          duration={500}
        >
          <motion.button
            className="absolute bottom-10 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <BiMouse size="1.5rem" color="white" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Herosection;
