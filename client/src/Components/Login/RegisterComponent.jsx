import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Login.css";
const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", {
        name,
        email,
        password
      });
      console.log(res);
      res.data && window.location.replace("/signin");
    } catch (err) {

      console.log(err);
    }
  }
  return (
    <>
      <div className="w-full h-full mt-8 flex flex-col justify-center items-center gap-4 overflow-hidden ">
        <div className="border-2 border-gray-200 p-8 flex flex-col items-center gap-6 ">
          <span className="fontStyle  text-3xl">Socialice</span>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-2 bg-gray-50 p-2 md:w-72 focus:outline-none"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="border-2 bg-gray-50 p-2 md:w-72 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border-2 bg-gray-50 p-2 md:w-72 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-200 p-1 hover:bg-blue-400 text-white"
            >
              Sign up
            </button>
          </form>
        </div>
        <span className="border-2 border-gray-200 p-4 md:px-16 md:py-4 ">
          Already have an account ?{" "}
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
