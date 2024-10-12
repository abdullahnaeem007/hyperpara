import React from 'react';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';

function ContactPage() {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      <div className="w-full min-h-screen relative flex flex-col items-center bg-[#0D0D0D] text-white">
        <img
          src={Background_pic}
          className="w-full h-full object-cover absolute opacity-30"
          alt="Background"
        />
        <div className="w-full flex flex-col px-[1rem] md:px-[5rem] py-[4rem] space-y-[4rem] z-10">
          <div className="w-full flex flex-col items-center text-center space-y-6">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-semibold text-[#F0F0F0]">Get in Touch</h1>
            <p className="text-[0.9rem] md:text-[1.2rem] font-light text-[#CFCFCF]">
              We’d love to hear from you! Let us know how we can help with your project or any inquiries.
            </p>
          </div>

          <div className="w-full flex justify-center items-start">
            <form className="w-full sm:w-[80%] md:w-[50%] bg-[#1A1A1A] p-[2rem] rounded-xl shadow-lg space-y-8 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-[1rem] text-[#B8B8B8]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-[#2B2B2B] rounded-lg text-white outline-none focus:border-[#504CFF] focus:ring-2 focus:ring-[#504CFF] transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col space-y-4">
                <label htmlFor="email" className="text-[1rem] text-[#B8B8B8]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-[#2B2B2B] rounded-lg text-white outline-none focus:border-[#504CFF] focus:ring-2 focus:ring-[#504CFF] transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col space-y-4">
                <label htmlFor="message" className="text-[1rem] text-[#B8B8B8]">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 bg-[#2B2B2B] rounded-lg text-white h-[10rem] resize-none outline-none focus:border-[#504CFF] focus:ring-2 focus:ring-[#504CFF] transition-all"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-[1rem] bg-[#504CFF] text-white rounded-lg text-[1rem] font-semibold hover:bg-[#6A64FF] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
