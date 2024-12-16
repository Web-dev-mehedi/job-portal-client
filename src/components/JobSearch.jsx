import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseForJobs from "./Hooks/UseForJobs";
import Loader from "./Loader";

const JobSearch = () => {
  //
  const navigate = useNavigate();
  const{ loader,setLoader,JobsData} = UseForJobs();
//   
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobCategory: "",
    jobLocation: "",
  });
  //
  const handleOnChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(false)
    //
    const fetchCombinedData = async () => {
      try {
        await axios
          .get("https://job-portal-server-zeta.vercel.app/search", {
            params: {
              jobTitle: formData?.jobTitle,
              jobCategory: formData?.jobCategory,
              jobLocation: formData?.jobLocation,
            },
          })
          .then((res) => {
            navigate("/search/jobs",{state:{data:res.data}});
            setLoader(true)
          });
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchCombinedData();
  };
// 
  return (
    <div className=" flex items-center justify-center py-28">
      {/* Main Content */}
      <div className="text-center px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-green-500">{JobsData.length}</span> job available
        </h1>
        <p className="text-white mb-8 text-sm md:text-base">
          Find great jobs to build your bright career. Have many job
          opportunities on this platform.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            <input
              type="text"
              name="jobTitle"
              placeholder="Job title or keywords"
              className="input input-bordered w-full md:w-1/3"
              value={formData?.jobTitle}
              onChange={handleOnChanges}
            />
            <select
              name="jobLocation"
              onChange={handleOnChanges}
              value={formData?.jobLocation}
              className="select select-bordered w-full md:w-1/4"
            >
              <option value="">Choose City</option>
              <option value="Texas">Texas</option>
              <option value="California">California</option>
              <option value="New-York">New York</option>
            </select>
            {/* category search */}
            <select
              name="jobCategory"
              onChange={handleOnChanges}
              value={formData?.jobCategory}
              className="select select-bordered w-full md:w-1/3"
            >
              <option value="">Category</option>
              <option value="Accounting-Finance">Accounting/Finance</option>
              <option value="Production-Operation">Production/Operation</option>
              <option value="Education-Training">Education/Training</option>
              <option value="Design-Creative">Design/Creative</option>
              <option value="Health-&-Fitness">Health & Fitness</option>
              <option value="Research-Consultancy">Research/Consultancy</option>
              <option value="Engineer-Architects">Engineer/Architects</option>
              <option value="Telecommunication">Telecommunication</option>
              <option value="Data-Entry-Operator">Data Entry/Operator</option>
              <option value="Marketing-Sales">Marketing/Sales</option>
              <option value="Security-Support-Service">
                Security/Support Service
              </option>
            </select>
        
              <button
                type="submit"
                className="bg-green-500 w-full mx-auto px-6 py-4 rounded-md  md:w-auto text-white"
              >
               {!loader? <p className="w-4 h-4 mx-auto flex justify-center items-center px-3 font-medium text-sm"><Loader/></p>: <IoSearch />}
              </button>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSearch;
