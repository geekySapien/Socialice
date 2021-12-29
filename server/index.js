const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const multer = require('multer')
const path = require('path');
const app = express();
const authRoute = require('./routes/auth.js');
const postRoute = require("./routes/posts.js");

// const middleWare = (req, res, next) => {
//     console.log("Inside middleware");
//     next();
// }
// // app.use(middleWare);
// app.get("/", async (req, res) => {
//     console.log("Route '/' is running perfectly fine");
// })

// app.get("/about", middleWare, async (req, res) => {
//   console.log("Route '/about' is running perfectly fine");
// });

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Succesfully connected with DB 🏆"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images")
  }, filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("Uplaoding the file.......");
  return res.status(200).json({message:"File has been uploaded"})
})
app.use("/auth", authRoute);
app.use("/posts", postRoute);


app.listen(5000, () => {
  console.log("Server is up and running🥳");
});
