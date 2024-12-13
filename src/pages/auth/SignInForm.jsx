import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../components/authHooks/UseAuth";

const SignInForm = () => {
   // 
   const { loginUserByEmailPass} = UseAuth();
  // 
const handleLogin =(e)=>{
  e.preventDefault();
  const userEmail = e.target.userEmail.value;
  const userPass = e.target.userPass.value;
  const userInfo = {userEmail,userPass}
  console.log(userInfo)
  // 
  loginUserByEmailPass(userInfo)
  .then(result =>{
    console.log(result)
    alert("account-login")
  }).catch(err=>{
     console.log(err)
  })
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Sign In
        </h2>
        <form onSubmit={handleLogin}>
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
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-green-500 hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign In
          </button>
          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t you have an account?{" "}
           <Link to={"/register"} className="text-green-500 hover:underline focus:outline-none">
           Register
           </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
