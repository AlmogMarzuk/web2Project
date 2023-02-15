const mongoose = require("mongoose");

// Flight Modal Schema
const OrderSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  price:{
   type: Number
  }
 
});

const     Orders  = mongoose.model("Orders", OrderSchema);
module.exports = {Orders};