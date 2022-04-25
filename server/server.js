require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./configs/db");
const postRoute = require("./routes/posts.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
