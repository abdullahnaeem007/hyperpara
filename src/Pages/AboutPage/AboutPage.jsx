import React, { useEffect } from 'react';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';
import ProfilePic from '../../assets/portfolio/0.jpg';  // Replace this with the path to your profile picture

// Animation library for added effects
import { motion } from 'framer-motion';

function AboutPage() {
  // Scroll-based animation trigger
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach(element => observer.observe(element));
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-black text-white">
      {/* Background Image */}
      <img
        src={ProfilePic}
        className="w-full h-full object-cover absolute opacity-20 z-0"
        alt="Background"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center py-12 md:py-16">
        {/* Title and Circular Image Section */}
        <motion.div
          className="text-center fade-in flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Circular Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 relative">
            <img
              src={ProfilePic}  // Replace this with your image path
              alt="Profile"
              className="w-full h-full object-cover"
              style={{
                transform: 'scale(2)', // Zoom in effect
                objectPosition: 'center', // Center the image inside the circle
              }}
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-[2.5rem] md:text-[4rem] font-light text-[#504CFF]">
            Abdullah Naeem
          </h1>
          <p className="text-[1.2rem] md:text-[1.5rem] font-light text-[#dad4e4] mt-2">
            Full Stack Developer | AI & Automation Expert
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="mt-[2rem] max-w-3xl text-center fade-in"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Optional Bio content */}
        </motion.div>
      </div>

      {/* Content Sections (Experience, Skills, Education) */}
      <div className="relative z-10 flex flex-col px-[2rem] md:px-[5rem] py-[2rem] md:py-[3rem]">
        {/* Experience Section */}
        <motion.div
          className="mt-[2rem] fade-in"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#504CFF]">Experience</h2>
          <div className="space-y-[2rem] mt-[2rem]">
            <div className="bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
              <h3 className="text-[1.5rem] text-white">Associate Software Engineer</h3>
              <p className="text-[#dad4e4] text-[1.1rem]">Dubizzle Labs | 2024 - Present</p>
              <p className="text-[#dad4e4]">
                I develop and maintain backend systems for the Jarvis product using Ruby on Rails. My responsibilities include building APIs, managing data, and ensuring seamless backend functionality, collaborating with cross-functional teams to optimize performance.
              </p>
            </div>

            <div className="bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
              <h3 className="text-[1.5rem] text-white">Freelancer (Fiverr / Upwork)</h3>
              <p className="text-[#dad4e4] text-[1.1rem]">2022 - Present</p>
              <p className="text-[#dad4e4]">
                I have successfully integrated AI technologies and Lang-chain architecture to automate business operations. I specialize in developing and maintaining web applications, creating intuitive UIs, and implementing backend solutions with Node.js and PostgreSQL.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-[4rem] fade-in"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#504CFF]">Skills & Expertise</h2>
          <div className="mt-[2rem] text-left space-y-[1rem] text-[#dad4e4]">
            <p className="text-[1.1rem]">
              <strong>Frontend:</strong> ReactJS, NextJS, Vite, Figma
            </p>
            <p className="text-[1.1rem]">
              <strong>Backend:</strong> Ruby on Rails, NodeJS, ExpressJS, FastAPI
            </p>
            <p className="text-[1.1rem]">
              <strong>Deployment:</strong> Heroku, Cloudflare, Railway, Render
            </p>
            <p className="text-[1.1rem]">
              <strong>AI & Automation:</strong> Python, OpenAI, LLMs, Custom Models
            </p>
            <p className="text-[1.1rem]">
              <strong>Version Control:</strong> GitHub
            </p>
          </div>
        </motion.div>

        {/* Education & Certifications Section */}
        <motion.div
          className="mt-[4rem] fade-in"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#504CFF]">Education & Certifications</h2>
          <div className="space-y-[2rem] mt-[2rem]">
            <div className="bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
              <h3 className="text-[1.5rem] text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-[#dad4e4] text-[1.1rem]">National University of Computer and Emerging Sciences (2020 - 2024)</p>
              <p className="text-[#dad4e4]">GPA: 3.23</p>
            </div>
            <div className="bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
              <h3 className="text-[1.5rem] text-white">Ruby on Rails & IoT Bootcamps</h3>
              <p className="text-[#dad4e4] text-[1.1rem]">Devsinc (Jan 2023 - Feb 2023) | Grandeur (Jul 2022 - Sep 2022)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
