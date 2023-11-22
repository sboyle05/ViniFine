import React, { useState } from 'react';
import '../../tailwind.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gold text-white p-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold"><img src='https://d2e39dj8x3uchh.cloudfront.net/vinifinelogo.png' alt='logo' className='h-22'/></span>
        </div>

        <button
          className="text-white inline-flex p-3 rounded lg:hidden ml-auto hover:text-white outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

        <div className={`w-full lg:inline-flex lg:flex-grow lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <div className="lg:inline-flex text-white text-lg font-bold lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a href="/" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-700 hover:text-white">
              Home
            </a>
            <a href="services" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-700 hover:text-white">
              Services
            </a>
            <a href="about" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-700 hover:text-white">
              About
            </a>
            <a href="contact" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:bg-gray-700 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
