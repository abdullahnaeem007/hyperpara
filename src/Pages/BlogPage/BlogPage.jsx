import React, { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';

function BlogPage() {
  const [blogs] = useState([
    {
      title: 'Model Context Protocol (MCP)',
      desc: 'The future of AI isn’t just bigger models. Systems that remember you, respond like you’d expect.',
      date: 'July 4, 2025',
      image: "src/assets/Blogs/Blog1.jpeg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7347039038387716096/",
    },
    {
      title: 'Rise of AI with a Mind of Its Own',
      desc: 'The next evolution of artificial intelligence is no longer just reactive — it’s agentic and amazing.',
      date: 'July 1, 2025',
      image: "src/assets/Blogs/Blog2.jpeg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7346671354407981056/",
    },
    // {
    //   title: 'Business Automation Trends',
    //   desc: 'Automation is taking over industries. Learn how to leverage it to grow your business.',
    //   date: 'July 15, 2024',
    //   image: "blogImage3",
    // },
    // // Repeating blogs for demonstration
    // {
    //   title: 'AI in Web Development',
    //   desc: 'Discover how AI is revolutionizing web development and creating smarter, more interactive websites.',
    //   date: 'September 25, 2024',
    //   image: "blogImage1",
    // },
    // {
    //   title: 'The Future of Mobile Apps',
    //   desc: 'Explore trends in mobile app development that are shaping the future of user experience.',
    //   date: 'August 10, 2024',
    //   image: "blogImage2",
    // },
    // {
    //   title: 'Business Automation Trends',
    //   desc: 'Automation is taking over industries. Learn how to leverage it to grow your business.',
    //   date: 'July 15, 2024',
    //   image: "blogImage3",
    // },
  ]);

  return (
    <div className='w-full min-h-screen relative flex flex-col items-center'>
      <div className='w-full min-h-screen relative flex flex-col items-center bg-[#0D0D0D] text-white'>
        <img
          src={Background_pic}
          className='w-full h-full object-cover absolute opacity-30'
          alt="Background"
        />
        <div className='w-full flex flex-col md:px-[5rem] px-[1rem] py-[4rem] space-y-[4rem] z-10'>
          <div className='w-full flex flex-col items-center text-center space-y-6'>
          <h2 className='w-full text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center md:text-left items-center'>Our Blog</h2>
          <p className='text-[0.8rem] md:text-[0.9rem] md:text-left text-center font-light mt-[1rem] md:mt-0'>
              Stay updated with the latest trends and insights in technology, AI, and automation.
            </p>
          </div>

          <div className='w-full flex flex-wrap justify-center items-start'>
            {blogs.map((blog, index) => (
              <div
                key={index}
                className='relative w-full sm:w-[45%] md:w-[30%] bg-[#1A1A1A] p-[1.5rem] mx-[1rem] my-[1rem] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#222]'
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='w-full h-[12rem] object-cover rounded-lg mb-[1rem]'
                />
                <div className='flex flex-col space-y-4'>
                  <span className='text-[1.5rem] font-semibold'>{blog.title}</span>
                  <span className='text-[0.9rem] font-light text-[#B8B8B8]'>{blog.date}</span>
                  <p className='text-[1rem] text-[#E0E0E0] leading-tight'>
                    {blog.desc}
                  </p>
                  <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#504CFF] hover:text-[#7A74FF]"
                    >
                      <span className="text-[1rem]">Read more</span>
                      <BsArrowRightCircle size="1.2rem" />
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
