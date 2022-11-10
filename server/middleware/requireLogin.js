require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const requireLogin = (req, res, next) => {
  // console.log(req.headers);
  const { authorization } = req.headers;
  // console.log(authorization);

  if (!authorization)
    return res.status(401).json({ error: "You must be logged in " });
  const token = authorization.replace("Bearer ", "");
  // console.log(token)
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(401).json({ error: "You must be logged in" });
    const { _id } = payload;
    const user = await User.findById(_id);
    //console.log(req);
    req.user = user;
    //  console.log(req);
    next();
  });
};

module.exports = requireLogin;
