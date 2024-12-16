import React, { useEffect, useState } from "react";
import UseForJobs from "../../components/Hooks/UseForJobs";
import { useParams } from "react-router-dom";
import JobCard from "../../components/JobCard";

const CategoriesJobs = () => {
  const { JobsData } = UseForJobs();
  const { cate } = useParams();
  const [filterdJobs, setFilterdJobs] = useState([]);

// 
  useEffect(() => {
    setFilterdJobs(JobsData?.filter((job) => job.jobCategory === cate));
  }, [cate, JobsData]);
  //
  return (
    <div className="w-11/12 mx-auto py-20">
       {
        filterdJobs.length > 0 ?  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterdJobs?.map((job) => (
          <JobCard key={job?._id} cateJobs={job} />
        ))}
      </div> : <p className="text-2xl text-center font-medium text-red-300">No Jobs From This Category</p>
       }
    </div>
  );
};

export default CategoriesJobs;
