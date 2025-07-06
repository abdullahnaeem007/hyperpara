import { Fragment, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'

// PageHeader component for non-home pages
const PageHeader = ({ title, description }) => {
  return (
    <div className="w-full min-h-[60vh] relative flex flex-col items-center justify-center bg-brand-bg">
      <div className="w-full h-full flex flex-col items-center justify-center py-[4rem] px-[1rem] md:px-[5rem] text-center">
        <h1 className="text-[2.5rem] md:text-[4rem] font-light text-green-400 leading-tight mb-6">
          {title}
        </h1>
        <p className="text-[1rem] md:text-[1.2rem] font-light text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main App Layout component
const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='max-w-screen min-h-screen font-Poppins text-white'>
      <Navbar/>
      {isHomePage ? (
        <Herosection/>
      ) : (
        <PageHeader 
          title={
            location.pathname === '/services' ? 'Our Services' :
            location.pathname === '/portfolio' ? 'Our Portfolio' :
            location.pathname === '/about' ? 'About Us' :
            location.pathname === '/blog' ? 'Our Blog' :
            location.pathname === '/contact' ? 'Contact Us' : 'Page'
          }
          description={
            location.pathname === '/services' ? 'Discover our comprehensive range of lightning-fast software development services, powerful SaaS products, and intelligent AI-driven solutions designed to accelerate your digital growth.' :
            location.pathname === '/portfolio' ? 'Explore our portfolio of successful projects showcasing our expertise in AI solutions, web development, and platform engineering across diverse industries.' :
            location.pathname === '/about' ? 'Learn about Hyperpara, a hybrid software company built for the next generation of digital growth, delivering cutting-edge solutions at hyperspeed.' :
            location.pathname === '/blog' ? 'Stay updated with the latest insights, trends, and innovations in AI, software development, and digital transformation.' :
            location.pathname === '/contact' ? 'Get in touch with our team of experts to discuss your project requirements and discover how we can accelerate your digital transformation.' : 'Page description'
          }
        />
      )}
      <Routes>
        <Route Component={Homepage} path='/'/>
        <Route Component={ServicesPage} path='/services'/>
        <Route Component={PortfolioPage} path='/portfolio'/>
        <Route Component={AboutPage} path='/about'/>
        <Route Component={BlogPage} path='/blog'/>
        <Route Component={ContactPage} path='/contact'/>
      </Routes>
      <Footer/>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <AppLayout />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
