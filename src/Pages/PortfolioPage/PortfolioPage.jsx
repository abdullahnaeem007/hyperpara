import React, { useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';
import proj1 from '../../assets/Homepage/ProjectSection/proj1.png';
import { Link } from 'react-router-dom';  // Import Link for navigation
import divergehr from "../../assets/portfolio/3.png"
import resumeanalysisai from "../../assets/portfolio/5.png"
import threejs from "../../assets/portfolio/6.png"
import futurai from "../../assets/portfolio/7.png"
import postbud from "../../assets/portfolio/8.png"
import truthlook from "../../assets/portfolio/9.png"


function PortfolioPage() {
  const [projects] = useState([
    { 
      title: 'DivergeHR', 
      desc: 'Streamlines the hiring process by extracting data and training the chatbot on candidate resumes and job descriptions. Using OpenAI, the chatbot conducts AI-driven interviews and evaluates each candidate’s score. The tech stack uses React, Node, Supabase', 
      image: divergehr, 
      shortDesc: 'AI-driven hiring and interview chatbot', 
      url: 'https://divergehr-frontend.onrender.com/'  // URL for the project
    },
    { 
      title: 'ThreeJS Portfolio', 
      desc: 'Explore my portfolio in an immersive 3D experience, built with Three.js. This interactive showcase brings my projects to life, blending creativity with technical skill. Navigate through dynamic visuals and engaging elements that highlight my work, all crafted to make a lasting impression.', 
      image: threejs,
      shortDesc: '3D interactive portfolio using Three.js',
      url: 'https://abdullahnaeem.pages.dev/'  // URL for the project
    },
    { 
      title: 'ResumeAnalysis AI', 
      desc: 'Professional resume service specializing in Node.js, React.js, Stripe, ChatGPT, AI Saas, and web development, ensuring a standout, keyword-optimized resume for increased interview opportunities and career success.',
      image: resumeanalysisai, 
      shortDesc: 'AI-powered resume optimization tool',
      url: 'https://resumeanalysis-frontend.onrender.com/'  // URL for the project
    },
    { 
      title: 'Truthlook', 
      desc: 'Our Unbiased Search Engine is a powerful tool designed to provide fair, non-partisan access to web content. By leveraging advanced algorithms, it scans billions of web pages to deliver relevant search results, untainted by personalized biases.',
      image: truthlook, 
      shortDesc: 'Unbiased search engine with advanced algorithms',
      url: 'https://truthlook.com/'  // URL for the project
    },
    { 
      title: 'FuturAI', 
      desc: 'Step into a realm where imagination meets technology. FuturAI empowers you to explore the limitless possibilities of AI, from generating stunning visuals to answering your burning questions. Embrace the future of innovation and unlock your full potential.',
      image: futurai, 
      shortDesc: 'AI platform for creativity and exploration',
      url: 'https://74b3210e.futurai-dks.pages.dev/'  // URL for the project
    },
    { 
      title: 'Postbud AI', 
      desc: 'PostBud is your own digital writing assistant and virtual marketer. Take your job’s details and transform them into engaging social media posts. PostBud also creates any advertising copy you need as well as product and service descriptions.',
      image: postbud, 
      shortDesc: 'AI-driven content generation for social media',
      url: 'https://postbud.ai/'  // URL for the project
    }
  ]);

  const openInNewTab = (url) => {
    // Use window.open to open a new tab with the project URL
    window.open(url, '_blank');
  };

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
              Help you to build a modern, user-friendly, and clean website with great design.
            </p>
          </div>
        </div>

        <div className='w-full h-fit flex flex-wrap justify-center'>
          {projects.map((obj, index) => (
            <div 
              key={index} 
              className='w-full md:w-[45%] lg:w-[45%] min-h-[20rem] m-[1rem] flex flex-col space-y-[1rem] p-4 bg-[#1A1A1A] rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl'>
               <img 
                src={obj.image} 
                className='rounded-xl w-full h-[15rem] object-cover object-top mb-4'  // The key part is `object-cover object-top`
                alt={obj.title}
              />
              <span className='text-[1.5rem] text-white text-start'>{obj.title}</span>
              <p className='text-[1rem] text-[#dad4e4] text-start'>{obj.shortDesc}</p>
              <span className='text-[0.8rem] text-[#dad4e4] text-start'>{obj.desc}</span>
              <div className='w-full h-[0.1rem] bg-[#504CFF] my-4'></div>
              <button 
                onClick={() => openInNewTab(obj.url)} 
                className='text-[#504CFF] text-[0.9rem] hover:text-[#7A74FF] flex items-center space-x-2'>
                <span>View Project</span>
                <BsArrowUpRightCircle size='1rem'/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
