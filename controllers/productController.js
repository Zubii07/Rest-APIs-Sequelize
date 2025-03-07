const { where } = require("sequelize");
const db = require("../models");

// create a main model
const Product = db.products;
const Review = db.reviews;

const addProduct = async (req, res) => {
  // console.log(req.body);
  try {
    let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description ? req.body.description : false,
      published: req.body.published || false,
    };

    const product = await Product.create(info);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// get all products

const getProducts = async (req, res) => {
  const products = await Product.findAll({});
  res.status(200).send(products);
  console.log(products);
};

// get single product
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
  console.log(product);
};

// update product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  let product = await product.destroy({ where: { id: id } });
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;

    const rowsDeleted = await Product.destroy({ where: { id: id } });

    if (rowsDeleted === 0) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// get published products
const getPublishedProducts = async (req, res) => {
  let products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
  console.log(products);
};

module.exports = {
  addProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
};
