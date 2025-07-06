import React from 'react';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';

function AboutPage() {
  const teamMembers = [
    {
      name: 'Alexandra Chen',
      title: 'Co-Founder & CEO',
      bio: 'Former AI Research Lead at Google, with 12+ years in machine learning and business strategy. Led teams that developed AI solutions for Fortune 500 companies.',
      image: "cofounder1",
    },
    {
      name: 'Michael Rodriguez',
      title: 'Co-Founder & CTO',
      bio: 'Ex-Senior Engineer at Microsoft and Amazon, specializing in scalable AI systems and cloud architecture. Built platforms serving 10M+ users globally.',
      image: "cofounder2",
    },
    {
      name: 'Dr. Sarah Kim',
      title: 'Head of AI Research',
      bio: 'PhD in Computer Science from MIT, with expertise in natural language processing and computer vision. Published 25+ papers in top AI conferences.',
      image: "cofounder1",
    },
    {
      name: 'David Thompson',
      title: 'VP of Engineering',
      bio: '15+ years in software engineering, previously at Netflix and Uber. Expert in building high-performance, scalable applications and microservices.',
      image: "cofounder2",
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '$50M+', label: 'Revenue Generated' },
  ];

  return (
    <div className='w-full min-h-screen relative flex flex-col items-center'>
      <div className='w-full min-h-screen relative flex flex-col items-center bg-black text-white'>
        <img
          src={Background_pic}
          className='w-full h-full object-cover absolute opacity-30'
          alt="Background"
        />
        <div className='w-full flex flex-col px-[1rem] md:px-[5rem] py-[5rem] z-10'>
          <div className='w-full flex flex-col items-center text-center space-y-6'>
            <h1 className='text-[2.5rem] md:text-[3.5rem] font-light'>About Hyperpara</h1>
            <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] max-w-4xl'>
              Hyperpara is a hybrid software company built for the next generation of digital growth. We deliver lightning-fast software development services, 
              build powerful SaaS products, and create intelligent AI-driven solutions that solve real-world problems. From custom AI chatbots and workflow 
              automations to full-scale platform engineering—Hyperpara empowers startups and enterprises alike. Whether you're launching a new venture, 
              scaling your product, or need elite development and AI expertise—Hyperpara moves at hyperspeed to get you there.
            </p>
          </div>

          {/* Company Statistics */}
          <div className='w-full flex flex-wrap justify-center items-center mt-[4rem] space-y-4 md:space-y-0'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='w-full sm:w-[45%] md:w-[22%] m-[0.5rem] bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl flex flex-col items-center space-y-[1rem]'
              >
                <h3 className='text-[2rem] md:text-[2.5rem] font-bold text-[#504CFF]'>{stat.number}</h3>
                <p className='text-[0.9rem] text-[#dad4e4] text-center'>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className='w-full flex flex-col items-center mt-[4rem] space-y-6'>
            <h2 className='text-[2rem] md:text-[2.5rem] font-light text-center'>Our Mission</h2>
            <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] text-center max-w-3xl'>
              To accelerate digital growth for the next generation of businesses through lightning-fast software development, 
              intelligent AI solutions, and powerful SaaS products. We believe that speed, intelligence, and scalability are 
              the keys to success in today's digital landscape. Our hybrid approach combines the agility of a startup with 
              the expertise of enterprise-level development, delivering solutions that move at hyperspeed while maintaining 
              the highest standards of quality and innovation.
            </p>
          </div>

          {/* Core Services */}
          <div className='w-full flex flex-col items-center mt-[4rem] space-y-6'>
            <h2 className='text-[2rem] md:text-[2.5rem] font-light text-center'>What We Deliver</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[2rem]'>
              <div className='bg-[#1c1c1c] p-[2rem] rounded-xl text-center space-y-4'>
                <h3 className='text-[1.2rem] font-semibold text-[#504CFF]'>Lightning-Fast Development</h3>
                <p className='text-[0.8rem] text-[#dad4e4]'>Rapid software development that gets your product to market faster than the competition.</p>
              </div>
              <div className='bg-[#1c1c1c] p-[2rem] rounded-xl text-center space-y-4'>
                <h3 className='text-[1.2rem] font-semibold text-[#504CFF]'>Powerful SaaS Products</h3>
                <p className='text-[0.8rem] text-[#dad4e4]'>Scalable software-as-a-service solutions that grow with your business needs.</p>
              </div>
              <div className='bg-[#1c1c1c] p-[2rem] rounded-xl text-center space-y-4'>
                <h3 className='text-[1.2rem] font-semibold text-[#504CFF]'>AI-Driven Solutions</h3>
                <p className='text-[0.8rem] text-[#dad4e4]'>Intelligent AI chatbots and automation that solve real-world business problems.</p>
              </div>
              <div className='bg-[#1c1c1c] p-[2rem] rounded-xl text-center space-y-4'>
                <h3 className='text-[1.2rem] font-semibold text-[#504CFF]'>Platform Engineering</h3>
                <p className='text-[0.8rem] text-[#dad4e4]'>Full-scale platform infrastructure that supports enterprise-level operations.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className='w-full flex flex-col items-center mt-[4rem] space-y-6'>
            <h2 className='text-[2rem] md:text-[2.5rem] font-light text-center'>Meet Our Leadership</h2>
            <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] text-center max-w-2xl'>
              Our leadership team brings together decades of experience from the world's most innovative tech companies
            </p>
          </div>

          <div className='w-full flex flex-wrap justify-center items-start mt-[3rem]'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='w-full sm:w-[45%] md:w-[45%] m-[1rem] bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl flex flex-col items-center space-y-[1.5rem]'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='rounded-full w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] object-cover border-4 border-[#504CFF]'
                />
                <div className='text-center space-y-2'>
                  <h3 className='text-[1.5rem] text-white font-semibold'>{member.name}</h3>
                  <p className='text-[1rem] text-[#504CFF] font-medium'>{member.title}</p>
                  <p className='text-[0.8rem] text-[#dad4e4] leading-relaxed'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className='w-full flex flex-col items-center mt-[4rem] space-y-6'>
            <h2 className='text-[2rem] md:text-[2.5rem] font-light text-center'>Ready to Move at Hyperspeed?</h2>
            <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] text-center max-w-2xl'>
              Whether you're launching a new venture, scaling your product, or need elite development and AI expertise—we're here to accelerate your digital growth.
            </p>
            <button className='flex space-x-[1rem] bg-white px-[2.2rem] py-[0.8rem] rounded-full text-[1rem] text-black hover:bg-gray-100 transition-all duration-300'>
              <span>Get Started Today</span>
              <BsArrowUpRightCircle size='1rem' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
