const express = require("express");
const cors = require("cors");
const app = express();
// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };
app.use(cors());

const userRoute = require("./routes/user");
app.use("/", userRoute);

app.listen(8000, () => {
  console.log("Server Started");
});
// app.get("/", (req, res) => {
//   res.send("Welcome to the slash");
// });
// app.get("/books", (req, res) => {
//   res.send("Welcome to booksies");
// });
