import React, { useState } from 'react';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import client from '../assets/Homepage/Testimonial/client.png';
import comma from '../assets/Homepage/Testimonial/comma.png';

function Testimonials() {

  const [projects] = useState([
    { 
      title: 'Sarah Chen', 
      position: "CEO, TechFlow Solutions",
      desc: 'Hyperpara delivered our SaaS platform in just 6 weeks - lightning-fast development that exceeded our expectations. Their AI chatbot integration reduced our customer support workload by 70% and improved response times from hours to seconds.', 
      image: client
    },
    { 
      title: 'Marcus Rodriguez', 
      position: "CTO, InnovateCorp",
      desc: 'Hyperpara built our entire platform engineering infrastructure from scratch. Their workflow automation solutions saved us 40 hours per week in manual processes. The team moved at hyperspeed while maintaining exceptional code quality.', 
      image: client
    },
    { 
      title: 'Dr. Emily Watson', 
      position: "Founder, HealthTech Pro",
      desc: 'Hyperpara created an intelligent AI-driven solution for patient data management that solved real-world healthcare problems. Their custom AI chatbot handles 80% of patient inquiries automatically, allowing our staff to focus on critical care.', 
      image: client
    },
    { 
      title: 'David Kim', 
      position: "Marketing Director, GrowthFirst",
      desc: 'The SaaS product Hyperpara developed for us revolutionized our marketing operations. Their workflow automation eliminated 90% of our manual tasks. We went from concept to launch in record time - truly lightning-fast development.', 
      image: client
    },
    { 
      title: 'Lisa Thompson', 
      position: "Operations Manager, RetailPlus",
      desc: 'Hyperpara\'s platform engineering expertise transformed our entire retail operation. Their AI-driven solutions automated our inventory management and customer service workflows. What used to take our team 20 hours per week now happens automatically.', 
      image: client
    },
    { 
      title: 'James Wilson', 
      position: "Startup Founder, FinTech Ventures",
      desc: 'As a startup, we needed elite development and AI expertise to compete with established players. Hyperpara delivered a powerful SaaS platform with intelligent AI chatbots in just 8 weeks. Their hyperspeed approach helped us secure Series A funding.', 
      image: client
    },
    { 
      title: 'Amanda Foster', 
      position: "VP of Technology, EduTech Solutions",
      desc: 'Hyperpara built an AI-driven learning platform that personalized education for 50,000+ students. Their workflow automation streamlined our content delivery process. The platform engineering was so robust that we scaled from 1,000 to 50,000 users seamlessly.', 
      image: client
    },
    { 
      title: 'Robert Chang', 
      position: "Product Manager, SmartHome Inc",
      desc: 'Hyperpara\'s lightning-fast software development delivered our IoT platform ahead of schedule. Their AI chatbots handle customer support 24/7, and the workflow automation reduced our operational costs by 60%. Elite development at hyperspeed!', 
      image: client
    },
    { 
      title: 'Jennifer Martinez', 
      position: "CEO, GreenTech Innovations",
      desc: 'Hyperpara created intelligent AI-driven solutions for renewable energy optimization. Their platform engineering expertise built a system that processes real-time data from thousands of sensors. The workflow automation reduced manual monitoring by 85%.', 
      image: client
    }
  ]);

  return (
    <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[2.5rem] md:text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-brand-bg'>
      <img 
        src={Background_pic} 
        className='w-full h-full object-cover absolute transform rotate-180' 
        alt="Background" 
      />
      
      <div className='w-full flex flex-col'>
        <div className='w-full flex border-brand-accent border-b-[0.1rem] border-r-[0.2rem] h-[2rem] rounded-full'></div>
        <div className='w-full flex border-brand-accent border-t-[0.1rem] border-l-[0.2rem] h-[2rem] rounded-full'></div>
      </div>

      <div className='w-full flex flex-col px-[1.5rem] md:px-[5rem] space-y-[2rem] md:space-y-[3rem]'>
        <div className='w-full flex flex-col'>
          <h2 className='text-center text-[1.8rem] md:text-[2.2rem]'>What our clients say about us</h2>
          <p className='text-[0.8rem] md:text-[0.9rem] font-light mt-[1rem] text-center'>
            Real results from startups and enterprises powered by Hyperpara's lightning-fast development
          </p>
        </div>

        <div className='w-full h-fit flex flex-wrap justify-center'>
          {projects.map((obj, index) => (
            <button 
              key={index} 
              className='w-full md:w-[30%] min-h-[12rem] m-[1rem] flex flex-col justify-between space-y-[1rem] md:space-y-[2rem] bg-card-bg z-10 py-[1rem] pl-[1rem] rounded-xl shadow-sm shadow-white hover:bg-card-hover transition-all duration-300'
            >
              <div className='w-full flex justify-between items-center'>
                <div className='w-fit flex items-center space-x-[1rem]'>
                  <img src={obj.image} className='rounded-xl w-[3rem] md:w-[4rem] object-cover' alt='Client'/>
                  <div className='w-fit flex flex-col items-start space-y-[0.5rem]'>
                    <span className='text-[0.9rem] font-medium'>{obj.title}</span>
                    <span className='text-[0.7rem] font-light'>{obj.position}</span>
                  </div>
                </div>
                <img src={comma} className='w-[2rem] md:w-[2.5rem] object-contain' alt='Comma'/>
              </div>
              <div className='w-full h-full flex justify-start items-center pr-[1rem]'>
                <p className='text-[0.8rem] md:text-[0.9rem] text-[#dad4e4] text-start leading-relaxed'>{obj.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
