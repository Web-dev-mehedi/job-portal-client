import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-green-500">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mt-2">
              The page you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-lg hover:bg-green-600 transition"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      );
};

export default NotFound;