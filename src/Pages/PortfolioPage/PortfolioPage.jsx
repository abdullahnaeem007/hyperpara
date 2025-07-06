import React from 'react';
import { BsArrowUpRightCircle, BsGithub, BsGlobe } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaDatabase, FaStripe } from 'react-icons/fa';
import { SiOpenai, SiRubyonrails, SiSupabase, SiVercel, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

function PortfolioPage() {

  const projects = [
    {
      id: 'fuatra-pos',
      title: 'FUATRA - POS',
      subtitle: 'Inventory & Sales Management Platform',
      description: 'A robust point-of-sale system with M-Pesa integration, real-time inventory tracking, and comprehensive reporting for businesses.',
      image: '/pos.png',
      demo: 'https://fuatra-fe.vercel.app/',
      github: 'https://github.com/abdullahnaeem007/Fuatra_POS_System',
      category: 'E-commerce & POS',
      role: 'Technical Lead',
      timeline: 'April 2025 - June 2025',
      techStack: [
        { name: 'React + Vite', icon: FaReact },
        { name: 'Ruby on Rails', icon: SiRubyonrails },
        { name: 'Supabase', icon: SiSupabase },
        { name: 'M-Pesa API', icon: FaDatabase }
      ]
    },
    {
      id: 'resume-analysis-ai',
      title: 'ResumeAnalysisAI',
      subtitle: 'AI-Powered Resume Builder',
      description: 'Professional resume-building SaaS with AI-generated content, ATS scoring, and keyword optimization for modern careers.',
      image: '/resume.png',
      demo: 'https://resumeanalysis-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/ResumeAnalysis-frontend',
      category: 'AI & SaaS',
      role: 'Full-Stack Developer',
      timeline: 'January 2024 - April 2024',
      techStack: [
        { name: 'React.js', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Stripe', icon: FaStripe }
      ]
    },
    {
      id: 'diverge-hr',
      title: 'DivergeHR',
      subtitle: 'AI-Powered IT Talent Acquisition',
      description: 'AI-driven recruitment platform with resume parsing, automated interviews, and candidate scoring for tech hiring.',
      image: '/hr.png',
      demo: 'https://divergehr-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/divergehr-frontend',
      category: 'HR & Recruitment',
      role: 'Full-Stack Developer',
      timeline: 'June 2023 - August 2023',
      techStack: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Supabase', icon: SiSupabase }
      ]
    }
  ];

  return (
    <div className='w-full min-h-screen bg-[#373643] text-white'>
      <div className='w-full flex flex-col md:px-[5rem] px-[1rem] py-[3rem] space-y-[3rem]'>
        {/* Header */}
        <div className='w-full flex flex-col'>
          <h2 className='w-full text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center md:text-left items-center font-light'>
            Products
          </h2>
          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <p className='text-[0.9rem] md:text-[1rem] md:text-left text-center font-light mt-[1rem] md:mt-0 text-gray-300'>
              Detailed showcase of our expertise in full-stack development, AI integration, and scalable solutions
            </p>
          </div>
        </div>



        {/* Projects Grid */}
        <div className='w-full h-fit flex flex-wrap justify-center gap-[2rem]'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className='w-full md:w-[30%] lg:w-[30%] bg-[#2a2935] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group'
            >
              {/* Project Image Header */}
              <div className='w-full h-[180px] overflow-hidden rounded-t-xl'>
                <img 
                  src={project.image} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  alt={project.title}
                />
              </div>

              {/* Project Content */}
              <div className='p-[1.5rem] space-y-[1rem]'>
                {/* Title and Category */}
                <div className='flex items-center justify-between'>
                  <h3 className='text-[1.3rem] text-white font-semibold'>{project.title}</h3>
                  <span className='text-[0.6rem] bg-[#18CB96] text-black px-[0.5rem] py-[0.2rem] rounded-full font-medium'>
                    {project.category}
                  </span>
                </div>

                {/* Subtitle */}
                <p className='text-[#18CB96] text-[0.8rem] font-medium'>{project.subtitle}</p>

                {/* Role and Timeline */}
                <div className='flex flex-wrap gap-[0.5rem] text-[0.7rem]'>
                  <span className='bg-[#373643] text-white px-[0.6rem] py-[0.2rem] rounded-full border border-gray-600'>
                    {project.role}
                  </span>
                  <span className='bg-[#373643] text-white px-[0.6rem] py-[0.2rem] rounded-full border border-gray-600'>
                    {project.timeline}
                  </span>
                </div>

                {/* Description */}
                <p className='text-[0.75rem] text-gray-300 leading-relaxed line-clamp-3'>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-[0.5rem]'>
                  {project.techStack.slice(0, 2).map((tech, techIndex) => (
                    <div key={techIndex} className='flex items-center gap-[0.3rem] bg-[#373643] px-[0.6rem] py-[0.3rem] rounded-lg border border-gray-600'>
                      <tech.icon className='text-[#18CB96]' size='0.8rem' />
                      <span className='text-[0.6rem] text-gray-300'>{tech.name}</span>
                    </div>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className='text-[0.6rem] text-gray-400 px-[0.6rem] py-[0.3rem]'>+{project.techStack.length - 2} more</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className='flex gap-[0.5rem] pt-[0.5rem]'>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex-1 flex items-center justify-center gap-[0.3rem] bg-[#18CB96] text-black px-[0.8rem] py-[0.4rem] rounded-lg hover:bg-[#15b085] transition-colors text-[0.7rem] font-medium'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BsGlobe size='0.8rem' />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex-1 flex items-center justify-center gap-[0.3rem] bg-[#373643] text-white px-[0.8rem] py-[0.4rem] rounded-lg border border-gray-600 hover:bg-[#2a2935] transition-colors text-[0.7rem] font-medium'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BsGithub size='0.8rem' />
                    <span>Code</span>
                  </a>
                </div>

                {/* View Details Button */}
                <Link 
                  to={`/project/${project.id}`}
                  className='w-full flex items-center justify-center gap-[0.3rem] bg-transparent text-[#18CB96] px-[0.8rem] py-[0.4rem] rounded-lg border border-[#18CB96] hover:bg-[#18CB96] hover:text-black transition-colors text-[0.7rem] font-medium'
                >
                  <span>View Details</span>
                  <BsArrowUpRightCircle size='0.8rem' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
