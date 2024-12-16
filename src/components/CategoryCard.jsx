import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, count }) => {
  //
  return (
    <Link to={`/jobs/${category.split(/[\s/]+/).join("-")}`}>
      <div
        className="hover:bg-green-500 hover:text-white border border-gray-200 rounded-lg  p-4 bg-gray-100 transition-all ease-in-out duration-300"
      >
        <h3 className="text-lg font-semibold text-center">{category}</h3>
        <p className="text-center text-gray-500">{count} Jobs</p>
      </div>
    </Link>
  );
};
export default CategoryCard;
