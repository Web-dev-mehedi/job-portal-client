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
import AddJob from "../pages/PrivetRoute/employre/AddJob";
import MyJobPosts from "../pages/PrivetRoute/employre/MyJobPosts";
import ReviewApplications from "../pages/PrivetRoute/employre/ReviewApplications";
import UpdateJob from "../pages/PrivetRoute/employre/UpdateJob";
import PrivetRoute2 from "../pages/PrivetRoute/PrivetRoute2";
import PrivetRoute1 from "../pages/PrivetRoute/PrivetRoute1";
import NotFound from "../pages/NotFound";
import CategoriesJobs from "../pages/PrivetRoute/CategoriesJobs";
import SearchJobs from "../pages/PrivetRoute/SearchJobs";

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
           <Route index={true} element={<Home/>} />
           {/*privet route for login user */}
           <Route path="/jobs" element={<PrivetRoute><AllJobs/></PrivetRoute>} />
           <Route path="/jobs/details/:id" element={<PrivetRoute><JobDetails/></PrivetRoute>} />
           <Route path="/jobs/:cate" element={<PrivetRoute><CategoriesJobs/></PrivetRoute>} />
           <Route path="/search/jobs" element={<PrivetRoute><SearchJobs/></PrivetRoute>} />
           {/*privet route for Candidate */}
           <Route path="/application/apply/:id" element={<PrivetRoute1><ApplyForAJob/></PrivetRoute1>} />
           <Route path="/application/me" element={<PrivetRoute1><MyApplications/></PrivetRoute1>} />
           {/*privet route for Employer */}
           <Route path="/add-jobs" element={<PrivetRoute2><AddJob/></PrivetRoute2>} />
           <Route path="/my-jobs" element={<PrivetRoute2><MyJobPosts/></PrivetRoute2>} />
           <Route path="/my-jobs/:id" element={<PrivetRoute2><ReviewApplications/></PrivetRoute2>} />
           <Route path="/jobs/update/:id" element={<PrivetRoute2><UpdateJob/></PrivetRoute2>} />
           {/* auth */}
           <Route path="/login" element={<SignInForm/>} />
           <Route path="/register" element={<RegisterForm/>} />
           {/* 404 pages */}
           <Route path="*" element={<NotFound/>} />
       </Route>
    </Routes>
  );
};

export default Router;
