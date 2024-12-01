import React from 'react'
import Skills from '../Pages/Skills'
import Banner from './../Components/Banner'
import Projects from '../Pages/Projects'

function Homepage() {
  return (
    <div class='w-full min-h-screen relative items-center flex flex-col'>
      <Skills/>
      <Banner/>
      <Projects/>
    </div>
  )
}

export default Homepage