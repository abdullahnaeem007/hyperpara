import React from 'react'
import Skills from '../Pages/Skills'
import Banner from './../Components/Banner'
import ProjectShowcase from '../Components/ProjectShowcase'
import Testimonials from '../Pages/Testimonials'

function Homepage() {
  return (
    <div className='w-full min-h-screen relative items-center flex flex-col'>
      <Skills/>
      <Banner/>
      <ProjectShowcase/>
      <Testimonials/>
    </div>
  )
}

export default Homepage