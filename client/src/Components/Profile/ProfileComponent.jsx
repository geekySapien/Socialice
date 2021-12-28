import React from "react";

const ProfileComponent = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto flex flex-col gap-4 mt-4 ">
        <div className="flex  justify-around items-center border-b-2 py-6 border-gray-400">
          <div className="w-20 h-20 md:w-56 md:h-56 ">
            <img
              src="https://images.unsplash.com/photo-1634975252431-78a1212050a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold md:text-3xl">Riya Dhanwani</h1>
            <div className="flex gap-2 md:gap-6 justify-between ">
              <p className="md:text-xl">10 Posts</p>
              <p className="md:text-xl">23 Followers</p>
              <p className="md:text-xl">10 Following</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-around">
          <div className="w-32 h-32 md:w-64 md:h-64 ">
            <img
              src="https://images.unsplash.com/photo-1634975252431-78a1212050a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full "
            />
          </div>
          <div className="w-32 h-32 md:w-64 md:h-64 ">
            <img
              src="https://images.unsplash.com/photo-1634975252431-78a1212050a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full "
            />
          </div>
          <div className="w-32 h-32 md:w-64 md:h-64 ">
            <img
              src="https://images.unsplash.com/photo-1634975252431-78a1212050a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full "
            />
          </div>
          <div className="w-32 h-32 md:w-64 md:h-64 ">
            <img
              src="https://images.unsplash.com/photo-1634975252431-78a1212050a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full "
            />
          </div>
          <div className="w-32 h-32 md:w-64 md:h-64 ">
            <img
              src="https://images.unsplash.com/photo-1634975252431-78a1212050a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcHJvZmVzc2lvbmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
