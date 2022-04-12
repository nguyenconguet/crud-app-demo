const Product = require("../models/product.model");

// Create
const createNewProduct = async (req, res) => {
  const { name, price, description, type } = req.body;

  if (!name || name == "") {
    return res.status(400).json({
      sucess: false,
      message: "name field is required"
    });
  }

  try {
    let newProduct = new Product({
      name,
      price,
      description,
      type
    });

    let product = await newProduct.save();

    res.status(201).json({
      success: true,
      product: {
        _id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        type: product.type
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "internal server error"
    });
  }
};

// Read
const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find({}).select("-__v");
    return res.json({
      success: true,
      products
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "internal server error"
    });
  }
};

const getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).select("-__v");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product does not exist"
      });
    }

    res.json({
      success: true,
      product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "internal server error"
    });
  }
};

// Update
const updateProductById = async (req, res) => {
  let productUpdateData = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    type: req.body.type
  };

  // remove undefined value
  // Object.keys(productUpdateData).filter((key) => {
  //   if (productUpdateData[key] === undefined) {
  //     delete productUpdateData[key];
  //   }
  // });

  if (productUpdateData.name === "" || productUpdateData.name === undefined) {
    return res.status(400).json({
      success: false,
      message: "name field is required"
    });
  }

  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "product does not exist"
      });
    }

    product = await Product.findByIdAndUpdate(product._id, productUpdateData, {
      new: true
    }).select("-__v");

    // console.log(product);

    res.json({
      success: true,
      product
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "internal server error"
    });
  }
};

// Delete
const deleteProductById = async (req, res) => {
  try {
    let product = await Product.findByIdAndRemove(req.params.id).select("-__v");
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product does not exist"
      });
    }

    res.json({
      success: true,
      product
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "internal server error"
    });
  }
};

module.exports = {
  createNewProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
};
