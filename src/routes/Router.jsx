import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import SignInForm from "../pages/auth/SignInForm";
import RegisterForm from "../pages/auth/RegisterForm";
import PrivetRoute from "../pages/PrivetRoute/PrivetRoute";
import AllJobs from "../pages/PrivetRoute/AllJobs";
import JobDetails from "../pages/PrivetRoute/JobDetails";
import ApplyForAJob from "../pages/PrivetRoute/ApplyForAJob";
import MyApplications from "../pages/PrivetRoute/MyApplications";

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
           <Route index={true} element={<Home/>} />
           {/* privet route */}
           <Route path="/jobs" element={<PrivetRoute><AllJobs/></PrivetRoute>} />
           <Route path="/jobs/details/:id" element={<PrivetRoute><JobDetails/></PrivetRoute>} />
           <Route path="/application/apply/:id" element={<PrivetRoute><ApplyForAJob/></PrivetRoute>} />

           <Route path="/application/me" element={<PrivetRoute><MyApplications/></PrivetRoute>} />
           {/* auth */}
           <Route path="/login" element={<SignInForm/>} />
           <Route path="/register" element={<RegisterForm/>} />
       </Route>
    </Routes>
  );
};

export default Router;
