import React from 'react'
import { BsArrowUpRightCircle, BsGithub, BsGlobe } from 'react-icons/bs';
import { FaReact, FaNodeJs, FaDatabase, FaStripe } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { SiRubyonrails, SiSupabase, SiVercel, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

function Projects() {

  const projects = [
    {
      title: 'FUATRA - POS',
      subtitle: 'Inventory & Sales Management Platform',
      description: 'A robust point-of-sale (POS) and inventory management system tailored for businesses to track sales, manage inventory, and streamline payment processes—especially with M-Pesa integration. Built with a scalable backend, real-time reporting, and a clean, responsive UI to help businesses reduce errors and improve decision-making.',
      role: 'Technical Lead',
      timeline: 'April 2025 - June 2025',
      techStack: [
        { name: 'React + Vite', icon: FaReact },
        { name: 'Ruby on Rails', icon: SiRubyonrails },
        { name: 'Supabase', icon: SiSupabase },
        { name: 'M-Pesa API', icon: FaDatabase }
      ],
      features: [
        'Real-time stock tracking with auto-updates on sales',
        'Fast item lookup and transaction interface',
        'M-Pesa payment integration',
        'Daily/weekly/monthly sales + inventory reports',
        'Role-based access control (Admin, Cashier, Manager)'
      ],
      challenges: [
        {
          challenge: 'Scalable architecture for multiple businesses',
          solution: 'Multi-tenant database design using Supabase schemas and Rails API structure'
        },
        {
          challenge: 'Creating insightful, user-friendly reporting dashboards',
          solution: 'Leveraged charting libraries and optimized SQL queries to support real-time KPIs'
        }
      ],
      outcomes: [
        'Automated inventory and sales tracking with 90%+ accuracy',
        'Cut down manual stock entry time by 60%',
        'Enabled local business to adopt digital payment flows',
        'Empowered business owners with detailed analytics'
      ],
      demo: 'https://fuatra-fe.vercel.app/',
      github: 'https://github.com/abdullahnaeem007/Fuatra_POS_System',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'ResumeAnalysisAI',
      subtitle: 'Optimizing the CV-building Experience – AI Application',
      description: 'A professional, AI-powered resume-building SaaS that delivers keyword-optimized, ATS-friendly CVs tailored for modern tech careers. The platform enhances career success by automating the resume writing process using ChatGPT and modern web technologies.',
      role: 'Full-Stack Developer',
      timeline: 'January 2024 - April 2024',
      techStack: [
        { name: 'React.js', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Stripe', icon: FaStripe },
        { name: 'Tailwind CSS', icon: SiTailwindcss }
      ],
      features: [
        'AI-generated resume content using ChatGPT',
        'Drag-and-drop interface with live preview',
        'Resume analyzer with keyword detection',
        'ATS compatibility scoring',
        'Stripe subscription management'
      ],
      challenges: [
        {
          challenge: 'Providing accurate resume keyword analysis and ATS scoring',
          solution: 'Parsed uploaded resumes, extracted sections using regex and NLP, and compared them against job descriptions using OpenAI + keyword libraries'
        },
        {
          challenge: 'Restricting access to premium builder for non-subscribers',
          solution: 'Used Stripe subscription metadata and backend auth middleware to protect routes and features conditionally'
        }
      ],
      outcomes: [
        'Users reported an average ATS score improvement of 30–40%',
        '40% conversion rate from free users to subscribers',
        'Successfully integrated sustainable subscription model with secure Stripe billing'
      ],
      demo: 'https://resumeanalysis-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/ResumeAnalysis-frontend',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DivergeHR',
      subtitle: 'AI-Powered IT Talent Acquisition',
      description: 'DivergeHR is an AI-driven recruitment platform that automates IT talent acquisition by leveraging NLP and GPT-based intelligence. It parses resumes and job descriptions to conduct tailored, AI-powered interviews. The system evaluates candidate suitability and provides automated scoring to assist hiring managers in making faster, data-driven decisions.',
      role: 'Full-Stack Developer',
      timeline: 'June 2023 - August 2023',
      techStack: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'Supabase', icon: SiSupabase },
        { name: 'Vercel', icon: SiVercel }
      ],
      features: [
        'Resume & job description parsing with NLP',
        'ChatGPT-powered interview bot',
        'Candidate scoring engine',
        'Job matching & ranking system',
        'Admin dashboard for recruiters'
      ],
      challenges: [
        {
          challenge: 'Ensuring relevant and personalized interview questions',
          solution: 'Prompted ChatGPT with structured resume/job description data to dynamically generate domain-specific questions'
        },
        {
          challenge: 'Matching candidates fairly despite diverse resume formats',
          solution: 'Built a robust parser and normalized resume content for consistent processing and scoring'
        }
      ],
      outcomes: [
        'Recruiters gained confidence in AI-generated insights',
        'Helped to shortlist candidates more objectively',
        'Laid the foundation for scalable, smart hiring tools in tech recruitment'
      ],
      demo: 'https://divergehr-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/divergehr-frontend',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className='w-full min-h-screen bg-[#373643] text-white'>
      <div className='w-full flex flex-col md:px-[5rem] px-[1rem] py-[3rem] space-y-[3rem]'>
        {/* Header */}
        <div className='w-full flex flex-col'>
          <h2 className='w-full text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center md:text-left items-center font-light'>
            Featured Projects
          </h2>
          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <p className='text-[0.9rem] md:text-[1rem] md:text-left text-center font-light mt-[1rem] md:mt-0 text-gray-300'>
              Showcasing our expertise in full-stack development, AI integration, and scalable solutions
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='w-full space-y-[4rem]'>
          {projects.map((project, index) => (
            <div key={index} className='w-full bg-[#2a2935] rounded-2xl p-[2rem] md:p-[3rem] shadow-xl'>
              {/* Project Header */}
              <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-[2rem]'>
                <div className='flex-1'>
                  <h3 className='text-[1.8rem] md:text-[2.2rem] font-semibold text-white mb-[0.5rem]'>
                    {project.title}
                  </h3>
                  <p className='text-[1.1rem] text-[#18CB96] font-medium mb-[1rem]'>
                    {project.subtitle}
                  </p>
                  <div className='flex flex-wrap gap-[1rem] text-[0.8rem]'>
                    <span className='bg-[#18CB96] text-black px-[0.8rem] py-[0.3rem] rounded-full'>
                      {project.role}
                    </span>
                    <span className='bg-[#373643] text-white px-[0.8rem] py-[0.3rem] rounded-full border border-gray-600'>
                      {project.timeline}
                    </span>
                  </div>
                </div>
                <div className='flex gap-[1rem] mt-[1rem] md:mt-0'>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-[0.5rem] bg-[#18CB96] text-black px-[1rem] py-[0.5rem] rounded-lg hover:bg-[#15b085] transition-colors'
                  >
                    <BsGlobe size='1rem' />
                    <span className='text-[0.9rem] font-medium'>Demo</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center gap-[0.5rem] bg-[#373643] text-white px-[1rem] py-[0.5rem] rounded-lg border border-gray-600 hover:bg-[#2a2935] transition-colors'
                  >
                    <BsGithub size='1rem' />
                    <span className='text-[0.9rem] font-medium'>Code</span>
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className='text-[1rem] text-gray-300 leading-relaxed mb-[2rem]'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='mb-[2rem]'>
                <h4 className='text-[1.2rem] font-semibold text-white mb-[1rem]'>Tech Stack</h4>
                <div className='flex flex-wrap gap-[1rem]'>
                  {project.techStack.map((tech, techIndex) => (
                    <div key={techIndex} className='flex items-center gap-[0.5rem] bg-[#373643] px-[1rem] py-[0.5rem] rounded-lg border border-gray-600'>
                      <tech.icon className='text-[#18CB96]' size='1.2rem' />
                      <span className='text-[0.9rem] text-gray-300'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className='mb-[2rem]'>
                <h4 className='text-[1.2rem] font-semibold text-white mb-[1rem]'>Key Features</h4>
                <ul className='grid md:grid-cols-2 gap-[0.5rem]'>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-start gap-[0.5rem] text-[0.9rem] text-gray-300'>
                      <span className='text-[#18CB96] mt-[0.2rem]'>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className='mb-[2rem]'>
                <h4 className='text-[1.2rem] font-semibold text-white mb-[1rem]'>Challenges & Solutions</h4>
                <div className='space-y-[1rem]'>
                  {project.challenges.map((item, challengeIndex) => (
                    <div key={challengeIndex} className='bg-[#373643] p-[1rem] rounded-lg border border-gray-600'>
                      <p className='text-[0.9rem] font-medium text-white mb-[0.5rem]'>
                        <span className='text-[#18CB96]'>Challenge:</span> {item.challenge}
                      </p>
                      <p className='text-[0.9rem] text-gray-300'>
                        <span className='text-[#18CB96]'>Solution:</span> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className='text-[1.2rem] font-semibold text-white mb-[1rem]'>Outcomes & Impact</h4>
                <ul className='space-y-[0.5rem]'>
                  {project.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className='flex items-start gap-[0.5rem] text-[0.9rem] text-gray-300'>
                      <span className='text-[#18CB96] mt-[0.2rem]'>✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
            </div>
        </div>
    </div>
  )
}

export default Projects;
