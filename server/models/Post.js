const mongoose = require('mongoose');
const User = require('../models/User.js');



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    body: {
        type: String.fromCharCode,
        required:true
    },
    photo: {
        type: String,
        required:true
    },
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("Post", postSchema);