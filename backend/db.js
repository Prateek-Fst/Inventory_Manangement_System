const mongoose = require('mongoose');

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://choudharyprateek131:9927729187@cluster0.nkeq4ce.mongodb.net/inventory?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to Database");
  } catch (err) {
    console.error("Error in connection to database: " + err.message);
  }
};

module.exports = connectToMongoDb;
