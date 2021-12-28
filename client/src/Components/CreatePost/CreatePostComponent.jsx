import Reat, { useState } from "react";
import Picker from "emoji-picker-react";
import { ImUpload2 } from "react-icons/im";
import './CreatePostComponent.css';
const CreatePostComponent = () => {
  return (
    <>
      <div className="container mx-auto max-w-3xl h-screen flex flex-col items-center mt-4">
        <form className="w-full flex flex-col items-start justify-center gap-4 border-b-2 border-gray-400 shadow-xl px-4 py-4 hover:shadow-gray-400/50">
          <label className="text-lg md: text-xl font-semibold ">Title</label>
          <input
            className="w-full p-4 border-b-2 border-gray-100 focus:outline-none"
            type="text"
            placeholder="Post Title"
          />
          <label className="text-lg md: text-xl font-semibold ">Caption</label>
          <input
            className=" w-full p-4 border-b-2 border-gray-100 focus:outline-none"
            type="text"
            placeholder="Write your caption"
          />
          <label className="text-lg md: text-xl font-semibold ">Upload Media</label>
          <label for="mediaUpload">
            <ImUpload2 className="w-8 h-8 cursor-pointer" />
          </label>
          <input
            type="file"
            className=" w-full p-4  focus:outline-none"
            id="mediaUpload"
            style={{ display: "none" }}
                  />
                  <button type="submit" className=" rounded-lg self-center bg-blue-600 text-white px-6 py-2 text-xl">Post</button> 
        </form>
      </div>
    </>
  );
};
export default CreatePostComponent;
