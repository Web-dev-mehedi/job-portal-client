import React, { useEffect, useState } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import UseForJobs from "../../components/Hooks/UseForJobs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import {
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../components/Hooks/UseAxiosSecure";



//
const MyApplications = () => {
  //
  const { user } = UseAuth();
  //
  const { JobsData } = UseForJobs();
  // 
  const axiosSecure = UseAxiosSecure()
  //
  const [appliedIds, setappliedIds] = useState("");
  //
  const [myApplydJob, setMyApplydJob] = useState([]);
  //
  const [myApplications, setMyapplications] = useState([]);
  //
  const [refresh, setRefresh] = useState(false);
  //
  useEffect(() => {

    // const fetchData = async () => {
    //   try {
    //     const res = await fetch(
    //       `https://job-portal-server-zeta.vercel.app/applications/${user?.email}`
    //     );
    //     const application = await res.json();
    //     const appliedIds = application.map((i) => i.job_id);
    //     setappliedIds(appliedIds.join(","));
    //     //
    //     setMyapplications(application.map((i) => i));
    //     //
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
    // // call the func
    // fetchData();


    // 2nd methood

// axios.get(`http://localhost:5000/applications/${user?.email}`,{
//   withCredentials:true,
// })
// .then(res=>{
//   console.log(res.data);
//   const appliedIds = res?.data?.map((i) => i.job_id);
//       setappliedIds(appliedIds.join(","));
//       //
//       setMyapplications(res?.data?.map((i) => i));
// } )

//3rd methood using custom hooks for secure api url
axiosSecure.get(`/applications/${user?.email}`)
.then(res=>{
  const appliedIds = res?.data?.map((i) => i.job_id);
      setappliedIds(appliedIds.join(","));
      //
      setMyapplications(res?.data?.map((i) => i));
} )



    //  fetch applicant data by ids
    fetch(`https://job-portal-server-zeta.vercel.app/applications/me?ids=${appliedIds}`)
      .then((res) => res.json())
      .then((data) => setMyApplydJob(data));

  }, [user?.email, JobsData, appliedIds, refresh]);

  // for delete
  const handleDelete = (id) => {
    axios
      .delete(`https://job-portal-server-zeta.vercel.app/application/${id}`)
      .then((data) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //
  return (
    <div className="w-11/12 mx-auto space-y-5">
      {myApplications.map((job) => (
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
                {myApplydJob.find((i) => i._id === job?.job_id)?.jobName}
              </h2>
              <p className="text-green-600 font-medium">
                {myApplydJob.find((i) => i._id === job?.job_id)?.companyName}
              </p>
              <div className="flex items-center justify-start text-gray-500 text-sm gap-x-5 gap-y-2 mt-1 flex-wrap ">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  {myApplydJob.find((i) => i._id === job?.job_id)?.location}
                </span>
                <span className="flex items-center">
                  <FaPhone className="mr-1" />
                  {myApplydJob.find((i) => i._id === job?.job_id)?.phone}
                </span>
              </div>
            </div>
          </div>

          {/* middle*/}
          <div>
            <div className="flex flex-col gap-2 max-w-xs">
              <h2
                title={job?.applicantEmail}
                className="text-xl font-semibold text-gray-800 whitespace-nowrap overflow-ellipsis overflow-hidden"
              >
                {job?.applicantEmail}
              </h2>
              <a href={job?.resumeLinks} className="text-green-600 font-medium">
                Resume Links
              </a>
              <Link
                to={`/jobs/details/${
                  myApplydJob.find((i) => i._id === job?.job_id)?._id
                }`}
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                  Job Details <FaExternalLinkAlt className="mr-2" />
                </button>
              </Link>
            </div>
          </div>
          {/* Right Section: Salary and Apply Button */}
          <div className="flex flex-col sm:items-end gap-2">
            <button
              className={`${job?.isPending? "bg-red-200 hover:bg-red-400 transition-all duration-200 hover:text-white" :"bg-green-200 hover:bg-green-400 transition-all duration-200 hover:text-white"} mt-2 px-4 py-1  text-slate-600 font-medium rounded-lg cursor-grabbing`}
            >
               {job?.isPending ? <p className="text-sm capitalize font-normal">pending <span className="bg-red-600 w-2 h-2 inline-block rounded-full ml-1"></span></p> : <p className="text-sm capitalize font-normal flex justify-start items-center gap-2">Accepted <IoCheckmarkDoneSharp /></p>}
            </button>
            <button
              onClick={() => handleDelete(job?._id)}
              className="mt-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
            >
              Cancel Application
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyApplications;
