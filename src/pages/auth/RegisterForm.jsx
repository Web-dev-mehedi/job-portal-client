import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../components/Hooks/UseAuth";
import axios from "axios";

const RegisterForm = () => {
  const [userType, setUserType] = useState("Candidate");
  // 
  const { registerUserByEmailPass} = UseAuth();
  // 
  const navigate = useNavigate();
// 
const handleRegister =(e)=>{
  e.preventDefault();
  const userEmail = e.target.userEmail.value;
  const userPass = e.target.userPass.value;
  const userInfo = {userEmail,userPass,userRole:userType,userPhoto:"",userName:""}
  console.log(userInfo);
  // 
  registerUserByEmailPass(userInfo)
  .then(result =>{
    console.log(result)
    alert("account-okkkk");
// post in database
axios.post("http://localhost:5000/users", userInfo)
.then(data=>console.log(data.data))
.catch(err=>console.log(err.message));
    navigate("/application/me")
  }).catch(err=>{
     console.log(err)
  })
}
// 
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Register Now
        </h2>
        <div className="flex mb-6 space-x-4">
          <button
            className={`flex-1 px-4 py-2 font-medium text-center rounded-lg ${
              userType === "Candidate"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setUserType("Candidate")}
          >
            <i className="fas fa-user"></i> Candidate
          </button>
          <button
            className={`flex-1 px-4 py-2 font-medium text-center rounded-lg ${
              userType === "Employer"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setUserType("Employer")}
          >
            <i className="fas fa-briefcase"></i> Employer
          </button>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
               name="userEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="userPass"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-600"
            >
              Accept our terms and conditions and privacy policy.
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register Now
          </button>
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
           <Link to={'/login'}  className="text-green-500 hover:underline focus:outline-none">
              Login
           </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
