import React, { useState } from 'react';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import client from '../assets/Homepage/Testimonial/client.png';
import comma from '../assets/Homepage/Testimonial/comma.png';

function Testimonials() {

  const [projects] = useState([
    { 
      title: 'Nugraha', 
      position: "Founder of Mangcoding",
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: client
    },
    { 
      title: 'Alex Rider', 
      position: "Founder of Mangcoding",
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: client
    },
    { 
      title: 'Nugraha', 
      position: "Founder of Mangcoding",
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: client
    },
    { 
      title: 'Alex Rider', 
      position: "Founder of Mangcoding",
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: client
    },
    { 
      title: 'Nugraha', 
      position: "Founder of Mangcoding",
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: client
    },
    { 
      title: 'Alex Rider', 
      position: "Founder of Mangcoding",
      desc: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.', 
      image: client
    },
    // Add more projects as needed
  ]);

  return (
    <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[2.5rem] md:text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-black'>
      <img 
        src={Background_pic} 
        className='w-full h-full object-cover absolute transform rotate-180' 
        alt="Background" 
      />
      
      <div className='w-full flex flex-col'>
        <div className='w-full flex border-[#504CFF] border-b-[0.1rem] border-r-[0.2rem] h-[2rem] rounded-full'></div>
        <div className='w-full flex border-[#504CFF] border-t-[0.1rem] border-l-[0.2rem] h-[2rem] rounded-full'></div>
      </div>

      <div className='w-full flex flex-col px-[1.5rem] md:px-[5rem] space-y-[2rem] md:space-y-[3rem]'>
        <div className='w-full flex flex-col'>
          <h2 className='text-center text-[1.8rem] md:text-[2.2rem]'>What they say about us</h2>
          <p className='text-[0.8rem] md:text-[0.9rem] font-light mt-[1rem] text-center'>
            Some of our happy clients with whom we collaborated
          </p>
        </div>

        <div className='w-full h-fit flex flex-wrap justify-center'>
          {projects.map((obj, index) => (
            <button 
              key={index} 
              className='w-full md:w-[30%] min-h-[10rem] m-[1rem] flex flex-col justify-between space-y-[1rem] md:space-y-[2rem] bg-[#151515] z-10 py-[1rem] pl-[1rem] rounded-xl shadow-sm shadow-white'
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
                <p className='text-[0.8rem] md:text-[0.9rem] text-[#dad4e4] text-start'>{obj.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
