const express = require("express");
const connectDB = require("./src/configs/dataBase");
const plantRouter = require("./src/routes/plants");
const cors=require("cors")

const app = express();
app.use(express.json());


app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
})) //cors error while fectching api's from the frontEnd

app.use("/", plantRouter);

connectDB()
  .then(() => {
    console.log("database Connected Successfully");
    app.listen("8888", () => {
      console.log("Server started running in 8888");
    });
  })
  .catch((err) => {
    console.log(err);
  });
