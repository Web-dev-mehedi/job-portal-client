import React, { useContext } from "react";
import { JobsContext } from "../context-provider/JobsDataProvider";
import JobCard from "../components/JobCard";
import CategorySection from "../components/CategorySection";
import Loader from "../components/Loader";

const Home = () => {
  const { JobsData } = useContext(JobsContext);
  return (
    <div>
      {/* category-section */}
      <section className="bg-white py-10 md:py-20">
         <CategorySection/>
      </section>
      {/* jobscard sections */}
      <section className="bg-[#F4F7F7] py-10 md:py-20">
        <div className="text-center space-y-4">
          <h2 className="text-black capitalize text-4xl font-semibold ">
            Recent Job Circulars
          </h2>
          <p className="text-sm text-slate-400">
            Many desktop publishing packages and web page editors
          </p>
        </div>
        {
          JobsData.length>0 ?  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-8 py-12">
          {JobsData?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div> : <div className="text-3xl font-mono font-semibold pt-40"><Loader/></div>
        }
      </section>
    </div>
  );
};

export default Home;
