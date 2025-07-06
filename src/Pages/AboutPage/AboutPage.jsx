import React from "react";
import Background_pic from "../../assets/Homepage/SecondSection/Background_pic.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function AboutPage() {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      title: "Co-Founder & CEO",
      bio: "Former AI Research Lead at Google, with 12+ years in machine learning and business strategy. Led teams that developed AI solutions for Fortune 500 companies.",
      image: "cofounder1",
    },
    {
      name: "Michael Rodriguez",
      title: "Co-Founder & CTO",
      bio: "Ex-Senior Engineer at Microsoft and Amazon, specializing in scalable AI systems and cloud architecture. Built platforms serving 10M+ users globally.",
      image: "cofounder2",
    },
    {
      name: "Dr. Sarah Kim",
      title: "Head of AI Research",
      bio: "PhD in Computer Science from MIT, with expertise in natural language processing and computer vision. Published 25+ papers in top AI conferences.",
      image: "cofounder1",
    },
    {
      name: "David Thompson",
      title: "VP of Engineering",
      bio: "15+ years in software engineering, previously at Netflix and Uber. Expert in building high-performance, scalable applications and microservices.",
      image: "cofounder2",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "$50M+", label: "Revenue Generated" },
  ];

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center bg-brand-bg">
      <img
        src={Background_pic}
        className="w-full h-full object-cover absolute opacity-20"
        alt="Background"
      />
      <div className="w-full flex flex-col px-[1rem] md:px-[5rem] py-[4rem] z-10">
        {/* Company Statistics */}
        <div className="w-full flex flex-wrap justify-center items-center mb-[4rem] space-y-4 md:space-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[22%] m-[0.5rem] bg-card-bg p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl flex flex-col items-center space-y-[1rem]"
            >
              <h3 className="text-[2rem] md:text-[2.5rem] font-bold text-brand-accent">
                {stat.number}
              </h3>
              <p className="text-[0.9rem] text-[#dad4e4] text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="w-full flex flex-col items-center mb-[4rem] space-y-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-light text-center text-green-400">
            Our Mission
          </h2>
          <p className="text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] text-center max-w-3xl">
            To accelerate digital growth for the next generation of businesses
            through lightning-fast software development, intelligent AI
            solutions, and powerful SaaS products. We believe that speed,
            intelligence, and scalability are the keys to success in today's
            digital landscape. Our hybrid approach combines the agility of a
            startup with the expertise of enterprise-level development,
            delivering solutions that move at hyperspeed while maintaining the
            highest standards of quality and innovation.
          </p>
        </div>

        {/* Core Services */}
        <div className="w-full flex flex-col items-center mb-[4rem] space-y-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-light text-center text-green-400">
            What We Deliver
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[2rem]">
            <div className="bg-card-bg p-[2rem] rounded-xl text-center space-y-4">
              <h3 className="text-[1.2rem] font-semibold text-brand-accent">
                Lightning-Fast Development
              </h3>
              <p className="text-[0.8rem] text-[#dad4e4]">
                Rapid software development that gets your product to market
                faster than the competition.
              </p>
            </div>
            <div className="bg-card-bg p-[2rem] rounded-xl text-center space-y-4">
              <h3 className="text-[1.2rem] font-semibold text-brand-accent">
                Powerful SaaS Products
              </h3>
              <p className="text-[0.8rem] text-[#dad4e4]">
                Scalable software-as-a-service solutions that grow with your
                business needs.
              </p>
            </div>
            <div className="bg-card-bg p-[2rem] rounded-xl text-center space-y-4">
              <h3 className="text-[1.2rem] font-semibold text-brand-accent">
                AI-Driven Solutions
              </h3>
              <p className="text-[0.8rem] text-[#dad4e4]">
                Intelligent AI chatbots and automation that solve real-world
                business problems.
              </p>
            </div>
            <div className="bg-card-bg p-[2rem] rounded-xl text-center space-y-4">
              <h3 className="text-[1.2rem] font-semibold text-brand-accent">
                Platform Engineering
              </h3>
              <p className="text-[0.8rem] text-[#dad4e4]">
                Full-scale platform infrastructure that supports
                enterprise-level operations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full flex flex-col items-center mb-[4rem] space-y-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-light text-center text-green-400">
            Meet Our Leadership
          </h2>
          <p className="text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] text-center max-w-2xl">
            Our leadership team brings together decades of experience from the
            world's most innovative tech companies
          </p>
        </div>

        {/* Leadership Section */}
        <div className="w-full mb-[4rem]">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
            {/* CEO */}
            <div className="bg-[#2a2935] rounded-xl p-[2rem] text-center hover:scale-105 transition-transform duration-300 border border-[#18CB96]/20">
              <div className="w-24 h-24 bg-[#18CB96] rounded-full mx-auto mb-[1.5rem] flex items-center justify-center">
                <span className="text-2xl font-bold text-black">AN</span>
              </div>
              <h3 className="text-[1.3rem] font-semibold text-white mb-[0.5rem]">
                Abdullah Naeem
              </h3>
              <p className="text-[#18CB96] text-[1rem] font-medium mb-[0.5rem]">
                CEO
              </p>
              <p className="text-[0.8rem] text-gray-300">Co-founder</p>
            </div>

            {/* CTO */}
            <div className="bg-[#2a2935] rounded-xl p-[2rem] text-center hover:scale-105 transition-transform duration-300 border border-[#18CB96]/20">
              <div className="w-24 h-24 bg-[#18CB96] rounded-full mx-auto mb-[1.5rem] flex items-center justify-center">
                <span className="text-2xl font-bold text-black">AR</span>
              </div>
              <h3 className="text-[1.3rem] font-semibold text-white mb-[0.5rem]">
                Ali Raza
              </h3>
              <p className="text-[#18CB96] text-[1rem] font-medium mb-[0.5rem]">
                CTO
              </p>
              <p className="text-[0.8rem] text-gray-300">Co-founder</p>
            </div>

            {/* CFO */}
            <div className="bg-[#2a2935] rounded-xl p-[2rem] text-center hover:scale-105 transition-transform duration-300 border border-[#18CB96]/20">
              <div className="w-24 h-24 bg-[#18CB96] rounded-full mx-auto mb-[1.5rem] flex items-center justify-center">
                <span className="text-2xl font-bold text-black">AY</span>
              </div>
              <h3 className="text-[1.3rem] font-semibold text-white mb-[0.5rem]">
                Abdullah Yaqub
              </h3>
              <p className="text-[#18CB96] text-[1rem] font-medium mb-[0.5rem]">
                CFO
              </p>
              <p className="text-[0.8rem] text-gray-300">Co-founder</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full flex flex-col items-center space-y-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-light text-center text-green-400">
            Ready to Move at Hyperspeed?
          </h2>
          <p className="text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4] text-center max-w-2xl">
            Whether you're launching a new venture, scaling your product, or
            need elite development and AI expertise—we're here to accelerate
            your digital growth.
          </p>
          <Link
            to="/contact"
            className="flex space-x-[1rem] bg-brand-accent px-[2.2rem] py-[0.8rem] rounded-full text-[1rem] text-brand-bg hover:bg-opacity-90 transition-all duration-300"
          >
            <span>Get Started Today</span>
            <BsArrowUpRightCircle size="1rem" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
