import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";

//
export const JobsContext = createContext(null);
const JobsDataProvider = ({ children }) => {
  const [JobsData, setJobsData] = useState([]);
  // 
  const [jobAddedData,setJobAddedData]= useState([]);
  const [refresh , setRefresh] = useState(false)
  //
  const { data } = useQuery({
    queryKey: ["all-Job"],
    queryFn: async () => {
      //
      const res = await fetch("http://localhost:5000/jobs");
      return res.json();
    },
  });
  //
  useEffect(() => {
  
  // 
    setJobsData(data);
  }, [data]);

  // transporter
  const JobsInfo = {
    JobsData,
    setJobsData,
    jobAddedData,
    setJobAddedData
  };

  return (
    <JobsContext.Provider value={JobsInfo}>{children}</JobsContext.Provider>
  );
};

export default JobsDataProvider;
