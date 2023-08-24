const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const { readdirSync } = require("fs"); //file system is abbreviated as fs
const { request } = require("http");

const app = express();
app.use(cors());

//routes
readdirSync("./routes").map((x) => app.use("/", require("./routes/" + x)));

//databases
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewURLParser: true,
  })
  .then(() => {
    console.log("database successfully connected");
  })
  .catch((err) => console.log("errorrrrrrrrrrr"));

app.listen(PORT, () => {
  console.log("Server Started");
});

// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };

// app.get("/", (req, res) => {
//   res.send("Welcome to the slash");
// });

//The normal way of adding routes
// app.get("/books", (req, res) => {
//   res.send("Welcome to booksies");
// });

//userRoute is imported from user.js
// const userRoute = require("./routes/user");

//whenever something / comes, go and call userRoute
// app.use("/", userRoute)
