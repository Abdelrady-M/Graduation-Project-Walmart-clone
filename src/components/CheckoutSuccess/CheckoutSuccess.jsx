import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-3xl font-bold mb-6">Your checkout was successful!</h1>
        <Link to="/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <RiArrowLeftLine className="inline-block mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
