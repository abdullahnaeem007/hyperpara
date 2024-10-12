import React from 'react'
import Skills from '../Pages/Skills'
import Banner from './../Components/Banner'
import Projects from '../Pages/Projects'
import Testimonials from '../Pages/Testimonials'

function Homepage() {
  return (
    <div class='w-full min-h-screen relative items-center flex flex-col'>
      <Skills/>
      <Banner/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default Homepage