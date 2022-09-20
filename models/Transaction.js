const mongoose = require("mongoose");

const Transaction = new mongoose.Schema({
    transactionList: [
      {
        productId: String,
        amount: Number,
        price: Number,
      },
    ],
    total: Number,
    createAt: {
      type: Date,
      default: Date.now(),
    },
  })
module.exports = mongoose.model("Transaction",Transaction)
