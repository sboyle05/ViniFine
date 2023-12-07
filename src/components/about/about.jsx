import React from 'react';
import './about.css';

const About = () => {
	return (
		<section className='aboutContainer'>
			<div className='mt-28 w-full h-full flex justify-center items-center px-4 sm:px-6 lg:px-8'>
				<div className='bg-blackish bg-opacity-90 p-4 rounded-lg max-w-2xl'>
					<h1 className='text-3xl text-white font-bold mb-2 text-center'>
						About
					</h1>
					<p className='mb-4 text-white'>
						Leonard J. Law is a 28-year Army Veteran who has skillfully
						transitioned his strategic and operational acumen into the
						viticulture and wine industry. As the owner and winemaker of
						Lacewing Cellars, he has earned numerous awards for his wines,
						reflecting his dedication and expertise in this field. Expanding his
						entrepreneurial spirit, Leonard now leads ViniFine, a company
						specializing in equipment rentals, filtration services, and
						consulting for wineries. His remarkable journey from a military
						leader to award-winning wine maker showcases his diverse skill set
						and his commitment to excellence in every endeavor.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
