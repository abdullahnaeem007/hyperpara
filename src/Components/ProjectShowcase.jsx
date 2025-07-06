import React from 'react'
import { BsArrowUpRightCircle, BsGithub, BsGlobe } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaDatabase, FaStripe } from 'react-icons/fa';
import { SiOpenai, SiRubyonrails, SiSupabase, SiVercel, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import proj1 from '../assets/Homepage/ProjectSection/proj1.png'

function ProjectShowcase() {

  const projects = [
    {
      id: 'fuatra-pos',
      title: 'FUATRA - POS',
      subtitle: 'Inventory & Sales Management Platform',
      description: 'A robust point-of-sale system with M-Pesa integration, real-time inventory tracking, and comprehensive reporting for businesses.',
      image: proj1,
      demo: 'https://fuatra-fe.vercel.app/',
      github: 'https://github.com/abdullahnaeem007/Fuatra_POS_System',
      category: 'E-commerce & POS',
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
      image: proj1,
      demo: 'https://resumeanalysis-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/ResumeAnalysis-frontend',
      category: 'AI & SaaS',
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
      image: proj1,
      demo: 'https://divergehr-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/divergehr-frontend',
      category: 'HR & Recruitment',
      techStack: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Supabase', icon: SiSupabase }
      ]
    }
  ];

  return (
    <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-[#373643]'>
      <div className='w-full flex flex-col md:px-[5rem] px-[1rem] space-y-[3rem] py-[3rem]'>
        {/* Stats Section */}
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='text-center p-6 bg-[#2a2935] rounded-xl border border-[#18CB96]/20 hover:scale-105 transition-transform duration-300'>
            <div className='text-3xl font-bold text-[#18CB96] mb-2'>500+</div>
            <div className='text-sm text-gray-400'>Projects Delivered</div>
          </div>
          <div className='text-center p-6 bg-[#2a2935] rounded-xl border border-[#18CB96]/20 hover:scale-105 transition-transform duration-300'>
            <div className='text-3xl font-bold text-[#18CB96] mb-2'>95%</div>
            <div className='text-sm text-gray-400'>Client Satisfaction</div>
          </div>
          <div className='text-center p-6 bg-[#2a2935] rounded-xl border border-[#18CB96]/20 hover:scale-105 transition-transform duration-300'>
            <div className='text-3xl font-bold text-[#18CB96] mb-2'>24h</div>
            <div className='text-sm text-gray-400'>Average Response Time</div>
          </div>
        </div>

        <div className='w-full flex flex-col'>
          <h2 className='w-full text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center md:text-left items-center text-white'>Our Projects</h2>
          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <p className='text-[0.8rem] md:text-[0.9rem] md:text-left text-center font-light mt-[1rem] md:mt-0 text-gray-300'>
              Showcasing our expertise in full-stack development, AI integration, and scalable solutions
            </p>
            <Link to="/products" className='text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] py-[0.7rem] md:px-[1.2rem] bg-[#18CB96] text-black rounded-full mt-[1rem] md:mt-0 hover:bg-[#15b085] transition-colors'>
              <span>View All Products</span>
              <BsArrowUpRightCircle size='1rem'/>
            </Link>
          </div>
        </div>

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
  )
}

export default ProjectShowcase; 