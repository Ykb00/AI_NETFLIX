import React from 'react';
import ErrorImage from '../assets/error_img.png'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img
          src={ErrorImage} 
          alt="Error Illustration"
          className="mb-6 rounded-full"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
        <p className="text-gray-600">We're sorry, but it seems like there was an error.</p>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
