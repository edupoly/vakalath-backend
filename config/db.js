const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sriharan_23:66sY6G9aApV-T85@cluster0.s3gz2cg.mongodb.net/vakalath?retryWrites=true&w=majority&appName=Cluster0");
    // await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connectedd");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
