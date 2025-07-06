import { Fragment, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'

function App() {
  return (
    <div className='max-w-screen min-h-screen font-Poppins text-white'>
      <BrowserRouter>
        <Fragment>
          <Navbar/>
          <Herosection/> 
          <Routes>
            <Route Component={Homepage} path='/'/>
            <Route Component={ServicesPage} path='/services'/>
            <Route Component={PortfolioPage} path='/portfolio'/>
            <Route Component={AboutPage} path='/about'/>
            <Route Component={BlogPage} path='/blog'/>
            <Route Component={ContactPage} path='/contact'/>
          </Routes>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    </div>
  )
}


export default App
