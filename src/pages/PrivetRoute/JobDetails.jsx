import React, { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import UseAuth from "../../components/Hooks/UseAuth";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { PiCurrencyInr } from "react-icons/pi";

const JobDetails = () => {
  const { id } = useParams();
  //
  const { user, userFromDb } = UseAuth();
  //
  const [details, setDetails] = useState({});
  //
  const {
    jobName,
    companyName,
    phone,
    companyImage,
    description,
    jobCategory,
    experience,
    qualification,
    level,
    applicationStartDate,
    applicationLastDate,
    statement,
    benefits,
    workingTimes,
    location,
    jobType,
    skills,
    salaryRange,
    tags,
  } = details || {};
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://job-portal-server-zeta.vercel.app/jobs/details/${id}`);
        const result = await res.json();
        setDetails(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    // call the func
    fetchData();
  }, []);
  return (
    <div className="w-11/12 mx-auto space-y-8">
      <div className="flex flex-wrap items-center justify-between bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-md">
        {/* Left Section: Logo and Details */}
        <div className="flex items-center space-x-4 space-y-4">
          {/* Placeholder Image */}
          <img
            src={companyImage || "https://via.placeholder.com/64"}
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />

          {/* Job Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{jobName}</h2>
            <p className="text-green-600 font-medium">{companyName}</p>
            <div className="flex gap-2 items-center text-gray-500 text-sm sm:space-x-4 mt-1 flex-wrap">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                {location}
              </span>
              <span className="flex items-center">
                <FaPhone className="mr-1" />
                {phone}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Salary and Apply Button */}
        <div className="flex gap-2 flex-col sm:items-end mt-4">
          <div className="flex items-center text-gray-700">
            {salaryRange?.currency === "USD" && (
              <FaDollarSign className="mr-1" />
            )}
            {salaryRange?.currency === "BDT" && (
              <FaBangladeshiTakaSign className="mr-1" />
            )}
            {salaryRange?.currency === "INR" && (
              <PiCurrencyInr className="mr-1" />
            )}
            <span>
              {salaryRange?.min} - {salaryRange?.max} / Monthly
            </span>
          </div>
          {userFromDb?.find(
            (i) => i.userRole === "Candidate" && i.userEmail === user?.email
          ) ? (
            <Link to={`/application/apply/${id}`}>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                Apply Now
              </button>
            </Link>
          ) : (
            <Link to={`/register`}>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                Become a Candidate
              </button>
            </Link>
          )}
        </div>
      </div>
      {/*  */}
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Job Description */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Description
          </h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Educational Requirements
          </h3>
          <p className="text-gray-600">{qualification}</p>
        </div>
        {/* Right Section: Summary and Share */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          {/* Summary */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
          <ul className="text-gray-600 space-y-3">
            <li>
              <strong>Job Type:</strong>
              {jobType}
            </li>
            <li>
              <strong>Category:</strong> {jobCategory}
            </li>
            <li>
              <strong>Posted:</strong> 20 June, 2022
            </li>
            <li className="flex justify-start items-center gap-2">
              <strong>Salary:</strong>
              <div className="flex items-center text-gray-700">
                {salaryRange?.currency === "USD" && (
                  <FaDollarSign className="mr-1" />
                )}
                {salaryRange?.currency === "BDT" && (
                  <FaBangladeshiTakaSign className="mr-1" />
                )}
                {salaryRange?.currency === "INR" && (
                  <PiCurrencyInr className="mr-1" />
                )}
                <span>
                  {salaryRange?.min} - {salaryRange?.max} / Monthly
                </span>
              </div>
            </li>
            <li>
              <strong>Experience:</strong> {experience} years
            </li>
            <li>
              <strong>Qualification:</strong> {qualification}
            </li>
            <li>
              <strong>Level:</strong> {level}
            </li>
            <li>
              <strong>Applied:</strong> 26 Applicants
            </li>
            <li>
              <strong>Application Start:</strong>{" "}
              <span className="text-red-500">{applicationStartDate}</span>
            </li>
            <li>
              <strong>Application End:</strong>{" "}
              <span className="text-red-500">{applicationLastDate}</span>
            </li>
          </ul>

          {/* Share */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Share With
            </h4>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
              <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-700" />
              <FaPinterest className="w-6 h-6 cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          {/* Working Hours */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Working Times
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            {workingTimes?.map((workingTime, i) => (
              <li key={i}>{workingTime}</li>
            ))}
          </ul>

          {/* Benefits */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            {benefits?.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>

          {/* Statement */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Statement
          </h2>
          <p className="text-gray-600 mb-6">{statement}</p>

          {/* Apply Now Button */}
          {userFromDb?.find(
            (i) => i.userRole === "Candidate" && i.userEmail === user?.email
          ) ? (
            <Link to={`/application/apply/${id}`}>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                Apply Now
              </button>
            </Link>
          ) : (
            <Link to={`/register`}>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                Become a Candidate
              </button>
            </Link>
          )}
        </div>

        {/* Right Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
          {/*  */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
