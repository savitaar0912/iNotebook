// db.js
const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds for server selection
      socketTimeoutMS: 45000, // Timeout after 45 seconds for individual operations, adjust as needed
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error , error.message);
    // Exit the process if the connection fails
    process.exit(1);
  }
};

module.exports = connectToMongo;
