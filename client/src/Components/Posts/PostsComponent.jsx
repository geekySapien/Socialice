import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

export const PostsComponent = () => {
    return (
      <div className="container max-w-3xl mx-auto flex flex-col gap-6">
        <div className=" flex flex-col gap-1 items-start justify-center border-2 border-gray-400 my-2 px-4 pb-6 pt-2 shadow-xl">
          <h1 className="mx-2 font-bold text-xl md:text-2xl ">Riya Dhanwani</h1>
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1639929472244-788ff1e70caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1 mx-2 ">
            <h1 className="text-xl">Title</h1>
            <p className="text-md"> It is just amazing</p>
          </div>
          <AiOutlineHeart className="w-8 h-8 text-red-300 mx-1" />
          <form className="flex flex-col gap-1  w-full mx-2">
            <label className="font-semibold ">Comments</label>
            <input
              type="text"
              className="border-b-2 border-gray-100 focus:outline-none"
              placeholder="Add your comment"
            />
          </form>
        </div>
        <div className=" flex flex-col gap-1 items-start justify-center border-2 border-gray-400 my-2 px-4 pb-6 pt-2 shadow-xl">
          <h1 className="mx-2 font-bold text-xl md:text-2xl ">Riya Dhanwani</h1>
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1639929472244-788ff1e70caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1 mx-2 ">
            <h1 className="text-xl">Title</h1>
            <p className="text-md"> It is just amazing</p>
          </div>
          <AiOutlineHeart className="w-8 h-8 text-red-300 mx-1" />
          <form className="flex flex-col gap-1  w-full mx-2">
            <label className="font-semibold ">Comments</label>
            <input
              type="text"
              className="border-b-2 border-gray-100 focus:outline-none"
              placeholder="Add your comment"
            />
          </form>
        </div>
        <div className=" flex flex-col gap-1 items-start justify-center border-2 border-gray-400 my-2 px-4 pb-6 pt-2 shadow-xl">
          <h1 className="mx-2 font-bold text-xl md:text-2xl ">Riya Dhanwani</h1>
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1639929472244-788ff1e70caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1 mx-2 ">
            <h1 className="text-xl">Title</h1>
            <p className="text-md"> It is just amazing</p>
          </div>
          <AiOutlineHeart className="w-8 h-8 text-red-300 mx-1" />
          <form className="flex flex-col gap-1  w-full mx-2">
            <label className="font-semibold ">Comments</label>
            <input
              type="text"
              className="border-b-2 border-gray-100 focus:outline-none"
              placeholder="Add your comment"
            />
          </form>
        </div>
      </div>
    );
}


