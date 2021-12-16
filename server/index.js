const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
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
app.use("/auth", authRoute);
app.use("/posts", postRoute);


app.listen(5000, () => {
  console.log("Server is up and running🥳");
});
