import React from "react";
import Navbar from "./Navber";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";
import JobSearch from "./JobSearch";

const Header = () => {
  const location = useLocation();
  return (
    <div className="hero-banner">
      <div className=" bg-[#4b4b4b83]">
        <Navbar />
        {/* hero */}
        {location.pathname === "/" ? (
          <JobSearch />
        ) : (
          <Hero title={""} path={location.pathname} />
        )}
      </div>
    </div>
  );
};

export default Header;
