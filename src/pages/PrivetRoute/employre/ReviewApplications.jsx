import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ReviewApplications = () => {
  const { id } = useParams();
  const [applicantData, setAppliantData] = useState([]);
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    fetch(`https://job-portal-server-zeta.vercel.app/application/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAppliantData(data);
      });
  }, [id,refresh]);

  const handleApprove =(_id)=>{
      axios.patch(`https://job-portal-server-zeta.vercel.app/approve/${_id}`,)
      .then(data=> {
        setRefresh(!refresh)
        alert("accpted")
      }).catch(err=>{
        console.log(err)
      })
  }
  // 

  const handleDecline =(_id)=>{
      axios.patch(`https://job-portal-server-zeta.vercel.app/decline/${_id}`,)
      .then(data=> {
        setRefresh(!refresh)
        alert("decline")
      }).catch(err=>{
        console.log(err)
      })
  }
//   
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
      {applicantData.map((applicant) => (
        <div
          key={applicant?._id + "x"}
          className="flex flex-wrap gap-6 items-center justify-between bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-md"
        >
          {/* Left Section: Logo and Details */}
          <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Applicant Name : {/* {job?.jobName} */}
              </h2>
              <p className="text-green-600 font-medium pb-3">
               Applicant Email :  {applicant?.applicantEmail}
              </p>
                <a className="text-xs text-blue-600 lowercase bg-red-100 px-3 py-1 rounded-2xl mr-2" href={applicant?.gitLink}>GitHUb Link</a><a className="text-xs text-blue-600 lowercase bg-yellow-100 px-3 py-1 rounded-2xl mr-2" href={applicant?.linkdInLink}>LinkedIn Link</a><a className="text-xs text-blue-600 lowercase bg-green-100 px-3 py-1 rounded-2xl" href={applicant?.resumeLinks}>Resume Link</a>
          </div>
          {/* Right Section: Salary and Apply Button */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex gap-2 items-center justify-start flex-wrap">
              {/*update  */}
                <button disabled={applicant?.isPending ? false: true } onClick={()=>handleApprove(applicant?._id)} className={`${!applicant?.isPending ? "bg-slate-300 text-slate-400 hover:bg-slate-400":" hover:bg-green-600  bg-green-500 text-white "}flex items-center gap-2 px-4 py-2 font-normal capitalize rounded-lg`}>
                   {applicant?.isPending ? "approve" : "approved"}
                </button>
              {/* delete */}
              <button disabled={!applicant?.isPending ? false: true } onClick={()=>handleDecline(applicant?._id)} className={`${applicant?.isPending ? "bg-slate-300 text-slate-400 hover:bg-slate-400":" hover:bg-green-600  bg-green-500 text-white "}flex items-center gap-2 px-4 py-2 font-normal capitalize rounded-lg`}>
                 {!applicant?.isPending ? "Decline" : "Declined"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewApplications;
