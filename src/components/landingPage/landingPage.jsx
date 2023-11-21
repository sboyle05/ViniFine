// Import React and Tailwind's CSS directly
import React from 'react';
import '../../tailwind.css';

const LandingPage = () => {
	return (
		<section className='min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
			<div className='flex flex-col justify-center items-center h-full'>
        <div className='bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-2xl'>
          <h1 className='text-4xl font-bold mb-6 text-center'>ViniFine</h1>
			<p className='text-md md:text-lg text-gray-700 max-w-prose mb-4'>
				At ViniFine, we offer a comprehensive range of equipment rentals and
				specialized services tailored to the winemaking industry. Our offerings
				include innovative solutions such as Custom Filtration, VA (Volatile
				Acidity) Reduction, Smoke Taint Removal, and pH Adjustment, specifically
				designed for wineries. We stand out in the market for our commitment to
				enhancing wine quality and production efficiency. Our state-of-the-art
				equipment and expert consultation make us an essential resource for
				wineries looking to improve their processes and product quality. Focused
				on customer satisfaction and technological advancement, ViniFine is your
				key partner in achieving excellence in the art of winemaking.
			</p>
			<p className='mb-4'>
				For more information on how we can assist with your winemaking needs,
				please visit our Services page. If you're ready to enhance your wine
				production or have any questions, reach out to us on our Contact
				page—we're here to help.
			</p>
      </div>
      </div>
		</section>
	);
};

export default LandingPage;
