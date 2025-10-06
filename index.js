const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3000 
const MONGO_URL = process.env.MONGO_URL

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API SERVER");
});

mongoose.connect(MONGO_URL)
  
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("failed connection");
  });

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
