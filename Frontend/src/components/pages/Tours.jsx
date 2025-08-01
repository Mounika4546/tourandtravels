import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Import images properly (adjust path if Tours.jsx is not in src/components/pages)
import img1 from '../../assets/images/tour-img01.jpg';
import img2 from '../../assets/images/tour-img02.jpg';
import img3 from '../../assets/images/tour-img03.jpg';
import img4 from '../../assets/images/tour-img04.jpg';
import img5 from '../../assets/images/tour-img05.jpg';
import img6 from '../../assets/images/tour-img06.jpg';
import img7 from '../../assets/images/tour-img07.jpg';

const Tours = () => {
  const tourData = [
    { imgSrc: img1, location: 'Paris', rating: '4.5', price: '1200 INR' },
    { imgSrc: img2, location: 'New York', rating: '4.7', price: '1500 INR' },
    { imgSrc: img3, location: 'Tokyo', rating: '4.6', price: '1300 INR' },
    { imgSrc: img4, location: 'Sydney', rating: '4.8', price: '1400 INR' },
    { imgSrc: img5, location: 'London', rating: '4.4', price: '1100 INR' },
    { imgSrc: img6, location: 'Rome', rating: '4.5', price: '1250 INR' },
    { imgSrc: img7, location: 'Dubai', rating: '4.9', price: '1600 INR' },
    { imgSrc: img1, location: 'Istanbul', rating: '4.3', price: '1150 INR' } // reused img1
  ];

  return (
    <main className="bg-yellow-50 py-16 px-4">
      {/* Heading Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-800">These Are Our Tours and Plans</h1>
      </section>

      {/* Tours Cards Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tourData.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={tour.imgSrc}
                alt={`Tour ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-center text-white">
                  <h2 className="text-xl font-semibold mb-2">{tour.location}</h2>
                  <p className="text-yellow-600 mb-2">Rating: {tour.rating}</p>
                  <p className="text-gray-300 mb-4">Price: {tour.price} / per person</p>
                  <Link
                    to="/book"
                    className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Tours;
