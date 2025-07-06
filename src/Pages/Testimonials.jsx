import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import client from '../assets/Homepage/Testimonial/client.png';
import comma from '../assets/Homepage/Testimonial/comma.png';

function Testimonials() {
  // Dynamically import CSS to avoid build issues
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  const [testimonials] = useState([
    { 
      title: 'Sarah Chen', 
      position: "CEO, TechFlow Solutions",
      desc: 'Hyperpara delivered our SaaS platform in just 6 weeks - lightning-fast development that exceeded our expectations. Their AI chatbot integration reduced our customer support workload by 70% and improved response times from hours to seconds.', 
      image: client,
      rating: 5
    },
    { 
      title: 'Marcus Rodriguez', 
      position: "CTO, InnovateCorp",
      desc: 'Hyperpara built our entire platform engineering infrastructure from scratch. Their workflow automation solutions saved us 40 hours per week in manual processes. The team moved at hyperspeed while maintaining exceptional code quality.', 
      image: client,
      rating: 5
    },
    { 
      title: 'Dr. Emily Watson', 
      position: "Founder, HealthTech Pro",
      desc: 'Hyperpara created an intelligent AI-driven solution for patient data management that solved real-world healthcare problems. Their custom AI chatbot handles 80% of patient inquiries automatically, allowing our staff to focus on critical care.', 
      image: client,
      rating: 5
    },
    { 
      title: 'David Kim', 
      position: "Marketing Director, GrowthFirst",
      desc: 'The SaaS product Hyperpara developed for us revolutionized our marketing operations. Their workflow automation eliminated 90% of our manual tasks. We went from concept to launch in record time - truly lightning-fast development.', 
      image: client,
      rating: 5
    },
    { 
      title: 'Lisa Thompson', 
      position: "Operations Manager, RetailPlus",
      desc: 'Hyperpara\'s platform engineering expertise transformed our entire retail operation. Their AI-driven solutions automated our inventory management and customer service workflows. What used to take our team 20 hours per week now happens automatically.', 
      image: client,
      rating: 5
    },
    { 
      title: 'James Wilson', 
      position: "Startup Founder, FinTech Ventures",
      desc: 'As a startup, we needed elite development and AI expertise to compete with established players. Hyperpara delivered a powerful SaaS platform with intelligent AI chatbots in just 8 weeks. Their hyperspeed approach helped us secure Series A funding.', 
      image: client,
      rating: 5
    },
    { 
      title: 'Amanda Foster', 
      position: "VP of Technology, EduTech Solutions",
      desc: 'Hyperpara built an AI-driven learning platform that personalized education for 50,000+ students. Their workflow automation streamlined our content delivery process. The platform engineering was so robust that we scaled from 1,000 to 50,000 users seamlessly.', 
      image: client,
      rating: 5
    },
    { 
      title: 'Robert Chang', 
      position: "Product Manager, SmartHome Inc",
      desc: 'Hyperpara\'s lightning-fast software development delivered our IoT platform ahead of schedule. Their AI chatbots handle customer support 24/7, and the workflow automation reduced our operational costs by 60%. Elite development at hyperspeed!', 
      image: client,
      rating: 5
    },
    { 
      title: 'Jennifer Martinez', 
      position: "CEO, GreenTech Innovations",
      desc: 'Hyperpara created intelligent AI-driven solutions for renewable energy optimization. Their platform engineering expertise built a system that processes real-time data from thousands of sensors. The workflow automation reduced manual monitoring by 85%.', 
      image: client,
      rating: 5
    }
  ]);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-400 text-lg">★</span>
    ));
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-500 transition-all duration-300"></div>
    ),
    dotsClass: "slick-dots !bottom-[-40px]",
  };

  return (
    <div className='w-full min-h-screen relative flex flex-col items-center bg-brand-bg overflow-hidden'>
      <img 
        src={Background_pic} 
        className='w-full h-full object-cover absolute opacity-20' 
        alt="Background" 
      />
      
      {/* Decorative Elements */}
      <div className='w-full flex flex-col mb-8'>
        <div className='w-full flex border-brand-accent border-b-[0.1rem] border-r-[0.2rem] h-[2rem] rounded-full'></div>
        <div className='w-full flex border-brand-accent border-t-[0.1rem] border-l-[0.2rem] h-[2rem] rounded-full'></div>
      </div>

      <div className='w-full flex flex-col px-[1.5rem] md:px-[5rem] space-y-[3rem] z-10'>
        {/* Header Section */}
        <div className='w-full flex flex-col items-center text-center space-y-6'>
          <h2 className='text-[2rem] md:text-[2.5rem] font-light text-green-400'>What Our Clients Say</h2>
          <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] max-w-3xl'>
            Real results from startups and enterprises powered by Hyperpara's lightning-fast development
          </p>
          <div className='flex items-center space-x-2'>
            <div className='w-16 h-1 bg-brand-accent rounded-full'></div>
            <span className='text-brand-accent text-sm'>★★★★★</span>
            <div className='w-16 h-1 bg-brand-accent rounded-full'></div>
          </div>
        </div>

        {/* Slick Carousel */}
        <div className='w-full relative pb-16'>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='px-3'>
                <div className='w-full h-full bg-gradient-to-br from-card-bg to-card-hover p-6 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/20'>
                  {/* Rating Stars */}
                  <div className='flex items-center mb-4'>
                    {renderStars(testimonial.rating)}
                    <span className='text-sm text-gray-400 ml-2'>({testimonial.rating}.0)</span>
                  </div>

                  {/* Quote Icon */}
                  <div className='flex justify-end mb-4'>
                    <img src={comma} className='w-8 h-8 opacity-60' alt='Quote'/>
                  </div>

                  {/* Testimonial Text */}
                  <p className='text-[0.9rem] md:text-[1rem] text-[#dad4e4] leading-relaxed mb-6 italic'>
                    "{testimonial.desc}"
                  </p>

                  {/* Client Info */}
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-brand-accent/30'>
                      <img 
                        src={testimonial.image} 
                        className='w-full h-full object-cover' 
                        alt={testimonial.title}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-white font-semibold text-sm'>{testimonial.title}</span>
                      <span className='text-brand-accent text-xs'>{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


      </div>

      {/* Custom CSS for Slick Carousel */}
      <style jsx>{`
        .slick-dots li button:before {
          color: #18CB96 !important;
          font-size: 12px !important;
        }
        .slick-dots li.slick-active button:before {
          color: #18CB96 !important;
        }
        .slick-prev, .slick-next {
          color: #18CB96 !important;
        }
        .slick-prev:hover, .slick-next:hover {
          color: #18CB96 !important;
        }
        .slick-slide {
          padding: 0 10px;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
