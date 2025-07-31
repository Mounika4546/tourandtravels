import React from 'react';
import { Link } from 'react-router-dom';

// Importing images correctly
import tourImg01 from '../assets/images/tour-img01.jpg';
import tourImg02 from '../assets/images/tour-img02.jpg';
import tourImg03 from '../assets/images/tour-img03.jpg';
import tourImg04 from '../assets/images/tour-img04.jpg';
import tourImg05 from '../assets/images/tour-img05.jpg';
import tourImg06 from '../assets/images/tour-img06.jpg';
import tourImg07 from '../assets/images/tour-img07.jpg';
import tourImg08 from '../assets/images/tour.jpg';

const FeaturedTourPlans = () => {
  const tours = [
    {
      id: 1,
      imgSrc: tourImg01,
      location: 'Paris, France',
      rating: 4.5,
      address: '123 Tour Street, Paris, France',
      price: '$1200',
    },
    {
      id: 2,
      imgSrc: tourImg02,
      location: 'New York, USA',
      rating: 4.0,
      address: '456 Tour Avenue, New York, USA',
      price: '$800',
    },
    {
      id: 3,
      imgSrc: tourImg03,
      location: 'Tokyo, Japan',
      rating: 4.7,
      address: '789 Tour Road, Tokyo, Japan',
      price: '$1500',
    },
    {
      id: 4,
      imgSrc: tourImg04,
      location: 'Sydney, Australia',
      rating: 4.3,
      address: '101 Tour Lane, Sydney, Australia',
      price: '$1100',
    },
    {
      id: 5,
      imgSrc: tourImg05,
      location: 'Rome, Italy',
      rating: 4.6,
      address: '202 Tour Boulevard, Rome, Italy',
      price: '$1300',
    },
    {
      id: 6,
      imgSrc: tourImg06,
      location: 'London, UK',
      rating: 4.2,
      address: '303 Tour Drive, London, UK',
      price: '$900',
    },
    {
      id: 7,
      imgSrc: tourImg07,
      location: 'Dubai, UAE',
      rating: 4.8,
      address: '404 Tour Street, Dubai, UAE',
      price: '$1600',
    },
    {
      id: 8,
      imgSrc: tourImg08,
      location: 'Barcelona, Spain',
      rating: 4.4,
      address: '505 Tour Road, Barcelona, Spain',
      price: '$1000',
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Our Featured Tour Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-yellow-100 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={tour.imgSrc} alt={`Tour ${tour.id}`} className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-yellow-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2a5 5 0 00-5 5v4a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5zm-3 5a3 3 0 116 0v4a3 3 0 01-6 0V7zm6 12H9a3 3 0 00-3 3v1h12v-1a3 3 0 00-3-3z" />
                  </svg>
                  <span className="text-gray-700">{tour.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">{'★'.repeat(Math.floor(tour.rating))}</span>
                  <span className="text-gray-600 ml-2">{tour.rating}</span>
                </div>
                <p className="text-gray-800 mb-4">{tour.address}</p>
                <p className="text-gray-800 mb-4 text-xl font-bold">{tour.price} / per person</p>
                <Link
                  to="/book"
                  className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTourPlans;
