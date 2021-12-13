require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const requireLogin = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        return res.status(401).json({ error: "You must be logged in " });
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) return res.status(401).json({ error: "You must be logged in jwt verifyu" });
      const { _id } = payload;
        const user = await User.findById(_id);
        return res.status(200).json({ user: user, message: "User succesfully authorized" });
    
    });
      next();
}

module.exports = requireLogin;