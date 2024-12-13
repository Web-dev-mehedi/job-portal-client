import React, { useContext } from 'react';
import { JobsContext } from '../../context-provider/JobsDataProvider';

const UseForJobs = () => {
    const JobContext = useContext(JobsContext)
    return JobContext
};

export default UseForJobs;