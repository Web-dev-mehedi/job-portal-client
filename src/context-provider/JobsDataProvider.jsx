import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";

//
export const JobsContext = createContext(null);
const JobsDataProvider = ({ children }) => {
  const [JobData, setJobData] = useState([]);
  //
  const { data } = useQuery({
    queryKey: ["all-Job"],
    queryFn: async () => {
      //
      const res = await fetch("http://localhost:5000/all-Job");
      return res.json();
    },
  });


  //
  useEffect(() => {
    setJobData(data);
  }, [data]);

  // transporter
  const JobsInfo = {
    name: "ridoy",
    JobData,
    setJobData,
  };

  return (
    <JobsContext.Provider value={JobsInfo}>{children}</JobsContext.Provider>
  );
};

export default JobsDataProvider;
