const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const todosRoutes = require('./routes/todoRouter')
app.use(cors())
const uri =
  "mongodb+srv://ilyesnabi9:Ilyesou2024@cluster0.nyufwoa.mongodb.net/code213?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri)
  .then(() => {
    console.log("mongodb connected");
    app.listen(3004, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log({ err: "can not connect to the data base" });
  });
  app.use(todosRoutes)
