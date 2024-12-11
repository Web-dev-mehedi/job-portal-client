import React from 'react';

const CategoryCard = ({ category, count }) => {
    return (
      <div className="hover:bg-green-500 hover:text-white border border-gray-200 rounded-lg  p-4 bg-gray-100 transition-all ease-in-out duration-300">
        <h3 className="text-lg font-semibold text-center">{category}</h3>
        <p className="text-center text-gray-500">{count} Jobs</p>
      </div>
    );
  };
export default CategoryCard  