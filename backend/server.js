const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const { readdirSync } = require("fs"); //file system is abbreviated as fs

const app = express();
app.use(cors());

readdirSync("./routes").map((x) => app.use("/", require("./routes/" + x)));

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
