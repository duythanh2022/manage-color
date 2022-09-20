const product = require("../models/Product")

const productCrl = {
    createNewProduct : async(req,res)=>{
        const {name,category,price} = req.body
        if(!name) return res.status(400).json({success:false,message:"Product already exists"})
        try {
            const newProduct  = new product({
                name,
                category,
                price
            })
            await newProduct.save()
            res.status(200).json({success:true,message:"post success",newProduct})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false, message:"Internal server Error"})
        }
    },
    editProduct:async (req,res)=>{
        try {
            const {id} = req.params
            const updateProduct = await product.findOneAndUpdate(id,req.body,{runValidators:true,new:true})
            res.status(200).json({success:true,message:"success update product",updateProduct})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false, message:"Internal server Error"})
        }
    },
    deteleProduct: async(req,res)=>{
        try {
            const {id} = req.params
            const deteleProduct = await product.findOneAndDelete(id)
            res.status(200).json({success:true,message:"delete success",deteleProduct})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message:"Internal server Error"})
        }
    },
    getAllProduct: async(req,res)=>{
        try {
            const getProducts = await product.find()
            res.status(200).json({success:true,message:"get success",getProducts})
        } catch (error) {
            console.log(error)
            res.status(500).json({success:false,message:"Internal server Error"})
        }
    }
}
module.exports = productCrl