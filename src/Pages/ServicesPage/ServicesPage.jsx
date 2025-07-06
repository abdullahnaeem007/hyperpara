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
import client from '../../assets/Homepage/Testimonial/client.png';
import comma from '../../assets/Homepage/Testimonial/comma.png';

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

    const [serviceTestimonials] = useState([
        {
          name: 'Rachel Green',
          position: 'Product Manager, TechStart',
          service: 'AI Solutions',
          review: 'Hyperpara\'s lightning-fast development delivered our AI solution in just 6 weeks. Their intelligent AI chatbots reduced our customer support workload by 70% and improved response times from hours to seconds. Elite development at hyperspeed!',
          image: client
        },
        {
          name: 'Carlos Mendez',
          position: 'CTO, RetailChain',
          service: 'Web Development',
          review: 'Hyperpara rebuilt our entire e-commerce platform with lightning-fast development. The new SaaS product loads 3x faster and our conversion rate increased by 45%. Their platform engineering expertise is outstanding.',
          image: client
        },
        {
          name: 'Dr. Lisa Park',
          position: 'CEO, HealthTech Solutions',
          service: 'Custom Software',
          review: 'Hyperpara developed a custom patient management SaaS platform that handles 10,000+ patients daily. Their workflow automation reduced administrative overhead by 60% and their AI chatbots handle 80% of patient inquiries automatically.',
          image: client
        },
        {
          name: 'Tom Anderson',
          position: 'Operations Director, Manufacturing Co',
          service: 'Business Automation',
          review: 'Hyperpara\'s workflow automation solution saved us $2M annually in operational costs. Their platform engineering expertise built a system that processes real-time data from thousands of sensors. What used to take 50 people 3 days now happens automatically in 2 hours.',
          image: client
        }
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

                {/* Service-Specific Testimonials */}
                <div className='w-full flex flex-col items-center mt-[4rem] space-y-6'>
                    <h2 className='text-center text-[1.8rem] md:text-[2.2rem]'>Client Success Stories</h2>
                    <p className='text-[0.8rem] md:text-[0.9rem] font-light text-center max-w-2xl'>
                        Real results from startups and enterprises powered by Hyperpara's lightning-fast development
                    </p>
                </div>

                <div className='w-full flex flex-wrap justify-center'>
                    {serviceTestimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className='w-full md:w-[45%] min-h-[12rem] m-[1rem] flex flex-col justify-between space-y-[1rem] md:space-y-[2rem] bg-[#151515] z-10 py-[1rem] pl-[1rem] rounded-xl shadow-sm shadow-white hover:bg-[#1a1a1a] transition-all duration-300'
                        >
                            <div className='w-full flex justify-between items-center'>
                                <div className='w-fit flex items-center space-x-[1rem]'>
                                    <img src={testimonial.image} className='rounded-xl w-[3rem] md:w-[4rem] object-cover' alt='Client'/>
                                    <div className='w-fit flex flex-col items-start space-y-[0.5rem]'>
                                        <span className='text-[0.9rem] font-medium'>{testimonial.name}</span>
                                        <span className='text-[0.7rem] font-light'>{testimonial.position}</span>
                                        <span className='text-[0.7rem] font-medium text-[#504CFF]'>{testimonial.service}</span>
                                    </div>
                                </div>
                                <img src={comma} className='w-[2rem] md:w-[2.5rem] object-contain' alt='Comma'/>
                            </div>
                            <div className='w-full h-full flex justify-start items-center pr-[1rem]'>
                                <p className='text-[0.8rem] md:text-[0.9rem] text-[#dad4e4] text-start leading-relaxed'>{testimonial.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPage;
