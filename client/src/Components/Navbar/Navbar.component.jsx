import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-screen flex sticky top-0 z-50 bg-white h-12 shadow-md shadow-gray-500/50">
        <div className="flex w-1/2 fontStyle text-lg md:text-3xl pl-6 items-center  cursor-pointer">
         <Link to="/">Socialice</Link>
        </div>
        <div
          className="w-2/3 flex justify-around py-2   text-xs md:text-lg"
          style={{ fontFamily: "Lora" }}
        >
          <Link to="/signin">
            <p className="cursor-pointer">Signin</p>
          </Link>
          <Link to="/signup">
            <p className="cursor-pointer">Signup</p>
          </Link>
          <Link to="/profile">
            <p className="cursor-pointer">Profile</p>
          </Link>
          <Link to="/create">
            <p className="cursor-pointer">Create Post</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
