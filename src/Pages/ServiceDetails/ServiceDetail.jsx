import React, { useEffect } from 'react';
import { BsArrowLeft, BsArrowUpRightCircle } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { CgWebsite } from "react-icons/cg";
import { RiRobot2Line } from "react-icons/ri";
import { GrCloudSoftware } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import { SiMaterialdesignicons, SiMinds } from "react-icons/si";
import { IoBusinessSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import web_dev_skill from '../../assets/Homepage/SecondSection/web_dev_skill.png';
import ai_skill from '../../assets/Homepage/SecondSection/ai_skill.png';
import app_skill from '../../assets/Homepage/SecondSection/app_skill.png';
import software_skill from '../../assets/Homepage/SecondSection/software_skill.png';
import ai_solution_skill from '../../assets/Homepage/SecondSection/ai_solution_skill.png';
import business_skill from '../../assets/Homepage/SecondSection/business_skill.png';

function ServiceDetail() {
  const { serviceId } = useParams();

  const servicesData = {
    'ai-solutions': {
      title: 'AI Solutions',
      subtitle: 'Intelligent Automation & Machine Learning',
      description: 'We create cutting-edge AI-driven solutions that automate complex business processes, enhance decision-making, and unlock new opportunities for growth. Our AI solutions leverage machine learning, natural language processing, and predictive analytics to transform your business operations.',
      image: ai_solution_skill,
      icon: BsArrowUpRightCircle,
      category: 'Artificial Intelligence',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing (NLP)',
        'Predictive Analytics & Forecasting',
        'Computer Vision Solutions',
        'AI-Powered Chatbots & Virtual Assistants',
        'Data Mining & Pattern Recognition',
        'Automated Decision Support Systems',
        'AI Integration with Existing Systems'
      ],
      technologies: [
        'Python & TensorFlow',
        'OpenAI GPT & Claude',
        'Scikit-learn & Pandas',
        'Computer Vision (OpenCV)',
        'Natural Language Processing',
        'Cloud AI Services (AWS, Azure)',
        'Real-time Data Processing',
        'API Integration & Deployment'
      ],
      benefits: [
        'Automated business processes reducing manual work by 70%',
        'Improved decision-making with data-driven insights',
        'Enhanced customer experience through intelligent interactions',
        'Cost reduction through process optimization',
        'Scalable solutions that grow with your business',
        'Competitive advantage through AI innovation'
      ],
      process: [
        {
          step: 'Discovery & Analysis',
          description: 'Understanding your business needs and identifying AI opportunities'
        },
        {
          step: 'Data Assessment',
          description: 'Evaluating data quality and preparing for AI model development'
        },
        {
          step: 'Model Development',
          description: 'Building and training custom AI models for your specific use case'
        },
        {
          step: 'Integration & Testing',
          description: 'Seamlessly integrating AI solutions with your existing systems'
        },
        {
          step: 'Deployment & Monitoring',
          description: 'Launching the solution and continuous performance monitoring'
        }
      ]
    },
    'web-development': {
      title: 'Web Development',
      subtitle: 'Full-Stack Web Solutions',
      description: 'We build modern, scalable web applications that deliver exceptional user experiences. From responsive frontends to robust backends, our web development services cover the entire spectrum of web technologies to create powerful digital solutions.',
      image: web_dev_skill,
      icon: CgWebsite,
      category: 'Web Development',
      features: [
        'Responsive Web Design',
        'Frontend Development (React, Vue, Angular)',
        'Backend Development (Node.js, Python, PHP)',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization'
      ],
      technologies: [
        'React.js & Next.js',
        'Vue.js & Angular',
        'Node.js & Express',
        'Python (Django, Flask)',
        'PHP & Laravel',
        'Database Design (SQL, NoSQL)',
        'Cloud Deployment (AWS, Vercel)',
        'SEO & Performance Optimization'
      ],
      benefits: [
        'Modern, responsive designs that work on all devices',
        'Fast-loading websites with optimized performance',
        'Scalable architecture for business growth',
        'SEO-friendly development for better visibility',
        'Secure and maintainable codebase',
        'Ongoing support and maintenance'
      ],
      process: [
        {
          step: 'Requirements Gathering',
          description: 'Understanding your business goals and technical requirements'
        },
        {
          step: 'Design & Prototyping',
          description: 'Creating wireframes and visual designs for approval'
        },
        {
          step: 'Development',
          description: 'Building the website with modern technologies and best practices'
        },
        {
          step: 'Testing & Quality Assurance',
          description: 'Thorough testing across devices and browsers'
        },
        {
          step: 'Deployment & Launch',
          description: 'Going live with monitoring and support setup'
        }
      ]
    },
    'chatbot-development': {
      title: 'Chatbot Development',
      subtitle: 'Intelligent Conversational AI',
      description: 'We design and develop intelligent chatbots that enhance customer engagement, streamline support operations, and provide 24/7 assistance. Our chatbots leverage advanced NLP and AI to deliver human-like conversations and solve complex queries.',
      image: ai_skill,
      icon: RiRobot2Line,
      category: 'Conversational AI',
      features: [
        'Natural Language Processing',
        'Multi-platform Integration',
        'Custom Training & Learning',
        'Voice & Text Capabilities',
        'Analytics & Reporting',
        'Seamless Human Handoff',
        'Multi-language Support',
        'Integration with Business Systems'
      ],
      technologies: [
        'OpenAI GPT & Claude',
        'Dialogflow & Botpress',
        'Natural Language Processing',
        'Machine Learning Models',
        'API Integration',
        'Voice Recognition',
        'Sentiment Analysis',
        'Multi-platform SDKs'
      ],
      benefits: [
        '24/7 customer support availability',
        'Reduced response times by 90%',
        'Cost savings on customer service',
        'Improved customer satisfaction',
        'Scalable support operations',
        'Data-driven insights from conversations'
      ],
      process: [
        {
          step: 'Use Case Analysis',
          description: 'Identifying chatbot applications and conversation flows'
        },
        {
          step: 'Design & Training',
          description: 'Creating conversation designs and training the AI model'
        },
        {
          step: 'Development & Integration',
          description: 'Building the chatbot and integrating with platforms'
        },
        {
          step: 'Testing & Optimization',
          description: 'Testing conversations and optimizing responses'
        },
        {
          step: 'Deployment & Monitoring',
          description: 'Launching and monitoring performance metrics'
        }
      ]
    },
    'app-development': {
      title: 'App Development',
      subtitle: 'Mobile & Web Applications',
      description: 'We develop user-centric mobile and web applications that deliver seamless experiences across all platforms. From native mobile apps to cross-platform solutions, we create applications that users love and businesses rely on.',
      image: app_skill,
      icon: MdAppSettingsAlt,
      category: 'Application Development',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Development (React Native, Flutter)',
        'Progressive Web Apps (PWA)',
        'Hybrid App Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Real-time Synchronization'
      ],
      technologies: [
        'React Native & Flutter',
        'Swift & Kotlin',
        'JavaScript & TypeScript',
        'Firebase & AWS',
        'REST APIs & GraphQL',
        'Push Notifications',
        'App Store Deployment',
        'Performance Optimization'
      ],
      benefits: [
        'Native performance with cross-platform efficiency',
        'Reduced development time and costs',
        'Consistent user experience across platforms',
        'Easy maintenance and updates',
        'App store optimization for visibility',
        'Scalable architecture for growth'
      ],
      process: [
        {
          step: 'Concept & Planning',
          description: 'Defining app features, target audience, and technical approach'
        },
        {
          step: 'Design & Prototyping',
          description: 'Creating UI/UX designs and interactive prototypes'
        },
        {
          step: 'Development',
          description: 'Building the app with modern frameworks and best practices'
        },
        {
          step: 'Testing & Quality Assurance',
          description: 'Comprehensive testing across devices and platforms'
        },
        {
          step: 'Deployment & Launch',
          description: 'App store submission and launch strategy'
        }
      ]
    },
    'business-automation': {
      title: 'Business Automation',
      subtitle: 'Process Optimization & Efficiency',
      description: 'We automate business processes to enhance efficiency, reduce costs, and eliminate manual errors. Our automation solutions streamline workflows, improve productivity, and free up valuable resources for strategic initiatives.',
      image: business_skill,
      icon: IoBusinessSharp,
      category: 'Business Process Automation',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Email & Communication Automation',
        'Data Entry & Validation',
        'Report Generation',
        'Integration with Business Tools',
        'Custom Automation Scripts',
        'Process Monitoring & Analytics'
      ],
      technologies: [
        'RPA (Robotic Process Automation)',
        'Python & Automation Scripts',
        'Zapier & Integromat',
        'API Integration',
        'Database Automation',
        'Cloud Automation Services',
        'Workflow Management Tools',
        'Business Intelligence Integration'
      ],
      benefits: [
        'Reduced manual work by 60-80%',
        'Improved accuracy and consistency',
        'Faster process execution',
        'Cost savings on operational expenses',
        'Better resource allocation',
        'Enhanced compliance and audit trails'
      ],
      process: [
        {
          step: 'Process Analysis',
          description: 'Identifying automation opportunities and mapping current workflows'
        },
        {
          step: 'Solution Design',
          description: 'Designing automated workflows and integration points'
        },
        {
          step: 'Development & Testing',
          description: 'Building automation scripts and testing functionality'
        },
        {
          step: 'Integration & Deployment',
          description: 'Integrating with existing systems and deploying automation'
        },
        {
          step: 'Monitoring & Optimization',
          description: 'Continuous monitoring and process optimization'
        }
      ]
    },
    'custom-software': {
      title: 'Custom Software Development',
      subtitle: 'Tailored Solutions for Your Business',
      description: 'We deliver custom software solutions designed specifically for your unique business needs. From enterprise applications to specialized tools, we create software that perfectly fits your workflow and drives business growth.',
      image: software_skill,
      icon: GrCloudSoftware,
      category: 'Custom Development',
      features: [
        'Enterprise Software Development',
        'SaaS Application Development',
        'Database Design & Management',
        'API Development & Integration',
        'Cloud-based Solutions',
        'Legacy System Modernization',
        'Custom Dashboard Development',
        'Third-party Integrations'
      ],
      technologies: [
        'Full-stack Development',
        'Cloud Platforms (AWS, Azure, GCP)',
        'Database Systems (SQL, NoSQL)',
        'Microservices Architecture',
        'Containerization (Docker, Kubernetes)',
        'CI/CD Pipelines',
        'Security & Authentication',
        'Scalable Architecture Design'
      ],
      benefits: [
        'Solutions tailored to your specific needs',
        'Competitive advantage through custom features',
        'Scalable architecture for business growth',
        'Full ownership and control of the software',
        'Integration with existing business systems',
        'Long-term support and maintenance'
      ],
      process: [
        {
          step: 'Requirements Analysis',
          description: 'Deep dive into business needs and technical requirements'
        },
        {
          step: 'Architecture Design',
          description: 'Designing scalable and maintainable software architecture'
        },
        {
          step: 'Development & Testing',
          description: 'Building the software with iterative development cycles'
        },
        {
          step: 'Deployment & Integration',
          description: 'Deploying and integrating with existing business systems'
        },
        {
          step: 'Training & Support',
          description: 'User training and ongoing support services'
        }
      ]
    }
  };

  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className='w-full min-h-screen bg-[#373643] text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-[2rem] font-semibold mb-[1rem]'>Service Not Found</h1>
          <Link 
            to="/" 
            className='inline-flex items-center gap-[0.5rem] text-[#18CB96] hover:text-[#15b085] transition-colors'
          >
            <BsArrowLeft size='1rem' />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className='w-full min-h-screen bg-[#373643] text-white'>
      <div className='w-full flex flex-col md:px-[5rem] px-[1rem] py-[3rem] space-y-[3rem]'>
        {/* Back Button */}
        <div className='w-full'>
          <Link 
            to="/" 
            className='inline-flex items-center gap-[0.5rem] text-[#18CB96] hover:text-[#15b085] transition-colors text-[0.9rem]'
          >
            <BsArrowLeft size='1rem' />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Service Header */}
        <div className='w-full flex flex-col lg:flex-row gap-[3rem]'>
          {/* Service Image */}
          <div className='lg:w-[40%]'>
            <div className='w-full h-[300px] lg:h-[400px] overflow-hidden rounded-2xl'>
              <img 
                src={service.image} 
                className='w-full h-full object-cover'
                alt={service.title}
              />
            </div>
          </div>

          {/* Service Info */}
          <div className='lg:w-[60%] space-y-[2rem]'>
            <div>
              <div className='flex items-center gap-[1rem] mb-[1rem]'>
                <div className='rounded-full p-[0.8rem] bg-[#18CB96]'>
                  <Icon className='text-black' size='2rem' />
                </div>
                <span className='bg-[#2a2935] text-white px-[1rem] py-[0.4rem] rounded-full border border-gray-600 text-[0.8rem]'>
                  {service.category}
                </span>
              </div>
              <h1 className='text-[2.5rem] md:text-[3rem] font-semibold text-white mb-[0.5rem]'>
                {service.title}
              </h1>
              <p className='text-[1.3rem] text-[#18CB96] font-medium mb-[1rem]'>
                {service.subtitle}
              </p>
              <p className='text-[1rem] text-gray-300 leading-relaxed'>
                {service.description}
              </p>
            </div>

            {/* Action Button */}
            <div className='flex gap-[1rem]'>
              <Link 
                to="/contact"
                className='flex items-center gap-[0.5rem] bg-[#18CB96] text-black px-[1.5rem] py-[0.8rem] rounded-lg hover:bg-[#15b085] transition-colors font-medium'
              >
                <span>Get Started</span>
                <BsArrowUpRightCircle size='1.2rem' />
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Key Features</h2>
          <div className='grid md:grid-cols-2 gap-[1rem]'>
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className='flex items-start gap-[0.8rem] bg-[#2a2935] p-[1.2rem] rounded-xl border border-gray-600'>
                <span className='text-[#18CB96] mt-[0.2rem] text-xl'>•</span>
                <span className='text-[0.95rem] text-gray-300 leading-relaxed'>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Technologies & Tools</h2>
          <div className='flex flex-wrap gap-[1rem]'>
            {service.technologies.map((tech, techIndex) => (
              <div key={techIndex} className='flex items-center gap-[0.8rem] bg-[#2a2935] px-[1.5rem] py-[1rem] rounded-xl border border-gray-600 hover:border-[#18CB96] transition-colors'>
                <span className='text-[1rem] text-gray-300 font-medium'>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Benefits & Impact</h2>
          <div className='grid md:grid-cols-2 gap-[1rem]'>
            {service.benefits.map((benefit, benefitIndex) => (
              <div key={benefitIndex} className='flex items-start gap-[0.8rem] bg-[#2a2935] p-[1.2rem] rounded-xl border border-gray-600'>
                <span className='text-[#18CB96] mt-[0.2rem] text-xl'>✓</span>
                <span className='text-[0.95rem] text-gray-300 leading-relaxed'>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className='w-full'>
          <h2 className='text-[1.8rem] font-semibold text-white mb-[1.5rem]'>Our Process</h2>
          <div className='space-y-[1.5rem]'>
            {service.process.map((item, processIndex) => (
              <div key={processIndex} className='bg-[#2a2935] p-[1.5rem] rounded-xl border border-gray-600'>
                <div className='flex items-start gap-[1rem]'>
                  <div className='w-8 h-8 bg-[#18CB96] rounded-full flex items-center justify-center text-black font-bold text-sm'>
                    {processIndex + 1}
                  </div>
                  <div>
                    <p className='text-[1rem] font-medium text-white mb-[0.5rem]'>
                      {item.step}
                    </p>
                    <p className='text-[0.95rem] text-gray-300 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail; 