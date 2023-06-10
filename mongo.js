// db.js (database connection module)
require('dotenv').config(); 
const mongoose = require('mongoose');
const DB_HOST = process.env.DB_HOST;
const DB_PASS = process.env.DB_PASS;

console.log(DB_HOST);
const connectDB = async () => {
  try {
    // const uri = `mongodb+srv://Team3-logistic-manager:3jeoiv36VMI6rccL@team3.pqa4tau.mongodb.net/Team3-storage?retryWrites=true&w=majority`;
    const uri = `mongodb+srv://Team3-logistic-manager:3jeoiv36VMI6rccL@team3.pqa4tau.mongodb.net/`;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;