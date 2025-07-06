import React, { useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';
import proj1 from '../../assets/Homepage/ProjectSection/proj1.png'

function PortfolioPage() {
    const [projects] = useState([
        { 
          title: 'MStore', 
          desc: 'Hyperpara delivered a lightning-fast e-commerce platform with AI-powered inventory management. The SaaS solution increased sales by 40% and improved customer satisfaction significantly.', 
          image: proj1 
        },
        { 
          title: 'WebCraft', 
          desc: 'A comprehensive web development platform built with modern technologies. Features include responsive design, SEO optimization, and integrated analytics dashboard.', 
          image: proj1 
        },
        { 
          title: 'AI Tools', 
          desc: 'Intelligent AI-powered tools that automate business processes and enhance efficiency. Built with cutting-edge machine learning algorithms and real-time data processing.', 
          image: proj1 
        },
        { 
          title: 'AppSuite', 
          desc: 'A feature-rich mobile and web application designed for modern businesses. Includes workflow automation, team collaboration tools, and advanced reporting features.', 
          image: proj1 
        }
      ]);

    return (
      <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-brand-bg'>
        <img 
          src={Background_pic} 
          className='w-full h-full object-cover absolute transform rotate-180 opacity-20' 
          alt="Background" 
        />
        <div className='w-full flex flex-col md:px-[5rem] px-[1rem] space-y-[3rem] py-[4rem] z-10'>
          {/* Stats Section */}
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <div className='text-center p-6 bg-card-bg rounded-xl border border-brand-accent/20 hover:scale-105 transition-transform duration-300'>
              <div className='text-3xl font-bold text-brand-accent mb-2'>500+</div>
              <div className='text-sm text-gray-400'>Projects Delivered</div>
            </div>
            <div className='text-center p-6 bg-card-bg rounded-xl border border-brand-accent/20 hover:scale-105 transition-transform duration-300'>
              <div className='text-3xl font-bold text-brand-accent mb-2'>95%</div>
              <div className='text-sm text-gray-400'>Client Satisfaction</div>
            </div>
            <div className='text-center p-6 bg-card-bg rounded-xl border border-brand-accent/20 hover:scale-105 transition-transform duration-300'>
              <div className='text-3xl font-bold text-brand-accent mb-2'>24h</div>
              <div className='text-sm text-gray-400'>Average Response Time</div>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <p className='text-[0.8rem] md:text-[0.9rem] md:text-left text-center font-light'>
              help you to build a website company that is modern, user-friendly,<br/> 
              good SEO, and Clean design
            </p>
            <Link 
              to="/portfolio"
              className='text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] py-[0.7rem] md:px-[1.2rem] bg-brand-accent text-brand-bg rounded-full mt-[1rem] md:mt-0 hover:bg-opacity-90 transition-colors duration-300'
            >
              <span>All Portfolio</span>
              <BsArrowUpRightCircle size='1rem'/>
            </Link>
          </div>

          <div className='w-full h-fit flex flex-wrap justify-center'>
            {
              projects.map((obj, index) => (
                <button 
                  key={index} 
                  className='w-full md:w-[45%] lg:w-[45%] min-h-[10rem] m-[1rem] flex flex-col space-y-[1rem] hover:scale-105 transition-transform duration-300'
                >
                  <img src={obj.image} className='rounded-xl w-full h-[10rem] object-cover' alt={obj.title}/>
                  <span className='text-[1.5rem] text-white text-start'>{obj.title}</span>
                  <span className='text-[0.8rem] text-[#dad4e4] text-start'>{obj.desc}</span>
                  <div className='w-full h-[0.1rem] bg-brand-accent'></div>
                </button>
              ))
            }
          </div>
        </div>
    </div>
    );
}

export default PortfolioPage;
