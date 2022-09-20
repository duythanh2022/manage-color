const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId:Number,
    carId:Number,
    status:{
        type:String,
        default:"active"
    },
    modifiedOn:{
        type:Date,
        default:Date.now()
    },
    products:{
        type:Array
    }
})
module.exports = mongoose.model("Cart",cartSchema)