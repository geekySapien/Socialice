import React, { useEffect, useState, useContext } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import axios from "axios";
import { UserContext } from "../../App";
import { MdDelete } from "react-icons/md";
export const PostsComponent = () => {
  const { state, dispatch } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const likePost = async (id) => {
    const res = await axios.put(
      "/posts/like",
      { postId: id },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    // console.log(res);
    const resultantPost = res.data.Post;
    // console.log(resultantPost);
    const newPosts = posts.map((post) => {
      if (post._id == resultantPost._id) {
        return resultantPost;
      }
      return post;
    });
    setPosts(newPosts);
  };

  const unLikePost = async (id) => {
    const res = await axios.put(
      "/posts/unlike",
      { postId: id },

      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    console.log(res);
    const resultantPost = res.data.Post;
    const newPosts = posts.map((post) => {
      if (post._id == resultantPost._id) {
        return resultantPost;
      }
      return post;
    });
    setPosts(newPosts);
  };

  const handleSubmit = async (text, postId) => {
    const res = await axios.put(
      "/posts/comment",
      {
        text,
        postId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    console.log(res);
    const resultantPost = res.data.Post;
    const newPosts = posts.map((post) => {
      if (post._id == resultantPost._id) {
        return resultantPost;
      }
      return post;
    });
    setPosts(newPosts);
  };

  const deletePost = async (postId) => {
    console.log("Inside", postId);
    const res = await axios.delete(`/posts/deletePost/${postId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });
    // console.log(res)
    const resultantPost = res.data.Post;
    const newPosts = posts.filter((post) => {
      return resultantPost._id !== post._id;
    });

    setPosts(newPosts);
  };

  useEffect(async () => {
    try {
      const res = await axios.get("/posts/allPosts", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
      // console.log(res);
      setPosts(res.data.posts);
      // console.log(res.data.posts)
    } catch (err) {
      console.log(err);
    }
  }, [posts]);

  return (
    <div className=" md:max-w-lg mx-auto flex flex-col gap-6 ">
      {posts.map((post) => {
        return (
          <>
            <div className=" flex flex-col gap-2 items-start justify-center border-2 border-gray-400 my-2 px-4 pb-4 pt-2 shadow-xl">
              <div className="flex items-center justify-between w-full">
                <h1 className="mx-2 font-bold text-xl md:text-2xl ">
                  {post.postedBy.name}
                </h1>

                {post.postedBy._id.toString() === state._id.toString() && (
                  <MdDelete
                    className="cursor-pointer text-2xl text-red-500"
                    onClick={() => deletePost(post._id)}
                  />
                )}
              </div>
              <div className="w-full h-68">
                <img src={post.photo} className="w-full h-full" />
              </div>

              <div className="flex gap-2 items-center mx-2">
                {post.likes.includes(state._id) ? (
                  <>
                    {" "}
                    <BiDislike
                      className="text-xl "
                      onClick={() => {
                        unLikePost(post._id);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <BiLike
                      className="text-xl text-blue-500"
                      onClick={() => {
                        likePost(post._id);
                      }}
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col gap-1 mx-2 ">
                <p clssName="text-md">{post.likes.length} Likes</p>
                <h1 className="text-lg">{post.title}</h1>
                <p className="text-md"> {post.body}</p>
              </div>
              {post.comments.map((comment) => {
                return (
                  <>
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold text-md">
                        {comment.postedBy.name}
                      </p>
                      <p className="text-md">{comment.text}</p>
                    </div>
                  </>
                );
              })}
              <form
                className="flex flex-col gap-1  w-full mx-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e.target[0].value, post._id);
                  e.target[0].value = "";
                }}
              >
                <label className="font-semibold ">Comments</label>
                <input
                  type="text"
                  className="border-b-2 border-gray-100 focus:outline-none"
                  placeholder="Add your comment"
                />
              </form>
            </div>
          </>
        );
      })}
    </div>
  );
};
