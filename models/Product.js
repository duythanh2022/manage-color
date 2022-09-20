const mongoose = require('mongoose')

const producSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    category:{
        type:Array,
        ref:"Category",
        default:[]
    },
    productImages:{
        type:Array,
        require:true,
        default:[]
    },
    price:{
        type:Number,
        default:0
    },
    dateAdded:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Product",producSchema)