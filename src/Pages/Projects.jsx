import React, { useState } from 'react'
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import proj1 from '../assets/Homepage/ProjectSection/proj1.png'

function Projects() {

  const [projects] = useState([
    { 
      title: 'MStore', 
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: proj1
    },
    { 
      title: 'MStore', 
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: proj1
    },
    { 
      title: 'MStore', 
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: proj1
    },
    { 
      title: 'MStore', 
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: proj1
    }
  ]);

  return (
    <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-black'>
        <img 
          src={Background_pic} 
          className='w-full h-full object-cover absolute transform rotate-180' 
          alt="Background" 
        />
        <div className='w-full flex flex-col md:px-[5rem] px-[1rem] space-y-[3rem]'>
        <div className='w-full flex flex-col'>
          <h2 className='w-full text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center md:text-left items-center'>Our Product</h2>
          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <p className='text-[0.8rem] md:text-[0.9rem] md:text-left text-center font-light mt-[1rem] md:mt-0'>
              help you to build a website company that is modern, user-friendly,<br/> 
              good CEO, and Clean design
            </p>
            <button className='text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] py-[0.7rem] md:px-[1.2rem] bg-white text-black rounded-full mt-[1rem] md:mt-0'>
              <span>All Portfolio</span>
              <BsArrowUpRightCircle size='1rem'/>
            </button>
          </div>
        </div>

            <div className='w-full h-fit flex flex-wrap justify-center'>
              {
                projects.map((obj, index) => (
                  <button 
                    key={index} 
                    className='w-full md:w-[45%] lg:w-[45%] min-h-[10rem] m-[1rem] flex flex-col space-y-[1rem]'
                  >
                    <img src={obj.image} className='rounded-xl w-full h-[10rem] object-cover'/>
                    <span className='text-[1.5rem] text-white text-start'>{obj.title}</span>
                    <span className='text-[0.8rem] text-[#dad4e4] text-start'>{obj.desc}</span>
                    <div className='w-full h-[0.1rem] bg-[#504CFF]'></div>
                  </button>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Projects;
