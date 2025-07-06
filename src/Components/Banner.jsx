import React, { useState } from 'react';
import chatgpt_banner from '../assets/Homepage/Banner/chatgpt_banner.png'
import google_banner from '../assets/Homepage/Banner/google_banner.png'
import js_banner from '../assets/Homepage/Banner/js_banner.png'
import shopify_banner from '../assets/Homepage/Banner/shopify_banner.png'
import gemini_banner from '../assets/Homepage/Banner/gemini_banner.png'
import duizzle_banner from '../assets/Homepage/Banner/duizzle_banner.png'
import langchain_banner from '../assets/Homepage/Banner/langchain_banner.png'
import Background_pic from '../assets/Homepage/SecondSection/Background_pic.png';


function Banner() {
    const [logos] = useState([
        {pic:chatgpt_banner},
        {pic:shopify_banner},
        {pic:google_banner},
        {pic:js_banner},
        {pic:duizzle_banner},
        {pic:langchain_banner},
        {pic:gemini_banner},
        {pic:chatgpt_banner},
        {pic:shopify_banner},
        {pic:google_banner},
        {pic:js_banner},
        {pic:duizzle_banner},
        {pic:langchain_banner},
        {pic:gemini_banner},
    ])
  return (
    <div className='w-full relative md:py-[5rem] py-[3rem] flex justify-center items-center bg-black'>
        <img 
          src={Background_pic} 
          className='w-full h-full object-fit absolute' 
          alt="Background" 
        />
        <div className="overflow-hidden whitespace-nowrap w-full bg-[#504CFF] py-[0.7rem]">
        <div className="banner-content flex md:space-x-[5rem] space-x-[3rem] scrolling-banner px-[2rem]">
            {
                logos.map((obj,index)=>
                    obj.pic==langchain_banner?
                    <img src={obj.pic} className='md:w-[10rem] w-[7rem] object-contain' alt="Logo"/>
                    :
                    <img src={obj.pic} className='md:w-[5rem] w-[3rem] object-contain' alt="Logo"/>
                )
            }
        </div>
        </div>
    </div>
  );
}

export default Banner;
