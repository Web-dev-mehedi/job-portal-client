
import React, { createContext, useEffect, useState } from "react";

//
export const JobsContext = createContext(null);
const JobsDataProvider = ({ children }) => {
  const [JobsData, setJobsData] = useState([]);
  const [loader,setLoader] = useState(true)
  // 
  const [jobAddedData,setJobAddedData]= useState([]);
  const [refresh , setRefresh] = useState(false);
  //
  useEffect(() => {
      fetch("https://job-portal-server-zeta.vercel.app/jobs")
      .then(res=> res.json())
      .then(data=> setJobsData(data))

  }, [refresh]);

  // transporter
  const JobsInfo = {
    JobsData,
    setJobsData,
    jobAddedData,
    setJobAddedData,
    setRefresh,
    loader,
    setLoader
  };

  return (
    <JobsContext.Provider value={JobsInfo}>{children}</JobsContext.Provider>
  );
};

export default JobsDataProvider;
