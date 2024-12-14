import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import UseAuth from "../../components/Hooks/UseAuth";

const JobDetails = () => {
  const { id } = useParams();
  // 
  const {user,userFromDb} = UseAuth();
  //
  const [details, setDetails] = useState({});
  //
  const { company, location, position, job_type, skills, salary } =
    details || {};
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/jobs/details/${id}`);
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
            src="https://via.placeholder.com/64"
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />

          {/* Job Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{position}</h2>
            <p className="text-green-600 font-medium">{company}</p>
            <div className="flex gap-2 items-center text-gray-500 text-sm sm:space-x-4 mt-1 flex-wrap">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                {location}
              </span>
              <span className="flex items-center">
                <FaPhone className="mr-1" />
                +88 456 796 457
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Salary and Apply Button */}
        <div className="flex gap-2 flex-col sm:items-end mt-4">
          <p className="text-xl font-bold text-gray-800">{salary}</p>
         {userFromDb?.find(i=> i.userRole === "Candidate" && i.userEmail === user?.email) ?
           <Link to={`/application/apply/${id}`}>
           <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
             Apply Now
           </button>
         </Link>:<Link to={`/register`}>
           <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
               Become a Candidate
           </button>
         </Link>
         }
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
          <p className="text-gray-600 mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using content publishing
            packages.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Developing custom themes (WordPress.org & ThemeForest Standards)
            </li>
            <li>Creating reactive website designs</li>
            <li>Working under strict deadlines</li>
            <li>Develop page speed optimized themes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Having approved themes on ThemeForest will be given high
              preference.
            </li>
            <li>Strong knowledge of WordPress Theme Standards.</li>
            <li>
              Ability to convert HTML templates into fully functional WordPress
              themes.
            </li>
            <li>
              Good knowledge in OOP PHP and front-end technologies like HTML,
              CSS, JS, jQuery.
            </li>
            <li>
              Moderate knowledge in WordPress Core APIs like options, metadata,
              REST, hooks, settings, etc.
            </li>
            <li>
              Ability to debug and fix bugs arising from other developer's code.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Educational Requirements
          </h3>
          <p className="text-gray-600">
            It doesn’t matter where you went to college or what your CGPA was as
            long as you are smart, passionate, ready to work hard, and have fun.
          </p>
        </div>

        {/* Right Section: Summary and Share */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          {/* Summary */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
          <ul className="text-gray-600 space-y-3">
            <li>
              <strong>Job Type:</strong>
              {job_type}
            </li>
            <li>
              <strong>Category:</strong> Development
            </li>
            <li>
              <strong>Posted:</strong> 20 June, 2022
            </li>
            <li>
              <strong>Salary:</strong> {salary}
            </li>
            <li>
              <strong>Experience:</strong> 5 Years
            </li>
            <li>
              <strong>Gender:</strong> Male or Female
            </li>
            <li>
              <strong>Qualification:</strong> BSC, MSC
            </li>
            <li>
              <strong>Level:</strong> Senior
            </li>
            <li>
              <strong>Applied:</strong> 26 Applicants
            </li>
            <li>
              <strong>Application End:</strong>{" "}
              <span className="text-red-500">20 November, 2022</span>
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
            Working Hours
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>8:00 AM - 5:00 PM</li>
            <li>Weekly: 5 days</li>
            <li>Weekend: Saturday, Sunday</li>
          </ul>

          {/* Benefits */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              Work in a flat organization where your voice is always heard.
            </li>
            <li>Provident fund.</li>
            <li>Gratuity.</li>
            <li>Medical fund.</li>
            <li>Having Corporate deals with multiple hospitals.</li>
            <li>Performance bonus.</li>
            <li>Increment: Yearly.</li>
            <li>Festival Bonus: 2 (Yearly).</li>
            <li>Lunch facilities: Full Subsidize.</li>
            <li>Unlimited tea, coffee & snacks.</li>
            <li>Annual tour.</li>
            <li>Team Outing.</li>
            <li>Marriage bonus and marriage leave.</li>
            <li>Paternity and maternity leave.</li>
            <li>Yearly family tour.</li>
            <li>Knowledge sharing session.</li>
            <li>Leave encashment facilities.</li>
            <li>Work with a vibrant team and amazing products.</li>
            <li>Table tennis (ping pong).</li>
            <li>Training and learning materials to improve skills.</li>
            <li>World-class work environment.</li>
          </ul>

          {/* Statement */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Statement
          </h2>
          <p className="text-gray-600 mb-6">
            Finate is committed to creating the happiest company working for and
            is proud to provide equal opportunity to all. All the qualified
            applicants will receive consideration for employment without regard
            to race, color, ancestry, religion, sex, sexual orientation, age,
            citizenship, marital status, disability, gender identity, or any
            other basis protected by federal, state, or local law.
          </p>

          {/* Apply Now Button */}
          {userFromDb?.find(i=> i.userRole === "Candidate" && i.userEmail === user?.email) ?
           <Link to={`/application/apply/${id}`}>
           <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
             Apply Now
           </button>
         </Link>:<Link to={`/register`}>
           <button className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
               Become a Candidate
           </button>
         </Link>
         }
        </div>

        {/* Right Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {["Cleaning", "Cleaning Agency", "Business", "Agency"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
