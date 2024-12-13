import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import SignInForm from "../pages/auth/SignInForm";
import RegisterForm from "../pages/auth/RegisterForm";

const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home/>} />
           <Route path="/login" element={<SignInForm/>} />
           <Route path="/register" element={<RegisterForm/>} />
       </Route>
    </Routes>
  );
};

export default Router;
