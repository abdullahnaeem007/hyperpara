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
        <Navbar />
        <Herosection />
        <Routes>
          <Route element={<Homepage />} path='/' />
          <Route element={<ServicesPage />} path='/services' />
          <Route element={<PortfolioPage />} path='/portfolio' />
          <Route element={<AboutPage />} path='/about' />
          <Route element={<BlogPage />} path='/blog' />
          <Route element={<ContactPage />} path='/contact' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
