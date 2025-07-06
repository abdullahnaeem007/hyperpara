import React from 'react';
import { BsArrowLeft, BsGithub, BsGlobe } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { FaReact, FaNodeJs, FaDatabase, FaStripe } from 'react-icons/fa';
import { SiOpenai, SiRubyonrails, SiSupabase, SiVercel, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import proj1 from '../../assets/Homepage/ProjectSection/proj1.png';

function ProjectDetail() {
  const { projectId } = useParams();

  const projectsData = {
    'fuatra-pos': {
      title: 'FUATRA - POS',
      subtitle: 'Inventory & Sales Management Platform',
      description: 'A robust point-of-sale (POS) and inventory management system tailored for businesses to track sales, manage inventory, and streamline payment processes—especially with M-Pesa integration. Built with a scalable backend, real-time reporting, and a clean, responsive UI to help businesses reduce errors and improve decision-making.',
      role: 'Technical Lead',
      timeline: 'April 2025 - June 2025',
      image: proj1,
      demo: 'https://fuatra-fe.vercel.app/',
      github: 'https://github.com/abdullahnaeem007/Fuatra_POS_System',
      category: 'E-commerce & POS',
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
        'Role-based access control (Admin, Cashier, Manager)',
        'Multi-tenant database architecture',
        'Real-time reporting dashboards',
        'Low-stock alerts and restocking suggestions'
      ],
      challenges: [
        {
          challenge: 'Scalable architecture for multiple businesses',
          solution: 'Multi-tenant database design using Supabase schemas and Rails API structure'
        },
        {
          challenge: 'Creating insightful, user-friendly reporting dashboards',
          solution: 'Leveraged charting libraries and optimized SQL queries to support real-time KPIs'
        },
        {
          challenge: 'Integrating M-Pesa payment system securely',
          solution: 'Implemented secure API integration with proper error handling and transaction reconciliation'
        }
      ],
      outcomes: [
        'Automated inventory and sales tracking with 90%+ accuracy',
        'Cut down manual stock entry time by 60%',
        'Enabled local business to adopt digital payment flows',
        'Empowered business owners with detailed analytics',
        'Improved decision-making through real-time insights',
        'Reduced human errors in inventory management'
      ]
    },
    'resume-analysis-ai': {
      title: 'ResumeAnalysisAI',
      subtitle: 'Optimizing the CV-building Experience – AI Application',
      description: 'A professional, AI-powered resume-building SaaS that delivers keyword-optimized, ATS-friendly CVs tailored for modern tech careers. The platform enhances career success by automating the resume writing process using ChatGPT and modern web technologies.',
      role: 'Full-Stack Developer',
      timeline: 'January 2024 - April 2024',
      image: proj1,
      demo: 'https://resumeanalysis-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/ResumeAnalysis-frontend',
      category: 'AI & SaaS',
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
        'Stripe subscription management',
        'PDF export functionality',
        'Custom resume templates',
        'Real-time content suggestions'
      ],
      challenges: [
        {
          challenge: 'Providing accurate resume keyword analysis and ATS scoring',
          solution: 'Parsed uploaded resumes, extracted sections using regex and NLP, and compared them against job descriptions using OpenAI + keyword libraries'
        },
        {
          challenge: 'Restricting access to premium builder for non-subscribers',
          solution: 'Used Stripe subscription metadata and backend auth middleware to protect routes and features conditionally'
        },
        {
          challenge: 'Ensuring printable and exportable resume templates with rich formatting',
          solution: 'Built export using Puppeteer and custom CSS to ensure consistency across devices and browsers'
        }
      ],
      outcomes: [
        'Users reported an average ATS score improvement of 30–40%',
        '40% conversion rate from free users to subscribers',
        'Successfully integrated sustainable subscription model with secure Stripe billing',
        'Improved user engagement through AI-powered suggestions',
        'Enhanced resume quality and job application success rates'
      ]
    },
    'diverge-hr': {
      title: 'DivergeHR',
      subtitle: 'AI-Powered IT Talent Acquisition',
      description: 'DivergeHR is an AI-driven recruitment platform that automates IT talent acquisition by leveraging NLP and GPT-based intelligence. It parses resumes and job descriptions to conduct tailored, AI-powered interviews. The system evaluates candidate suitability and provides automated scoring to assist hiring managers in making faster, data-driven decisions.',
      role: 'Full-Stack Developer',
      timeline: 'June 2023 - August 2023',
      image: proj1,
      demo: 'https://divergehr-frontend.onrender.com/',
      github: 'https://github.com/abdullahnaeem007/divergehr-frontend',
      category: 'HR & Recruitment',
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
        'Admin dashboard for recruiters',
        'Real-time interview simulations',
        'Automated candidate evaluation',
        'Comprehensive reporting and analytics'
      ],
      challenges: [
        {
          challenge: 'Ensuring relevant and personalized interview questions',
          solution: 'Prompted ChatGPT with structured resume/job description data to dynamically generate domain-specific questions'
        },
        {
          challenge: 'Matching candidates fairly despite diverse resume formats',
          solution: 'Built a robust parser and normalized resume content for consistent processing and scoring'
        },
        {
          challenge: 'Scalable and secure user management',
          solution: 'Used Supabase Auth with row-level security and role-based access in PostgreSQL'
        }
      ],
      outcomes: [
        'Recruiters gained confidence in AI-generated insights',
        'Helped to shortlist candidates more objectively',
        'Laid the foundation for scalable, smart hiring tools in tech recruitment',
        'Improved hiring efficiency and reduced time-to-hire',
        'Enhanced candidate experience through personalized interviews'
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className='w-full min-h-screen bg-[#373643] text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-[2rem] font-semibold mb-[1rem]'>Project Not Found</h1>
          <Link 
            to="/products" 
            className='inline-flex items-center gap-[0.5rem] text-[#18CB96] hover:text-[#15b085] transition-colors'
          >
            <BsArrowLeft size='1rem' />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-[#373643] text-white'>
      <div className='w-full flex flex-col md:px-[5rem] px-[1rem] py-[3rem] space-y-[3rem]'>
        {/* Back Button */}
        <div className='w-full mt-10'>
          <Link 
            to="/products" 
            className='inline-flex items-center gap-[0.5rem] text-[#18CB96] hover:text-[#15b085] transition-colors text-[0.9rem]'
          >
            <BsArrowLeft size='1rem' />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className='w-full flex flex-col lg:flex-row gap-[3rem]'>
          {/* Project Image */}
          <div className='lg:w-[40%]'>
            <div className='w-full h-[300px] lg:h-[400px] overflow-hidden rounded-2xl'>
              <img 
                src={project.image} 
                className='w-full h-full object-cover'
                alt={project.title}
              />
            </div>
          </div>

          {/* Project Info */}
          <div className='lg:w-[60%] space-y-[2rem]'>
            <div>
              <h1 className='text-[2.5rem] md:text-[3rem] font-semibold text-white mb-[0.5rem]'>
                {project.title}
              </h1>
              <p className='text-[1.3rem] text-[#18CB96] font-medium mb-[1rem]'>
                {project.subtitle}
              </p>
              <div className='flex flex-wrap gap-[1rem] text-[0.8rem] mb-[1.5rem]'>
                <span className='bg-[#18CB96] text-black px-[1rem] py-[0.4rem] rounded-full'>
                  {project.role}
                </span>
                <span className='bg-[#2a2935] text-white px-[1rem] py-[0.4rem] rounded-full border border-gray-600'>
                  {project.timeline}
                </span>
                <span className='bg-[#2a2935] text-white px-[1rem] py-[0.4rem] rounded-full border border-gray-600'>
                  {project.category}
                </span>
              </div>
              <p className='text-[1rem] text-gray-300 leading-relaxed'>
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-[1rem]'>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex items-center gap-[0.5rem] bg-[#18CB96] text-black px-[1.5rem] py-[0.8rem] rounded-lg hover:bg-[#15b085] transition-colors font-medium'
              >
                <BsGlobe size='1.2rem' />
                <span>Live Demo</span>
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex items-center gap-[0.5rem] bg-[#2a2935] text-white px-[1.5rem] py-[0.8rem] rounded-lg border border-gray-600 hover:bg-[#373643] transition-colors font-medium'
              >
                <BsGithub size='1.2rem' />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Tech Stack</h2>
          <div className='flex flex-wrap gap-[1rem]'>
            {project.techStack.map((tech, techIndex) => (
              <div key={techIndex} className='flex items-center gap-[0.8rem] bg-[#2a2935] px-[1.5rem] py-[1rem] rounded-xl border border-gray-600 hover:border-[#18CB96] transition-colors'>
                <tech.icon className='text-[#18CB96]' size='1.5rem' />
                <span className='text-[1rem] text-gray-300 font-medium'>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Key Features</h2>
          <div className='grid md:grid-cols-2 gap-[1rem]'>
            {project.features.map((feature, featureIndex) => (
              <div key={featureIndex} className='flex items-start gap-[0.8rem] bg-[#2a2935] p-[1.2rem] rounded-xl border border-gray-600'>
                <span className='text-[#18CB96] mt-[0.2rem] text-xl'>•</span>
                <span className='text-[0.95rem] text-gray-300 leading-relaxed'>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Challenges & Solutions</h2>
          <div className='space-y-[1.5rem]'>
            {project.challenges.map((item, challengeIndex) => (
              <div key={challengeIndex} className='bg-[#2a2935] p-[1.5rem] rounded-xl border border-gray-600'>
                <p className='text-[1rem] font-medium text-white mb-[0.8rem]'>
                  <span className='text-[#18CB96]'>Challenge:</span> {item.challenge}
                </p>
                <p className='text-[0.95rem] text-gray-300 leading-relaxed'>
                  <span className='text-[#18CB96]'>Solution:</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Outcomes & Impact</h2>
          <div className='grid md:grid-cols-2 gap-[1rem]'>
            {project.outcomes.map((outcome, outcomeIndex) => (
              <div key={outcomeIndex} className='flex items-start gap-[0.8rem] bg-[#2a2935] p-[1.2rem] rounded-xl border border-gray-600'>
                <span className='text-[#18CB96] mt-[0.2rem] text-xl'>✓</span>
                <span className='text-[0.95rem] text-gray-300 leading-relaxed'>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail; 