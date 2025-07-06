import React, { useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';

function BlogPage() {
    const [blogPosts] = useState([
        { 
          title: 'The Future of AI in Software Development', 
          desc: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications. From automated testing to intelligent code generation, AI is becoming an integral part of modern development workflows.', 
          date: 'March 15, 2024',
          category: 'AI & Technology'
        },
        { 
          title: 'Building Scalable SaaS Products', 
          desc: 'Learn the key principles and best practices for creating software-as-a-service products that can scale from startup to enterprise. We cover architecture decisions, database design, and deployment strategies.', 
          date: 'March 10, 2024',
          category: 'SaaS Development'
        },
        { 
          title: 'Lightning-Fast Development: Myth or Reality?', 
          desc: 'How Hyperpara achieves lightning-fast development cycles without compromising quality. We share our methodology, tools, and processes that enable rapid delivery of high-quality software solutions.', 
          date: 'March 5, 2024',
          category: 'Development'
        },
        { 
          title: 'The Rise of Platform Engineering', 
          desc: 'Understanding the growing importance of platform engineering in modern software development. How internal developer platforms are transforming how teams build and deploy applications.', 
          date: 'February 28, 2024',
          category: 'Platform Engineering'
        },
        { 
          title: 'AI Chatbots: Beyond Customer Service', 
          desc: 'Discover innovative applications of AI chatbots beyond traditional customer support. From sales automation to internal workflow optimization, chatbots are becoming powerful business tools.', 
          date: 'February 20, 2024',
          category: 'AI Solutions'
        },
        { 
          title: 'Digital Transformation in 2024', 
          desc: 'Key trends and strategies for successful digital transformation in 2024. How businesses can leverage AI, cloud computing, and automation to stay competitive in an evolving digital landscape.', 
          date: 'February 15, 2024',
          category: 'Digital Strategy'
        }
      ]);

    return (
      <div className='w-full min-h-screen relative flex flex-col space-y-[3rem] items-center text-[3.2rem] font-light text-[#dad4e4] leading-tight bg-brand-bg'>
        <img 
          src={Background_pic} 
          className='w-full h-full object-cover absolute opacity-20' 
          alt="Background" 
        />
        <div className='w-full flex flex-col md:px-[5rem] px-[1rem] space-y-[3rem] py-[4rem] z-10'>
          <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <p className='text-[0.8rem] md:text-[0.9rem] md:text-left text-center font-light'>
              Stay updated with the latest insights, trends, and innovations<br/> 
              in AI, software development, and digital transformation
            </p>
            <Link 
              to="/blog"
              className='text-[0.8rem] md:text-[0.9rem] w-fit flex space-x-[0.5rem] items-center px-[1rem] py-[0.7rem] md:px-[1.2rem] bg-brand-accent text-brand-bg rounded-full mt-[1rem] md:mt-0 hover:bg-opacity-90 transition-colors duration-300'
            >
              <span>All Articles</span>
              <BsArrowUpRightCircle size='1rem'/>
            </Link>
          </div>

          <div className='w-full h-fit flex flex-wrap justify-center'>
            {
              blogPosts.map((post, index) => (
                <div 
                  key={index} 
                  className='w-full md:w-[45%] lg:w-[45%] min-h-[12rem] m-[1rem] flex flex-col space-y-[1rem] bg-card-bg p-[1.5rem] rounded-xl hover:scale-105 transition-transform duration-300 hover:bg-card-hover'
                >
                  <div className='flex justify-between items-start'>
                    <span className='text-[0.7rem] text-brand-accent font-medium'>{post.category}</span>
                    <span className='text-[0.7rem] text-[#dad4e4]'>{post.date}</span>
                  </div>
                  <h3 className='text-[1.2rem] text-white font-semibold text-start'>{post.title}</h3>
                  <p className='text-[0.8rem] text-[#dad4e4] text-start leading-relaxed'>{post.desc}</p>
                  <div className='w-full h-[0.1rem] bg-brand-accent'></div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
    );
}

export default BlogPage;
