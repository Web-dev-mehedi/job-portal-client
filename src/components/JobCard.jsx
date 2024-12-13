import React from 'react';
import { FaDollarSign, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobCard = ({ job , JobData}) => {
  const {_id,company, location , position , job_type , skills , salary}  = job || JobData || {}
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="p-4">
        {/* Company Logo and Name */}
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/40" alt="company logo" className="w-12 h-12 rounded-full" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{company}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="mb-4">
          <h4 className="text-xl font-semibold">{position}</h4>
          <p className="text-sm text-gray-500">Job Type: {job_type}</p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <ul className="flex flex-wrap gap-2 text-xs">
          
             {skills?.map((skill, index) => (
              <li key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {skill}
              </li>
            ))}
           
          </ul>
        </div>

        {/* Salary and Apply Button */}
        <div className="flex justify-between items-center flex-wrap gap-6 ">
          <div className="flex items-center text-gray-700">
            <FaDollarSign className="mr-1" />
            <span>{salary}</span>
          </div>
          <Link
            to={`/jobs/details/${_id}`}
            className="inline-flex items-center text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <FaExternalLinkAlt className="mr-2" />
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
