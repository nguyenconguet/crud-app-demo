const mongoose = require("mongoose");
const { DBConfig } = require("../configs/config");

const connectDB = () => {
  try {
    mongoose.connect(
      `mongodb+srv://${DBConfig.DB_USER}:${DBConfig.DB_PASS}@cluster0.ynkzl.mongodb.net/NDCStore?retryWrites=true&w=majority`
    );
    console.log("connect database successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
