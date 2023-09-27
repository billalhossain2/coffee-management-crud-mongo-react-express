import React from "react";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div className="max-w-[70%] mx-auto font-bold text-2xl my-5">
      <Link to="/">
      <button className="hover:bg-[#D2B48C] p-3 rounded-lg">
      <i className="fa-solid fa-arrow-left"></i>
      <span>Back to home</span>
      </button>
      </Link>
    </div>
  );
};

export default BackHome;
