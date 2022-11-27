//setup
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/First_App";

mongoose
  .connect(mongoDB, { UseNewUrlParser: true })
  .then(() => console.log("mongoDB Connected"));

mongoose.Promise = global.Promise;
module.exports = mongoose;
