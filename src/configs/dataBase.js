const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sandy2242:2KOLKM9CvRfjxkZD@namstenode.vefwfiq.mongodb.net/plantFarm",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
