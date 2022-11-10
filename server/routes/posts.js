const router = require("express").Router();
const mongoose = require("mongoose");
const Post = require("../models/Post.js");
const requireLogin = require("../middleware/requireLogin");

/*
Route:          /allPosts 
Description:    get all Posts
Access:         Public
Params:         none
Method:         get
*/

router.get("/allPosts", requireLogin, async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id, name")
      .populate("comments.postedBy", "_id name");
    return res
      .status(200)
      .json({ message: "All posts successfully retrieved", posts });
  } catch (err) {
    return res.status(500).json({ err });
  }
});

/*
Route:          /myPosts 
Description:    get my Posts
Access:         Public
Params:         none
Method:         get
*/

router.get("/myPosts", requireLogin, async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "_id name"
    );
    return res
      .status(200)
      .json({ message: "All your Posts successfully retrieved", posts });
  } catch (err) {
    return res.status(500).json(err);
  }
});

/*
Route:          /create 
Description:    Create new Post
Access:         Public
Params:         none
Method:         Post
*/

router.post("/create", requireLogin, async (req, res) => {
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ message: "All fields are required" });
  }
  const { password, ...others } = req.user;
  const post = new Post({
    title,
    body,
    photo,
    postedBy: others,
  });
  const newPost = await post.save();
  return res
    .status(200)
    .json({ message: "Post created succesfully", post: newPost });
  //console.log(req.user);
});

/*
Route:          /like 
Description:    Like a post
Access:         Public
Params:         none
Method:         put
*/

router.put("/like", requireLogin, async (req, res) => {
  try {
    // console.log("checking");
    await Post.findByIdAndUpdate(
      req.body.postId,
      {
        $addToSet: { likes: req.user._id },
      },
      {
        new: true,
      }
    );

    const post = await Post.findById(req.body.postId);
    // console.log(req.body.postId);
    return res
      .status(200)
      .json({ Post: post, message: " Successfully liked the post" });
  } catch (err) {
    return res.status(422).json({ message: err });
  }
});

/*
Route:          /unlike 
Description:    Unlike a post
Access:         Public
Params:         none
Method:         put
*/

router.put("/unlike", requireLogin, async (req, res) => {
  try {
    // console.log("checking" + req.body.postId);
    await Post.findByIdAndUpdate(req.body.postId, {
      $pull: { likes: req.user._id },
    });
    const post = await Post.findById(req.body.postId);
    // console.log(post)
    return res
      .status(200)
      .json({ Post: post, message: " Successfully unliked the post" });
  } catch (err) {
    return res.status(422).json({ message: err });
  }
});

/*
Route:          /comment
Description:    Add a comment in the post 
Params:         None
Access:         Protected
Method:         put
*/

router.put("/comment", requireLogin, async (req, res) => {
  // console.log(req.user)
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  try {
    await Post.findByIdAndUpdate(
      req.body.postId,
      {
        $push: { comments: comment },
      },
      {
        new: true,
      }
    )
      .populate("comments.postedBy", "_id name")
      .populate("postedBy", "_id name");
    // console.log(req.body.postId)
    const post = await Post.findById(req.body.postId);
    // console.log(post)
    return res
      .status(200)
      .json({ Post: post, message: " Successfully commented the post" });
  } catch (err) {
    return res.status(422).json({ message: err });
  }
});

/*
Route:          /delete/:postId
Description:    Delete a post
Params:         postId
Scope:          Protected
Method:         Delete
 */

router.delete("/deletePost/:postId", requireLogin, async (req, res) => {
  // console.log("API")
  const post = await Post.findById(req.params.postId);
  if (post.postedBy._id.toString() === req.user._id.toString()) {
    try {
      await post.remove();
      return res
        .status(200)
        .json({ Post: post, message: "Successfully deleted the post" });
    } catch (err) {
      return res.status(422).json({ message: err });
    }
  } else {
    return res.status(401).json({ message: "Unauthorised to delete the post" });
  }
});

module.exports = router;
