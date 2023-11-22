import React, { useState } from 'react';
import '../../tailwind.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
    <nav className="bg-transparent text-white p-3 fixed w-full z-50">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <span className="text-xl font-semibold">
          <img
            src='https://d2e39dj8x3uchh.cloudfront.net/vinifinelogo.png'
            alt='logo'
            className='h-22 ml-4'
          />
        </span>
      </div>

      <button
        className="text-white inline-flex p-3 rounded lg:hidden ml-auto hover:text-white outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
				</button>

				 {/* For large screens, the links are always visible */}
         <div className="hidden lg:flex w-auto lg:items-center lg:space-x-4">
          <a href="/" className="px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold">Home</a>
          <a href="services" className="px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold">Services</a>
          <a href="about" className="px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold">About</a>
          <a href="contact" className="px-3 py-2 rounded hover:bg-gray-700 hover:text-white font-bold">Contact</a>
        </div>

        {/* For smaller screens, the dropdown is controlled by the isOpen state */}
        <div className={`absolute top-full left-0 right-0 w-9/10 lg:hidden ${isOpen ? 'flex' : 'hidden'} flex-col bg-blackish bg-opacity-100 p-4 mt-px mr-4 ml-4 rounded-lg`}>
          <a href="/" className="px-3 py-2 rounded font-bold hover:bg-gray-700 hover:text-white text-center">Home</a>
          <a href="services" className="px-3 py-2 font-bold rounded hover:bg-gray-700 hover:text-white text-center ">Services</a>
          <a href="about" className="px-3 py-2 font-bold rounded hover:bg-gray-700 hover:text-white text-center ">About</a>
          <a href="contact" className="px-3 py-2 font-bold rounded hover:bg-gray-700 hover:text-white text-center ">Contact</a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
