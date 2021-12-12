const router = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
// router.get("/", (req, res) => {
//     res.send("HELLLOO from team socialice");
// })
 
/*
Route:          /signup
Method:         Post
Description:    Register new user
Access:         Public
Params:         none
*/


router.post("/signup", async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ message: "All fields are required" });
    }
    const alreadyExist = await User.findOne({ email });
    if (alreadyExist) {
        return res.status(422).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
        name,
        email,
        password:hashedPassword
    });
    await user.save();
    
    return res.status(200).json({ user: user, message: "Signup Successful" });
})

module.exports = router;

/*
Route:          /signin
Method:         Post
Description:    Login user
Access:         Public
Params:         none
*/

router.post("/login", async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if(!user) {
        return res.status(404).json({ error: "No user exists with this email address" });
    }
    
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
        return res.status(401).json({ error: "Wrong Credentials" });
    }

    const { password, ...others } = user._doc;
    return res.status(200).json({ message: "Logged In Succe3ssfully", user: others });

})