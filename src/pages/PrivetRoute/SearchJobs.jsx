import React from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../../components/JobCard";
import Loader from "../../components/Loader";

const SearchJobs = () => {
  const { state } = useLocation();

  return (
    <>
     {state?.data ?
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-4">
         {state?.data?.map((job) => (
           <JobCard filteredJobs={job} />
         ))}
       </div>:<Loader/>
     }
    </>
  );
};

export default SearchJobs;
