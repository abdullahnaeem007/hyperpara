import React, { useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import Background_pic from '../../assets/Homepage/SecondSection/Background_pic.png';
import { Link } from 'react-router-dom';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add email sending logic here or redirect to a thank you page
        alert('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const contactInfo = [
        {
            title: 'Email',
            value: 'info@hyperpara.co',
            description: 'Get in touch for project inquiries'
        },
        {
            title: 'Phone',
            value: '+33 1 23 45 67 89',
            description: 'Speak directly with our team'
        },
        {
            title: 'Office',
            value: 'Paris, France',
            description: 'Visit our headquarters'
        }
    ];

    return (
        <div className='w-full min-h-screen relative flex flex-col items-center bg-brand-bg'>
            <img
                src={Background_pic}
                className='w-full h-full object-cover absolute opacity-20'
                alt="Background"
            />
            <div className='w-full flex flex-col md:flex-row px-[1rem] md:px-[5rem] py-[4rem] z-10'>
                {/* Contact Form */}
                <div className='w-full md:w-[60%] flex flex-col space-y-6 pr-[0rem] md:pr-[3rem]'>
                    <div className='space-y-4'>
                        <h2 className='text-[2rem] md:text-[2.5rem] font-light text-green-400'>Let's Build Something Amazing</h2>
                        <p className='text-[0.9rem] md:text-[1rem] font-light text-[#dad4e4]'>
                            Ready to accelerate your digital growth? Tell us about your project and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label className='block text-[0.9rem] text-white mb-2'>Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-card-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors duration-300'
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label className='block text-[0.9rem] text-white mb-2'>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-card-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors duration-300'
                                    placeholder="your.email@company.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-[0.9rem] text-white mb-2'>Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className='w-full px-4 py-3 bg-card-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors duration-300'
                                placeholder="Your company name"
                            />
                        </div>
                        <div>
                            <label className='block text-[0.9rem] text-white mb-2'>Project Details *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className='w-full px-4 py-3 bg-card-bg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent transition-colors duration-300 resize-none'
                                placeholder="Tell us about your project, timeline, and goals..."
                            />
                        </div>
                        <button
                            type="submit"
                            className='flex space-x-[1rem] bg-brand-accent px-[2.2rem] py-[0.8rem] rounded-full text-[1rem] text-brand-bg hover:bg-opacity-90 transition-all duration-300'
                        >
                            <span>Send Message</span>
                            <BsArrowUpRightCircle size='1rem' />
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className='w-full md:w-[40%] flex flex-col space-y-8 mt-[3rem] md:mt-0'>
                    <div className='space-y-4'>
                        <h3 className='text-[1.5rem] font-semibold text-green-400'>Get in Touch</h3>
                        <p className='text-[0.9rem] text-[#dad4e4]'>
                            Whether you're ready to start your project or just want to learn more about our services, we're here to help.
                        </p>
                    </div>

                    <div className='space-y-6'>
                        {contactInfo.map((info, index) => (
                            <div key={index} className='space-y-2'>
                                <h4 className='text-[1.1rem] font-semibold text-brand-accent'>{info.title}</h4>
                                {info.title === 'Email' ? (
                                    <Link
                                        to={`mailto:${info.value}`}
                                        className='text-[1rem] text-white hover:text-brand-accent transition-colors duration-300'
                                    >
                                        {info.value}
                                    </Link>
                                ) : info.title === 'Phone' ? (
                                    <Link 
                                        to={`tel:${info.value.replace(/\s/g, '')}`}
                                        className='text-[1rem] text-white hover:text-brand-accent transition-colors duration-300'
                                    >
                                        {info.value}
                                    </Link>
                                ) : (
                                    <p className='text-[1rem] text-white'>{info.value}</p>
                                )}
                                <p className='text-[0.8rem] text-[#dad4e4]'>{info.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-[1.1rem] font-semibold text-brand-accent'>Response Time</h4>
                        <p className='text-[0.9rem] text-[#dad4e4]'>
                            We typically respond to all inquiries within 24 hours. For urgent projects, please mention "URGENT" in your message.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
