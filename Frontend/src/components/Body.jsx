import React from 'react';
import FeaturedTourPlans from './FeaturedTourPlans';
import Experience from './Experience';
import Gallery from './Gallery';

// ✅ Correct image & video imports
import heroImg1 from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';

const Body = () => {
  return (
    <main className="bg-gray-100 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Explore Amazing Tours</h1>
          <p className="text-xl mb-6">Discover breathtaking destinations with our expert-guided tours.</p>
          <a href="/tours" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
            Explore Tours
          </a>
        </div>
      </section>

      {/* Professional Cards Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
          {/* Text Description */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-6">Our Tours</h2>
            <p className="text-lg mb-4">We offer a range of unique tours that cater to every taste. From adventure to leisure, our tours are designed to provide an unforgettable experience. Our professional guides ensure that you enjoy every moment of your trip.</p>
            <p className="text-lg">Choose from our wide variety of destinations and discover the world in a new light.</p>
          </div>

          {/* Cards Section */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 - Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={heroImg1} alt="Tour 1" className="w-full h-full object-cover" />
            </div>

            {/* Card 2 - Video */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <video controls className="w-full h-full object-cover">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Card 3 - Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={heroImg2} alt="Tour 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-800">We Offer Our Best Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-full mb-4">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a5 5 0 00-5 5v4a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5zm-3 5a3 3 0 116 0v4a3 3 0 01-6 0V7zm6 12H9a3 3 0 00-3 3v1h12v-1a3 3 0 00-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Tour Guide</h3>
              <p>Our expert guides ensure a rich and immersive experience, providing insightful information and a personalized touch to every tour.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-full mb-4">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a5 5 0 00-5 5v4a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5zm-3 5a3 3 0 116 0v4a3 3 0 01-6 0V7zm6 12H9a3 3 0 00-3 3v1h12v-1a3 3 0 00-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cheapest Tours</h3>
              <p>Enjoy our affordable tour packages without compromising on quality. We offer the best deals to suit every budget.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-full mb-4">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a5 5 0 00-5 5v4a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5zm-3 5a3 3 0 116 0v4a3 3 0 01-6 0V7zm6 12H9a3 3 0 00-3 3v1h12v-1a3 3 0 00-3-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Plan of Tours</h3>
              <p>We provide comprehensive tour plans with all details covered. From itineraries to accommodations, everything is well-organized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Search for Tours</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a tour..."
              className="w-full p-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 w-6 text-gray-500 hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M13 10a3 3 0 100-6 3 3 0 000 6zM10 10a6 6 0 1111.55 6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      <FeaturedTourPlans />
      <Experience />
      <Gallery />
    </main>
  );
};

export default Body;
