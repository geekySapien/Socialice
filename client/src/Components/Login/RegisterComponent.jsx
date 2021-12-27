import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const RegisterComponent = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <div className="border-2 border-gray-200 p-8 flex flex-col items-center gap-6 w-max">
          <span className="fontStyle  text-3xl">Socialice</span>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              className="border-2 bg-gray-50 p-2 md:w-72"
              placeholder="Username"
            />
            <input
              type="email"
              className="border-2 bg-gray-50 p-2 md:w-72"
              placeholder="Email"
            />
            <input
              type="password"
              className="border-2 bg-gray-50 p-2 md:w-72"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-blue-200 p-1 hover:bg-blue-400 text-white"
            >
              Login
            </button>
          </form>
        </div>
        <span className="border-2 border-gray-200 p-4 md:px-16 md:py-4 ">
          Don't have an account ?{" "}
          <Link to="/signin">
            <span className="text-blue-600 cursor-pointer font-semibold">
              Log In
            </span>
          </Link>
        </span>
      </div>
    </>
  );
};

export default RegisterComponent;
