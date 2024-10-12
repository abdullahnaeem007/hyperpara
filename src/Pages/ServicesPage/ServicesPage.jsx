import React, { useState } from 'react'
import { CgWebsite } from "react-icons/cg";
import { RiRobot2Line } from "react-icons/ri";
import { GrCloudSoftware } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { IoBusinessSharp } from "react-icons/io5";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import web_dev_skill from '../../assets/Homepage/SecondSection/web_dev_skill.png';
import ai_skill from '../../assets/Homepage/SecondSection/ai_skill.png';
import app_skill from '../../assets/Homepage/SecondSection/app_skill.png';
import software_skill from '../../assets/Homepage/SecondSection/software_skill.png';
import ai_solution_skill from '../../assets/Homepage/SecondSection/ai_solution_skill.png';
import business_skill from '../../assets/Homepage/SecondSection/business_skill.png';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';

function ServicesPage() {
    const [skills] = useState([
        { 
          title: 'AI Solutions', 
          desc: 'We create AI-driven solutions to automate processes and enhance efficiency.', 
          icon: SiMinds, 
          width: '55%', 
          color: '#151515', 
          image: ai_solution_skill 
        },
        { 
          title: 'Web Development', 
          desc: 'Skilled in full-stack web development, we bring ideas to life with modern technologies.', 
          icon: CgWebsite, 
          width: '45%', 
          color: '#504CFF',
          image: web_dev_skill
        },
        { 
          title: 'Chatbot Development', 
          desc: 'We design intelligent chatbots to boost engagement and streamline operations.', 
          icon: RiRobot2Line, 
          width: '45%', 
          color: '#331617', 
          image: ai_skill
        },
        { 
          title: 'App Development', 
          desc: 'We develop user-centric mobile and web apps with seamless performance.', 
          icon: MdAppSettingsAlt, 
          width: '55%', 
          color: '#151125', 
          image: app_skill
        },
        { 
          title: 'Business Automation', 
          desc: 'We automate business processes to enhance efficiency and reduce costs.', 
          icon: IoBusinessSharp, 
          width: '50%', 
          color: '#161617', 
          image: business_skill
        },
        { 
          title: 'Custom Software Development', 
          desc: 'We deliver custom software solutions tailored to your unique needs.', 
          icon: GrCloudSoftware, 
          width: '50%', 
          color: '#111158', 
          image: software_skill
        },
      ]);
  
  return (
    <div className='w-full min-h-screen relative items-center flex flex-col'>
      <div className='w-full min-h-screen relative flex flex-col space-y-[2rem] md:space-y-[3rem] items-center text-[2rem] md:text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-black'>
            <img 
                src={Background_pic} 
                className='w-full h-full object-cover absolute' 
                alt="Background" 
            />  
            <div className='w-full flex flex-col space-y-[2rem] md:space-y-[3rem] px-[1.5rem] md:px-[5rem] py-[2rem] bg-black'>
                <div className='w-full flex flex-col items-center md:items-start'>
                    <h2 className='text-center md:text-left'>Let's work together</h2>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                        <p className='text-[0.8rem] md:text-[0.9rem] font-light mt-[1rem] text-center md:text-left'>
                          Here are some of the services we offer that can multiply your company's growth 
                        </p>
                        <button className='mt-[1rem] md:mt-0 text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1.2rem] py-[0.7rem] bg-white text-black rounded-full'>
                            <span>Get started</span>
                            <BsArrowUpRightCircle size='1rem'/>
                        </button>
                    </div>
                </div>

                <div className='w-full flex flex-col items-center'>
                  <div className='w-full flex flex-col items-center space-y-8 px-[1.5rem] md:px-[3rem] z-10'>
                      {
                          skills.map((skill, index) => (
                              <div 
                                  key={index} 
                                  className='w-full flex flex-col md:flex-row items-center p-[1rem] md:p-[1.5rem] bg-[#1c1c1c] rounded-lg transition-transform transform hover:scale-105 hover:bg-[#2a2a2a]'
                              >
                                  <div className='flex items-center space-x-4 md:space-x-6'>
                                      <div 
                                          className='flex items-center justify-center rounded-full p-[1rem] md:p-[1.5rem]' 
                                          style={{ backgroundColor: skill.color }}
                                      >
                                          <skill.icon size={30} md:size={40} className="text-white" />
                                      </div>
                                      <div className='text-left'>
                                          <h2 className='text-[1.2rem] md:text-[1.5rem] font-semibold text-white'>{skill.title}</h2>
                                          <p className='text-[0.8rem] md:text-[0.9rem] font-light text-[#dad4e4]'>{skill.desc}</p>
                                      </div>
                                  </div>
                                  <div className='mt-4 md:mt-0 ml-auto'>
                                      <img src={skill.image} alt={skill.title} className='w-[100px] md:w-[150px] h-auto rounded-lg'/>
                                  </div>
                              </div>
                          ))
                      }
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPage;
