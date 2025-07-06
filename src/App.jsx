import { Fragment, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ProjectDetail from './Pages/ProjectDetails/ProjectDetail'
import ServiceDetail from './Pages/ServiceDetails/ServiceDetail'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import SEO from './components/SEO'

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
  const isProjectPage = location.pathname.startsWith('/project/');
  const isServicePage = location.pathname.startsWith('/service/');

  // SEO data for different pages
  const getSEOData = () => {
    if (isHomePage) {
      return {
        title: "Hyperpara - AI Solutions & Software Development Company | Lightning-Fast Development",
        description: "Hyperpara delivers lightning-fast AI solutions, web development, and custom software. Specializing in AI chatbots, business automation, and scalable SaaS platforms. 500+ projects delivered with 95% client satisfaction.",
        keywords: "AI solutions, software development, web development, chatbot development, business automation, custom software, SaaS development, React, Node.js, OpenAI, machine learning, Pakistan software company",
        url: "https://hyperpara.co",
        image: "https://hyperpara.co/og-image.png"
      };
    } else if (location.pathname === '/services') {
      return {
        title: "Our Services - AI Solutions, Web Development & Custom Software | Hyperpara",
        description: "Discover our comprehensive range of lightning-fast software development services, powerful SaaS products, and intelligent AI-driven solutions designed to accelerate your digital growth.",
        keywords: "AI solutions, web development, chatbot development, app development, business automation, custom software, software services, Pakistan",
        url: "https://hyperpara.co/services",
        image: "https://hyperpara.co/og-image.png"
      };
    } else if (location.pathname === '/products') {
      return {
        title: "Our Products - AI & Software Development Portfolio | Hyperpara",
        description: "Explore our products showcasing our expertise in AI solutions, web development, and platform engineering across diverse industries.",
        keywords: "software products, AI applications, web applications, portfolio, case studies, Pakistan software company",
        url: "https://hyperpara.co/products",
        image: "https://hyperpara.co/og-image.png"
      };
    } else if (location.pathname === '/about') {
      return {
        title: "About Us - Hyperpara | Hybrid Software Company for Digital Growth",
        description: "Learn about Hyperpara, a hybrid software company built for the next generation of digital growth, delivering cutting-edge solutions at hyperspeed.",
        keywords: "about Hyperpara, software company, team, mission, vision, Pakistan tech company",
        url: "https://hyperpara.co/about",
        image: "https://hyperpara.co/og-image.png"
      };
    } else if (location.pathname === '/contact') {
      return {
        title: "Contact Us - Get in Touch with Hyperpara | Software Development Services",
        description: "Get in touch with our team of experts to discuss your project requirements and discover how we can accelerate your digital transformation.",
        keywords: "contact Hyperpara, software development quote, project consultation, Pakistan software company contact",
        url: "https://hyperpara.co/contact",
        image: "https://hyperpara.co/og-image.png"
      };
    } else if (isServicePage) {
      const serviceId = location.pathname.split('/')[2];
      const serviceNames = {
        'ai-solutions': 'AI Solutions',
        'web-development': 'Web Development',
        'chatbot-development': 'Chatbot Development',
        'app-development': 'App Development',
        'business-automation': 'Business Automation',
        'custom-software': 'Custom Software Development'
      };
      const serviceName = serviceNames[serviceId] || 'Service';
      return {
        title: `${serviceName} - Professional Software Development Services | Hyperpara`,
        description: `Expert ${serviceName.toLowerCase()} services by Hyperpara. Delivering high-quality, scalable solutions with cutting-edge technology and lightning-fast development.`,
        keywords: `${serviceName.toLowerCase()}, software development, AI solutions, Pakistan software company, ${serviceName.toLowerCase()} services`,
        url: `https://hyperpara.co${location.pathname}`,
        image: "https://hyperpara.co/og-image.png"
      };
    } else if (isProjectPage) {
      const projectId = location.pathname.split('/')[2];
      const projectNames = {
        'fuatra-pos': 'FUATRA POS',
        'resume-analysis-ai': 'ResumeAnalysisAI',
        'diverge-hr': 'DivergeHR'
      };
      const projectName = projectNames[projectId] || 'Project';
      return {
        title: `${projectName} - Software Development Case Study | Hyperpara`,
        description: `Explore ${projectName}, a successful software development project by Hyperpara. Learn about the technology stack, challenges, and outcomes.`,
        keywords: `${projectName.toLowerCase()}, case study, software development, portfolio, Pakistan software company`,
        url: `https://hyperpara.co${location.pathname}`,
        image: "https://hyperpara.co/og-image.png"
      };
    }
    
    return {
      title: "Hyperpara - AI Solutions & Software Development Company",
      description: "Hyperpara delivers lightning-fast AI solutions, web development, and custom software development services.",
      keywords: "AI solutions, software development, web development, Pakistan software company",
      url: "https://hyperpara.co",
      image: "https://hyperpara.co/og-image.png"
    };
  };

  const seoData = getSEOData();

  return (
    <div className='max-w-screen min-h-screen font-Poppins text-white'>
      <SEO {...seoData} />
      <Navbar/>
      {isHomePage ? (
        <Herosection/>
      ) : isProjectPage || isServicePage ? (
        // Don't show PageHeader for project and service detail pages
        null
      ) : (
        <PageHeader 
          title={
            location.pathname === '/services' ? 'Our Services' :
            location.pathname === '/products' ? 'Our Products' :
            location.pathname === '/about' ? 'About Us' :
            location.pathname === '/blog' ? 'Our Blog' :
            location.pathname === '/contact' ? 'Contact Us' : 'Page'
          }
          description={
            location.pathname === '/services' ? 'Discover our comprehensive range of lightning-fast software development services, powerful SaaS products, and intelligent AI-driven solutions designed to accelerate your digital growth.' :
            location.pathname === '/products' ? 'Explore our products showcasing our expertise in AI solutions, web development, and platform engineering across diverse industries.' :
            location.pathname === '/about' ? 'Learn about Hyperpara, a hybrid software company built for the next generation of digital growth, delivering cutting-edge solutions at hyperspeed.' :
            location.pathname === '/blog' ? 'Stay updated with the latest insights, trends, and innovations in AI, software development, and digital transformation.' :
            location.pathname === '/contact' ? 'Get in touch with our team of experts to discuss your project requirements and discover how we can accelerate your digital transformation.' : 'Page description'
          }
        />
      )}
      <Routes>
        <Route Component={Homepage} path='/'/>
        <Route Component={ServicesPage} path='/services'/>
        <Route Component={PortfolioPage} path='/products'/>
        <Route Component={AboutPage} path='/about'/>
        <Route Component={BlogPage} path='/blog'/>
        <Route Component={ContactPage} path='/contact'/>
        <Route Component={ProjectDetail} path='/project/:projectId'/>
        <Route Component={ServiceDetail} path='/service/:serviceId'/>
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
