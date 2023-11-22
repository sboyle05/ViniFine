// Import React and Tailwind's CSS directly
import React from 'react';
import '../../tailwind.css';

const LandingPage = () => {
	return (

       <div className='mt-28 w-full h-full flex justify-center items-center px-4 sm:px-6 lg:px-8'>
        <div className='bg-black bg-opacity-50 p-4 rounded-lg max-w-2xl'>
        <h2 className='text-3xl text-white font-bold mb-2 text-center'>
            GRAPES, BARRELS, WINE
          </h2>
          <h2 className='text-2xl text-white font-bold mb-2 text-center'>
            MAKING SURE THIS IS ALL YOUR CONSUMER EVER THINKS ABOUT
          </h2>

					<p className='mb-4 text-white'>
						For more information on how we can assist with your winemaking
						needs, please visit our Services page. If you're ready to enhance
						your wine production or have any questions, reach out to us on our
						Contact page—we're here to help.
					</p>
				</div>
			</div>

	);
};

export default LandingPage;
