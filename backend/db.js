const mongoose = require('mongoose');

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(
        process.env.MONGO_URL,
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
