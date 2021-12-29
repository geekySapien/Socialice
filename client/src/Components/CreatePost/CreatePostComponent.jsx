import Reat, { useState } from "react";
import Picker from "emoji-picker-react";
import { ImUpload2 } from "react-icons/im";
import axios from 'axios';
import "./CreatePostComponent.css";
const CreatePostComponent = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
          const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "socialice");
    data.append("cloud_name", "geekySapien");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/geekySapien/image/upload",
      data
      );
      setImage(res.url);
    } catch (err) {
      console.log(err);
    }
    try {
      const res=await axios.post("/posts/create", {
        title,
        body,
        photo:image
      })
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="container mx-auto max-w-3xl h-screen flex flex-col items-center mt-4">
        <form className="w-full flex flex-col items-start justify-center gap-4 border-b-2 border-gray-400 shadow-xl px-4 py-4 hover:shadow-gray-400/50" onSubmit={handleSubmit}>
          <label className="text-lg md: text-xl font-semibold ">Title</label>
          <input
            className="w-full p-4 border-b-2 border-gray-100 focus:outline-none"
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-lg md: text-xl font-semibold ">Caption</label>
          <input
            className=" w-full p-4 border-b-2 border-gray-100 focus:outline-none"
            type="text"
            placeholder="Write your caption"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label className="text-lg md: text-xl font-semibold ">
            Upload Media
          </label>
          <label for="mediaUpload">
            <ImUpload2 className="w-8 h-8 cursor-pointer" />
          </label>
          <input
            type="file"
            className=" w-full p-4  focus:outline-none"
            id="mediaUpload"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            type="submit"
            className=" rounded-lg self-center bg-blue-600 text-white px-6 py-2 text-xl"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePostComponent;
