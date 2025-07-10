import React from 'react';
import RatingsAndReviews from '../RatingsAndReviews';

const AboutUs = () => {
  return (
    <main className="bg-gray-100 py-8">
      {/* About Us Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl mb-6">We are a team of dedicated professionals committed to delivering the best travel experiences. Our expertise and passion for travel make us the perfect choice for your next adventure.</p>
          <h2>Iam Mounika kodavath , a full stack Developer....We provide u best ever services from our side and always thinks about the customer satisfaction</h2>
          {/* Team Section */}
         
        </div>
       
      </section>
      <RatingsAndReviews />
    </main>
  );
};

export default AboutUs;

