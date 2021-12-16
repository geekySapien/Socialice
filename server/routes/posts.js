const router = require('express').Router();
const mongoose = require('mongoose');
const Post = require('../models/Post.js');
const requireLogin = require('../middleware/requireLogin');

/*
Route:          /allPosts 
Description:    get all Posts
Access:         Public
Params:         none
Method:         get
*/

router.get("/allPosts", async (req, res) => {
    try {
        const posts = await Post.find().populate("postedBy","_id, name");
        return res.status(200).json({ message: "All posts successfully retrieved", posts });
    } catch (err) {
        return res.status(500).json({ err });
    }
})

/*
Route:          /myPosts 
Description:    get my Posts
Access:         Public
Params:         none
Method:         get
*/

router.get("/myPosts", requireLogin, async (req, res) => {
    try {
        const posts = await Post.find({ postedBy: req.user._id }).populate("postedBy", "id name");
        return res.status(200).json({message:"All your Posts successfully retrieved", posts})
    } catch (err) {
        return res.status(500).json(err);
     }
})

/*
Route:          /create 
Description:    Create new Post
Access:         Public
Params:         none
Method:         Post
*/

router.post("/create", requireLogin, async (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({ message: "All fields are required" });
    }
    const {password, ...others}=req.user
    const post = new Post({
        title,
        body,
        postedBy: others
    })
    const newPost = await post.save();
    return res.status(200).json({ message: "Post created succesfully", post: newPost });
    //console.log(req.user);
})

module.exports = router;