//Importing
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();//setting app as an express app
app.use(bodyParser.json());

//connecting to mongoDB
mongoose.connect("mongodb://localhost/react-shopping-cart-db",{},()=>{console.log("connected To Database")});


//Creating Product Schema
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },//type:String is long hand for String
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],//list of strings
  })
);


//endpoint for retrieving all the products
app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

//endpoint for adding a product
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

//endpoint for deleting a product with given id
app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);//id is a property of url
  res.send(deletedProduct);
});


//Making our app listen to port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server running at http://localhost:5000"));