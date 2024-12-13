import React from 'react';
import UseForJobs from '../../components/Hooks/UseForJobs';
import JobCard from '../../components/JobCard';

const AllJobs = () => {
    const {JobsData} = UseForJobs();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-8 py-12">
             {JobsData.map(jobData => <JobCard JobData={jobData}/>)}
        </div>
    );
};

export default AllJobs;