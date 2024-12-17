import React from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../../components/JobCard";
import Loader from "../../components/Loader";

const SearchJobs = () => {
  const { state } = useLocation();

  return (
       <>
        { state.data.length > 0 ? <>
     {state?.data ?
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-4">
         {state?.data?.map((job) => (
           <JobCard filteredJobs={job} />
         ))}
       </div>:<Loader/>
     }
    </>:<p className="text-2xl text-red-500 font-mono text-center py-20">No jobs here for this category</p>

        }
       </>
  );
};

export default SearchJobs;
