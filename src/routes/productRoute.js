const router = require("express").Router()
const productCrl = require("../controllers/productController")
router.post("/product",productCrl.createNewProduct)
router.put("/product/:id",productCrl.editProduct)
router.delete("/product/:id",productCrl.deteleProduct)
router.get("/",productCrl.getAllProduct)
module.exports = router