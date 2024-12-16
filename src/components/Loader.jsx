import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <p className="loader-text">
        Wait<span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </p>
    </div>
  );
};

export default Loader;
