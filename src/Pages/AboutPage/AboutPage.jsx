import React from 'react';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';

function AboutPage() {
  const teamMembers = [
    {
      name: 'Abdullah Naeem',
      title: 'Co-Founder Hyperpara',
      image: 'src/assets/AboutUs/AbdullahNaeemProfile.jpeg',
    },
    {
      name: 'Ali Raza',
      title: 'Co-Founder - Hyperpara',
      image: 'src/assets/AboutUs/AliRazaProfile.jpeg',
    },
    {
      name: 'Abdullah Yaqub',
      title: 'Co-Founder Hyperpara',
      image: 'src/assets/AboutUs/AbdullahYaqub_ProfilePicture.jpg',
    },
    {
      name: 'Aleena Zafar',
      title: 'Business Developer',
      image: 'src/assets/AboutUs/Aleena_Profile.jpeg',
    },
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
            <h1 className='text-[2.5rem] md:text-[3.5rem] font-light'>About Us</h1>
            <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4]'>
              We are a team of passionate individuals dedicated to driving innovation and building cutting-edge solutions for our clients.
            </p>
          </div>

          <div className='w-full flex flex-wrap justify-center items-center mt-[5rem]'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='w-full sm:w-[45%] md:w-[30%] m-[1.5rem] bg-[#1c1c1c] p-[2rem] rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl flex flex-col items-center space-y-[1.5rem]'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='rounded-full w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] object-cover border-4 border-[#504CFF]'
                />
                <h3 className='text-[1.5rem] text-white'>{member.name}</h3>
                <p className='text-[1rem] text-[#dad4e4]'>{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
