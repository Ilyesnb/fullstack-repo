const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const todosRoutes = require("./routes/todoRouter");
const bodyParser = require("body-parser");
const corsOptions = {
  origin: "https://fullstack-repo.onrender.com", // frontend URI (ReactJS)
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    const PORT = process.env.APP_URI;
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log({ err: "can not connect to the data base" });
  });
app.use(todosRoutes);
