import React, { useState } from 'react';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { CgWebsite } from "react-icons/cg";
import { RiRobot2Line } from "react-icons/ri";
import { GrCloudSoftware } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import { SiMaterialdesignicons, SiMinds } from "react-icons/si";
import { IoBusinessSharp } from "react-icons/io5";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { GoArrowUpRight } from "react-icons/go";
import web_dev_skill from '../assets/Homepage/SecondSection/web_dev_skill.png';
import ai_skill from '../assets/Homepage/SecondSection/ai_skill.png';
import app_skill from '../assets/Homepage/SecondSection/app_skill.png';
import software_skill from '../assets/Homepage/SecondSection/software_skill.png';
import ai_solution_skill from '../assets/Homepage/SecondSection/ai_solution_skill.png';
import business_skill from '../assets/Homepage/SecondSection/business_skill.png';

function Skills() {
  const [skills] = useState([
    { 
      title: 'AI Solutions', 
      desc: 'We create AI-driven solutions to automate processes and enhance efficiency.', 
      Icon: BsArrowUpRightCircle, 
      width: '55%', 
      color: '#18CB96', 
      image: ai_solution_skill 
    },
    { 
      title: 'Web Development', 
      desc: 'Skilled in full-stack web development, we bring ideas to life with modern technologies.', 
      Icon: BsArrowUpRightCircle, 
      width: '45%', 
      color: '#18CB96',
      image: web_dev_skill
    },
    { 
      title: 'Chatbot Development', 
      desc: 'We design intelligent chatbots to boost engagement and streamline operations.', 
      Icon: BsArrowUpRightCircle, 
      width: '45%', 
      color: '#18CB96', 
      image: ai_skill
    },
    { 
      title: 'App Development', 
      desc: 'We develop user-centric mobile and web apps with seamless performance.', 
      Icon: BsArrowUpRightCircle, 
      width: '55%', 
      color: '#18CB96', 
      image: app_skill
    },
    { 
      title: 'Business Automation', 
      desc: 'We automate business processes to enhance efficiency and reduce costs.', 
      Icon: BsArrowUpRightCircle, 
      width: '50%', 
      color: '#18CB96', 
      image: business_skill
    },
    { 
      title: 'Custom Software Development', 
      desc: 'We deliver custom software solutions tailored to your unique needs.', 
      Icon: BsArrowUpRightCircle, 
      width: '50%', 
      color: '#18CB96', 
      image: software_skill
    },
  ]);

  return (
    <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[3.2rem] font-light text-[#dad4e4] leading-tight'>
      <img 
        src={Background_pic} 
        className='w-full h-full object-cover absolute z-[-999] bg-brand-bg' 
        alt="Background" 
      />
      <div className='w-full flex flex-col md:flex-row items-center justify-between md:px-[5rem] px-[1rem] md:py-[5rem] py-[2rem]'>
        {/* Left Section: Heading and Description */}
        <div className='flex flex-col md:w-3/4 space-y-[1rem]'>
          <h1 className="text-[2rem] md:text-[3.9rem] font-light text-center md:text-left text-[#dad4e4] leading-tight">
            Services that elevate your business with AI
          </h1>
          <p className='text-center md:text-left text-[0.9rem] md:text-[1rem] font-light mt-[1rem]'>
            Empowering your business with AI automation and innovative web solutions for unstoppable growth.
          </p>
        </div>

        {/* Right Section: Button */}
        <div className='flex justify-center md:justify-end md:w-1/4 w-full mt-[2rem] md:mt-0'>
          <button className='flex space-x-[1rem] bg-brand-accent px-[2.2rem] rounded-full text-[1rem] text-brand-bg py-[0.6rem] hover:bg-opacity-90 transition-colors duration-300'>
            <span>Know more</span><BsArrowUpRightCircle size='1rem' />
          </button>
        </div>
      </div>

      <div className='w-full flex flex-col'>
        <div className='w-full flex border-brand-accent border-b-[0.1rem] border-r-[0.2rem] h-[2rem] rounded-full'></div>
        <div className='w-full flex border-brand-accent border-t-[0.1rem] border-l-[0.2rem] h-[2rem] rounded-full'></div>
      </div>
      
      <div className='w-full flex flex-col space-y-[3rem] md:px-[5rem] px-[1rem]'>
        <div className='w-full flex flex-col space-y-[1rem]'>
          {/* Heading and Button Container */}
          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            {/* Title and Description */}
            <div className='w-full md:w-[70%] flex flex-col space-y-[1rem]'>
              <h1 className="text-[2rem] md:text-[3.9rem] font-light md:text-left text-center text-[#dad4e4] leading-tight">
                Let's work together
              </h1>
              <p className='text-[0.9rem] font-light md:text-left text-center'>
                Here are some of the services we offer that can <br className='hidden md:block' /> multiply your company's growth
              </p>
            </div>

            {/* Button */}
            <button className='w-fit h-fit text-[1rem] flex items-center space-x-[0.5rem] px-[2.2rem] py-[0.7rem] bg-brand-accent text-brand-bg rounded-full mt-[1rem] md:mt-0 hover:bg-opacity-90 transition-colors duration-300'>
              <span>Get started</span>
              <BsArrowUpRightCircle size='1rem' />
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className='w-full flex flex-col space-y-[2rem]'>
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className='w-full flex flex-col md:flex-row space-y-[2rem] md:space-y-0 md:space-x-[2rem]'>
              {skills.slice(rowIndex * 2, rowIndex * 2 + 2).map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <button 
                    key={index} 
                    className='w-full md:w-[50%] flex flex-col md:flex-row items-center p-[1rem] md:p-[1.5rem] bg-card-bg rounded-lg transition-transform transform hover:scale-105 hover:bg-card-hover'
                  >
                    <div className='w-full md:w-[55%] flex flex-col items-start space-y-[1rem] sm:space-y-[1.5rem] md:space-y-[2rem] pt-[1rem] sm:py-[1rem] md:py-[1.5rem] px-[1rem] sm:px-[1.2rem] md:px-[1.5rem]'>
                      <div className='rounded-full p-[0.4rem] sm:p-[0.5rem] bg-brand-accent'>
                        <Icon className='text-brand-bg' size='1.5rem' sm:size='1.8rem' md:size='2rem' />
                      </div>
                      <span className='text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] font-medium text-white text-start'>{skill.title}</span>
                      <span className='text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] text-[#dad4e4] text-start'>{skill.desc}</span>
                      <button className='text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] flex items-center space-x-[0.3rem]'>
                        <text className='underline text-brand-accent'>Start with us</text>
                        <GoArrowUpRight size='0.8rem' sm:size='0.85rem' md:size='0.9rem' color='#18CB96' />
                      </button>
                    </div>
                    <div className='w-full md:w-[45%] md:h-full h-[15rem] flex flex-col items-end justify-end pt-[1rem] sm:pt-[1.5rem] md:pt-[2rem]'>
                      <img src={skill.image} className='w-fit h-full md:w-fit object-contain' alt={skill.title} />
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
