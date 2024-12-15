import React, { useEffect } from "react";
import UseAuth from "../../../components/Hooks/UseAuth";
import UseForJobs from "../../../components/Hooks/UseForJobs";
import {
  FaDollarSign,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { PiCurrencyInr } from "react-icons/pi";
import axios from "axios";

const MyJobPosts = () => {
  const { user } = UseAuth();
  const { JobsData, jobAddedData, setJobAddedData } = UseForJobs();
  //
  useEffect(() => {
    setJobAddedData(JobsData.filter((job) => job.userEmail === user?.email));
  }, [JobsData, user]);

  //

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/my-jobs/${id}`)
      .then((data) => {
        console.log(data.data);
        setJobAddedData(jobAddedData.filter((job) => job._id !== id));
        alert("item deleted");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //
  return (
    <div className="w-11/12 mx-auto space-y-5">
      {jobAddedData.map((job) => (
        <div
          key={job?._id + "x"}
          className="flex flex-wrap gap-6 items-center justify-between bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-md"
        >
          {/* Left Section: Logo and Details */}
          <div className="flex items-center space-x-4">
            {/* Placeholder Image */}
            <img
              src={job?.companyImage || "https://via.placeholder.com/64"}
              alt="Company Logo"
              className="w-16 h-16 rounded-full"
            />

            {/* Job Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {job?.jobName}
              </h2>
              <p className="text-green-600 font-medium">{job?.companyName}</p>
              <p>{job?.jobCategory}</p>
            </div>
          </div>
          {/* Right Section: Salary and Apply Button */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center text-gray-700">
              <span className="text-lg mr-2 text-slate-500 font-medium">
                Salary Range :{" "}
              </span>
              {job?.salaryRange?.currency === "USD" && (
                <FaDollarSign className="mr-1" />
              )}
              {job?.salaryRange?.currency === "BDT" && (
                <FaBangladeshiTakaSign className="mr-1" />
              )}
              {job?.salaryRange?.currency === "INR" && (
                <PiCurrencyInr className="mr-1" />
              )}
              <span>
                {job?.salaryRange?.min} - {job?.salaryRange?.max} / Monthly
              </span>
            </div>
            <div className="flex gap-2 items-center justify-start flex-wrap">
              {/* jobDetails */}
                <Link to={`/jobs/details/${job?._id}`} className="mt-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                    Job Details <FaExternalLinkAlt className="mr-2" />
                  </button>
                </Link>

              {/*update  */}
              <Link to={`/jobs/update/${job?._id}`} state={jobAddedData.find(i=>i._id === job?._id)} className="mt-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                    Update Job <FaExternalLinkAlt className="mr-2" />
                  </button>
                </Link>
              {/* delete */}
              <button
                onClick={() => handleDelete(job?._id)}
                className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
              >
                Delete Job
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyJobPosts;
